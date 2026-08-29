<script setup lang="ts">
import { Motion, stagger } from 'motion-v'

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
  <Motion
    as="div"
    class="flex items-center gap-4"
    :variants="{
      hidden: {},
      visible: {
        transition: { delayChildren: stagger(motion.STAGGER) },
      },
    }"
    initial="hidden"
    while-in-view="visible"
    :in-view-options="{ once: true, margin: '-10px 0px -10px 0px' }"
  >
    <!-- Left Hand: Index & Title -->
    <h2
      :id="props.id"
      class="
        flex-none font-mono text-[10px] tracking-[0.18em] text-muted-foreground
        uppercase
      "
    >
      <span class="block overflow-hidden">
        <Motion
          as="span"
          class="block"
          :variants="{
            hidden: { y: '115%' },
            visible: { y: '0%', transition: motion.ease },
          }"
        >
          <span aria-hidden="true">{{ index }} / </span>
          {{ title }}
        </Motion>
      </span>
    </h2>

    <!-- Center Line Layout Divider -->
    <Motion
      as="div"
      aria-hidden="true"
      class="flex-1 origin-left bg-border block-px"
      :variants="{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: motion.ease },
      }"
    />

    <!-- Right Hand Side: Animated Trailing Slot Content -->
    <span
      v-if="slots.trailing"
      class="block overflow-hidden"
    >
      <Motion
        as="span"
        class="
          block flex-none font-mono text-[10px] tracking-[0.18em]
          text-muted-foreground uppercase
        "
        :variants="{
          hidden: { y: '115%' },
          visible: { y: '0%', transition: motion.ease },
        }"
      >
        <slot name="trailing" />
      </Motion>
    </span>
  </Motion>
</template>
