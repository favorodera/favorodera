<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.',
})
</script>

<template>
  <div
    aria-label="app"
    class="grid min-h-dvh w-full grid-cols-1 grid-rows-[1fr]"
  >
  
    <NuxtLayout name="default">

      <Empty
        :title="error.status?.toString() || '500'"
        :description="error.statusText || 'Internal Server Error'"
        :actions="[
          {
            label: 'Go back home',
            onClick: () => navigateTo('/'),
          },
        ]"
      />

    </NuxtLayout>
  
  </div>
</template>
