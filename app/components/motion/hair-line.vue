<script setup lang="ts">
const motion = motionUtils()
</script>

<template>
  <Motion
    aria-hidden="true"
    as="span"
    :variants="motion.hairlineVariants"
    initial="hidden"
    while-in-view="visible"
    :in-view-options="motion.IN_VIEW_OPTIONS"
    class="block origin-left bg-border block-px inline-full"
  />
</template>