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
  ogTitle: 'Favorodera | Home',
  ogUrl: 'https://favorodera.vercel.app/',
})
</script>
