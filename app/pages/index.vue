<script setup lang="ts">
const { state } = useQuery({
  key: ['home'],
  query: async () => queryCollection('home').first(),
})
</script>

<template>

  <ContentRenderer
    v-if="state.data"
    :value="state.data"
    tag="section"
  />

  <Empty
    v-else
    title="No home page found"
    description="No home page found"
    icon="i-lucide-home"
  />

</template>
