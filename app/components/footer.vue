<script setup lang="ts">
const colorMode = useColorMode()

const theme = computed({
  get: () => colorMode.value,
  set: (value: string) => {
    colorMode.preference = value
  },
})
</script>

<template>

  <footer
    aria-label="Site footer"
    class="
      flex w-full max-w-3xl flex-col flex-wrap items-center justify-between
      gap-3 border-t border-muted pt-4 text-sm text-muted-foreground
      sm:flex-row
    "
  >

    <p>2023 - Present</p>

    <p class="mt-0">
      Favour Emeka
    </p>

    <ColorScheme
      placeholder="..."
      tag="span"
      class="animate-pulse text-muted-foreground"
      aria-label="Awaiting color scheme"
    >
      <button
        v-if="!colorMode.forced"
        :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`"
        class="
          mt-0 cursor-pointer text-sm text-muted-foreground transition-colors
          duration-300
          hover:text-foreground
        "
        @click="theme = theme === 'dark' ? 'light' : 'dark'"
      >
        {{ theme === 'dark' ? 'Light' : 'Dark' }}
      </button>
    
    </ColorScheme>

  </footer>

</template>
