<script setup lang="ts">
const motion = motionUtils()
</script>

<template>
  <span class="mbe-[-0.14em] block overflow-hidden pbe-[0.14em]">
    <Motion
      as="span"
      :variants="motion.maskLineVariants"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motion.IN_VIEW_OPTIONS"
      class="block"
    >
      <slot />
    </Motion>
  </span>
</template>