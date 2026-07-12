<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type AccordionItemProps, type AccordionItemSlots, accordionVariants } from '.'

defineSlots<AccordionItemSlots>()

const props = defineProps<AccordionItemProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { item } = accordionVariants()

const classNames = computed(() => item({
  class: props.class,
}))
</script>

<template>
  <AccordionItem
    v-slot="slotProps"
    data-slot="accordion-item"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </AccordionItem>
</template>
