<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import experience from '#data/experience.json'

const VISIBLE_EXPERIENCE_COUNT = 3

const motion = motionUtils()

const visibleExperience = computed(() => experience.slice(0, VISIBLE_EXPERIENCE_COUNT))

const remainingExperience = computed(() => experience.slice(VISIBLE_EXPERIENCE_COUNT))

const [DefineExperienceItem, ReuseExperienceItem] = createReusableTemplate<{
  index: number
  item: typeof experience[number]
}>({
  inheritAttrs: false,
})
</script>

<template>
  <DefineExperienceItem v-slot="{ item, index }">
    <AnimatePresence mode="popLayout">
      <Motion
        :key="item.id"
        as="li"
        :layout="true"
        :variants="motion.fadeVariants"
        :initial="index < VISIBLE_EXPERIENCE_COUNT ? 'hidden' : false"
        :while-in-view="index < VISIBLE_EXPERIENCE_COUNT ? 'visible' : undefined"
        :in-view-options="index < VISIBLE_EXPERIENCE_COUNT ? motion.IN_VIEW_OPTIONS_LATE : undefined"
        :animate="index >= VISIBLE_EXPERIENCE_COUNT ? 'visible' : undefined"
        :transition="{
          ...motion.spring,
          delay: index < VISIBLE_EXPERIENCE_COUNT ? 0 : (index - VISIBLE_EXPERIENCE_COUNT) * motion.STAGGER
        }"
        class="
          py-5

          sm:grid sm:grid-cols-[6.5rem_1fr] sm:items-start sm:gap-x-6
        "
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

          <p
            class="
              mbs-3 text-sm/relaxed text-muted-foreground max-inline-[54ch]
            "
          >
            {{ item.note }}
          </p>
        </div>
      </Motion>
    </AnimatePresence>
  </DefineExperienceItem>

  <Motion
    as="section"
    aria-labelledby="experience-heading"
    :variants="motion.sectionVariants"
    initial="hidden"
    while-in-view="visible"
    :in-view-options="motion.IN_VIEW_OPTIONS_EARLY"
    class="
      pbs-24

      sm:pbs-32
    "
  >
    <SectionHeading
      id="experience-heading"
      index="01"
      title="Experience"
    />

    <CollapsibleRoot
      v-slot="{ open }"
      class="mbs-5"
    >
      <ul class="divide-y divide-border">
        <!-- Always visible -->
        <ReuseExperienceItem
          v-for="item, index in visibleExperience"
          :key="item.id"
          :item="item"
          :index="index"
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
              :variants="motion.collapsibleVariants"
              initial="closed"
              class="divide-y divide-border"
            >
              <AnimatePresence mode="popLayout">
                <ReuseExperienceItem
                  v-for="item, index in remainingExperience"
                  :key="item.id"
                  :item="item"
                  :index="visibleExperience.length + index"
                />
              </AnimatePresence>
            </Motion>
          </CollapsibleContent>
        </li>
      </ul>

      <Motion
        v-if="remainingExperience.length > 0"
        :variants="motion.fadeVariants"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motion.IN_VIEW_OPTIONS_LATE"
        :transition="motion.ease"
        class="flex items-center justify-between pbs-4"
      >
        <span
          aria-hidden="true"
          class="
            font-mono text-[10px] tracking-[0.18em] text-muted-foreground
            uppercase
          "
        >
          {{ String(experience.length).padStart(2, '0') }}
        </span>

        <CollapsibleTrigger as-child>
          <button
            class="
              border-be border-transparent pbe-0.5 font-mono text-[10px]
              tracking-[0.18em] text-muted-foreground uppercase
              transition-colors outline-none

              hover:border-foreground hover:text-foreground

              focus-visible:ring-1 focus-visible:ring-ring
            "
          >
            See {{ open ? 'less' : `all` }}
          </button>
        </CollapsibleTrigger>
      </Motion>
    </CollapsibleRoot>
  </Motion>
</template>
