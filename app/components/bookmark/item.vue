<template>
  
  <ULink
    target="_black"
    :to="url"
    external
    active
    class="flex items-center gap-4 rounded-md p-2 transition-all hover:bg-muted/50"
    :title="description"
  >

    <div class="flex aspect-square w-10 items-center justify-center rounded-md border border-dashed border-default p-1">

      <NuxtImg
        :src="getThumbnail(url).dark"
        :alt="title"
        fit="cover"
        loading="lazy"
        class="rounded-sm"
        width="100"
        height="100"
      />

    </div>

    <h3>
      {{ title }}
    </h3>

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
