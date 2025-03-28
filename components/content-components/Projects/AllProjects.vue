<template>
  <section class="w-full flex flex-auto flex-col justify-between gap-4">

    <h1 class="text-start">
      Projects
    </h1>

    <div
      ref="projectsContainer"
      class="w-full flex flex-auto flex-col items-start justify-start gap-4"
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

const projectsContainer = ref<HTMLElement | null>(null)
const itemsPerPage = ref(0)
const visibleProjects = ref<Array<ProjectsCollectionItem>>([])
const resizeObserver = ref<ResizeObserver | null>(null)

function calculateItemsPerPage() {
  if (!projectsContainer.value) return

  const containerHeight = projectsContainer.value.offsetHeight
  const cardHeight = 90
  const gap = 16

  itemsPerPage.value = Math.max(1, Math.floor((containerHeight + gap) / (cardHeight + gap)))
}

function updateVisibleProjects({ start, end }: { start: number, end: number }) {
  visibleProjects.value = projects.value?.slice(start, end) || []
}


onMounted(() => {

  nextTick(() => {

    requestAnimationFrame(() => {

      calculateItemsPerPage()
      if (projects.value) {
        visibleProjects.value = projects.value.slice(0, itemsPerPage.value)
      }

    })

    if (projectsContainer.value) {

      resizeObserver.value = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          calculateItemsPerPage()
          updateVisibleProjects({ start: 0, end: itemsPerPage.value })
        })
      })

      resizeObserver.value.observe(projectsContainer.value)
    }
  })
})

onBeforeUnmount(() => {
  if (resizeObserver.value && projectsContainer.value) {
    resizeObserver.value.unobserve(projectsContainer.value)
    resizeObserver.value.disconnect()
  }
})

watch(projects, (newProjects) => {
  if (newProjects) {

    nextTick(() => {
      requestAnimationFrame(() => {
        calculateItemsPerPage()
        visibleProjects.value = newProjects.slice(0, itemsPerPage.value)
      })
    })

  }
})
</script>
