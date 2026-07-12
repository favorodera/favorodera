import { tv } from 'tailwind-variants'

export const iconVariants = tv({
  slots: {
    root: `pointer-events-none block-4 inline-4 shrink-0 align-middle`,
  },
})

// COMPONENT
export { default as Icon } from './icon.vue'

// PROPS
export interface IconProps {
  /**
   * The iconify or custom ID of the icon.
   * @see https://icon-sets.iconify.design/
   * @see https://iconify.design/docs/icon-components/vue/
   * @see https://github.com/nuxt/icon
   */
  name: string

  class?: any
}
