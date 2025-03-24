<template>

  <section class="w-full flex flex-auto flex-col justify-between gap-4">

    <h1 class="text-start">
      Projects
    </h1>

    <div
      ref="projectsContainer"
      class="flex flex-auto flex-col items-start justify-start gap-4"
    >
      <ContentUtilsProject
        :projects="visibleProjects"
      />

    </div>

    <ContentUtilsPaginator
      v-if="projects"
      :items-per-page="itemsPerPage"
      :total-items="projects.length"
      @page-change="updateVisibleProjects"
    />

  </section>

</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

const { data: projects } = await useLazyAsyncData(
  'all-projects',
  () => queryCollection('projects').order('stem', 'DESC').all(),
)
const projectsContainer = useTemplateRef('projectsContainer')
const itemsPerPage = ref(0)
const visibleProjects = ref<Array<ProjectsCollectionItem>>([])
  
const calculateItemsPerPage = () => {
  if (!projectsContainer.value) return

  const containerHeight = projectsContainer.value!.offsetHeight
  const cardHeight = 90
  const gap = 16

  itemsPerPage.value = Math.max(1, Math.floor((containerHeight + gap) / (cardHeight + gap)))
}

function updateVisibleProjects({ start, end }: { start: number, end: number }) {
  visibleProjects.value = projects.value?.slice(start, end) || []
}

onMounted(() => {
  calculateItemsPerPage()
  if (projects.value) {
    visibleProjects.value = projects.value.slice(0, itemsPerPage.value)
  }
})

watch(projects, (newProjects) => {
  if (newProjects) {
    calculateItemsPerPage()
    visibleProjects.value = newProjects.slice(0, itemsPerPage.value)
  }
})
</script>
