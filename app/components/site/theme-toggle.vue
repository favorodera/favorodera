<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => {
  return colorMode.value === 'dark'
})

const label = computed(() => {
  return (isDark.value ? 'Switch to light theme' : 'Switch to dark theme')
})

function toggleTheme() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <ColorScheme>
    <BaseButton
      icon-only
      type="button"
      :aria-label="label"
      @click="toggleTheme"
    >
      <IconsSun v-if="isDark" />

      <IconsMoon v-else />
    </BaseButton>

    <template #placeholder>
      <div
        class="
          animate-pulse border border-border bg-muted bg-clip-border p-2 block-7
          inline-7
        "
      />
    </template>
  </ColorScheme>
</template>
