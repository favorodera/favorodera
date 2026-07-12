<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { type AccordionRootEmits, type AccordionRootProps, type AccordionRootSlots, accordionVariants } from '.'

defineSlots<AccordionRootSlots>()

const emits = defineEmits<AccordionRootEmits>()

const props = defineProps<AccordionRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root } = accordionVariants()

const classNames = computed(() => root({
  class: props.class,
}))
</script>

<template>
  <AccordionRoot
    v-slot="slotProps"
    data-slot="accordion-root"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </AccordionRoot>
</template>
