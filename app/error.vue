<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const normalizedError = computed(() => ({
  status: props.error.status?.toString() || '500',
  statusText: props.error.statusText || 'Internal Server Error',
}))

useSeoMeta({
  title: () => normalizedError.value.status,
  description: () => normalizedError.value.statusText,
})
</script>

<template>
  <div
    class="grid min-h-dvh w-full grid-cols-1 grid-rows-[1fr]"
  >
  
    <NuxtLayout name="default">

      <div
        role="alert"
        aria-live="assertive"
      >
        <Empty
          :title="normalizedError.status"
          :description="normalizedError.statusText"
          :actions="[
            {
              label: 'Go back home',
              onClick: () => navigateTo('/'),
            },
          ]"
        />
      </div>

    </NuxtLayout>
  
  </div>
</template>
