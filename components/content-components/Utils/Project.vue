<template>

  <div
    v-for="(project, index) in projects"
    :key="index"
    class="w-full flex items-center gap-2 border border-brand-elevate rounded-lg p-2"
  >

    <NuxtIcon
      :name="project.icon"
      class="size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-brand-textGray"
    />

    <div class="w-full flex flex-col gap-1">

      <div class="flex items-center gap-2">
        
        <h3 class="line-clamp-2 break-all text-start">
          {{ project.name }}
        </h3>

        <NuxtLink
          v-for="(value, key) in project.links"
          :key
          :to="value"
          class="rounded-sm bg-brand-elevate px-1 py-0.5 text-xs"
        >
          {{ key }}
        </NuxtLink>

      </div>

      <p class="line-clamp-2 text-start text-[clamp(0.8rem,1.8vw,1.1rem)] text-brand-textGray">
        {{ project.description }}
      </p>

    </div>

  </div>

</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

defineProps<{
  projects: ProjectsCollectionItem[] | null
}>()


</script>
