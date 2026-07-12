<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Separator, useForwardProps } from 'reka-ui'
import { computed, useSlots } from 'vue'
import { type SeparatorProps, separatorVariants } from './index'

const props = defineProps<SeparatorProps>()

const slots = useSlots()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { content, line, root } = separatorVariants()
const classNames = computed(() => ({
  content: content({
    orientation: props.orientation,
  }),
  line: line({
    orientation: props.orientation,
  }),
  root: root({
    class: props.class,
    orientation: props.orientation,
  }),
}))
</script>

<template>
  <Separator
    data-slot="separator"
    v-bind="forwardedProps"
    :class="classNames.root"
  >
    <!-- When slot content is provided, render flanking lines around it. -->
    <template v-if="slots.default">
      <div
        :class="classNames.line"
        data-slot="separator-line-1"
      />

      <div
        :class="classNames.content"
        data-slot="separator-content"
      >
        <slot />
      </div>

      <div
        :class="classNames.line"
        data-slot="separator-line-2"
      />
    </template>

    <!-- No content — render a single line. -->
    <div
      v-else
      data-slot="separator-line"
      :class="classNames.line"
    />
  </Separator>
</template>
