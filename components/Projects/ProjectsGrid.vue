<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="max-w-37.5 min-w-37.5 flex gap-2 text-4 font-700 lg:sticky lg:top-20">
      <Select
        v-model="selectedTag"
        :disabled="status === 'pending'"
        checkmark
        :options="tags"
        option-label="name"
        :max-selected-labels="10"
        :show-toggle-all="false"
        placeholder="Categories"
        dropdown-icon="i-heroicons-chevron-up-down-solid text-4 "
        pt:root:class="flex min-w-full h-9 items-center justify-between whitespace-nowrap rounded-md border  b-#d4d4d4/25 bg-black px-3 py-2 text-sm shadow-sm line-clamp-1"
        pt:label:class="text-white font-normal flex"
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

      <template v-if="status === 'pending'">
        <Skeleton
          v-for="n in 6"
          :key="n"
          width="100%"
          pt:root:class="grow-1 min-h-17rem basis-20rem min-w-full rounded-4"
        />
      </template>

      <template v-else-if="projects?.message === 'No Projects Found with that tag' && status === 'success'">
        <div class="w-full b-1 b-yellow-500/60 rounded b-solid bg-yellow-500/5 px-3.5 py-2.5">
          <p class="text-xs text-yellow-500">
            I haven't built anything yet, weird isn't it? 🤨
          </p>
        </div>
      </template>

      <template v-else-if="error">
        <div class="w-full b-1 b-red-500/60 rounded b-solid bg-red-500/5 px-3.5 py-2.5">
          <p class="text-xs text-red-500">
            Oops!! 🫢 Network error
            There's something wrong with your network. Please check your network and reload the page.
          </p>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const selectedTag = ref()
const tags = ref([
  { name: 'Complete' },
  { name: 'AI' },
  { name: 'Tools' },
  { name: 'Portfolio' },
  { name: 'Replicas' },
  { name: 'Personal' },
])

const { data: projects, status, error } = await useLazyAsyncData(
  `projects-${selectedTag.value}`,
  () => $fetch(`/api/projects?tag=${selectedTag.value ? selectedTag.value.name.toLowerCase() : ''}`, { timeout: 30000, method: 'GET' }),
  { server: false, watch: [selectedTag] },
)
</script>
