<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CollapsibleRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import {
  type CollapsibleRootEmits,
  type CollapsibleRootProps,
  type CollapsibleRootSlots,
  collapsibleVariants,
} from '.'

defineSlots<CollapsibleRootSlots>()

const emits = defineEmits<CollapsibleRootEmits>()

const props = defineProps<CollapsibleRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root } = collapsibleVariants()

const classNames = computed(() => root({
  class: props.class,
}))
</script>

<template>
  <CollapsibleRoot
    v-slot="slotProps"
    data-slot="collapsible-root"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </CollapsibleRoot>
</template>
