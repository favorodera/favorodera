<script setup lang="ts">
import projects from '~/data/projects.json'

const INITIAL_VISIBLE_PROJECTS_COUNT = 5

const showAllProjects = ref(false)

const visibleProjects = computed(() => {
  if (showAllProjects.value) return projects

  return projects.slice(0, INITIAL_VISIBLE_PROJECTS_COUNT)
})
</script>

<template>
  <section
    id="projects"
    class="
      section-padding grid gap-6

      sm:gap-8
    "
  >
    <h2 class="text-sm text-muted-foreground">
      FEATURED PROJECTS [{{ projects.length }}]
    </h2>

    <ul class="group/projects">
      <li
        v-for="project, index in visibleProjects"
        :key="index"
      >
        <NuxtLink
          external
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          class="
            flex flex-col gap-1 transition-[opacity,filter] py-8 group/project
            border-be duration-300 on-focus-visible

            sm:py-12

            group-hover/projects:blur-[1px] group-hover/projects:opacity-95

            hover:opacity-100 hover:blur-none
          "
          :class="{
            'pbs-0 sm:pbs-0': index === 0
          }"
        >
          <h3
            class="
              font-serif underline-offset-4 decoration-1 text-2xl

              group-hover/project:underline
            "
          >
            {{ project.name }}
          </h3>

          <p class="text-sm text-muted-foreground">
            {{ project.description }}
          </p>
        </NuxtLink>
      </li>
    </ul>

    <Button
      v-if="projects.length > INITIAL_VISIBLE_PROJECTS_COUNT"
      size="sm"
      class="
        text-muted-foreground justify-self-center

        hover:text-foreground
      "
      @click="showAllProjects = !showAllProjects"
    >
      {{ showAllProjects ? 'See less' : `See more [${projects.length - INITIAL_VISIBLE_PROJECTS_COUNT}]` }}
    </Button>
  </section>
</template>
