<template>

  <NuxtLink
    v-for="(post, index) in posts"
    :key="index"
    class="flex items-center gap-2 hover:text-brand-textGray"
    :to="post.path"
  >
  
    <NuxtIcon
      name="hugeicons:notebook-01"
      class="size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-brand-textGray"
    />
  
  
    <h3 class="line-clamp-2 text-start">
      {{ post.title }}
    </h3>
  
  
  </NuxtLink>
  
</template>
  
<script setup lang="ts">
import type { PostsCollectionItem } from '@nuxt/content'

defineProps<{
  posts: PostsCollectionItem[] | null
}>()
  
</script>
  
