<template>
  <section class="grid w-full items-center justify-between gap-y-10">
    <LazyHomeHeader />
    <LazyHomeAbout />
    <LazyHomeRecentWorks />
    <LazyHomeEducation />
    <LazyHomeExperience />
    <LazyHomeContact />
    <ScrollTop
      icon="i-heroicons-arrow-up"
      :button-props="{ severity: 'contrast', raised: true, rounded: true }"
    />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>
