<template>
 
  <ul class="space-y-8">

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
        icon="ph:caret-right"
        active
        :ui="{ base: 'p-0', trailingIcon: 'size-4' }"
      />
      
    </li>

  </ul>
    
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData(
  'recent-projects',
  () => queryCollection('projects')
    .select('title', 'description', 'url', 'thumbnail', 'id')
    .limit(2)
    .order('id', 'DESC')
    .all(),
)
</script>
