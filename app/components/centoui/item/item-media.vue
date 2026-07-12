<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  injectRootContext,
  type ItemMediaProps,
  itemVariants,
} from '.'

const props = defineProps<ItemMediaProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { media } = itemVariants()

const classNames = computed(() => media({
  class: props.class,
  mediaVariant: props.variant,
  variant: rootContext?.variant,
}))
</script>

<template>
  <Primitive
    data-slot="item-media"
    v-bind="forwardedProps"
    :data-variant="variant"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
