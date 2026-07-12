<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type BreadcrumbListProps, breadcrumbVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbListProps>(), {
  as: 'ol',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { list } = breadcrumbVariants()

const classNames = computed(() => list({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="breadcrumb-list"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
