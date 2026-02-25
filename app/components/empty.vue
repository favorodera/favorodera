<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  actions?: {
    label: string
    onClick: () => void
  }[]
}>()
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div v-if="actions">
      <button
        v-for="action in actions"
        :key="action.label"
        @click="action.onClick"
      >
        {{ action.label }}
      </button>
    </div>
  </div>
</template>
