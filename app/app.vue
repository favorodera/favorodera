<template>
  <UApp
    tabindex="-1"
    :toaster="{
      expand: false,
      position: 'top-center',
      progress: false,
      duration: 3000,
    }"
  >
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator
      color="white"
      error-color="red"
    />

    <AppHeader />
    
    <UMain>

      <NuxtLayout>
        <Analytics />
        <NuxtPage />
      </NuxtLayout>
      
    </UMain>

    <AppFooter />

  </UApp>

</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

useSeoMeta({
  titleTemplate: '%s %separator %siteName',
  description: 'Frontend Web Developer specializing in Vue.js, Nuxt.js and Typescript.',
  ogTitle: 'Favour Emeka',
  ogDescription: 'Frontend Web Developer specializing in Vue.js, Nuxt.js and Typescript.',
  ogImage: 'https://favorodera.vercel.app/avatar.jpg',
  ogUrl: 'https://favorodera.vercel.app/',
  twitterTitle: 'Favour Emeka',
  twitterDescription: 'Frontend Web Developer specializing in Vue.js, Nuxt.js and Typescript.',
  twitterImage: 'https://favorodera.vercel.app/avatar.jpg',
  twitterCard: 'summary_large_image',
  themeColor: [
    { content: '#000000', media: '(prefers-color-scheme: dark)' },
    { content: '#ffffff', media: '(prefers-color-scheme: light)' },
  ],
  twitterSite: '@favorodera',
  twitterCreator: '@favorodera',
  colorScheme: 'dark light',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
})

useHead({
  htmlAttrs: { lang: 'en', dir: 'ltr' },
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
  ],
})
</script>
