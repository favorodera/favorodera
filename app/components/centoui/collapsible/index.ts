import type {
  CollapsibleContentEmits as RekaCollapsibleContentEmits,
  CollapsibleContentProps as RekaCollapsibleContentProps,
  CollapsibleRootEmits as RekaCollapsibleRootEmits,
  CollapsibleRootProps as RekaCollapsibleRootProps,
  CollapsibleTriggerProps as RekaCollapsibleTriggerProps,
} from 'reka-ui'
import { tv } from 'tailwind-variants'

export const collapsibleVariants = tv({
  slots: {
    content: `
      overflow-hidden group/collapsible-content

      data-[state=closed]:animate-collapsible-up

      data-[state=open]:animate-collapsible-down
    `,
    root: 'group/collapsible-root',
    trigger: 'group/collapsible-trigger',
  },
})

// COMPONENTS
export { default as CollapsibleContent } from './collapsible-content.vue'
export { default as CollapsibleRoot } from './collapsible-root.vue'
export { default as CollapsibleTrigger } from './collapsible-trigger.vue'

// PROPS
export type CollapsibleRootProps = RekaCollapsibleRootProps & { class?: any }

export type CollapsibleTriggerProps = RekaCollapsibleTriggerProps & { class?: any }

export type CollapsibleContentProps = RekaCollapsibleContentProps & { class?: any }

// EMITS
export type CollapsibleRootEmits = RekaCollapsibleRootEmits

export type CollapsibleContentEmits = RekaCollapsibleContentEmits

// SLOTS
export interface CollapsibleRootSlots {
  default?: (props: {
    /** Current open state */
    open: boolean
  }) => any
}
