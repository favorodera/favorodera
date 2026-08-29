<script setup lang="ts">
import profile from '#data/profile.json'

const motion = motionUtils()

const nuxtImageComponent = resolveComponent('NuxtImg')
</script>

<template>
  <Motion
    aria-labelledby="name"
    as="section"
    initial="hidden"
    animate="visible"
    :variants="motion.sectionVariants"
    class="
      pbs-16

      sm:pbs-24
    "
  >
    <div
      class="
        flex items-end gap-5

        sm:gap-7
      "
    >
      <Motion
        as-child
        :variants="motion.frameVariants"
        initial="hidden"
        animate="visible"
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

      <h1
        id="name"
        class="
          text-[2.5rem] leading-[0.92] font-medium tracking-[-0.035em]

          sm:text-[3.75rem]
        "
      >
        <MotionMaskLine>
          {{ profile.displayName[0] }}
        </MotionMaskLine>

        <MotionMaskLine class="text-muted-foreground">
          {{ profile.displayName.slice(1).join(' ') }}
        </MotionMaskLine>
      </h1>
    </div>

    <Motion
      as="p"
      :variants="motion.rowVariants"
      initial="hidden"
      animate="visible"
      class="
        mbs-7 flex flex-col items-start gap-x-2 gap-y-1 font-mono text-[10px]
        tracking-[0.18em] text-muted-foreground uppercase

        sm:flex-row sm:items-center
      "
    >
      <span
        v-for="(item, index) in profile.roleLine"
        :key="item"
        class="flex items-center gap-2"
      >
        <span
          v-if="index > 0"
          class="max-sm:hidden"
        >|</span>
        {{ item }}
      </span>
    </Motion>

    <div
      class="
        mbs-6 space-y-1.5 text-[0.95rem] leading-relaxed

        sm:text-base
      "
    >
      <Motion
        as="p"
        :variants="motion.rowVariants"
        initial="hidden"
        animate="visible"
      >
        {{ profile.bio[0] }}
      </Motion>

      <Motion
        as="p"
        :variants="motion.rowVariants"
        initial="hidden"
        animate="visible"
        class="text-muted-foreground"
      >
        {{ profile.bio[1] }}
      </Motion>
    </div>
  </Motion>
</template>
