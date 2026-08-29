<script setup lang="ts">
import profile from '#data/profile.json'
</script>

<template>
  <div
    :style="{
      fontFamily: `'Geist Mono', monospace`,
    }"
    data-theme="dark"
    class="
      relative flex flex-col items-center justify-center gap-2 border
      border-border bg-background p-10 text-center block-full inline-full
    "
  >
    <Icon
      name="custom:logo"
      class="shrink-0 text-foreground block-12 inline-12"
    />

    <div class="text-5xl tracking-tight text-foreground">
      {{ profile.name }}
    </div>

    <div class="text-3xl tracking-wide text-muted-foreground">
      {{ profile.roleLine[0] }}
    </div>
  </div>
</template>
