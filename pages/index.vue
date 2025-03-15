<template>

  <main class="w-full flex flex-auto flex-col">
  
    <ContentRenderer
      v-if="page"
      :value="page"
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
