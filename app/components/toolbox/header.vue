<template>
  <h2
    class="flex items-center gap-4"
  >
    <span
      class="min-w-fit text-sm font-medium text-muted"
    >
      {{ title }}
    </span>

    <USeparator
      :ui="{ root: 'flex-1' }"
    />
  </h2>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
