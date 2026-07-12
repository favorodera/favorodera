<script setup lang="ts">
import type { Options } from 'motion-v'
import profile from '~/data/profile.json'
import techStacks from '~/data/tech-stacks.json'

/** Fade-and-slide-up reveal shared by the meta row (role + availability badge) and the bio paragraph. */
const introRevealVariants: Options['variants'] = {
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

/**
 * Computes how close a tag sits to the middle of the tech stack row.
 * Returns 0 for the first and last tag, rising to 1 for the tag
 * nearest the center. This ratio drives both the starting offset and
 * entry delay below, which is what turns a flat row of independent
 * fade-ins into a single arc-shaped reveal.
 * @param index Zero-based position of the tag within the tech stack list
 * @returns A ratio between 0 (row edge) and 1 (row center)
 */
function getArcOffsetRatio(index: number): number {
  const position = techStacks.length > 1 ? index / (techStacks.length - 1) : 0.5
  return 4 * position * (1 - position)
}

/** Reveal for each individual tech stack tag. */
const techStackTagVariants: Options['variants'] = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 16 + getArcOffsetRatio(index) * 24,
  }),
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      damping: 22,
      delay: index * 0.05,
      mass: 0.6,
      stiffness: 180,
      type: 'spring',
    },
    y: 0,
  }),
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
    :variants="{
      hidden: {},
      visible: {
        transition: {
          delayChildren: 0.02,
          staggerChildren: 0.08,
          when: 'beforeChildren',
        },
      },
    }"
  >
    <h1 class="sr-only">
      Building interfaces that feel right
    </h1>

    <Motion
      :variants="introRevealVariants"
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
      :variants="introRevealVariants"
      class="tracking-wide leading-relaxed"
    >
      {{ profile.bio }}
    </Motion>

    <Motion
      :variants="{ hidden: {}, visible: { transition: { when: 'beforeChildren' } } }"
      class="flex flex-wrap gap-4"
    >
      <Motion
        v-for="techStackName, index in techStacks"
        :key="index"
        as="span"
        :custom="index"
        :variants="techStackTagVariants"
        class="
          text-muted-foreground text-sm/relaxed font-mono uppercase
          tracking-wide transition-colors cursor-default duration-300

          hover:text-primary
        "
      >
        {{ techStackName }}
      </Motion>
    </Motion>
  </Motion>
</template>
