<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { tv } from 'tailwind-variants'
import { type HTMLAttributes, normalizeClass } from 'vue'

defineSlots<{ default: () => void }>()

const props = withDefaults(defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  iconOnly?: boolean
  variant?: 'outline' | 'text'
}>(), {
  as: 'button',
  class: undefined,
  iconOnly: false,
  variant: 'outline',
})

const button = tv({
  base: `
    inline-flex shrink-0 items-center justify-center whitespace-nowrap
    transition-[background-color,color,shadow]

    motion-reduce:transition-none

    [&_svg]:shrink-0
  `,
  variants: {
    variant: {
      outline: `
        gap-2 border border-border bg-clip-border p-2 text-sm font-medium
        block-7

        hover:bg-muted

        data-icon-only:block-7 data-icon-only:inline-7
      `,
      text: `
        underline underline-offset-4

        hover:text-muted-foreground
      `,
    },
  },
})
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :data-icon-only="props.iconOnly"
    :class="button({ class: normalizeClass(props.class), variant: props.variant })"
  >
    <slot />
  </Primitive>
</template>
