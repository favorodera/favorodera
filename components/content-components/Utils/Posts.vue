<template>

  <NuxtLink
    v-for="(post, index) in posts"
    :key="index"
    class="w-full flex items-center gap-2 border border-brand-elevate rounded-lg p-2"
    :to="post.path"
  >
  
    <NuxtIcon
      name="hugeicons:paragraph-bullets-point-01"
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
  
