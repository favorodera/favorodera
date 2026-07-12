<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { type ItemRootProps, itemVariants, provideRootContext } from '.'

const props = withDefaults(defineProps<ItemRootProps>(), {
  variant: 'ghost',
})

const delegatedProps = reactiveOmit(props, 'variant', 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = itemVariants()

const classNames = computed(() => root({
  class: props.class,
  variant: props.variant,
}))

provideRootContext(reactive({
  variant: toRef(props, 'variant'),
}))
</script>

<template>
  <Primitive
    data-slot="item-root"
    :class="classNames"
    :data-variant="variant"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>
