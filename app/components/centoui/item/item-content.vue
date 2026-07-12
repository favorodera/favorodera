<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  injectRootContext,
  type ItemContentProps,
  itemVariants,
} from '.'

const props = defineProps<ItemContentProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { content } = itemVariants()

const classNames = computed(() => content({
  class: props.class,
  variant: rootContext?.variant,
}))
</script>

<template>
  <Primitive
    data-slot="item-content"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
