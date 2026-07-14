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
      {{ isOpen ? 'Close' :'' }} Menu
    </Button>

    <!-- Mobile navigation -->
    <ul
      v-show="isOpen"
      class="
        absolute inset-bs-full p-6 inset-x-0 z-50 grid gap-2 bg-background
        inset-s-1/2 -translate-x-1/2 inline-screen

        sm:hidden sm:px-8

        focus-within:ring-2 focus-within:ring-ring
      "
    >
      <li>
        <Separator />
      </li>

      <ReuseLinks />

      <li>
        <Separator />
      </li>
    </ul>

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
          col-start-4

          hover:text-muted-foreground

          sm:col-auto
        "
        @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
      >
        {{ $colorMode.value }}
      </Button>
    </ColorScheme>
  </nav>
</template>
