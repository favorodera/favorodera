<script setup lang="ts">
import { tv } from 'tailwind-variants'
import projects from '~/data/projects.json'

const INITIAL_VISIBLE_PROJECTS_COUNT = 5

const showAllProjects = ref(false)

const initialProjects = computed(() => projects.slice(0, INITIAL_VISIBLE_PROJECTS_COUNT))
const remainingProjects = computed(() => projects.slice(INITIAL_VISIBLE_PROJECTS_COUNT))

const projectItemAnimationVariant = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 40 },
}

const projectItemStyleVariants = tv({
  slots: {
    description: 'text-sm text-muted-foreground',
    root: `
      flex flex-col gap-1 py-8 group/project border-be outline-none duration-300

      sm:py-12

      group-hover/projects:blur-[1px] group-hover/projects:opacity-95

      hover:opacity-100 hover:blur-none

      focus-visible:ring-2 focus-visible:ring-ring
    `,
    title: `
      font-serif underline-offset-4 decoration-1 text-2xl

      group-hover/project:underline
    `,
  },
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

    <CollapsibleRoot
      v-model:open="showAllProjects"
      class="
        grid gap-6

        sm:gap-8
      "
    >
      <MotionConfig :transition="{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }">
        <ul class="group/projects">
          <!-- Always visible -->
          <Motion
            v-for="(project, index) in initialProjects"
            :key="project.name"
            as="li"
            :variants="projectItemAnimationVariant"
            initial="initial"
            while-in-view="animate"
            :in-view-options="{ once: true, margin: '-60px' }"
          >
            <NuxtLink
              external
              :href="project.href"
              target="_blank"
              rel="noopener noreferrer"
              :class="projectItemStyleVariants().root({class: index === 0 ? 'pbs-0 sm:pbs-0' : ''})"
            >
              <h3 :class="projectItemStyleVariants().title()">
                {{ project.name }}
              </h3>

              <p :class="projectItemStyleVariants().description()">
                {{ project.description }}
              </p>
            </NuxtLink>
          </Motion>

          <!-- Collapsible remainder -->
          <li class="grid gap-0">
            <CollapsibleContent
              as="ul"
              class="grid gap-0"
            >
              <Motion
                v-for="(project) in remainingProjects"
                :key="project.name"
                as="li"
                :variants="projectItemAnimationVariant"
                initial="initial"
                while-in-view="animate"
                :in-view-options="{ once: true, margin: '-60px' }"
              >
                <NuxtLink
                  external
                  :href="project.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="projectItemStyleVariants().root()"
                >
                  <h3 :class="projectItemStyleVariants().title()">
                    {{ project.name }}
                  </h3>

                  <p :class="projectItemStyleVariants().description()">
                    {{ project.description }}
                  </p>
                </NuxtLink>
              </Motion>
            </CollapsibleContent>
          </li>
        </ul>
      </MotionConfig>

      <CollapsibleTrigger
        v-if="projects.length > INITIAL_VISIBLE_PROJECTS_COUNT"
        as-child
      >
        <Button
          size="sm"
          class="
            text-muted-foreground justify-self-center

            hover:text-foreground
          "
        >
          {{ showAllProjects ? 'See less' : `See more [${remainingProjects.length}]` }}
        </Button>
      </CollapsibleTrigger>
    </CollapsibleRoot>
  </section>
</template>
