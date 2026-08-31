<script setup lang="ts">
import experience from '#data/experience.json'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  index: number
  isLast: boolean
  item: typeof experience[number]
}>()

const itemVariants = {
  invisible: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.04,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}
</script>

<template>
  <Motion
    :key="item.id"
    as="li"
    :custom="index"
    :variants="itemVariants"
    initial="invisible"
    while-in-view="visible"
    :in-view-options="{
      once: true,
      margin: '-5% 0% -5% 0%'
    }"
    class="
      py-5

      sm:grid sm:grid-cols-[auto_1fr] sm:items-start sm:gap-x-6
    "
    :class="{
      'border-be':!isLast ,
    }"
  >
    <!-- Period -->
    <p
      class="
        flex items-center gap-1.5 text-2xs

        sm:pbs-1
      "
    >
      {{ item.from }} - {{ item.to }}
    </p>

    <!-- Role, company and note -->
    <div
      class="
        mbs-2

        sm:mbs-0
      "
    >
      <!-- Role -->
      <h3
        class="
          text-[0.95rem] leading-snug

          sm:text-base
        "
      >
        {{ item.role }}
      </h3>

      <!-- Company -->
      <p
        class="mbs-1.5 text-2xs"
      >
        {{ item.company }}
      </p>

      <!-- Note -->
      <p class="mbs-3 text-sm/relaxed text-muted-foreground">
        {{ item.note }}
      </p>
    </div>
  </Motion>
</template>
