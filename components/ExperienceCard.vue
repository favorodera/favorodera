<template>
  <div
    class="sticky top-10 w-full flex flex-col gap-y-1.5 rounded-4 bg-#1c1c1c p-4 text-white shadow-2xl"
  >
    <p class="text-xs text-#a3a3a3 md:text-sm">
      {{ course }}
    </p>
    <ULink
      :to="instituteUrl"
      target="_blank"
      rel="noopener noreferrer"
      external
      class="w-max flex gap-2 text-sm text-white font-700 decoration-none md:text-4 hover:decoration-underline"
    >
      <p>{{ institute }}</p>
      <i class="i-heroicons-arrow-long-right-solid text-5" />
    </ULink>

    <p class="text-xs text-#a3a3a3 md:text-sm">
      from
      <span class="text-xs text-white md:text-sm">{{ startDate }}</span>
      to
      <span class="text-xs text-white md:text-sm">{{ endDate }}</span>
    </p>
    <UDivider :ui="{ border: { base: 'mt-1.5 mb-4 dark:b-gray/25' } }" />
    <p class="text-sm">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  course: String,
  institute: String,
  startDate: String,
  endDate: String,
  instituteUrl: String,
  description: String,
})
</script>
