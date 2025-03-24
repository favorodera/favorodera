<template>

  <section class="w-full flex flex-auto flex-col gap-4">

    <h1 class="text-start">
      Projects
    </h1>

    <div
      ref="projectsContainer"
      class="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] flex-auto gap-4"
    >
      <ContentUtilsProject
        :projects="visibleProjects"
        elevate
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
let resizeObserver: ResizeObserver

const setupResizeObserver = () => {
  if (!projectsContainer.value) return

  const calculateItemsPerPage = () => {
    const containerWidth = projectsContainer.value!.offsetWidth
    const gap = 16
    const cardWidth = 290
    const containerHeight = projectsContainer.value!.offsetHeight
    const cardHeight = 90

    const cardsPerRow = Math.floor((containerWidth + gap) / (cardWidth + gap))
    const rowsPerPage = Math.floor((containerHeight + gap) / (cardHeight + gap))
    itemsPerPage.value = Math.max(1, cardsPerRow * rowsPerPage)
  }

  resizeObserver = new ResizeObserver(() => calculateItemsPerPage())
  resizeObserver.observe(projectsContainer.value)
  calculateItemsPerPage()
}

function updateVisibleProjects({ start, end }: { start: number, end: number }) {
  visibleProjects.value = projects.value?.slice(start, end) || []
}

onMounted(() => {
  setupResizeObserver()
  if (projects.value) {
    visibleProjects.value = projects.value.slice(0, itemsPerPage.value)
  }
})

onUnmounted(() => resizeObserver.disconnect())

watch(projects, (newProjects) => {
  if (newProjects) {
    visibleProjects.value = newProjects.slice(0, itemsPerPage.value)
  }
})
</script>
