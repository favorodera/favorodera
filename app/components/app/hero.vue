<script setup lang="ts">
import type { Options } from 'motion-v'
import profile from '~/data/profile.json'

const sectionVariants: Options['variants'] = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
      when: 'beforeChildren',
    },
  },
}

const childVariants: Options['variants'] = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
      type: 'tween',
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
    animate="visible"
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
