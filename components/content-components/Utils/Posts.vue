<template>

  <NuxtLink
    v-for="(post, index) in posts"
    :key="index"
    type="button"
    class="flex items-center gap-2 hover:text-brand-textGray"
    :to="post.path"
  >
  
    <NuxtIcon
      name="hugeicons:notebook-01"
      class="size-[2.25rem] shrink-0"
    />
  
  
    <h2 class="line-clamp-2 text-start">
      {{ post.title }}
    </h2>
  
  
  </NuxtLink>
  
</template>
  
<script setup lang="ts">
const { page } = defineProps<{
  page: 'home' | 'posts'
}>()
  
const { data: posts } = await useLazyAsyncData(
  'latest-posts',
  () => queryCollection('posts').order('stem', 'DESC').all(),
  {
    transform: (data) => {
      if (page === 'home') return data.slice(0, 2)
    },
  },
)
  
</script>
  
