<script setup lang="ts">
const theme = useTheme()
</script>

<template>
  <button
    type="button"
    :aria-label="theme.ariaLabel.value"
    class="
      group flex items-center gap-1 rounded-full border p-1 transition-colors
      duration-300 outline-none

      hover:text-foreground

      focus-visible:ring-1 focus-visible:ring-ring
    "
    @click="(event) => theme.toggle({ x: event.clientX, y: event.clientY })"
  >
    <!-- Theme indicator -->
    <span
      aria-hidden="true"
      class="
        relative overflow-hidden rounded-full border transition-transform
        duration-300 ease-out block-4 inline-4

        group-hover:scale-110
      "
    >
      <AnimatePresence mode="wait">
        <Motion
          :key="theme.label.value"
          :initial="{
            x: '-100%',
          }"
          :animate="{
            x: '0%',
            transition: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
          }"
          :exit="{
            x: '100%',
            transition: {
              duration: 0.35,
              ease: [0.32, 0, 0.67, 0],
            },
          }"
          as="span"
          class="absolute inset-0 bg-foreground"
        />
      </AnimatePresence>
    </span>

    <!-- Theme label -->
    <span
      class="
        relative transition-colors duration-300 min-inline-[42px]
        perspective-[600px]

        group-hover:text-foreground
      "
      style="perspective: 600px;"
    >
      <AnimatePresence mode="wait">
        <Motion
          :key="theme.label.value"
          :initial="{
            rotateX: -90,
            y: '100%',
            opacity: 0,
            filter: 'blur(4px)',
          }"
          :animate="{
            rotateX: 0,
            y: '0%',
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
          }"
          :exit="{
            rotateX: 90,
            y: '-100%',
            opacity: 0,
            filter: 'blur(4px)',
            transition: {
              duration: 0.35,
              ease: [0.32, 0, 0.67, 0],
            },
          }"
          :style="{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            transformOrigin: 'center',
          }"
          as="span"
          class="
            block text-center font-mono text-[10px] tracking-[0.18em] uppercase
            will-change-transform
          "
        >
          {{ theme.label.value }}
        </Motion>
      </AnimatePresence>
    </span>
  </button>
</template>
