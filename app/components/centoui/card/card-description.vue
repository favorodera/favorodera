<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type CardDescriptionProps,
  cardVariants,
} from '.'

const props = withDefaults(defineProps<CardDescriptionProps>(), {
  as: 'p',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { description } = cardVariants()

const classNames = computed(() => description({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="card-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
