<script setup lang="ts">
const { data: page } = await useAsyncData('home', () => queryCollection('home').first())
</script>

<template>

  <ContentRenderer
    v-if="page"
    :value="page"
    tag="section"
    class="w-full max-w-3xl"
    
  />

  <Empty
    v-else
    title="404"
    description="Page not found"
    :actions="[
      {
        label: 'Refresh page',
        onClick: () => reloadNuxtApp(),
      },
    ]"
  />

</template>
