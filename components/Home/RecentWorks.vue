<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="min-w-37.5 flex items-center gap-2 text-4 font-700 lg:sticky lg:top-10">
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
          <USkeleton
            v-for="n in 2"
            :key="n"
            :ui="{ rounded: 'rounded-4', background: 'dark:bg-gray/15' }"
            class="min-h-17rem"
          />
        </template>
      </div>

      <UButton
        v-if="projects?.data && status === 'success'"
        label="View More"
        trailing
        style="outline: none;"
        size="sm"
        color="gray"
        variant="solid"
        icon="i-heroicons-arrow-right-solid"
        :ui="{ padding: { sm: 'px-3 py-1' }, gap: { sm: 'gap-x-2' }, size: { sm: 'text-[1rem]' }, base: 'dark:ring-0 self-end property-all duration-500 ', font: 'font-bold', color: { gray: { solid: 'dark:bg-#1c1c1c dark:hover:bg-gray/10 dark:text-white' } } }"
        to="/projects"
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
