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

    <p class="text-muted-foreground text-sm uppercase">
      {{ profile.role }}
    </p>

    <p class="font-thin tracking-wider leading-relaxed">
      {{ profile.bio }}
      
      <Button
        as-child
        size="sm"
        variant="link"
        class="
          text-muted-foreground underline

          hover:text-foreground
        "
      >
        <NuxtLink
          :href="profile.resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </NuxtLink>
      </Button>
    </p>

    <ul class="flex flex-wrap gap-4">
      <li
        v-for="(techStackName, index) in techStacks"
        :key="index"
        class="
          text-muted-foreground text-xs uppercase transition-colors
          cursor-default duration-300

          hover:text-foreground
        "
      >
        {{ techStackName }}
      </li>
    </ul>
  </section>
</template>
