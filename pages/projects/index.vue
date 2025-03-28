<template>

  
  <main class="w-full flex flex-auto flex-col items-center justify-center">
  
    <ContentRenderer
      v-if="page"
      :value="page"
      tag="section"
      class="w-full flex flex-auto flex-col items-center justify-center gap-10"
    />
  
  </main>
    
    
</template>
  
<script setup lang="ts">
const { data: page } = await useLazyAsyncData(
  'projects-page',
  () => queryCollection('projectsPage').first(),
)

useSeoMeta({
  title: 'Projects',
  twitterTitle: 'Favorodera | Projects',
  description: 'Projects by Favour Emeka',
  ogDescription: 'Projects by Favour Emeka',
  twitterDescription: 'Projects by Favour Emeka',
  ogTitle: 'Favorodera | Projects',
  ogUrl: 'https://favorodera.vercel.app/projects',
})
</script>
