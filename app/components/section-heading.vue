<script setup lang="ts">
const slots = defineSlots<{
  trailing: () => void
}>()

const props = defineProps<{
  id: string
  index: string
  title: string
}>()

const motion = motionUtils()
</script>

<template>
  <div class="flex items-center gap-4">
    <h2
      :id="props.id"
      class="
        flex-none font-mono text-[10px] tracking-[0.18em] text-muted-foreground
        uppercase
      "
    >
      <MotionMaskLine>
        <span aria-hidden="true">{{ index }} / </span>
        {{ title }}
      </MotionMaskLine>
    </h2>

    <MotionHairLine class="flex-1" />

    <Motion
      v-if="slots.trailing"
      :variants="motion.fadeVariants"
      as="span"
      initial="hidden"
      animate="visible"
      class="
        flex-none font-mono text-[10px] tracking-[0.18em] text-muted-foreground
        uppercase
      "
    >
      <slot name="trailing" />
    </Motion>
  </div>
</template>
