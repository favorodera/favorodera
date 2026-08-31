<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import contact from '#data/contact.json'

const clipboard = useClipboard({
  legacy: true,
  source: contact.email,
})
</script>

<template>
  <Section
    :leading="{
      index:'03',
      title:'Contact'
    }"
  >
    <p
      class="
        mbs-6 text-[0.95rem] leading-relaxed text-muted-foreground

        sm:text-base
      "
    >
      {{ contact.invitation }}
    </p>

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
        <span
          class="
            block border-be pbe-1 transition-colors

            group-hover:border-foreground
          "
        >
          {{ contact.email }}
        </span>
      </button>

      <span
        aria-hidden="true"
        class="text-2xs transition-opacity"
        :class="{
          'opacity-100': clipboard.copied.value,
          'opacity-0': !clipboard.copied.value
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

    <ul class="mbs-8 flex flex-wrap gap-x-6 gap-y-2">
      <li
        v-for="link in contact.links"
        :key="link.id"
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
      </li>
    </ul>
  </Section>
</template>
