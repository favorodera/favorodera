<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CollapsibleContent, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import {
  type CollapsibleContentEmits,
  type CollapsibleContentProps,
  collapsibleVariants,
} from '.'

const emits = defineEmits<CollapsibleContentEmits>()

const props = defineProps<CollapsibleContentProps>()

const delegatedProps = reactiveOmit(props, 'class')

// Note: emits as any is used to avoid type instantiation issues
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits as any)

const { content } = collapsibleVariants()

const classNames = computed(() => content({
  class: props.class,
}))
</script>

<template>
  <CollapsibleContent
    data-slot="collapsible-content"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot />
  </CollapsibleContent>
</template>
