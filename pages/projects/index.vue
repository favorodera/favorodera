<template>
  <section class="w-full flex flex-col items-center justify-between gap-y-10">
    <LazyProjectsHeader />
    <LazyProjectsGrid />
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
