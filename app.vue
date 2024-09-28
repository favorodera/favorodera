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
    class:
      'min-h-screen flex flex-col flex-1 dark:bg-black bg-white dark:text-white text-black items-center p-4',
  },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  style: [
    {
      children:
        ':root { font-family: "IBM Plex Mono", monospace;} * {margin: 0; padding: 0; box-sizing: border-box; }',
    },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
    },
  ],
})
</script>
