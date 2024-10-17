<template>
  <section class="w-full flex flex-col gap-y-2">
    <LazyProjectsDetailsHeader />
    <LazyProjectsProjectDetails />
  </section>
</template>

<script setup lang="ts">
const { name } = useRoute().params
useHead({
  title: String(name).slice(0, 1).toUpperCase() + String(name).slice(1),
})
</script>
