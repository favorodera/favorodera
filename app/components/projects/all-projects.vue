<template>
  
  <ol class="space-y-4">

    <li
      v-for="project, index in projects"
      :key="index"
    >

      <Project :project="project" />

    </li>

  </ol>

</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData(
  'recent-projects',
  () => queryCollection('projects').all(),
)
</script>
