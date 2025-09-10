<template>
  <PageSection title="About">
    <p class="text-sm">
      {{ about }}
    </p>
  </PageSection>
</template>

<script setup lang="ts">
defineProps<{ about: string }>()
</script>
