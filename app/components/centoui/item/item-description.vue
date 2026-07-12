<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  injectRootContext,
  type ItemDescriptionProps,
  itemVariants,
} from '.'

const props = withDefaults(defineProps<ItemDescriptionProps>(), {
  as: 'p',
})

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { description } = itemVariants()

const classNames = computed(() => description({
  class: props.class,
  variant: rootContext?.variant,
}))
</script>

<template>
  <Primitive
    data-slot="item-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
