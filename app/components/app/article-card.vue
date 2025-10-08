<template>

  <ULink
    class="group flex items-end gap-4 **:transition-all"
    :to="`/articles/${article.slug}`"
    active
    external
    :title="article.description"
  >

    <article>

      <div class="relative pl-2">

        <NuxtTime
          class="text-sm text-muted"
          :datetime="article.date"
          year="numeric"
          month="long"
          day="numeric"
        />

        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span
            class="h-4 w-0.5 rounded-full bg-accented"
          />
        </span>

      </div>

      <h3
        class="text-base  font-semibold tracking-tight group-hover:text-teal-600"
      >
        {{ article.title }}
      </h3>

      <p
        class="mt-2 text-sm text-muted"
      >
        {{ article.description }}
      </p>

    </article>

  </ULink>
  
</template>

<script setup lang="ts">
import type { ArticlesCollectionItem } from '@nuxt/content'

defineProps<{
  article: Pick<ArticlesCollectionItem, 'slug' | 'title' | 'description' | 'date'>
}>()
</script>

<style scoped>

</style>
