<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type BreadcrumbRootProps, breadcrumbVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbRootProps>(), {
  as: 'nav',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = breadcrumbVariants()

const classNames = computed(() => root({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="breadcrumb-root"
    v-bind="forwardedProps"
    :class="classNames"
    aria-label="breadcrumb"
  >
    <slot />
  </Primitive>
</template>
