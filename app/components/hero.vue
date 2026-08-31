<script setup lang="ts">
import profile from '#data/profile.json'

const showImageFallback = ref(false)
</script>

<template>
  <section
    aria-labelledby="name"
  >
    <!-- Image, name, role and availability -->
    <div
      class="
        grid grid-cols-[auto_1fr] items-end gap-5

        sm:gap-7
      "
    >
      <!-- Image -->
      <div
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
          @error="showImageFallback=true"
        />
      </div>

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
        <span
          v-for="name, index in profile.displayName"
          :key="index"
        >
          {{ name }}
        </span>
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
          <span
            v-if="index > 0"
          >
            |
          </span>

          <span
            :class="{
              'text-foreground': index === 1,
            }"
          >
            {{ item }}
          </span>
        </template>
      </div>
    </div>

    <!-- Bio -->
    <div
      class="
        mbs-6 space-y-1.5 overflow-hidden text-[0.95rem] leading-relaxed

        sm:text-base
      "
    >
      <p
        v-for="item, index in profile.bio"
        :key="index"
        :class="{
          'text-muted-foreground': index === 1,
        }"
      >
        {{ item }}
      </p>
    </div>
  </section>
</template>
