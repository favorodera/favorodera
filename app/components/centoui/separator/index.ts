import type { SeparatorProps as RekaSeparatorProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const separatorVariants = tv({
  defaultVariants: {
    orientation: 'horizontal',
  },
  slots: {
    content: `
      shrink-0 text-center text-xs text-muted-foreground group/separator-content
    `,
    line: 'flex-1 border-border group/separator-line',
    root: 'flex items-center gap-2 group/separator-root',
  },
  variants: {
    orientation: {
      horizontal: {
        line: 'border-bs',
        root: 'min-inline-full',
      },
      vertical: {
        line: 'border-s',
        root: 'flex-col self-stretch min-block-full',
      },
    },
  },
})

// COMPONENT
export { default as Separator } from './separator.vue'

// PROPS
export type SeparatorProps = RekaSeparatorProps & { class?: any }
