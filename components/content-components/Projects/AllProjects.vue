<template>

  <section class="w-full flex flex-auto flex-col gap-4">

    <input
      id="project-search"
      type="text"
      name="project-search"
      placeholder="Enter Tags or Name"
      class="w-full border border-brand-textGray rounded-md border-solid bg-transparent px-2 py-1 text-[clamp(1rem,1.8vw,1.25rem)] text-brand-textGray outline-none"
    >

    <ContentUtilsProject :projects />

  </section>

</template>

<script setup lang="ts">
const { data: projects } = await useLazyAsyncData(
  'all-projects',
  () => queryCollection('projects').order('stem', 'DESC').all(),
)
</script>

<style scoped lang="css">

</style>
