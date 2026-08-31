<script setup lang="ts">
const colorMode = useColorMode()

const ariaLabel = computed(() => (
  colorMode.value === 'dark'
    ? 'Switch to light theme'
    : 'Switch to dark theme'
))

/** Toggles the theme from the given interaction point. */
async function toggleTheme() {
  const nextTheme = colorMode.value === 'dark' ? 'light' : 'dark'

  colorMode.preference = nextTheme
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
    <span
      aria-hidden="true"
      class="
        rounded-full bg-foreground transition-transform duration-300 ease-out
        block-4 inline-4

        group-hover:scale-110
      "
    />
  </button>
</template>
