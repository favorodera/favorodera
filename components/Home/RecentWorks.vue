<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="flex gap-2 text-4 font-700">
      <i class="i-heroicons-solid-code" />
      <p class="w-37.5">
        RECENT WORKS
      </p>
    </div>

    <div class="w-full flex flex-col gap-4">
      <div class="w-full flex flex-wrap gap-4">
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
            v-for="n in 2"
            :key="n"
            pt:root:class="grow-1 min-h-17rem basis-20rem  rounded-4 bg-#1c1c1c/10 dark:bg-#1c1c1c"
          />
        </template>
      </div>

      <Button
        as="router-link"
        to="/projects"
        label="View More"
        icon="i-heroicons-arrow-right-solid"
        icon-pos="right"
        raised
        pt:root:class="p-1 dark:bg-#1c1c1c bg-#1c1c1c/10 hover:bg-gray/10 decoration-none dark:text-white  text-black b-0 h-8 px-3 w-max self-end "
        pt:label:class="font-400"
        pt:icon:class=" text-5"
      />
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
