<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type ItemGroupProps,
  itemVariants,
} from '.'

const props = defineProps<ItemGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { group } = itemVariants()

const classNames = computed(() => group({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="item-group"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
