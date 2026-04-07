<script setup lang="ts">
/** Nuxt color-mode composable — provides `.preference` (system | light | dark). */
const colorMode = useColorMode()

/**
 * Available theme options shown in the radio button group.
 * Each entry maps a preference value to its Hugeicons icon name.
 */
const themeOptions = [
  { value: 'system', icon: 'hugeicons:computer' },
  { value: 'light', icon: 'hugeicons:sun-01' },
  { value: 'dark', icon: 'hugeicons:moon-01' },
]

/** Two-way computed that reads and writes `colorMode.preference`. */
const theme = computed({
  get() {
    return colorMode.preference
  },
  set(value: string) {
    colorMode.preference = value
  },
})
</script>

<template>
  <footer class="mt-14">

    <!-- Top rule — fades in on scroll  -->
    <Motion
      as-child
      :initial="{ opacity: 0 }"
      :while-in-view="{ opacity: 1 }"
      :transition="{ duration: 0.3, ease: [0.25, 0, 0, 1] }"
      :in-view-options="{ once: true }"
      class="bg-border/40"
    >
      <Separator />
    </Motion>

    <!-- Footer content: copyright + theme toggle  -->
    <Motion
      :initial="{ opacity: 0, y: 8 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.35, delay: 0.16, ease: [0.25, 0, 0, 1] }"
      :in-view-options="{ once: true }"
      class="flex flex-wrap items-center justify-between gap-5 py-6"
      as="div"
    >

      <!-- Copyright notice -->
      <p
        class="
          min-w-0 shrink-0 text-[11px] leading-relaxed font-medium tracking-wide
          text-foreground/90
        "
      >
        © 2024 - {{ new Date().getFullYear() }} Favour Emeka
      </p>

      <!--
        ColorScheme wrapper suppresses hydration mismatch on first paint.
        The theme radio group is only rendered client-side after hydration.
      -->
      <ColorScheme
        placeholder="..."
        tag="span"
      >
        <!-- Theme selection: system / light / dark -->
        <fieldset
          class="
            inline-flex w-fit gap-px rounded-sm border border-border/45
            bg-muted/15 p-px
          "
        >
          <legend class="sr-only">
            Color theme
          </legend>

          <button
            v-for="option in themeOptions"
            :key="option.value"
            :aria-pressed="theme === option.value"
            :aria-label="`Use ${option.value} theme`"
            type="button"
            :class="{
              'bg-background text-foreground shadow-sm dark:bg-background/80': theme === option.value,
              'text-muted-foreground': theme !== option.value,
            }"
            class="
              inline-flex size-6 cursor-pointer items-center justify-center
              rounded-[3px] transition-[color,background-color,box-shadow]
              outline-none
              hover:text-foreground
              focus-visible:ring-1 focus-visible:ring-ring/40
              focus-visible:ring-offset-1 focus-visible:ring-offset-background
            "
            @click="theme = option.value"
          >
            <Icon
              :name="option.icon"
              class="size-3 shrink-0"
            />
          </button>

        </fieldset>
      </ColorScheme>
    </Motion>

  </footer>
</template>
