<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <header class="flex items-start justify-between gap-8 inline-full">
    <div class="group flex items-center gap-3">
      <div
        class="relative overflow-hidden border border-border block-12 inline-12"
      >
        <NuxtImg
          format="webp"
          width="48"
          height="48"
          :src="profile.avatar"
          :alt="`Avatar of ${profile.name}`"
          class="object-cover block-full inline-full"
          loading="eager"
        />

        <span
          aria-hidden="true"
          class="
            pointer-events-none absolute inset-y-0 inset-s-0 translate-x-[-200%]
            -skew-x-12 bg-linear-to-r from-transparent via-white/60
            to-transparent inline-1/2

            group-hover:translate-x-[300%] group-hover:transition-transform
            group-hover:duration-700 group-hover:ease-out

            motion-reduce:hidden
          "
        />
      </div>

      <div class="flex flex-col gap-px">
        <h1 class="text-base font-semibold">
          {{ profile.name }}
        </h1>

        <span class="text-sm text-muted-foreground">
          {{ profile.role }}
        </span>
      </div>
    </div>

    <SiteThemeToggle />
  </header>
</template>
