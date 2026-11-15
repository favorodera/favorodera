<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <div
    :style="{
      fontFamily: `'Outfit', ui-sans-serif, system-ui, sans-serif`,
    }"
    class="
      relative flex flex-col items-start justify-end gap-2 bg-background p-10
      min-block-full min-inline-full
    "
  >
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
    </div>

    <div class="text-5xl tracking-tight text-foreground">
      {{ profile.name }}
    </div>

    <div class="text-3xl tracking-wide text-muted-foreground">
      {{ profile.role }}
    </div>
  </div>
</template>
