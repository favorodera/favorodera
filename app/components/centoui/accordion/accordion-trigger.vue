<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AccordionHeader, AccordionTrigger, useForwardProps } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { type AccordionTriggerProps, accordionVariants } from '.'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<AccordionTriggerProps>()

const attributes = useAttrs()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { trigger } = accordionVariants()

const classNames = computed(() => trigger({
  class: props.class,
}))
</script>

<template>
  <AccordionHeader data-slot="accordion-header">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="{...attributes,...forwardedProps}"
      :class="classNames"
    >
      <slot />
    </AccordionTrigger>
  </AccordionHeader>
</template>
