<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="min-w-37.5 flex gap-2 text-4 font-700 lg:sticky lg:top-10">
      <i class="i-heroicons-solid-code" />
      <p>
        RECENT WORKS
      </p>
    </div>

    <div class="w-full flex flex-col gap-4">
      <div class="grid grid-cols-1 w-full gap-4 sm:grid-cols-2">
        <template v-if="projects?.data && status === 'success'">
          <ProjectsCard
            v-for="project in projects?.data.slice(-2)"
            :key="project.name"
            :project-name="project.name"
            :project-path="`/projects/${project.name.toLowerCase()}`"
            :project-image="project.image"
            :project-description="project.description"
          />
        </template>

        <template v-else-if="error">
          <div
            class="col-span-2 b-1 b-red-500/60 rounded b-solid bg-red-500/5 px-3.5 py-2.5"
          >
            <p class="text-xs text-red-500">
              Oops!! 🫢 Network error.
              There's something wrong with your network. Please check your network and reload the page.
            </p>
          </div>
        </template>

        <template v-else>
          <Skeleton
            v-for="n in 2"
            :key="n"
            pt:root:class="grow-1 min-h-17rem basis-20rem rounded-4"
          />
        </template>
      </div>

      <Button
        v-if="projects?.data && status === 'success'"
        as="router-link"
        to="/projects"
        label="View More"
        icon="i-heroicons-arrow-right-solid"
        icon-pos="right"
        pt:root:class="p-1 bg-#1c1c1c hover:bg-gray/10 decoration-none text-white b-0 h-8 px-3 w-max self-end "
        pt:label:class="font-bold"
        pt:icon:class=" text-5"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: projects, status, error } = await useLazyAsyncData(
  'recent-projects',
  () => $fetch('/api/projects', { timeout: 30000, method: 'GET' }),
  { server: false },
)
</script>
