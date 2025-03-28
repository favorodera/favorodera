<template>

  <main class="w-full flex flex-auto flex-col items-center justify-center">

    <Analytics />
    <NuxtPage />

  </main>
  
  <Navigation />

</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import Navigation from './components/Navigation.vue'

useSeoMeta({
  titleTemplate: title => `Favorodera | ${title}`,
  profileFirstName: 'Favour',
  profileLastName: 'Emeka',
  description: 'Frontend Web Developer',
  ogDescription: 'Frontend Web Developer',
  twitterDescription: 'Frontend Web Developer',
  ogImage: {
    alt: 'Favour Emeka',
    type: 'image/jpeg',
    url: 'https://favorodera.vercel.app/_vercel/image?url=%2Favatar.jpg&w=1536&q=100',
    height: '630',
    width: '1200',
  },
  twitterImage: {
    alt: 'Favour Emeka',
    url: 'https://favorodera.vercel.app/_vercel/image?url=%2Favatar.jpg&w=1536&q=100',
  },
  profileGender: 'Male',
  ogType: 'profile',
  ogSiteName: 'Favour Emeka',
  twitterCard: 'summary_large_image',
  twitterCreator: '@favorodera',
  twitterSite: '@favorodera',
  robots: 'index, follow',
  author: 'Favour Emeka',
  applicationName: 'Favour Emeka',
  themeColor: '#151615',
})

</script>

<style scoped lang="css">

</style>
