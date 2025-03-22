<template>

  <NuxtLink
    v-for="(project, index) in projects"
    :key="index"
    type="button"
    class="flex items-center gap-2"
    :to="project.stem"
  >

    <NuxtIcon
      :name="project.icon"
      class="size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-brand-textGray"
    />

    <div class="flex flex-col gap-1">

      <h3 class="line-clamp-2 text-start">
        {{ project.name }}
      </h3>

      <p class="line-clamp-2 text-start text-[clamp(1rem,1.8vw,1.25rem)] text-brand-textGray">
        {{ project.briefDescription }}
      </p>

    </div>

  </NuxtLink>

</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

defineProps<{
  projects: ProjectsCollectionItem[] | null
}>()


</script>
