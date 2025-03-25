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
  'posts-page',
  () => queryCollection('postsPage').first(),
)

useSeoMeta({
  title: 'Posts',
  twitterTitle: 'Posts',
})
</script>
    
  
