<template>
  <header class="sticky top-0 w-full flex items-center justify-between gap-y-16 bg-white py-4 dark:bg-black">
    <Button
      label="GO BACK"
      icon="i-heroicons-arrow-long-left-solid"
      text
      to="/"
      as="router-link"
      pt:root:class="decoration-none group bg-transparent"
      pt:label:class="text-black dark:text-white group-hover:text-gray text-xs md:text-sm tracking-widest font-bold"
      pt:icon:class="text-black dark:text-white group-hover:text-gray text-2xl"
    />

    <div class="flex items-center gap-1 text-xs text-gray font-semibold md:text-sm">
      <template v-if="projects?.data && status === 'success'">
        <i class="i-heroicons-folder-solid" />
        <p>TOTAL PROJECTS:</p>
        <p class="text-black dark:text-white">
          {{ projects?.data.length }}
        </p>
      </template>

      <template v-else>
        <p>LOADING...</p>
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
const { data: projects, status } = await useLazyAsyncData(
  'projects',
  () => $fetch('/api/projects', { method: 'GET' }),
  { server: false },
)
</script>
