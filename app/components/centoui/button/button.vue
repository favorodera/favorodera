<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type ButtonProps, buttonVariants } from '.'

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size','variant')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = buttonVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
  variant: props.variant,
}))
</script>

<template>
  <Primitive
    data-slot="button"
    :data-variant="variant"
    :data-size="size"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
