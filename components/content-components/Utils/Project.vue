<template>

  <button
    v-for="(project, index) in projects"
    :key="index"
    type="button"
    class="flex items-center gap-2"
  >

    <NuxtIcon
      :name="project.icon"
      class="size-[2.25rem] shrink-0"
    />

    <div class="flex flex-col gap-1">

      <h2 class="text-start text-xl text-brand-text font-medium">
        {{ project.name }}
      </h2>

      <p class="text-start text-lg text-brand-textGray">
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
  'projects',
  () => queryCollection('projects').order('stem', 'DESC').all(),
  {
    transform: (data) => {
      if (page === 'home') return data.slice(0, 2)
    },
  },
)

</script>
