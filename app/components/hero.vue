<script setup lang="ts">
import profile from '#data/profile.json'

const showImageFallback = ref(false)

// Delay at which bio starts if hero is already visible when bio triggers
// (i.e. everything's on screen together — read as one continuous cascade)
const BIO_DELAY_WHEN_SYNCED = 1.05

const heroGroupRef = useTemplateRef('heroGroupRef')

// Drives the hero's own reveal — fires once, never replays.
const isHeroGroupInView = useInView(heroGroupRef, {
  margin: '-5% 0% -5% 0%',
  once: true,
})

// Separate, non-latching read of the same element — only used to check
// "is hero on screen right now" at the moment bio triggers.
const isHeroCurrentlyVisible = useInView(heroGroupRef, {
  margin: '-5% 0% -5% 0%',
})

const bioGroupRef = useTemplateRef('bioGroupRef')
const isBioGroupInView = useInView(bioGroupRef, {
  margin: '-5% 0% -5% 0%',
  once: true,
})

// Snapshotted the instant bio first triggers, since isBioGroupInView latches.
const bioBaseDelay = computed(() => (isHeroCurrentlyVisible.value ? BIO_DELAY_WHEN_SYNCED : 0))
</script>

<template>
  <section aria-labelledby="name">
    <!-- Image, name, role and availability -->
    <div
      ref="heroGroupRef"
      class="
        grid grid-cols-[auto_1fr] items-end gap-5

        sm:gap-7
      "
    >
      <!-- Image -->
      <Motion
        as="div"
        :initial="{ clipPath: 'circle(0% at 0% 100%)' }"
        :animate="{
          clipPath: isHeroGroupInView
            ? 'circle(150% at 0% 100%)'
            : 'circle(0% at 0% 100%)',
        }"
        :transition="{ duration: 0.9, ease: 'easeOut' }"
        class="
          relative flex-none overflow-hidden bg-muted block-22 inline-18

          sm:block-28 sm:inline-24
        "
      >
        <div
          v-if="showImageFallback"
          class="
            flex items-center justify-center font-mono text-sm
            text-muted-foreground uppercase block-full inline-full
          "
        >
          {{ profile.initials }}
        </div>

        <NuxtImg
          :src="profile.portrait"
          :alt="`Portrait of ${profile.name}`"
          class="object-cover grayscale inline-full min-block-full"
          @error="showImageFallback = true"
        />
      </Motion>

      <!-- Name -->
      <h1
        id="name"
        class="
          overflow-hidden text-[2.5rem] leading-[0.92] font-medium
          tracking-[-0.035em] text-muted-foreground
          [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]

          first-line:text-foreground

          sm:text-[3.75rem]

          [&_span]:block
        "
      >
        <Motion
          v-for="name, index in profile.displayName"
          :key="index"
          as="span"
          :initial="{ opacity: 0, x: '-30%' }"
          :animate="
            isHeroGroupInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: '-30%' }
          "
          :transition="{
            duration: 0.7,
            ease: 'easeOut',
            delay: 0.45 + index * 0.08,
          }"
        >
          {{ name }}
        </Motion>
      </h1>

      <!-- Role and availability -->
      <Motion
        as="div"
        :initial="{ opacity: 0, y: '-100%' }"
        :animate="
          isHeroGroupInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: '-100%' }
        "
        :transition="{ duration: 0.6, ease: 'easeOut', delay: 0.85 }"
        class="
          col-span-full row-start-2 flex items-end gap-2 overflow-hidden
          text-2xs
        "
      >
        <template
          v-for="item, index in [profile.role, profile.availability]"
          :key="index"
        >
          <span v-if="index > 0">|</span>

          <span :class="{ 'text-foreground': index === 1 }">
            {{ item }}
          </span>
        </template>
      </Motion>
    </div>

    <!-- Bio -->
    <div
      ref="bioGroupRef"
      class="
        mbs-6 space-y-1.5 text-[0.95rem] leading-relaxed

        sm:text-base
      "
    >
      <Motion
        v-for="item, index in profile.bio"
        :key="index"
        as="p"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: isBioGroupInView ? 1 : 0 }"
        :transition="{
          duration: 0.8,
          ease: 'easeOut',
          delay: bioBaseDelay + index * 0.12,
        }"
        :class="{ 'text-muted-foreground': index === 1 }"
      >
        {{ item }}
      </Motion>
    </div>
  </section>
</template>
