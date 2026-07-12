<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type BreadcrumbItemProps, breadcrumbVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
  as: 'li',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { item } = breadcrumbVariants()

const classNames = computed(() => item({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="breadcrumb-item"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
