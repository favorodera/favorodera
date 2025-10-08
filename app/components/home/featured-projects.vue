<template>
 
  <ol class="space-y-4">

    <li
      v-for="project, index in projects"
      :key="index"
    >

      <AppProjectCard
        :project="project"
      />

    </li>

    <li class="mt-4 flex items-center justify-center ">

      <UButton
        label="All Projects"
        to="/projects"
        color="neutral"
        variant="link"
        trailing
        icon="ph:arrow-right"
        active
        :ui="{ trailingIcon: 'size-4' }"
      />
    </li>
     

  </ol>
    
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData(
  'recent-projects',
  () => queryCollection('projects')
    .select('title', 'description', 'url', 'thumbnail')
    .limit(2)
    .all(),
)
</script>
