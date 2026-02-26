<script setup lang="ts">
const { data: page } = await useAsyncData('projectsMd', () => queryCollection('projectsMd').first())
</script>

<template>

  <ContentRenderer
    v-if="page"
    :value="page"
    tag="section"
    class="w-full max-w-3xl"
    aria-label="index page"
  />

  <Empty
    v-else
    title="404"
    description="Page not found"
    :actions="[
      {
        label: 'Go back home',
        onClick: () => navigateTo('/'),
      },
      {
        label: 'Refresh page',
        onClick: () => reloadNuxtApp(),
      },
    ]"
  />

</template>
