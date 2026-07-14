<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { buttonVariants } from '../centoui/button'

const navLinks = [
  { label: 'About', path: '#about' },
  { label: 'Work', path: '#projects' },
  { label: 'Contact', path: '#contact' },
]

const [
  DefineLinks,
  ReuseLinks,
] = createReusableTemplate<{ separatorOrientation?: 'vertical' }>()

const isOpen = ref(false)
</script>

<template>
  <!-- Reusable nav links -->
  <DefineLinks v-slot="{ separatorOrientation }">
    <template
      v-for="link, index in navLinks"
      :key="index"
    >
      <li class="flex">
        <Button
          as-child
          size="sm"
          variant="link"
          class="
            inline-full justify-start py-3

            sm:py-0 sm:justify-center sm:inline-auto
          "
        >
          <NuxtLink
            :to="link.path"

            @click="isOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </Button>
      </li>

      <li
        v-if="index < navLinks.length - 1"
        class="self-stretch"
      >
        <Separator
          :orientation="separatorOrientation"
        />
      </li>
    </template>
  </DefineLinks>

  <nav
    class="
      relative grid grid-cols-[1fr_auto_auto] items-center gap-4 mbe-13 pbe-1

      sm:mbe-15 sm:flex sm:items-center sm:justify-end
    "
  >
    <!-- Desktop navigation -->
    <ul
      class="
        hidden items-center gap-x-4

        sm:flex
      "
    >
      <ReuseLinks separator-orientation="vertical" />
    </ul>

    <!-- Mobile menu button -->
    <Button
      size="sm"
      class="
        col-start-2

        hover:text-muted-foreground

        sm:hidden
      "
      @click="isOpen = !isOpen"
    >
      <AnimatePresence mode="wait">
        <Motion
          v-if="isOpen"
          key="close-label"
          as="span"
          class="inline-block me-1.5"
          :initial="{
            y: '-100%',
            opacity: 0
          }"
          :animate="{
            y: '0%',
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: 'easeOut'
            }
          }"
          :exit="{
            y: '-100%',
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeIn'
            }
          }"
        >
          Close
        </Motion>
      </AnimatePresence>

      Menu
    </Button>

    <!-- Mobile navigation -->
    <AnimatePresence>
      <Motion
        v-show="isOpen"
        as="ul"
        :initial="{
          opacity: 0,
          y: -24,
          scale: 0.96,
          filter: 'blur(8px)'
        }"
        :animate="{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }
        }"
        :exit="{
          opacity: 0,
          y: -16,
          scale: 0.98,
          filter: 'blur(4px)',
          transition: {
            duration: 0.25,
            ease: 'easeIn'
          }
        }"
        class="
          absolute inset-bs-full p-6 inset-x-0 z-50 grid gap-2 bg-background
          inset-s-1/2 -translate-x-1/2 inline-screen origin-[top_center]

          sm:hidden sm:px-8
        "
      >
        <li>
          <Separator />
        </li>

        <ReuseLinks />

        <li>
          <Separator />
        </li>
      </Motion>
    </AnimatePresence>

    <Separator
      orientation="vertical"
    />

    <ColorScheme
      placeholder="THEMING..."
      tag="span"
      :class="buttonVariants()
        .root({
          size:'sm',
          class:'text-muted-foreground col-start-4 sm:col-auto'
        })"
    >
      <Button
        size="sm"
        class="
          col-start-4 min-block-full overflow-hidden perspective-normal

          hover:text-muted-foreground

          sm:col-auto
        "
        @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
      >
        <AnimatePresence mode="wait">
          <Motion
            :key="$colorMode.value"
            as="span"
            class="block will-change-transform min-inline-[35px]"
            :style="{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transformOrigin: 'center'
            }"
            :initial="{
              rotateX: -90,
              y: '100%',
              opacity: 0,
              filter: 'blur(4px)',
            }"
            :animate="{
              rotateX: 0,
              y: '0%',
              opacity: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 0.4,
                ease: 'easeOut',
              },
            }"
            :exit="{
              rotateX: 90,
              y: '-100%',
              opacity: 0,
              filter: 'blur(4px)',
              transition: {
                duration: 0.3,
                ease: 'easeIn'
              },
            }"
          >
            {{ $colorMode.value }}
          </Motion>
        </AnimatePresence>
      </Button>
    </ColorScheme>
  </nav>
</template>
