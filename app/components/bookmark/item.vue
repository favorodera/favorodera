<template>
  
  <ULink
    target="_black"
    :to="url"
    external
    active
    class="flex flex-col justify-between gap-x-4 gap-y-2 rounded-md p-2 transition-all hover:bg-muted/50 sm:flex-row sm:items-center"
    :title="description"
  >

    <h3 class="line-clamp-1 flex-1">
      {{ title }}
    </h3>

    <span class="line-clamp-1 text-xs text-muted">{{ url }}</span>

  </ULink>


</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  url: string
}>()
</script>

<style scoped>

</style>
