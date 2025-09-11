<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </UApp>
</template>

<script lang="ts" setup>
useSeoMeta({
  titleTemplate: '%s',
  twitterCard: 'summary_large_image',
  twitterSite: '@favorodera',
  twitterCreator: '@favorodera',
  colorScheme: 'dark light',
  author: 'Favour Emeka',
  themeColor: [
    { content: '#090909', media: '(prefers-color-scheme: dark)' },
    { content: 'white', media: '(prefers-color-scheme: light)' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
})

useHead({
  htmlAttrs: { lang: 'en', dir: 'ltr' },
  link: [
    { rel: 'icon', href: '/avatar.png' },
    { rel: 'canonical', href: 'https://favorodera.vercel.app/' },
  ],
})
</script>
