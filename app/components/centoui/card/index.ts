import type { PrimitiveProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const cardVariants = tv({
  slots: {
    description: 'text-sm text-muted-foreground group/card-description',
    footer: `flex gap-2 p-4 -mx-4 -mbe-4 bg-muted/50 group/card-footer`,
    header: `flex flex-col gap-1 px-4 pbs-4 -mx-4 -mbs-4 group/card-header`,
    root: `
      flex flex-col gap-4 overflow-hidden rounded-xl border bg-elevated p-4
      group/card-root

      *:data-[slot=separator]:data-[orientation=horizontal]:-mx-4
    `,
    title: 'text-base font-semibold group/card-title',
  },
})

// COMPONENTS
export { default as CardDescription } from './card-description.vue'
export { default as CardFooter } from './card-footer.vue'
export { default as CardHeader } from './card-header.vue'
export { default as CardRoot } from './card-root.vue'
export { default as CardTitle } from './card-title.vue'

// PROPS
export type CardRootProps = PrimitiveProps & { class?: any }

export type CardHeaderProps = PrimitiveProps & { class?: any }

export type CardTitleProps = PrimitiveProps & { class?: any }

export type CardDescriptionProps = PrimitiveProps & { class?: any }

export type CardFooterProps = PrimitiveProps & { class?: any }
