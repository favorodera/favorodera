<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import experience from '#data/experience.json'

const VISIBLE_EXPERIENCE_COUNT = 3
const inViewOptions = { margin: '-10% 0px -10% 0px', once: true } as const

const motion = motionUtils()

const visibleExperience = computed(() => experience.slice(0, VISIBLE_EXPERIENCE_COUNT))
const remainingExperience = computed(() => experience.slice(VISIBLE_EXPERIENCE_COUNT))

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

const [DefineExperienceItem, ReuseExperienceItem] = createReusableTemplate<{
  index: number
  isLast: boolean
  item: typeof experience[number]
}>({
  inheritAttrs: false,
})
</script>

<template>
  <DefineExperienceItem v-slot="{ item, index, isLast }">
    <Motion
      :key="item.id"
      as="li"
      :layout="true"
      :variants="itemVariants"
      initial="hidden"
      while-in-view="visible"
      :in-view-options
      :index
      class="
        py-5

        sm:grid sm:grid-cols-[6.5rem_1fr] sm:items-start sm:gap-x-6
      "
      :class="{
        'border-be border-border':!isLast ,
      }"
    >
      <p
        class="
          flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em]
          text-muted-foreground uppercase

          sm:pbs-1
        "
      >
        {{ item.from }} - {{ item.to }}
      </p>

      <div
        class="
          mbs-2

          sm:mbs-0
        "
      >
        <h3
          class="
            text-[0.95rem] leading-snug

            sm:text-base
          "
        >
          {{ item.role }}
        </h3>

        <p
          class="
            mbs-1.5 font-mono text-[10px] tracking-[0.14em]
            text-muted-foreground uppercase
          "
        >
          {{ item.company }}
        </p>

        <p class="mbs-3 text-sm/relaxed text-muted-foreground max-inline-[54ch]">
          {{ item.note }}
        </p>
      </div>
    </Motion>
  </DefineExperienceItem>

  <section
    aria-labelledby="experience-heading"
  >
    <SectionHeading
      id="experience-heading"
      index="01"
      title="Experience"
    >
      <template #trailing>
        {{ String(experience.length).padStart(2, '0') }}
      </template>
    </SectionHeading>

    <CollapsibleRoot
      v-slot="{ open }"
      class="mbs-5"
    >
      <ul>
        <!-- Always visible -->
        <ReuseExperienceItem
          v-for="item, index in visibleExperience"
          :key="item.id"
          :item="item"
          :index="index"
          :is-last="
            index === visibleExperience.length - 1
              ? !(open && remainingExperience.length > 0)
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
              <ReuseExperienceItem
                v-for="item, index in remainingExperience"
                :key="item.id"
                :item="item"
                :index="visibleExperience.length + index"
                :is-last="index === remainingExperience.length - 1"
              />
            </Motion>
          </CollapsibleContent>
        </li>
      </ul>

      <Motion
        v-if="remainingExperience.length > 0"
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
