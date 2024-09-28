<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <!-- <div class="flex gap-2 text-4 font-700 lg:sticky lg:top-20" /> -->

    <div class="grid grid-cols-1 w-full gap-4 sm:grid-cols-2">
      <template v-if="projects?.data && status === 'success'">
        <ProjectsCard
          v-for="project in projects?.data"
          :key="project.name"
          :project-name="project.name"
          :project-path="`/projects/${project.name.toLowerCase()}`"
          :project-image="project.image"
          :project-description="project.description"
        />
      </template>

      <template v-else>
        <Skeleton
          v-for="n in 6"
          :key="n"
          width="100%"
          pt:root:class="grow-1 min-h-17rem basis-20rem min-w-full  rounded-4 bg-#1c1c1c/10 dark:bg-#1c1c1c"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: projects, status } = await useLazyAsyncData(
  'projects',
  () => $fetch('/api/projects', { method: 'GET' }),
  { server: false },
)
</script>
