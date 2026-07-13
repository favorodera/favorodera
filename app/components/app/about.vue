<script setup lang="ts">
import profile from '~/data/profile.json'
import techStacks from '~/data/tech-stacks.json'
</script>

<template>
  <section
    id="about"
    class="
      section-padding grid gap-6

      sm:gap-8
    "
  >
    <h1 class="sr-only">
      Building interfaces that feel right
    </h1>

    <div
      class="flex items-center gap-4 text-sm uppercase"
    >
      <p class="text-muted-foreground">
        {{ profile.role }}
      </p>

      <Separator orientation="vertical" />
      <p>AVAILABLE</p>
    </div>

    <p>
      {{ profile.bio }}
    </p>

    <ul class="flex flex-wrap gap-4">
      <li
        v-for="(techStackName, index) in techStacks"
        :key="index"
        class="
          text-muted-foreground text-sm font-mono uppercase transition-colors
          cursor-default duration-300

          hover:text-foreground
        "
      >
        {{ techStackName }}
      </li>
    </ul>
  </section>
</template>
