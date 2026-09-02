<script setup lang="ts">
import projects from '#data/projects.json'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  index: number
  isLast: boolean
  item: typeof projects[number]
}>()

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.04, duration: 0.6, ease: 'easeOut' },
  }),
}
</script>

<template>
  <Motion
    :key="item.id"
    as="li"
    :custom="index"
    :variants="itemVariants"
    initial="hidden"
    while-in-view="visible"
    :in-view-options="{
      once: true,
      margin: '-5% 0% -5% 0%'
    }"
  >
    <NuxtLink
      class="
        group block py-5 outline-none

        focus-visible:ring-1 focus-visible:ring-ring
      "

      :to="item.url"
      target="_blank"
      :class="{
        'border-be':!isLast ,
      }"
      rel="noopener noreferrer"
      external
    >
      <div class="flex items-baseline justify-between gap-4">
        <h3
          class="
            text-[0.95rem] leading-snug

            sm:text-base
          "
        >
          {{ item.title }}
        </h3>

        <IconsArrowUpRight
          class="
            flex-none text-muted-foreground opacity-0
            transition-[translate,opacity] block-3.5 inline-3.5

            group-hover:translate-x-0.5 group-hover:opacity-100

            group-focus-visible:opacity-100
          "
        />
      </div>

      <p
        class="mbs-1.5 text-sm/relaxed text-muted-foreground"
      >
        {{ item.description }}
      </p>
    </NuxtLink>
  </Motion>
</template>
