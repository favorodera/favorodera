import type {
  AcceptableValue,
  AccordionContentProps as RekaAccordionContentProps,
  AccordionHeaderProps as RekaAccordionHeaderProps,
  AccordionItemProps as RekaAccordionItemProps,
  AccordionRootEmits as RekaAccordionRootEmits,
  AccordionRootProps as RekaAccordionRootProps,
  AccordionTriggerProps as RekaAccordionTriggerProps,
} from 'reka-ui'
import { tv } from 'tailwind-variants'

export const accordionVariants = tv({
  slots: {
    content: `
      overflow-hidden text-sm pbe-2 grid gap-2 group/accordion-content

      data-[state=closed]:animate-accordion-up

      data-[state=open]:animate-accordion-down
    `,
    item: 'inline-full font-normal group/accordion-item',
    root: 'inline-full group/accordion-root',
    trigger: `
      flex inline-full cursor-default items-center justify-between py-4
      group/accordion-trigger text-start text-sm font-medium outline-none

      focus-visible:ring-2 focus-visible:ring-ring

      data-disabled:pointer-events-none data-disabled:opacity-65
    `,
  },
})

// COMPONENTS
export { default as AccordionContent } from './accordion-content.vue'
export { default as AccordionItem } from './accordion-item.vue'
export { default as AccordionRoot } from './accordion-root.vue'
export { default as AccordionTrigger } from './accordion-trigger.vue'

// PROPS
export type AccordionRootProps = RekaAccordionRootProps & { class?: any }

export type AccordionItemProps = RekaAccordionItemProps & { class?: any }

export type AccordionHeaderProps = RekaAccordionHeaderProps & { class?: any }

export type AccordionTriggerProps = RekaAccordionTriggerProps & { class?: any }

export type AccordionContentProps = RekaAccordionContentProps & { class?: any }

// EMITS
export type AccordionRootEmits = RekaAccordionRootEmits

// SLOTS
export interface AccordionRootSlots {
  default?: (props: {
    /** Current active value of the accordion. */
    modelValue?: AcceptableValue | Array<AcceptableValue>
  }) => any
}

export interface AccordionItemSlots {
  default?: (props: {
    /** Current open state. */
    open: boolean
  }) => any
}
