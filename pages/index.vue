<template>

  
  <main class="w-full flex flex-auto flex-col items-center justify-center">

    <ContentRenderer
      v-if="page"
      :value="page"
      tag="section"
      class="flex-auto space-y-10"
    />

  </main>
  
  
</template>

<script setup lang="ts">
const { data: page } = await useLazyAsyncData(
  'home-page',
  () => queryCollection('homePage').first(),
)

useSeoMeta({
  title: 'Home',
  twitterTitle: 'Favorodera | Home',
  twitterDescription: 'Frontend Web Developer',
  description: 'Frontend Web Developer',
  ogDescription: 'Frontend Web Developer',
  ogImage: {
    alt: 'Favour Emeka',
    type: 'image/jpeg',
    url: '/avatar.jpeg',
    height: '630',
    width: '1200',
  },
  twitterImage: {
    alt: 'Favour Emeka',
    type: 'image/jpeg',
    url: '/avatar.jpeg',
    height: '630',
    width: '1200',
  },
})
</script>
