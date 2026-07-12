import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const itemVariants = tv({
  defaultVariants: {
    variant: 'ghost',
  },
  slots: {
    content: `
      flex-1 min-inline-0 flex flex-col gap-1 text-sm group/item-content
    `,
    description: `
      font-normal text-sm text-muted-foreground group/item-description

      **:[a]:transition-[color] **:[a]:underline **:[a]:underline-offset-4

      **:[a]:hover:text-primary
    `,
    group: 'group/item-group flex inline-full flex-col gap-3',
    media: `
      flex shrink-0 items-center justify-center gap-2 bg-transparent
      group/item-media

      group-has-data-[slot=item-description]/item-root:self-start
    `,
    root: `
      flex inline-full flex-wrap items-center rounded-lg border p-3 gap-3
      border-transparent group/item-root outline-none

      focus-visible:ring-2 focus-visible:ring-ring

      [a]:transition-colors

      [a]:hover:bg-muted
    `,
    title: `
      font-medium text-sm line-clamp-1 inline-fit group/item-title

      **:[a]:transition-[color] **:[a]:underline **:[a]:underline-offset-4

      **:[a]:hover:text-primary
    `,
  },
  variants: {
    mediaVariant: {
      icon: {
        media: `
          translate-y-0.5

          **:data-[slot=icon]:inline-4.5 **:data-[slot=icon]:block-4.5
        `,
      },
      image: {
        media: `
          block-10 inline-10 overflow-hidden rounded-sm bg-muted/50

          **:[img]:block-full **:[img]:inline-full **:[img]:object-cover
        `,
      },
    },
    variant: {
      elevated: {
        root: 'bg-elevated',
      },
      ghost: {
        root: 'bg-transparent',
      },
      outline: {
        root: 'bg-transparent border-border',
      },
    },
  },
})

// COMPONENTS
export { default as ItemContent } from './item-content.vue'
export { default as ItemDescription } from './item-description.vue'
export { default as ItemGroup } from './item-group.vue'
export { default as ItemMedia } from './item-media.vue'
export { default as ItemRoot } from './item-root.vue'
export { default as ItemTitle } from './item-title.vue'

// CONTEXT
export type ItemRootContext = Pick<ItemRootProps, 'variant'>

export const [
  injectRootContext,
  provideRootContext,
] = createContext<ItemRootContext>('ItemRoot', 'centoui:item-root:context')

// VARIANTS
export type ItemVariants = VariantProps<typeof itemVariants>

// PROPS
export type ItemRootProps = PrimitiveProps & {
  class?: any

  /**
   * Visual style variant.
   * @default 'ghost'
   */
  variant?: ItemVariants['variant']
}

export type ItemContentProps = PrimitiveProps & { class?: any }

export type ItemDescriptionProps = PrimitiveProps & { class?: any }

export type ItemTitleProps = PrimitiveProps & { class?: any }

export type ItemMediaProps = PrimitiveProps & {
  class?: any

  /** Visual style variant. */
  variant?: ItemVariants['mediaVariant']
}

export type ItemGroupProps = PrimitiveProps & { class?: any }
