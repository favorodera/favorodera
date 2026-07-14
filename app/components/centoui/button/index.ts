import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      relative inline-flex items-center shrink-0 cursor-pointer border
      border-transparent font-normal outline-none select-none justify-center
      transition-all group/button duration-300 text-primary underline-offset-4
      min-block-auto decoration-1 uppercase

      active:not-aria-[haspopup]:not-data-spin-button:translate-y-px

      focus-visible:ring-2 focus-visible:ring-ring
    `,
  },
  variants: {
    size: {
      md: {
        root: `text-sm`,
      },
      sm: {
        root: `text-xs`,
      },
    },
    variant: {
      link: {
        root: `hover:underline`,
      },
    },
  },
})

// COMPONENT
export { default as Button } from './button.vue'

// VARIANTS
export type ButtonVariants = VariantProps<typeof buttonVariants>

// PROPS
export type ButtonProps = PrimitiveProps & {
  /**
   * Visual style variant.
   * @default 'primary'
   */
  variant?: ButtonVariants['variant']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: ButtonVariants['size']

  class?: any
}
