<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import contact from '#data/contact.json'

const motion = motionUtils()
const clipboard = useClipboard({
  legacy: true,
  source: contact.email,
})

const inViewOptions = { margin: '-10% 0px -10% 0px', once: true } as const
</script>

<template>
  <Section
    :leading="{
      index:'03',
      title:'Contact'
    }"
  >
    <Motion
      as="p"
      class="
        mbs-6 text-[0.95rem] leading-relaxed text-muted-foreground
        max-inline-[42ch]

        sm:text-base
      "
      :variants="{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          transition: motion.ease,
          y: 0,
        },
      }"
      initial="hidden"
      while-in-view="visible"
      :in-view-options
    >
      {{ contact.invitation }}
    </Motion>

    <div class="mbs-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
      <button
        type="button"
        class="
          group text-[1.6rem] leading-tight font-medium tracking-tight
          outline-none

          focus-visible:ring-1 focus-visible:ring-ring

          sm:text-[2.25rem]
        "
        @click="clipboard.copy()"
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
            class="
              block border-be border-border pbe-1 transition-colors

              group-hover:border-foreground
            "
            :variants="{
              hidden: { y: '-115%' },
              visible: { y: '0%', transition: motion.ease },
            }"
            :style="motion.easeCSS"
          >
            {{ contact.email }}
          </Motion>
        </Motion>
      </button>

      <span
        aria-hidden="true"
        class="
          font-mono text-[10px] tracking-[0.18em] text-muted-foreground
          uppercase transition-opacity
        "
        :class="{ 'opacity-100': clipboard.copied.value, 'opacity-0': !clipboard.copied.value }"
        :style="motion.easeCSS"
      >
        Copied
      </span>

      <span
        aria-live="polite"
        class="sr-only"
      >
        {{ clipboard.copied.value ? 'Email address copied to clipboard' : '' }}
      </span>
    </div>

    <ul class="mbs-8 flex flex-wrap gap-x-6 gap-y-2">
      <Motion
        v-for="(link, index) in contact.links"
        :key="link.id"
        as="li"
        initial="hidden"
        while-in-view="visible"
        :in-view-options
        :variants="{
          hidden: { opacity: 0, y: 16 },
          visible: {
            opacity: 1,
            transition: {
              ...motion.spring,
              delay: index * motion.STAGGER,
            },
            y: 0,
          },
        }"
      >
        <NuxtLink
          :to="link.url"
          target="_blank"
          rel="noopener noreferrer"
          external
          class="
            font-mono text-[10px] tracking-[0.18em] text-muted-foreground
            uppercase transition-colors outline-none

            hover:text-foreground

            focus-visible:ring-1 focus-visible:ring-ring
          "
          :style="motion.easeCSS"
        >
          {{ link.label }}
        </NuxtLink>
      </Motion>
    </ul>
  </Section>
</template>
