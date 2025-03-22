<template>

  <button
    v-for="(project, index) in projects"
    :key="index"
    type="button"
    class="flex items-center gap-2"
  >

    <!-- TODO: Add firm links to button -->

    <NuxtIcon
      :name="project.icon"
      class="size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-brand-textGray"
    />

    <div class="flex flex-col gap-1">

      <h2 class="line-clamp-2 text-start">
        {{ project.name }}
      </h2>

      <p class="line-clamp-2 text-start text-[clamp(1rem,1.8vw,1.25rem)] text-brand-textGray">
        {{ project.briefDescription }}
      </p>

    </div>

  </button>

</template>

<script setup lang="ts">
const { page } = defineProps<{
  page: 'home' | 'projects'
}>()

const { data: projects } = await useLazyAsyncData(
  'latest-projects',
  () => queryCollection('projects').order('stem', 'DESC').all(),
  {
    transform: (data) => {
      if (page === 'home') return data.slice(0, 2)
    },
  },
)

</script>
