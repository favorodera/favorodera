<template>
  <ULink
    class="group flex items-end gap-4 **:transition-all"
    :to="project.url"
    target="_blank"
    active
    external
    :title="project.description"
  >

    <div class="max-w-sm">

      <component
        :is="headerAs"
        class="font-medium tracking-tight group-hover:text-secondary"
      >
        {{ project.title }}
      </component>

      <p
        class="text-sm text-muted"
      >
        {{ project.description }}
      </p>

    </div>

    <USeparator
      type="dashed"
      :ui="{ root: 'flex-1', border: 'group-hover:border-accented' }"
    />

    <div class="flex aspect-square w-8 shrink-0 items-center overflow-hidden rounded-md border border-dashed border-default p-1 group-hover:border-accented">

      <UColorModeImage
        :light="project.thumbnail?.dark || '/image-broken-dark.png'"
        :dark="project.thumbnail?.light || '/image-broken-light.png'"
        :alt="project.title"
        fit="cover"
        loading="lazy"
        class="rounded-sm"
        width="100"
        height="100"
      />

    </div>
   
    
  </ULink>
</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

withDefaults(defineProps<{
  project: Pick<ProjectsCollectionItem, 'title' | 'description' | 'url' | 'thumbnail'>
  headerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>(), {
  headerAs: 'h3',
})
</script>
