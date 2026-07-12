<script setup lang="ts">
import profile from '~/data/profile.json'
</script>

<template>
  <section
    id="about"
    class="section-padding space-y-6"
  >
    <h1
      class="sr-only"
    >
      Building interfaces that feel right
    </h1>

    <div
      class="
        flex items-center gap-4 font-mono text-sm uppercase tracking-widest
      "
    >
      <p
        class="text-muted-foreground"
      >
        {{ profile.role }}
      </p>

      <Separator orientation="vertical" />

      <p class="">
        AVAILABLE
      </p>
    </div>

    <p class="tracking-wide leading-relaxed">
      {{ profile.bio }}
    </p>
  </section>
</template>
