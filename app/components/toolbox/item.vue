<template>
  

  <div
    class="flex gap-4"
    :class="description ? 'items-start' : 'items-center'"
  >

    <div class="flex aspect-square w-10 items-center justify-center rounded-md border border-dashed border-default p-1">

      <UIcon
        :name="icon || 'ph:toolbox-duotone'"
        mode="css"
        class="size-full shrink-0"
      />

    </div>


    <div class="flex flex-col gap-1">

      <ULink
        target="_black"
        :to="url"
        external
        active
      >
        <h3 class="text-sm font-medium">
          {{ name }}
        </h3>
      </ULink>

      <p
        v-if="description"
        class="text-xs text-muted"
      >
        {{ description }}
      </p>

    </div>


  </div>


</template>

<script setup lang="ts">
defineProps<{
  name: string
  description?: string
  icon?: string
  url?: string
}>()
</script>

<style scoped>

</style>
