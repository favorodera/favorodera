<template>
  <section class="w-full flex flex-col items-center justify-between gap-y-10">
    <LazyHomeHeader />
    <LazyHomeAbout />
    <LazyHomeRecentWorks />
    <LazyHomeEducation />
    <!-- <LazyHomeExperience /> NO EXPERIENCE YET -->
    <LazyHomeContact />
    <ScrollTop
      icon="i-heroicons-arrow-up"
      pt:button:root="text-black dark:text-white text-lg b-gray hover:b-black dark:hover:b-white bg-white dark:bg-black"
    />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>
