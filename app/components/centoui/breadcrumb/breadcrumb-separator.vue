<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import { type BreadcrumbSeparatorProps, breadcrumbVariants } from '.'
import { Icon } from '../icon'

const props = defineProps<BreadcrumbSeparatorProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { separator } = breadcrumbVariants()

const classNames = computed(() => separator({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="breadcrumb-separator"
    v-bind="forwardedProps"
    :class="classNames"
    role="presentation"
    aria-hidden="true"
  >
    <slot>
      <Icon :name="config.icons.chevronRight" />
    </slot>
  </Primitive>
</template>
