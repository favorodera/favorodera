<script setup lang="ts">
const theme = useTheme()
const motion = motionUtils()
</script>

<template>
  <button
    type="button"
    :aria-label="theme.ariaLabel.value"
    class="
      group flex items-center gap-1 rounded-full border p-1 outline-none

      hover:text-foreground

      focus-visible:ring-1 focus-visible:ring-ring
    "
    @click="(event) => theme.toggle({ x: event.clientX, y: event.clientY })"
  >
    <!-- Theme indicator -->
    <span
      aria-hidden="true"
      class="
        relative overflow-hidden rounded-full block-4 inline-4

        group-hover:scale-110
      "
      :style="{
        transitionDuration: `${motion.DURATION * 1000}ms`,
        transitionTimingFunction: `cubic-bezier(${motion.EASE.join(', ')})`,
      }"
    >
      <AnimatePresence mode="wait">
        <Motion
          :key="theme.value.value"
          :initial="{ x: '-100%' }"
          :animate="{ x: '0%', transition: motion.ease }"
          as="span"
          class="absolute inset-0 bg-foreground"
        />
      </AnimatePresence>
    </span>
  </button>
</template>
