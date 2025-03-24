<template>

  <NuxtLink
    v-for="(project, index) in projects"
    :key="index"
    :to="project.stem"
    :class="[
      'flex gap-2',
      {
        'rounded-lg bg-brand-elevate p-2  hover:bg-brand-elevate/70 items-start': elevate,
        'items-center': !elevate,
      },
    ]"
  >

    <NuxtIcon
      :name="project.icon"
      class="size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-brand-textGray"
    />

    <div class="flex flex-col gap-1">

      <h3 class="line-clamp-2 break-all text-start">
        {{ project.name }}
      </h3>

      <p class="line-clamp-2 text-start text-[clamp(0.8rem,1.8vw,1.1rem)] text-brand-textGray">
        {{ project.briefDescription }}
      </p>

    </div>

  </NuxtLink>

</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

defineProps<{
  projects: ProjectsCollectionItem[] | null
  elevate?: boolean
}>()


</script>
