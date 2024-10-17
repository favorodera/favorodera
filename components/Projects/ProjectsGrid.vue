<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="max-w-37.5 min-w-37.5 gap-2 text-4 font-700 lg:sticky lg:top-20">
      <USelectMenu
        v-model="selected"
        :disabled="status === 'pending'"
        searchable
        clear-search-on-close
        searchable-placeholder="FilterTags..."
        color="gray"
        size="sm"
        variant="outline"
        :style="{ cursor: status === 'pending' ? 'not-allowed' : 'pointer' }"
        :options="tags"
        trailing-icon="i-heroicons-chevron-up-down-solid"
        :ui="{
          color: { gray: { outline: 'dark:bg-black focus:ring-0' } },
          base: 'b b-#d4d4d4/25 max-h-9',
          size: { sm: 'font-normal' },
          padding: { sm: 'px-3 py-2' },
          icon: { size: { sm: 'size-4' }, base: 'dark:text-white' },
        }"
        :ui-menu="{
          base: 'pb-1',
          input: 'dark:bg-black m-0 w-full px-2 text-sm font-normal py-1.5 mb-2',
          padding: 'p-0',
          ring: 'dark:ring-gray-100/25',
          background: 'dark:bg-black',
          height: 'max-h-29rem',
          option: { base: 'cursor-pointer mx-1 ', size: 'font-normal', active: 'dark:bg-gray/25', padding: 'px-2 py-1.5' },
        }"
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
        <USkeleton
          v-for="n in 6"
          :key="n"
          :ui="{ rounded: 'rounded-4', background: 'dark:bg-gray/15' }"
          class="min-h-17rem"
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
const tags = ref([
  'All',
  'AI',
  'Tools',
  'Portfolio',
  'Replicas',
  'Personal',
  'Landing Pages',
  'Templates',
  'Libraries',
])
const selected = ref(tags.value[0])

const { data: projects, status, error } = await useLazyAsyncData(
  `projects-${selected.value}`,
  () => $fetch(`/api/projects?tag=${selected.value ? selected.value.toLowerCase() : ''}`, { timeout: 30000, method: 'GET' }),
  { server: false, watch: [selected] },
)
</script>
