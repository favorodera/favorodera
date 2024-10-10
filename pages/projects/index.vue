<template>
  <section class="w-full flex flex-col items-center justify-between gap-y-10">
    <LazyProjectsHeader />
    <LazyProjectsGrid />
    <ScrollTop
      icon="i-heroicons-arrow-up"
      pt:button:root="text-white text-lg b-gray hover:b-white bg-black"
    />
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Projects',
})
</script>
