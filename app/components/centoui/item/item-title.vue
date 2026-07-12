<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  injectRootContext,
  type ItemTitleProps,
  itemVariants,
} from '.'

const props = defineProps<ItemTitleProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { title } = itemVariants()

const classNames = computed(() => title({
  class: props.class,
  variant: rootContext?.variant,
}))
</script>

<template>
  <Primitive
    data-slot="item-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
