<template>
  <div
    class="sticky top-10 w-full flex flex-col gap-y-1.5 rounded-4 bg-#1c1c1c p-3 p-4 text-white shadow-2xl"
  >
    <p class="text-xs text-#a3a3a3 md:text-sm">
      {{ course }}
    </p>
    <NuxtLink
      :to="instituteUrl"
      target="_blank"
      rel="noopener noreferrer"
      external
      class="w-max flex gap-2 text-sm text-white font-700 decoration-none md:text-4 hover:decoration-underline"
    >
      <p>{{ institute }}</p>
      <i class="i-heroicons-arrow-long-right-solid text-5" />
    </NuxtLink>

    <p class="text-xs text-#a3a3a3 md:text-sm">
      from
      <span class="text-xs text-white md:text-sm">{{ startDate }}</span>
      to
      <span class="text-xs text-white md:text-sm">{{ endDate }}</span>
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
