<template>

  
  <ContentRenderer
    v-if="page"
    :value="page"
    tag="main"
  />
  
  
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
