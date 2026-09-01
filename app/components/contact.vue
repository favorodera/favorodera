<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import contact from '#data/contact.json'

const contactListRef = useTemplateRef('contactListRef')

const isContactListInView = useInView(contactListRef, {
  margin: '-5% 0% -5% 0%',
  once: true,
})

const clipboard = useClipboard({
  legacy: true,
  source: contact.email,
})
</script>

<template>
  <Section
    :leading="{
      index: '03',
      title: 'Contact',
    }"
  >
    <Motion
      as="p"
      :initial="{ opacity: 0 }"
      :while-in-view="{ opacity: 1 }"
      :in-view-options="{ margin: '-5% 0% -5% 0%', once: true }"
      class="
        mbs-6 text-[0.95rem] leading-relaxed text-muted-foreground

        sm:text-base
      "
    >
      {{ contact.invitation }}
    </Motion>

    <div class="mbs-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
      <button
        type="button"
        class="
          group cursor-copy overflow-hidden text-[1.6rem] leading-tight
          font-medium tracking-tight outline-none

          focus-visible:ring-1 focus-visible:ring-ring

          sm:text-[2.25rem]
        "
        @click="clipboard.copy()"
      >
        <Motion
          :initial="{ opacity: 0, y: '100%' }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ margin: '-5% 0% -5% 0%', once: false }"
          class="
            block border-be pbe-1 transition-colors

            group-hover:border-foreground
          "
        >
          {{ contact.email }}
        </Motion>
      </button>

      <span
        aria-hidden="true"
        class="text-2xs transition-opacity"
        :class="{
          'opacity-100': clipboard.copied.value,
          'opacity-0': !clipboard.copied.value,
        }"
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

    <ul
      ref="contactListRef"
      class="mbs-8 flex flex-wrap gap-x-6 gap-y-2"
    >
      <Motion
        v-for="(link, index) in contact.links"
        :key="link.id"
        as="li"
        :initial="{ opacity: 0, y: '110%' }"
        :animate="
          isContactListInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: '110%' }
        "
        :transition="{ duration: 0.6, ease: 'easeOut', delay: index * 0.04 }"
      >
        <NuxtLink
          :to="link.url"
          target="_blank"
          rel="noopener noreferrer"
          external
          class="
            text-2xs transition-colors outline-none

            hover:text-foreground

            focus-visible:ring-1 focus-visible:ring-ring
          "
        >
          {{ link.label }}
        </NuxtLink>
      </Motion>
    </ul>
  </Section>
</template>
