<template>

  <main class="w-full flex flex-auto flex-col items-center justify-center">

    <NuxtPage />

  </main>
  
  <Navigation />

</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue'

useSeoMeta({
  titleTemplate: title => `Favorodera | ${title}`,
  profileFirstName: 'Favour',
  profileLastName: 'Emeka',
  profileGender: 'Male',
  ogType: 'profile',
  twitterCard: 'summary_large_image',
  twitterCreator: '@favorodera',
  twitterSite: '@favorodera',
  robots: 'index, follow',
  author: 'Favour Emeka',
  applicationName: 'Favour Emeka',
})

</script>

<style scoped lang="css">

</style>
