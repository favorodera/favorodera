<template>
  <section class="w-full flex flex-col items-center justify-between gap-y-10">
    <LazyProjectsHeader />
    <LazyProjectsGrid />
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Projects',
})
</script>
