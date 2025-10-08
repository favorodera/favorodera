<template>
  
  <component
    :is="as"
    :class="uiMerged.root"
    ui-key="root"
  >

    <slot>

      <div
        :class="uiMerged.header"
        ui-key="header"
      >

        <slot name="header">

          <slot name="media">

            <UBadge
              :class="uiMerged.iconContainer"
              :variant="media?.variant"
              :color="media?.color"
              ui-key="iconContainer"
            >
    
              <slot name="mediaIcon">

                <UIcon
                  v-if="media?.icon"
                  :name="media.icon"
                  :class="uiMerged.icon"
                  ui-key="icon"
                />

              </slot>
   
            </UBadge>

          </slot>
  
          <div
            :class="uiMerged.title"
            ui-key="title"
          >
            <slot name="title">
              {{ title }}
            </slot>
     
          </div>

  
          <p
            :class="uiMerged.description"
            ui-key="description"
          >
      
            <slot name="description">
              {{ description }}
            </slot>
      
          </p>

        </slot>

      </div>

      <div
        :class="uiMerged.body"
        ui-key="body"
      >

        <slot name="body" />

      </div>

      <div
        :class="uiMerged.footer"
        ui-key="footer"
      >

        <slot name="footer" />

      </div>

    </slot>

  </component>

</template>

<script setup lang="ts">
import type { BadgeProps } from '@nuxt/ui'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

type EmptyProps = {
  /**
   * The HTML tag or component to render as the root element.
   * @default 'div'
   */
  as?: string
  /** Media configuration for the header. */
  media?: Pick<BadgeProps, 'color' | 'variant'> & { icon?: string }
  /** The title text to render in the header. */
  title?: string
  /** The description text to render below the title in the header. */
  description?: string
  /** Whether to apply an outline style. */
  outlined?: boolean
  /** UI configuration. */
  ui?: {
    root?: ClassNameValue
    header?: ClassNameValue
    iconContainer?: ClassNameValue
    icon?: ClassNameValue
    title?: ClassNameValue
    description?: ClassNameValue
    body?: ClassNameValue
    footer?: ClassNameValue
  }
}

const props = withDefaults(defineProps<EmptyProps>(), {
  as: 'div',
  outlined: false,
  ui: () => ({}),
})

defineSlots<{
  default?: () => VNode[]
  header?: () => VNode[]
  media?: () => VNode[]
  mediaIcon?: () => VNode[]
  title?: () => VNode[]
  description?: () => VNode[]
  body?: () => VNode[]
  footer?: () => VNode[]
}>()

const uiMerged = computed(() => ({
  root: twMerge(
    'flex w-full max-w-md m-auto flex-1 flex-col items-center justify-center gap-6 rounded-lg p-6 text-center text-balance md:p-12',
    props.ui?.root,
    props.outlined && 'border border-default border-dashed',
  ),
  header: twMerge(
    'flex max-w-sm flex-col items-center gap-2 text-center',
    props.ui?.header,
  ),
  iconContainer: twMerge(
    'flex items-center justify-center gap-2 size-10 rounded-lg',
    props.ui?.iconContainer,
  ),
  icon: twMerge(
    'size-6',
    props.ui?.icon,
  ),
  title: twMerge(
    'text-lg font-medium tracking-tight',
    props.ui?.title,
  ),
  description: twMerge(
    'text-muted text-sm',
    props.ui?.description,
  ),
  body: twMerge(
    'flex w-full min-w-0 max-w-sm justify-center gap-4 text-balance text-sm',
    props.ui?.body,
  ),
  footer: twMerge(
    'flex w-full min-w-0 max-w-sm justify-center gap-4 text-balance text-sm',
    props.ui?.footer,
  ),
}))
</script>

<style scoped>

</style>
