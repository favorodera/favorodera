<template>

  <section class="space-y-4">

    <h2>
      Latest Projects
    </h2>

    <ContentUtilsProject :projects />

  </section>

</template>

<script setup lang="ts">
const { data: projects } = await useLazyAsyncData(
  'latest-projects',
  () => queryCollection('projects').order('stem', 'DESC').limit(2).all(),
)
</script>
