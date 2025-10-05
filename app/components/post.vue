<template>

  <article class="group relative space-y-2">

    <h3
      class="font-semibold text-highlighted group-hover:underline"
      :title="post.title"
    >
      {{ post.title }}


      <ULink
        as="h3"
        :to="`/posts/${post.id}`"
        class="absolute inset-0 "
      />
    </h3>

    <p class="line-clamp-2 grow text-sm dark:text-muted">
      {{ post.description }}
    </p>

  </article>


</template>

<script setup lang="ts">
import type { PostsCollectionItem } from '@nuxt/content'

defineProps<{
  post: PostsCollectionItem
}>()
</script>
