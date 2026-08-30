<script setup lang="ts">
const motion = motionUtils()

const inViewOptions = { margin: '-10% 0px -10% 0px', once: true } as const
</script>

<template>
  <footer
    class="
      mx-auto px-6 pbs-24 pbe-20 inline-full max-inline-2xl

      sm:px-8 sm:pbs-32
    "
  >
    <Motion
      as="div"
      initial="hidden"
      while-in-view="visible"
      :in-view-options
      aria-hidden="true"
      class="flex-1 origin-left bg-border block-px"
      :variants="{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: motion.ease },
      }"
    />

    <Motion
      initial="hidden"
      while-in-view="visible"
      as="span"
      :in-view-options
      class="
        ms-auto block pbs-5 font-mono text-[10px] tracking-[0.18em]
        text-muted-foreground uppercase inline-fit
      "
      :variants="{
        hidden: { opacity: 0, y: 16 },
        visible: (index:number) => ({
          opacity: 1,
          transition:motion.ease,
          y: 0,
        })
      }"
    >
      COPYRIGHT 2024 - {{ new Date().getFullYear() }}
    </Motion>
  </footer>
</template>
