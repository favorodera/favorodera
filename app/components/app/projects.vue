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
    <Motion
      as="h2"
      :initial="{ opacity: 0, x: -20 }"
      :while-in-view="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
      :in-view-options="{ once: true, margin: '-50px' }"
      class="text-sm text-muted-foreground"
    >
      FEATURED PROJECTS [{{ projects.length }}]
    </Motion>

    <ul class="group/projects">
      <Motion
        v-for="project, index in visibleProjects"
        :key="index"
        as="li"
        :initial="{ opacity: 0, y: 40 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }"
        :in-view-options="{ once: true, margin: '-60px' }"
      >
        <NuxtLink
          external
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          class="
            flex flex-col gap-1 transition-[opacity,filter] py-8 group/project
            border-be duration-300 outline-none

            sm:py-12

            group-hover/projects:blur-[1px] group-hover/projects:opacity-95

            hover:opacity-100 hover:blur-none

            focus-visible:ring-2 focus-visible:ring-ring
          "
          :class="{ 'pbs-0 sm:pbs-0': index === 0 }"
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
      </Motion>
    </ul>

    <Motion
      v-if="projects.length > INITIAL_VISIBLE_PROJECTS_COUNT"
      as="div"
      :initial="{ opacity: 0, scale: 0.95 }"
      :while-in-view="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }"
      :in-view-options="{ once: true }"
      class="justify-self-center"
    >
      <Button
        size="sm"
        class="
          text-muted-foreground

          hover:text-foreground
        "
        @click="showAllProjects = !showAllProjects"
      >
        {{ showAllProjects ? 'See less' : `See more [${projects.length - INITIAL_VISIBLE_PROJECTS_COUNT}]` }}
      </Button>
    </Motion>
  </section>
</template>
