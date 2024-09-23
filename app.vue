<template>
  <NuxtLoadingIndicator />
  <LazyNuxtLayout>
    <LazyNuxtPage />
  </LazyNuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Favorodera',
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'min-h-screen flex flex-col flex-1 dark:bg-black bg-white dark:text-white text-black items-center p-4',
  },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  style: [{ children: ':root { font-family: "Space Mono", monospace;} * {margin: 0; padding: 0; box-sizing: border-box; }' }],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap',
    },
  ],
})
</script>
