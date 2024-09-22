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
    class: 'min-h-screen flex flex-col flex-1 dark:bg-dark-300 bg-white items-center p-4 m-0',
  },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  style: [{ children: ':root { font-family: "Space Mono", monospace; }' }],
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
