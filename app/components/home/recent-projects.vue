<template>
  
  <ol class="space-y-4">

    <li
      v-for="project, index in projects"
      :key="index"
    >

      <Project :project="project" />

    </li>

    <li class="flex justify-end">
      <ProseA
        to="/projects"
        class="flex items-center gap-2 font-sofia text-sm font-light"
      >
        View More

        <UIcon
          name="ph:arrow-right-light"
          class="size-4"
        />
      </ProseA>
    </li>

  </ol>

</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData(
  'recent-projects',
  () => queryCollection('projects').limit(2).all(),
)
</script>
