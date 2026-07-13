<script setup lang="ts">
import projects from '~/data/projects.json'
</script>

<template>
  <section
    id="projects"
    class="
      section-padding grid gap-6

      sm:gap-8
    "
  >
    <h2
      class="text-sm text-muted-foreground"
    >
      FEATURED PROJECTS [{{ projects.length }}]
    </h2>

    <ul class="group/projects">
      <li
        v-for="project, index in projects"
        :key="index"
      >
        <NuxtLink
          external
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          class="
            flex flex-col gap-1 transition-[opacity,filter] py-6 group/project
            border-be duration-300

            sm:py-8

            group-hover/projects:blur-[1px] group-hover/projects:opacity-95

            hover:opacity-100 hover:blur-none
          "
          :class="{
            'pbs-0 sm:pbs-0':index === 0
          }"
        >
          <h3
            class="
              font-serif underline-offset-4 decoration-1 text-xl

              group-hover/project:underline
            "
          >
            {{ project.name }}
          </h3>

          <p class="text-base text-muted-foreground">
            {{ project.description }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
