<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { stagger } from 'motion-v'
import projects from '#data/projects.json'

const VISIBLE_PROJECTS_COUNT = 3
const inViewOptions = { margin: '-10% 0px -10% 0px', once: true } as const

const motion = motionUtils()

const projectsTabFilterModel = ref('all')

const projectsTags = computed(() => {
  const tags = new Set<string>(['all'])

  for (const project of projects) {
    for (const tag of project.tags) {
      tags.add(tag)
    }
  }

  return [...tags].toSorted((tagA, tagB) => tagA.localeCompare(tagB))
})

const visibleProjects = computed(() => {
  const filter = projectsTabFilterModel.value

  if (filter === 'all') {
    return projects.slice(0, VISIBLE_PROJECTS_COUNT)
  }

  return projects
    .filter(project => project.tags.includes(filter))
    .slice(0, VISIBLE_PROJECTS_COUNT)
})
const remainingProjects = computed(() => {
  const filter = projectsTabFilterModel.value

  if (filter === 'all') {
    return projects.slice(VISIBLE_PROJECTS_COUNT)
  }

  return projects.filter(project => project.tags.includes(filter)).slice(VISIBLE_PROJECTS_COUNT)
})

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      ...motion.spring,
      delay: index * motion.STAGGER,
    },
    y: 0,
  }),
}

const [DefineProjectsItem, ReuseProjectsItem] = createReusableTemplate<{
  index: number
  isLast: boolean
  item: typeof projects[number]
}>({
  inheritAttrs: false,
})
</script>

<template>
  <DefineProjectsItem v-slot="{ item, index, isLast }">
    <Motion
      :key="item.id"
      as="li"
      :layout="true"
      :variants="itemVariants"
      initial="hidden"
      while-in-view="visible"
      :in-view-options
      :index
    >
      <NuxtLink
        class="
          group block py-5 outline-none

          focus-visible:ring-1 focus-visible:ring-ring
        "
        :class="{
          'border-be':!isLast ,
        }"
        :to="item.url"
        target="_blank"
        rel="noopener noreferrer"
        external
      >
        <div class="flex items-baseline justify-between gap-4">
          <h3
            class="
              text-[0.95rem] leading-snug transition-transform

              group-hover:translate-x-1

              sm:text-base
            "
            :style="motion.easeCSS"
          >
            {{ item.title }}
          </h3>

          <Icon
            name="tabler:arrow-up-right"
            class="
              flex-none text-muted-foreground opacity-0
              transition-[translate,opacity] block-3.5 inline-3.5

              group-hover:translate-x-0.5 group-hover:opacity-100

              group-focus-visible:opacity-100
            "
            :style="motion.easeCSS"
          />
        </div>

        <p
          class="
            mbs-1.5 text-sm/relaxed text-muted-foreground transition-transform
            max-inline-[52ch]

            group-hover:translate-x-1
          "
          :style="motion.easeCSS"
        >
          {{ item.description }}
        </p>
      </NuxtLink>
    </Motion>
  </DefineProjectsItem>

  <section
    aria-labelledby="work-heading"
    class="
      pbs-24

      sm:pbs-32
    "
  >
    <SectionHeading
      id="work-heading"
      index="02"
      title="Work"
    >
      <template #trailing>
        {{ String(projects.length).padStart(2, '0') }}
      </template>
    </SectionHeading>

    <TabsRoot
      v-model:model-value="projectsTabFilterModel"
      as-child
    >
      <Motion
        as="div"
        initial="hidden"
        while-in-view="visible"
        :in-view-options
        :variants="{
          hidden: { opacity: 0, y: 16 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { ...motion.spring, delayChildren: stagger(motion.STAGGER) },
          },
        }"
        class="overflow-hidden border-be py-5"
      >
        <TabsList
          class="
            relative -mx-6 flex scroll-fade-e scrollbar-none gap-5
            overflow-x-auto px-6 scroll-fade-12

            sm:mx-0 sm:px-0
          "
          aria-label="Filter projects by tag"
        >
          <TabsTrigger
            v-for="tag in projectsTags"
            :key="tag"
            :value="tag"
            as-child
          >
            <Motion
              as="button"
              :variants="{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0, transition: motion.ease },
              }"
              class="
                relative flex-none font-mono text-[10px] tracking-[0.18em]
                uppercase transition-colors outline-none

                focus-visible:ring-1 focus-visible:ring-ring

                data-[state=active]:text-foreground

                data-[state=inactive]:text-muted-foreground

                data-[state=inactive]:hover:text-foreground
              "
              :style="motion.easeCSS"
            >
              {{ tag }}

              <Motion
                v-if="tag === projectsTabFilterModel"
                as="span"
                layout-id="work-tabs-underline"
                :transition="motion.spring"
                aria-hidden="true"
                class="
                  absolute inset-s-0 inset-be-0 rounded-full bg-primary block-px
                  inline-full
                "
              />
            </Motion>
          </TabsTrigger>
        </TabsList>
      </Motion>
    </TabsRoot>

    <CollapsibleRoot
      v-slot="{ open }"
      class="mbs-5"
    >
      <ul>
        <!-- Always visible -->
        <ReuseProjectsItem
          v-for="item, index in visibleProjects"
          :key="item.id"
          :item="item"
          :index="index"
          :is-last="
            index === visibleProjects.length - 1
              ? !(open && remainingProjects.length > 0)
              : false
          "
        />

        <!-- Collapsible remainder -->
        <li>
          <CollapsibleContent
            force-mount
            as-child
          >
            <Motion
              as="ul"
              :animate="open ? 'open' : 'closed'"
              :variants="{
                open: { height: 'auto', opacity: 1, transition: motion.ease },
                closed: { height: 0, opacity: 0, transition: motion.ease },
              }"
              initial="closed"
              class="overflow-hidden"
            >
              <ReuseProjectsItem
                v-for="item, index in remainingProjects"
                :key="item.id"
                :item="item"
                :index="visibleProjects.length + index"
                :is-last="index === remainingProjects.length - 1"
              />
            </Motion>
          </CollapsibleContent>
        </li>
      </ul>

      <Motion
        v-if="remainingProjects.length > 0"
        as="div"
        initial="hidden"
        while-in-view="visible"
        :in-view-options
        :variants="itemVariants"
        :transition="motion.spring"
        class="flex items-center justify-end border-bs border-border pbs-4"
      >
        <CollapsibleTrigger as-child>
          <button
            class="
              p-0.5 font-mono text-[10px] tracking-[0.18em]
              text-muted-foreground uppercase transition-colors outline-none

              hover:text-foreground

              focus-visible:ring-1 focus-visible:ring-ring
            "
            :style="motion.easeCSS"
          >
            See {{ open ? 'less' : `all` }}
          </button>
        </CollapsibleTrigger>
      </Motion>
    </CollapsibleRoot>
  </section>
</template>
