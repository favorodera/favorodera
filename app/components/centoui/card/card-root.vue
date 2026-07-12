<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type CardRootProps,
  cardVariants,
} from '.'

const props = defineProps<CardRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = cardVariants()

const classNames = computed(() => root({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="card-root"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
