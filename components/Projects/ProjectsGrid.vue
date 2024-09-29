<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="max-w-37.5 min-w-37.5 flex gap-2 text-4 font-700 lg:sticky lg:top-20">
      <Select
        v-model="selectedCities"
        checkmark
        :options="cities"
        option-label="name"
        :max-selected-labels="10"
        :show-toggle-all="false"
        placeholder="Categories"
        dropdown-icon="i-heroicons-chevron-up-down-solid text-xl "
        pt:root:class="flex min-w-full h-9 items-center justify-between whitespace-nowrap rounded-md border  b-#d4d4d4/25 bg-black px-3 py-2 text-sm shadow-sm line-clamp-1"
        pt:label:class="text-white font-normal"
        pt:overlay:class="bg-black p-1 mt-2"
        pt:option:class="text-sm text-white px-2 py-1.5 flex-row-reverse justify-between"
        pt:dropdown:class="w-max"
      />
    </div>

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
          pt:root:class="grow-1 min-h-17rem basis-20rem min-w-full  rounded-4 bg-#1c1c1c"
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
const selectedCities = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
</script>
