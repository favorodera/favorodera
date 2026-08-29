<script setup lang="ts">
import { stagger } from 'motion-v'

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
    :in-view-options="{ once: true, margin: '-20px 0px 0px 0px' }"
  >
    <h2
      :id="props.id"
      class="
        flex-none font-mono text-[10px] tracking-[0.18em] text-muted-foreground
        uppercase
      "
    >
      <span
        class="block overflow-hidden"
      >
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

    <Motion
      as="div"
      aria-hidden="true"
      class="flex-1 origin-left bg-border block-px"
      :variants="{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: motion.ease },
      }"
    />

    <Motion
      v-if="slots.trailing"
      as="span"
      :variants="{
        hidden: { y: '115%' },
        visible: { y: '0%', transition: motion.ease },
      }"
      class="
        flex-none font-mono text-[10px] tracking-[0.18em] text-muted-foreground
        uppercase
      "
    >
      <slot name="trailing" />
    </Motion>
  </Motion>
</template>
