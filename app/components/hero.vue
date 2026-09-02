<script setup lang="ts">
import profile from '#data/profile.json'

const showImageFallback = ref(false)

const topRowRef = useTemplateRef<HTMLElement>('topRowRef')
const metaRef = useTemplateRef<HTMLElement>('metaRef')
const bioRef = useTemplateRef<HTMLElement>('bioRef')

const isTopRowInView = useInView(topRowRef, {
  margin: '-5% 0% -5% 0%',
  once: true,
})

const isMetaInView = useInView(metaRef, {
  margin: '-2% 0% -2% 0%',
  once: true,
})

const isBioInView = useInView(bioRef, {
  margin: '-2% 0% -2% 0%',
  once: true,
})
</script>

<template>
  <section aria-labelledby="name">
    <!-- IMAGE + NAME -->
    <Motion
      ref="topRowRef"
      initial="hidden"
      :animate="isTopRowInView ? 'visible' : 'hidden'"
      class="grid grid-cols-[auto_1fr] items-end gap-5"
    >
      <!-- Image -->
      <Motion
        :variants="{
          hidden: {
            opacity: 0,
            clipPath: 'circle(0% at 0% 100%)',
          },
          visible: {
            opacity: 1,
            clipPath: 'circle(150% at 0% 100%)',
          },
        }"
        class="
          relative overflow-hidden bg-muted block-22 inline-18

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
          :src="profile.avatar"
          :alt="`Avatar of ${profile.name}`"
          class="object-cover grayscale block-full inline-full min-block-full"
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
          v-for="(name, index) in profile.displayName"
          :key="index"
          as="span"
          :initial="{ opacity: 0 }"
          :animate="isTopRowInView ? { opacity: 1 } : { opacity: 0 }"
          :transition="{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }"
        >
          {{ name }}
        </Motion>
      </h1>
    </Motion>

    <!-- META -->
    <Motion
      ref="metaRef"
      initial="hidden"
      :animate="isMetaInView ? 'visible' : 'hidden'"
      :variants="{
        hidden: {},
        visible: {},
      }"
      class="mbs-3 flex items-end gap-2 overflow-hidden text-2xs"
    >
      <Motion
        v-for="(item, index) in [
          profile.role,
          '|',
          profile.availability,
        ]"
        :key="index"
        :initial="{ opacity: 0, y: '-100%' }"
        :animate="isMetaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '-100%' }"
        :transition="{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }"
        :class="{
          'text-foreground': index === 2,
        }"
      >
        {{ item }}
      </Motion>
    </Motion>

    <!-- BIO -->
    <Motion
      ref="bioRef"
      initial="hidden"
      :animate="isBioInView ? 'visible' : 'hidden'"
      class="
        mbs-6 space-y-1.5 text-[0.95rem] leading-relaxed

        sm:text-base
      "
    >
      <Motion
        v-for="(item, index) in profile.bio"
        :key="index"
        as="p"
        :initial="{ opacity: 0 }"
        :animate="isBioInView ? { opacity: 1 } : { opacity: 0 }"
        :transition="{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }"
        :class="{
          'text-muted-foreground': index === 1,
        }"
      >
        {{ item }}
      </Motion>
    </Motion>
  </section>
</template>
