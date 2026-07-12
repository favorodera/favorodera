import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  defaultVariants: {
    size: 'md',
    square: false,
    variant: 'primary',
  },
  slots: {
    root: `
      relative inline-flex items-center shrink-0 cursor-default truncate border
      border-transparent font-medium outline-none select-none justify-center
      transition-all group/button

      disabled:pointer-events-none disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error

      active:not-aria-[haspopup]:not-data-spin-button:translate-y-px

      focus-visible:ring-2 focus-visible:ring-ring
    `,
  },
  variants: {
    size: {
      '2xs': {
        root: `
          min-block-5 inline-5 px-1 text-xs gap-1 rounded-sm

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
      },
      'lg': {
        root: `
          min-block-9 inline-9 px-3 text-sm gap-1.5 rounded-lg

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
      },
      'md': {
        root: `
          min-block-8 inline-8 px-2.5 text-sm gap-1.5 rounded-lg

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
      },
      'sm': {
        root: `
          min-block-7 inline-7 px-2 text-xs gap-1 rounded-md

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
      },
      'xs': {
        root: `
          min-block-6 inline-6 px-1.5 text-xs gap-1 rounded-md

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
      },
    },
    square: {
      false: {
        root: 'inline-auto',
      },
      true: {
        root: 'px-0',
      },
    },
    variant: {
      error: {
        root: `
          bg-error text-error-foreground

          hover:bg-error/80
        `,
      },
      ghost: {
        root: `
          bg-transparent text-foreground

          hover:bg-muted
        `,
      },
      link: {
        root: `
          px-0 text-primary underline-offset-4

          hover:underline
        `,
      },
      outline: {
        root: `
          border-border bg-transparent text-foreground

          hover:bg-muted
        `,
      },
      primary: {
        root: `
          bg-primary text-primary-foreground

          hover:bg-primary/80
        `,
      },
      secondary: {
        root: `
          bg-secondary text-secondary-foreground

          hover:bg-secondary/80
        `,
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

  /**
   * Render the button with equal dimensions.
   * @default false
   */
  square?: boolean
}
