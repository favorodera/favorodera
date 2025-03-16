<template>

  
  <main class="w-full flex-auto space-y-10">

    <ContentRenderer
      v-if="page"
      :value="page"
      tag="section"
    />

  </main>
  
  
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useLazyAsyncData(
  'home-page',
  () => queryCollection('content')
    .path(route.path)
    .first(),
)
</script>
