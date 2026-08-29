<script setup lang="ts">
import profile from '#data/profile.json'

const inViewOptions = { margin: '-20px 0px -20px 0px', once: true } as const

const motion = motionUtils()

const nuxtImageComponent = resolveComponent('NuxtImg')
</script>

<template>
  <section
    aria-labelledby="name"
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
        :variants="{
          hidden: { clipPath: 'inset(100% 100% 0% 0%)' },
          visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: motion.ease },
        }"
        initial="hidden"
        while-in-view="visible"
        :in-view-options
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
        <Motion
          as="span"
          class="block overflow-hidden"
          initial="hidden"
          while-in-view="visible"
          :in-view-options
          :variants="{ hidden: {}, visible: {} }"
        >
          <Motion
            as="span"
            class="block"
            :variants="{
              hidden: { x: '-115%' },
              visible: { x: '0%', transition: motion.ease },
            }"
          >
            {{ profile.displayName[0] }}
          </Motion>
        </Motion>

        <Motion
          as="span"
          class="block overflow-hidden"
          initial="hidden"
          while-in-view="visible"
          :in-view-options
          :variants="{ hidden: {}, visible: {} }"
        >
          <Motion
            as="span"
            class="block text-muted-foreground"
            :variants="{
              hidden: { x: '-115%' },
              visible: {
                x: '0%',
                transition: { ...motion.ease, delay: motion.STAGGER },
              },
            }"
          >
            {{ profile.displayName.slice(1).join(' ') }}
          </Motion>
        </Motion>
      </h1>
    </div>

    <p
      class="
        mbs-7 flex flex-col items-start gap-x-2 gap-y-1 font-mono text-[10px]
        tracking-[0.18em] text-muted-foreground uppercase

        sm:flex-row sm:items-center
      "
    >
      <Motion
        v-for="(item, index) in profile.roleLine"
        :key="item"
        as="span"
        :variants="{
          hidden: { opacity: 0, y: 6 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { ...motion.ease, delay: index * motion.STAGGER },
          },
        }"
        initial="hidden"
        while-in-view="visible"
        :in-view-options
        class="flex items-center gap-2"
      >
        <span
          v-if="index > 0"
          class="max-sm:hidden"
        >|</span>
        {{ item }}
      </Motion>
    </p>

    <div
      class="
        mbs-6 space-y-1.5 text-[0.95rem] leading-relaxed

        sm:text-base
      "
    >
      <Motion
        as="p"
        initial="hidden"
        while-in-view="visible"
        :in-view-options
        :variants="{
          hidden: { opacity: 0, y: 6 },
          visible: { opacity: 1, y: 0, transition: motion.ease },
        }"
      >
        {{ profile.bio[0] }}
      </Motion>

      <Motion
        as="p"
        initial="hidden"
        while-in-view="visible"
        :in-view-options
        :variants="{
          hidden: { opacity: 0, y: 6 },
          visible: {opacity: 1,y: 0,transition: { ...motion.ease, delay: motion.STAGGER },},
        }"
        class="text-muted-foreground"
      >
        {{ profile.bio[1] }}
      </Motion>
    </div>
  </section>
</template>
