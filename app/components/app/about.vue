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

    <Motion
      as="p"
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
      :in-view-options="{ once: true, margin: '-50px' }"
      class="text-muted-foreground text-sm uppercase"
    >
      {{ profile.role }}
    </Motion>

    <p class="font-thin tracking-wider leading-relaxed">
      <Motion
        as="span"
        :initial="{ opacity: 0, y: 30, filter: 'blur(6px)' }"
        :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }"
        :in-view-options="{ once: true, margin: '-50px' }"
      >
        {{ profile.bio }}
      </Motion>

      <Motion
        as="span"
        :initial="{ opacity: 0, x: -10 }"
        :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }"
        :in-view-options="{ once: true, margin: '-50px' }"
        class="ms-1.5"
      >
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
      </Motion>
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
        <Motion
          as="span"
          :initial="{ opacity: 0, y: 10 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }"
          :in-view-options="{ once: true, margin: '-30px' }"
        >
          {{ techStackName }}
        </Motion>
      </li>
    </ul>
  </section>
</template>
