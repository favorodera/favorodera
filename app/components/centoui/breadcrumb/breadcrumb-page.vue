<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type BreadcrumbPageProps, breadcrumbVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbPageProps>(), {
  as: 'span',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { page } = breadcrumbVariants()

const classNames = computed(() => page({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="breadcrumb-page"
    v-bind="forwardedProps"
    :class="classNames"
    role="link"
    aria-disabled="true"
    aria-current="page"
  >
    <slot />
  </Primitive>
</template>
