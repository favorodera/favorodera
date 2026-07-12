<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CollapsibleTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type CollapsibleTriggerProps,
  collapsibleVariants,
} from '.'

const props = defineProps<CollapsibleTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { trigger } = collapsibleVariants()

const classNames = computed(() => trigger({
  class: props.class,
}))
</script>

<template>
  <CollapsibleTrigger
    data-slot="collapsible-trigger"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </CollapsibleTrigger>
</template>
