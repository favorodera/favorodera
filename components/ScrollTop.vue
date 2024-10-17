<template>
  <UButton
    trailing
    size="lg"
    color="gray"
    variant="solid"
    icon="i-heroicons-arrow-up-solid"
    :ui="{
      rounded: 'rounded-full',
      padding: { lg: 'p-4' },
      base: 'fixed bottom-6 right-4',
      font: 'font-bold',
      inline: hidden ? 'hidden' : 'inline-flex',
      color: {
        gray: {
          solid:
            'dark:bg-gray/40 dark:b-gray dark:hover:b-white dark:hover:bg-gray/10 dark:text-white',
        },
      },
    }"
    @click="scrollTop()"
  />
</template>

<script lang="ts" setup>
const hidden = ref(true)

const scrollTop = () => window.scrollTo({ top: 0 })

window?.addEventListener(
  'scroll',
  () => hidden.value = window.scrollY < window.innerHeight * 0.6,
  { passive: true },
)
</script>
