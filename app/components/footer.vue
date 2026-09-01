<script setup lang="ts">
import { stagger } from 'motion-v'

const footerRef = useTemplateRef<HTMLElement>('footerRef')

const isInView = useInView(footerRef, {
  margin: '-3% 0% -3% 0%',
  once: false,
})
</script>

<template>
  <Motion
    ref="footerRef"
    as="footer"
    :variants="{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { delayChildren: stagger(0.05) },
      },
    }"
    initial="hidden"
    :animate="isInView ? 'visible' : 'hidden'"
  >
    <!-- Top Line Layout Divider -->
    <Motion
      as-child
      class="flex-1 origin-left bg-border block-px"
      :variants="{
        hidden: { opacity: 0, scaleX: 0 },
        visible: {
          opacity: 1, scaleX: 1,
          transition: { duration: 0.6, ease: 'easeOut' }
        }
      }"
    >
      <Separator />
    </Motion>

    <Motion
      as="span"
      :variants="{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }"
      class="ms-auto block pbs-5 text-2xs inline-fit"
    >
      COPYRIGHT 2024 - {{ new Date().getFullYear() }}
    </Motion>
  </Motion>
</template>
