<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type BreadcrumbLinkProps, breadcrumbVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbLinkProps>(), {
  as: 'a',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { link } = breadcrumbVariants()

const classNames = computed(() => link({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="breadcrumb-link"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
