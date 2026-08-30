<script setup lang="ts">
import profile from '#data/profile.json'

const inViewOptions = { margin: '-20px 0px -20px 0px', once: true } as const

const motion = motionUtils()

const nuxtImageComponent = resolveComponent('NuxtImg')
</script>

<template>
  <Motion
    as="section"
    :variants="motion.containerVariants"
    initial="hidden"
    animate="visible"
    aria-labelledby="name"
  >
    <!-- Image, name, role and availability -->
    <Motion
      :variants="motion.containerVariants"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="{ once: true, margin: '-10% 0% -10% 0%' }"
      class="
        grid grid-cols-[auto_1fr] items-end gap-5

        sm:gap-7
      "
    >
      <!-- Image -->
      <Motion
        as-child
        :variants="motion.clipInFromBottomLeft"
        class="
          relative flex-none overflow-hidden bg-muted block-22 inline-18

          sm:block-28 sm:inline-24
        "
      >
        <AvatarRoot>
          <AvatarFallback
            class="
              flex items-center justify-center font-mono text-sm
              text-muted-foreground uppercase block-full inline-full
            "
          >
            {{ profile.initials }}
          </AvatarFallback>

          <AvatarImage
            :as="nuxtImageComponent"
            :src="profile.portrait"
            :alt="`Portrait of ${profile.name}`"
            class="object-cover grayscale inline-full min-block-full"
          />
        </AvatarRoot>
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
          :variants="motion.fadeInFromLeft"
        >
          {{ name }}
        </Motion>
      </h1>

      <!-- Role and availability -->
      <div
        class="
          col-span-full row-start-2 flex items-end gap-2 overflow-hidden
          text-2xs
        "
      >
        <template
          v-for="item, index in [profile.role, profile.availability]"
          :key="index"
        >
          <Motion
            v-if="index > 0"
            as="span"
            :variants="motion.fadeInFromTop"
          >
            |
          </Motion>

          <Motion
            as="p"
            :variants="motion.fadeInFromTop"
            :class="{
              'text-foreground':index===1
            }"
          >
            {{ item }}
          </Motion>
        </template>
      </div>
    </Motion>
  </Motion>
</template>
