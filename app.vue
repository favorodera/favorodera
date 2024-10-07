<template>
  <NuxtLoadingIndicator color="white" />
  <LazyNuxtLayout>
    <LazyNuxtPage />
  </LazyNuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Favour Emeka',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
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
