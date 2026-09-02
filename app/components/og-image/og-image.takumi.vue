<script setup lang="ts">
import profile from '#data/profile.json'
</script>

<template>
  <div
    :style="{
      fontFamily: `'Geist', sans-serif`,
    }"
    data-theme="dark"
    class="
      relative flex flex-col items-center justify-center gap-2 border
      border-border bg-background p-10 text-center block-full inline-full
    "
  >
    <div
      class="overflow-hidden bg-muted block-24 inline-24"
    >
      <NuxtImg
        :src="profile.avatar"
        :alt="`Avatar of ${profile.name}`"
        height="100%"
        width="100%"
        class="object-cover grayscale block-full inline-full"
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
