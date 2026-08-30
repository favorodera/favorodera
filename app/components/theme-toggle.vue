<script setup lang="ts">
const motion = motionUtils()
const colorMode = useColorMode()

const transitionDuration = motion.easeCSS.transitionDuration
const transitionTimingFunction = motion.easeCSS.transitionTimingFunction

const ariaLabel = computed(() => (
  colorMode.value === 'dark'
    ? 'Switch to light theme'
    : 'Switch to dark theme'
))

const colorModeValue = computed(() => (
  colorMode.value === 'dark' ? 'dark' : 'light'
))

/**
 * Checks whether the user prefers reduced motion.
 * @returns `true` when reduced motion is preferred.
 */
function prefersReducedMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Toggles the theme from the given interaction point.
 * @param event Interaction point for the reveal animation.
 */
async function toggleTheme(event: PointerEvent) {
  const nextTheme = colorMode.value === 'dark' ? 'light' : 'dark'

  const canAnimate = !prefersReducedMotion() && typeof document.startViewTransition === 'function'

  if (!canAnimate) {
    colorMode.preference = nextTheme
    return
  }

  const revealRadius = Math.hypot(
    Math.max(event.clientX, window.innerWidth - event.clientX),
    Math.max(event.clientY, window.innerHeight - event.clientY),
  )

  const transition = document.startViewTransition(() => {
    // Keep the theme change synchronous so it is captured in the snapshot.
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    document.documentElement.style.colorScheme = nextTheme
    colorMode.preference = nextTheme
  })

  try {
    await transition.ready

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${event.clientX}px ${event.clientY}px)`,
          `circle(${revealRadius}px at ${event.clientX}px ${event.clientY}px)`,
        ],
      },
      {
        duration: motion.DURATION_MS,
        easing: transitionTimingFunction,
        pseudoElement: '::view-transition-new(root)',
      },
    )
  } catch {
    // The theme has already been applied.
  }
}
</script>

<template>
  <button
    type="button"
    :aria-label="ariaLabel"
    class="
      group grid grid-cols-1 place-items-center rounded-full border p-1
      outline-none

      focus-visible:ring-1 focus-visible:ring-ring
    "
    @click="toggleTheme"
  >
    <!-- Theme indicator -->
    <span
      aria-hidden="true"
      class="
        relative overflow-hidden rounded-full transition-transform block-4
        inline-4

        group-hover:scale-110
      "
      :style="motion.easeCSS"
    >
      <AnimatePresence mode="wait">
        <Motion
          :key="colorModeValue"
          :variants="motion.fadeInFromLeft"
          initial="hidden"
          animate="visible"
          as="span"
          class="absolute inset-0 bg-foreground"
        />
      </AnimatePresence>
    </span>
  </button>
</template>

<style lang="css">
  /* Reset default browser view-transition animations on the root element */
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  /* Keep the outgoing (old) snapshot behind the incoming one */
  ::view-transition-old(root) {
    z-index: 1;
  }

  /* Bring the incoming (new) snapshot to the front so the clip-path circle expands to reveal it over the old snapshot */
  ::view-transition-new(root) {
    z-index: 999;
  }

  /* Crossfade fallback when the browser doesn't support View Transitions API or the user prefers reduced motion (handled in JS before startViewTransition is called) */
  .theme-crossfade,
  .theme-crossfade * {
    transition: background-color v-bind(transitionDuration) v-bind(transitionTimingFunction),
      color v-bind(transitionDuration) v-bind(transitionTimingFunction),
      border-color v-bind(transitionDuration) v-bind(transitionTimingFunction),
      fill v-bind(transitionDuration) v-bind(transitionTimingFunction);
  }
</style>
