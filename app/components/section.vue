<script setup lang="ts">
import { stagger } from 'motion-v'

type Props = {
  leading: {
    index: string
    title: string
  }
  trailing?: string
}

const props = withDefaults(defineProps<Props>(), {
  trailing: undefined,
})

const ariaLabel = computed(() => {
  const title = props.leading.title.toLowerCase().replaceAll(' ', '-')

  return `${props.leading.index}-${title}`
})

const sectionRef = useTemplateRef<HTMLElement>('sectionRef')

const isInView = useInView(sectionRef, {
  margin: '-5% 0% -5% 0%',
  once: true,
})
</script>

<template>
  <Motion
    ref="sectionRef"
    as="section"
    :aria-labelledby="ariaLabel"
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
    <!-- Heading -->
    <div
      class="flex items-center gap-4"
    >
      <!-- Left Hand Side: Index & Title -->
      <h2
        :id="ariaLabel"
        class="flex-none overflow-hidden text-2xs"
      >
        <Motion
          as="span"
          class="block"
          :variants="{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.6, ease: 'easeOut' },
            },
          }"
        >
          <span
            aria-hidden="true"
            class="tabular-nums"
          >
            {{ `${props.leading.index} /` }}
          </span>
          {{ props.leading.title }}
        </Motion>
      </h2>

      <!-- Center Line Layout Divider -->
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

      <!-- Right Hand Side: Trailing Content -->
      <Motion
        v-if="props.trailing"
        as="span"
        class="flex-none text-2xs tabular-nums"
        :variants="{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }"
      >
        {{ props.trailing }}
      </Motion>
    </div>

    <slot />
  </Motion>
</template>
