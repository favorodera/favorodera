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

      <component
        :is="headerAs"
        class="font-medium tracking-tight group-hover:text-secondary"
      >
        {{ article.title }}
      </component>

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

withDefaults(defineProps<{
  article: Pick<ArticlesCollectionItem, 'slug' | 'title' | 'description' | 'date'>
  headerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>(), {
  headerAs: 'h3',
})
</script>

<style scoped>

</style>
