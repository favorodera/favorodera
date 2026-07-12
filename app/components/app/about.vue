<script setup lang="ts">
import type { Options } from 'motion-v'
import profile from '~/data/profile.json'

const sectionVariants: Options['variants'] = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.02,
      staggerChildren: 0.08,
      when: 'beforeChildren',
    },
  },
}

const childVariants: Options['variants'] = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      damping: 20,
      mass: 0.8,
      stiffness: 140,
      type: 'spring',
    },
    y: 0,
  },
}
</script>

<template>
  <Motion
    id="about"
    as="section"
    class="section-padding space-y-6"
    initial="hidden"
    while-in-view="visible"
    :viewport="{ once: true, amount: 0.3 }"
    :variants="sectionVariants"
  >
    <h1 class="sr-only">
      Building interfaces that feel right
    </h1>

    <Motion
      :variants="childVariants"
      class="
        flex items-center gap-4 font-mono text-sm uppercase tracking-widest
      "
    >
      <p class="text-muted-foreground">
        {{ profile.role }}
      </p>

      <Separator orientation="vertical" />
      <p>AVAILABLE</p>
    </Motion>

    <Motion
      as="p"
      :variants="childVariants"
      class="tracking-wide leading-relaxed"
    >
      {{ profile.bio }}
    </Motion>
  </Motion>
</template>
