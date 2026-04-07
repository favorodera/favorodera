<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import data from '~/data/projects.json'

/** All project entries from the data file. */
const projects = data.items.toReversed()

/** Controls whether the collapsed extra projects are visible. */
const isOpen = ref(false)

/** Number of projects shown before the "show more" toggle. */
const INITIAL_COUNT = 3

/** Projects always visible — first N items. */
const visibleProjects = computed(() => projects.slice(0, INITIAL_COUNT))

/** Projects hidden until the collapsible is opened. */
const hiddenProjects = computed(() => projects.slice(INITIAL_COUNT))

/**
 * Stagger delay for the collapsible trigger button.
 * Capped at 5 items so the delay never exceeds ~350 ms.
 */
const triggerDelay = computed(() => Math.min(INITIAL_COUNT, 5) * 0.07)

/**
 * Reusable project row template — defined once and stamped out multiple times.
 * Using `createReusableTemplate` avoids duplicating the full row markup for
 * both the visible and hidden lists.
 */
const [DefineProjectItem, ReuseProjectItem] = createReusableTemplate({
  props: {
    name: String,
    description: String,
    url: String,
    index: Number,
  },
})
</script>

<template>
  <div>

    <!-- Project row template definition (not rendered here) -->
    <DefineProjectItem v-slot="{ name, description, url, index }">
      <Motion
        as="li"
        :initial="{ opacity: 0, y: 10 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.35, delay: Math.min(index, 5) * 0.07, ease: [0.25, 0, 0, 1] }"
        :in-view-options="{ once: true, margin: '-30px' }"
        class="border-b border-border/40"
      >

        <!-- Each project is a full-row external link -->
        <NuxtLink
          :to="url"
          target="_blank"
          external
          class="
            group flex gap-3 py-3.5 transition-colors outline-none
            focus-visible:ring-1 focus-visible:ring-ring/40
            focus-visible:ring-offset-2 focus-visible:ring-offset-background
            sm:gap-4 sm:py-4
          "
        >

          <!-- Zero-padded sequential index (01, 02, …) -->
          <span
            class="
              w-6 shrink-0 pt-px text-[11px] font-medium text-muted-foreground
              tabular-nums
              sm:w-7
            "
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <!-- Project name + description -->
          <div
            class="min-w-0 flex-1 space-y-1.5"
            role="group"
            :aria-label="`${name} details`"
          >

            <h3
              class="
                min-w-0 text-base/snug font-normal tracking-tight
                text-foreground
                group-hover:underline group-hover:decoration-primary/30
                group-hover:underline-offset-[3px]
              "
            >
              {{ name }}
            </h3>

            <p class="text-sm/snug text-pretty text-muted-foreground/90">
              {{ description }}
            </p>

          </div>

        </NuxtLink>

      </Motion>
    </DefineProjectItem>

    <!-- Projects section -->
    <Section
      label="Projects"
      title="Projects and tools I've shipped, currently building, or experimenting with in public."
    >

      <Collapsible
        v-if="projects"
        v-model:open="isOpen"
      >

        <ul>

          <!-- Top rule — fades in when the list scrolls into view -->
          <Motion
            as-child
            :initial="{ opacity: 0 }"
            :while-in-view="{ opacity: 1 }"
            :transition="{ duration: 0.3, ease: [0.25, 0, 0, 1] as const }"
            :in-view-options="{ once: true }"
            class="list-none bg-border/40"
          >
            <Separator />
          </Motion>

          <!-- Always-visible items — stagger handled via index prop -->
          <ReuseProjectItem
            v-for="(project, index) in visibleProjects"
            :key="project.url"
            :name="project.name"
            :description="project.description"
            :url="project.url"
            :index="index"
          />

          <!--
            Hidden items animate in when the collapsible opens.
            AnimatePresence makes the v-if removal/addition animatable.
            Each item uses its full index (index + INITIAL_COUNT) so the
            stagger delay continues seamlessly from the visible items.
          -->
          <CollapsibleContent as-child>
            <AnimatePresence>
              <ReuseProjectItem
                v-for="(project, index) in hiddenProjects"
                :key="project.url"
                :name="project.name"
                :description="project.description"
                :url="project.url"
                :index="index + INITIAL_COUNT"
              />
            </AnimatePresence>
          </CollapsibleContent>

          <!-- Show more / show less trigger row -->
          <Motion
            v-if="hiddenProjects.length"
            as="li"
            :initial="{ opacity: 0, y: 10 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.35, delay: triggerDelay, ease: [0.25, 0, 0, 1] }"
            :in-view-options="{ once: true, margin: '-30px' }"
            class="border-b border-border/40"
          >

            <CollapsibleTrigger
              :aria-label="`Show ${hiddenProjects.length} more projects`"
              class="
                flex w-full cursor-pointer gap-3 py-3.5 text-left
                text-muted-foreground transition-colors outline-none
                hover:text-foreground
                focus-visible:ring-1 focus-visible:ring-ring/40
                focus-visible:ring-offset-2 focus-visible:ring-offset-background
                sm:gap-4 sm:py-4
              "
            >
              <!-- Decorative ellipsis placeholder aligned with index column -->
              <span
                class="
                  w-6 shrink-0 text-[11px] font-medium text-muted-foreground/50
                  tabular-nums
                  sm:w-7
                "
                aria-hidden="true"
              >
                ···
              </span>

              <span class="min-w-0 flex-1 text-[11px] font-medium tracking-wide">
                <span
                  aria-hidden="true"
                  class="
                    underline-offset-[3px]
                    group-hover/btn:underline
                    group-hover/btn:decoration-primary/30
                  "
                >
                  {{ isOpen ? 'Show less' : `+${hiddenProjects.length} more` }}
                </span>
              </span>

            </CollapsibleTrigger>

          </Motion>
        </ul>

      </Collapsible>

    </Section>
  </div>
</template>
