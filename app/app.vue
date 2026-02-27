<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

useSeoMeta({
  titleTemplate: '%s %separator %siteName',
  description: 'Frontend Developer',
  ogTitle: 'Favour Emeka',
  ogDescription: 'Frontend Developer',
  ogImage: 'https://github.com/favorodera.png',
  ogUrl: 'https://favorodera.vercel.app/',
  twitterTitle: 'Favour Emeka',
  twitterDescription: 'Frontend Developer',
  twitterImage: 'https://github.com/favorodera.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@favorodera',
  twitterCreator: '@favorodera',
  colorScheme: 'dark light',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
})

useHead({
  meta: [
    { name: 'google-site-verification', content: 'qYU6PqljRftNzCNBLdEFxnKJKwH-Aj7aJ9CLp6itnhM' },
  ],
})
</script>

<template>

  <div
    aria-label="app"
    class="grid min-h-dvh w-full grid-cols-1 grid-rows-[1fr]"
  >

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Analytics />

  </div>

</template>
