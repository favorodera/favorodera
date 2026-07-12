import type { PrimitiveProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const breadcrumbVariants = tv({
  slots: {
    ellipsis: `
      inline-flex items-center justify-center gap-2 text-muted-foreground
      group/breadcrumb-ellipsis
    `,
    item: 'inline-flex min-inline-0 gap-2 group/breadcrumb-item',
    link: `
      inline-flex min-inline-0 items-center gap-2 text-muted-foreground
      transition-colors outline-none group/breadcrumb-link

      hover:text-foreground

      focus-visible:ring-2 focus-visible:ring-ring
    `,
    list: 'flex items-center gap-3 text-xs group/breadcrumb-list uppercase',
    page: 'flex items-center gap-2 text-foreground group/breadcrumb-page',
    root: 'relative min-inline-0 group/breadcrumb-root',
    separator: `
      flex items-center justify-center gap-2 text-muted-foreground
      group/breadcrumb-separator
    `,
  },
})

// COMPONENTS
export { default as BreadcrumbEllipsis } from './breadcrumb-ellipsis.vue'
export { default as BreadcrumbItem } from './breadcrumb-item.vue'
export { default as BreadcrumbLink } from './breadcrumb-link.vue'
export { default as BreadcrumbList } from './breadcrumb-list.vue'
export { default as BreadcrumbPage } from './breadcrumb-page.vue'
export { default as BreadcrumbRoot } from './breadcrumb-root.vue'
export { default as BreadcrumbSeparator } from './breadcrumb-separator.vue'

// PROPS
export type BreadcrumbRootProps = PrimitiveProps & { class?: any }

export type BreadcrumbListProps = PrimitiveProps & { class?: any }

export type BreadcrumbItemProps = PrimitiveProps & { class?: any }

export type BreadcrumbLinkProps = PrimitiveProps & { class?: any }

export type BreadcrumbPageProps = PrimitiveProps & { class?: any }

export type BreadcrumbSeparatorProps = PrimitiveProps & { class?: any }

export type BreadcrumbEllipsisProps = PrimitiveProps & { class?: any }
