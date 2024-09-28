<template>
  <div
    class="sticky top-10 w-full flex flex-col gap-y-1.5 rounded-4 bg-#1c1c1c/10 p-3 p-4 text-black dark:bg-#1c1c1c dark:text-white dark:shadow-2xl"
  >
    <p class="text-xs md:text-sm dark:text-gray">
      {{ course }}
    </p>
    <NuxtLink
      :to="instituteUrl"
      target="_blank"
      rel="noopener noreferrer"
      external
      class="w-max flex gap-2 text-sm text-black font-700 decoration-none md:text-4 dark:text-white hover:decoration-underline"
    >
      <p>{{ institute }}</p>
      <i class="i-heroicons-arrow-long-right-solid text-5" />
    </NuxtLink>

    <p class="text-xs md:text-sm dark:text-gray">
      from
      <span class="text-xs text-black font-bold md:text-sm dark:text-white">{{ startDate }}</span>
      to
      <span class="text-xs text-black font-bold md:text-sm dark:text-white">{{ endDate }}</span>
    </p>
    <Divider pt:root:class="mt-1.5" />
    <p class="mt-4 text-sm">
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
