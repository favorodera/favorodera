<template>
  <header
    class="sticky top-0 w-full flex items-center justify-between gap-y-16 bg-black py-4"
  >
    <UButton
      label="GO BACK"
      to="/"
      size="lg"
      color="gray"
      variant="ghost"
      icon="i-heroicons-arrow-long-left-solid"
      :padded="false"
      :ui="{
        gap: { lg: 'gap-2' },
        icon: {
          size: {
            lg: 'size-6',
          },
        },
        font: 'font-bold',
        size: { lg: 'text-xs md:text-sm tracking-widest' },
        base: 'property-color duration-500 } ',
        color: {
          gray: {
            ghost:
              'dark:hover:text-#a3a3a3 dark:hover:bg-transparent dark:text-white',
          },
        },
      }"
    />

    <div class="flex items-center gap-1 text-xs text-#a3a3a3 font-semibold md:text-sm">
      <template v-if="projects?.data && status === 'success'">
        <p><i class="i-heroicons-folder-solid" /> TOTAL PROJECTS: <span class="text-white">{{ projects?.data.length }}</span></p>
      </template>

      <template v-else>
        <p>LOADING...</p>
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
const { data: projects, status } = await useLazyAsyncData(
  'projects-total',
  () => $fetch('/api/projects', { method: 'GET', timeout: 30000 }),
  { server: false },
)
</script>
