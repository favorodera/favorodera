<script setup lang="ts">
import { stagger } from 'motion-v'
import { TabsRoot } from 'reka-ui'
import projects from '#data/projects.json'

const listRef = useTemplateRef('listRef')

const isInView = useInView(listRef, {
  margin: '-5% 0% -5% 0%',
  once: true,
})

const ALWAYS_VISIBLE = 3

const tagsFilterModel = ref('all')

const tags = computed(() => {
  const tags = new Set<string>(['all'])

  for (const project of projects) {
    for (const tag of project.tags) {
      tags.add(tag)
    }
  }

  return [...tags].toSorted((tagA, tagB) => tagA.localeCompare(tagB))
})

const visibleItems = computed(() => {
  const filtered = tagsFilterModel.value === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(tagsFilterModel.value))

  return filtered.slice(0, ALWAYS_VISIBLE)
})

const remainingItems = computed(() => {
  const filtered = tagsFilterModel.value === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(tagsFilterModel.value))

  return filtered.slice(ALWAYS_VISIBLE)
})
</script>

<template>
  <Section
    :leading="{
      index: '02',
      title: 'Work',
    }"
    :trailing="String(visibleItems.length + remainingItems.length).padStart(2, '0')"
  >
    <TabsRoot
      v-model:model-value="tagsFilterModel"
      class="overflow-hidden"
    >
      <TabsList
        ref="listRef"
        as-child
        aria-label="Filter projects by tag"
      >
        <Motion
          as="div"
          class="
            relative -mx-6 flex scrollbar-none gap-5 overflow-x-auto border-be
            px-6 py-5

            sm:mx-0 sm:px-0
          "
          :variants="{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: stagger(0.04) },
            },
          }"
          initial="hidden"
          :animate="isInView ? 'visible' : 'hidden'"
        >
          <TabsTrigger
            v-for="tag in tags"
            :key="tag"
            :value="tag"
            as-child
          >
            <Motion
              as="button"
              :variants="{
                hidden: { opacity: 0, x: '-110%' },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }"
              class="
                relative flex-none text-2xs transition-colors outline-none
                block-5

                focus-visible:ring-1 focus-visible:ring-ring

                data-[state=active]:text-foreground

                data-[state=inactive]:text-muted-foreground

                data-[state=inactive]:hover:text-foreground
              "
            >
              {{ tag }}

              <Motion
                v-if="tag === tagsFilterModel"
                as="span"
                layout-id="work-tabs-underline"
                :transition="{
                  duration: 0.6,
                  type: 'spring',
                  damping: 36,
                  mass: 0.9,
                  stiffness: 420,
                }"
                aria-hidden="true"
                class="
                  absolute inset-s-0 inset-be-0 rounded-full bg-foreground
                  block-px inline-full
                "
              />
            </Motion>
          </TabsTrigger>
        </Motion>
      </TabsList>
    </TabsRoot>

    <Collapsible>
      <template #visible="{open}">
        <WorkItem
          v-for="item, index in visibleItems"
          :key="item.id"
          :item="item"
          :index="index"
          :is-last="index === visibleItems.length - 1 ? !(open && remainingItems.length > 0) : false"
        />
      </template>

      <template #hidden>
        <WorkItem
          v-for="item, index in remainingItems"
          :key="item.id"
          :item="item"
          :index="visibleItems.length + index"
          :is-last="index === remainingItems.length - 1"
        />
      </template>
    </Collapsible>
  </Section>
</template>
