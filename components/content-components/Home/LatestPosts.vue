<template>

  <section class="space-y-4">
  
    <h2>
      Latest Posts
    </h2>
  
    <ContentUtilsPosts :posts />
  
  </section>
  
</template>

<script setup lang="ts">
const { data: posts } = await useLazyAsyncData(
  'latest-posts',
  () => queryCollection('posts').order('stem', 'DESC').limit(2).all(),
)
</script>
  
