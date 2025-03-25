<template>

  <NuxtLink
    v-for="(post, index) in posts"
    :key="index"
    class="w-full flex items-center gap-2 border border-brand-elevate rounded-lg p-2"
    :to="post.path"
  >
  
    <NuxtIcon
      name="hugeicons:license"
      class="size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-brand-textGray"
    />
  
    <div class="w-full flex flex-col gap-1">

      <h3 class="line-clamp-2 text-start">
        {{ post.title }}
      </h3>

      <p class="line-clamp-2 text-start text-[clamp(0.8rem,1.8vw,1.1rem)] text-brand-textGray">
        {{ post.description }}
      </p>

    </div>
  
  </NuxtLink>

  
</template>
  
<script setup lang="ts">
import type { PostsCollectionItem } from '@nuxt/content'

defineProps<{
  posts: PostsCollectionItem[]
}>()
  
</script>
  
