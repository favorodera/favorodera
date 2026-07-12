<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type CardHeaderProps,
  cardVariants,
} from '.'

const props = defineProps<CardHeaderProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { header } = cardVariants()

const classNames = computed(() => header({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="card-header"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
