<template>
  <div class="sticky top-10 grid w-full gap-y-1.5 rounded-4 bg-#1c1c1c/10 p-3 p-4 text-black shadow-2xl dark:bg-#1c1c1c dark:text-white">
    <p class="text-xs md:text-sm dark:text-gray">
      {{ course }}
    </p>
    <NuxtLink
      :to="instituteUrl"
      target="_blank"
      rel="noopener noreferrer"
      external
      class="flex gap-2 text-sm text-black font-700 decoration-none md:text-4 dark:text-white hover:decoration-underline"
    >
      <p>{{ institute }}</p>
      <i class="i-heroicons-arrow-long-right-solid text-5" />
    </NuxtLink>
    <div>
      <span class="text-xs md:text-sm dark:text-gray">
        from
      </span>
      <span class="text-xs font-700 md:text-sm">{{ startDate }}</span>
      <span class="text-xs md:text-sm dark:text-gray">
        to
      </span>
      <span class="text-xs font-700 md:text-sm">{{ endDate }}</span>
    </div>
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
