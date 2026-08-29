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
        relative overflow-hidden rounded-full border block-4 inline-4

        group-hover:scale-110
      "
    >
      <AnimatePresence mode="wait">
        <Motion
          :key="theme.label.value"
          :initial="{ x: '-100%' }"
          :animate="{ x: '0%', transition: motion.ease }"
          as="span"
          class="absolute inset-0 bg-foreground"
        />
      </AnimatePresence>
    </span>

    <!-- Theme label -->
    <span
      class="
        relative min-inline-[42px]

        group-hover:text-foreground
      "
    >
      <AnimatePresence mode="wait">
        <Motion
          :key="theme.label.value"
          :initial="{
            y: '100%',
            opacity: 0,
          }"
          :animate="{
            y: '0%',
            opacity: 1,
            transition: motion.ease,
          }"
          as="span"
          class="
            block text-center font-mono text-[10px] tracking-[0.18em] uppercase
          "
        >
          {{ theme.label.value }}
        </Motion>
      </AnimatePresence>
    </span>
  </button>
</template>
