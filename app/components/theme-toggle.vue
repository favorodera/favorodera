<script setup lang="ts">
const colorMode = useColorMode()

const ariaLabel = computed(() => (
  colorMode.value === 'dark'
    ? 'Switch to light theme'
    : 'Switch to dark theme'
))

/**
 * Toggles the theme from the given interaction point.
 * @param event Interaction point for the reveal animation.
 */
async function toggleTheme(event: PointerEvent) {
  const nextTheme = colorMode.value === 'dark' ? 'light' : 'dark'
  const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  const canAnimate = !prefersReducedMotion && typeof document.startViewTransition === 'function'

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
        duration: 600,
        easing: 'ease-out',
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
      grid grid-cols-1 place-items-center rounded-full border p-1
      transition-colors outline-none

      hover:border-foreground

      focus-visible:ring-1 focus-visible:ring-ring
    "
    @click="toggleTheme"
  >
    <span
      aria-hidden="true"
      class="relative overflow-hidden rounded-full block-4 inline-4"
    >
      <AnimatePresence mode="wait">
        <Motion
          :key="ariaLabel"
          :initial="{x: 'calc(-1rem + 5px)',opacity:0}"
          :animate="{x:0,opacity:1}"
          :transition="{
            duration:0.6,
            type: 'spring',
            damping: 36,
            mass: 0.9,
            stiffness: 420,
          }"
          as="span"
          class="absolute inset-0 bg-foreground"
        />
      </AnimatePresence>
    </span>
  </button>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 999;
}
</style>
