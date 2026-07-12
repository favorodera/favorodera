<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import { type BreadcrumbEllipsisProps, breadcrumbVariants } from '.'
import { Icon } from '../icon'

const props = defineProps<BreadcrumbEllipsisProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { ellipsis } = breadcrumbVariants()

const classNames = computed(() => ellipsis({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="breadcrumb-ellipsis"
    v-bind="forwardedProps"
    :class="classNames"
    role="presentation"
    aria-hidden="true"
  >
    <slot>
      <Icon :name="config.icons.ellipsis" />
    </slot>
  </Primitive>
</template>
