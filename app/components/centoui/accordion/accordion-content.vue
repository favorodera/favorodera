<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionContent, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type AccordionContentProps, accordionVariants } from '.'

const props = defineProps<AccordionContentProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { content } = accordionVariants()

const classNames = computed(() => content({
  class: props.class,
}))
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AccordionContent>
</template>
