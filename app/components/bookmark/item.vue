<template>
  
  <ULink
    target="_black"
    :to="url"
    external
    active
    class="group flex flex-col justify-between gap-x-8 gap-y-2 rounded-md p-2 transition-all hover:bg-muted/50"
    :title="url"
  >

    <h2 class="line-clamp-1 min-w-0 truncate font-medium tracking-tight group-hover:text-secondary ">
      {{ title }}
    </h2>

    <span class="line-clamp-2 text-xs text-muted">
      {{ description }}
    </span>

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
