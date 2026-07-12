<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type CardTitleProps,
  cardVariants,
} from '.'

const props = withDefaults(defineProps<CardTitleProps>(), {
  as: 'h3',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { title } = cardVariants()

const classNames = computed(() => title({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="card-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
