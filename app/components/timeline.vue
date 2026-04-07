<script setup lang="ts">
import experienceData from '~/data/experience.json'
import educationData from '~/data/education.json'

/** Raw work experience entries from the data file. */
const experience = experienceData.items.toReversed()

/** Raw education entries from the data file. */
const education = educationData.items.toReversed()

/** Tab definitions — drives the tab list and panel switching. */
const tabs = [
  { label: 'Experience', value: 'experience' } as const,
  { label: 'Education', value: 'education' } as const,
]

/** Currently active tab value — defaults to 'experience'. */
const tabsModel = ref<typeof tabs[number]['value']>('experience')

/**
 * Normalised list of timeline items for the active tab.
 *
 * Both experience and education entries are mapped to a shared shape
 * (`url`, `period`, `label`, `subLabel`, `index`) so the template
 * only needs one rendering loop regardless of which tab is selected.
 */
const activeItems = computed(() => {
  if (tabsModel.value === 'experience') {
    return experience.map((item, index) => ({
      url: item.url,
      period: item.period,
      label: item.role,
      subLabel: item.company,
      index,
    }))
  }
  return education.map((item, index) => ({
    url: item.url,
    period: item.period,
    label: item.certification,
    subLabel: item.institution,
    index,
  }))
})

/**
 * Switches the active timeline tab.
 * @param tab - The tab value to activate ('experience' | 'education').
 */
function switchTab(tab: typeof tabsModel.value) {
  tabsModel.value = tab
}
</script>

<template>
  <Section
    label="Timeline"
    title="Where I've studied and worked — newest first."
  >

    <!-- Tab switcher (Experience / Education) -->
    <template #action>
      <div
        role="tablist"
        aria-label="Resume sections"
        class="
          inline-flex divide-x divide-border/40 self-start overflow-hidden
          rounded-md border border-border/45 bg-muted/15
          sm:self-auto
        "
      >
        <button
          v-for="tab in tabs"
          :id="`tab-${tab.value}`"
          :key="tab.value"
          type="button"
          role="tab"
          :aria-selected="tabsModel === tab.value"
          :aria-controls="`panel-${tab.value}`"
          class="
            min-w-0 flex-1 cursor-pointer bg-background px-3 py-1.5 text-center
            text-[10px] leading-none font-semibold tracking-[0.14em] uppercase
            transition-[color,background-color] outline-none
            focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring/40
            focus-visible:ring-inset
          "
          :class="{
            'text-muted-foreground hover:bg-muted/30 hover:text-foreground': tabsModel !== tab.value,
            'text-foreground dark:bg-background/80': tabsModel === tab.value,
          }"
          @click="switchTab(tab.value)"
        >
          {{ tab.label }}
        </button>
      </div>
    </template>

    <!-- Active tab panel -->
    <!--
      id is dynamic per active tab so aria-controls on each button
      correctly points to the panel it controls.
    -->
    <div
      :id="`panel-${tabsModel}`"
      role="tabpanel"
      :aria-labelledby="`tab-${tabsModel}`"
    >

      <!-- Cross-fade between tabs via AnimatePresence mode="wait" -->
      <AnimatePresence mode="wait">
        <Motion
          :key="tabsModel"
          as="ul"
          role="list"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ duration: 0.2, ease: [0.25, 0, 0, 1] }"
          class="relative m-0 list-none space-y-0 pl-0"
        >

          <!-- Decorative vertical timeline rule -->
          <div
            class="
              pointer-events-none absolute inset-y-4 left-2 w-px
              -translate-x-1/2 bg-border/50
            "
            aria-hidden="true"
          />

          <!-- Timeline entries -->
          <Motion
            v-for="item in activeItems"
            :key="item.index"
            as="li"
            :initial="{ opacity: 0, y: 10 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.35, delay: Math.min(item.index, 5) * 0.07, ease: [0.25, 0, 0, 1] }"
            :in-view-options="{ once: true, margin: '-30px' }"
            class="
              group relative border-b border-border/35 py-4 pl-8
              last:border-b-0 last:pb-0
              sm:pl-9
            "
          >
            <!-- Dot marker on the timeline rule -->
            <span
              class="
                absolute top-[1.35rem] left-2 size-1.5 -translate-x-1/2
                rounded-full bg-muted-foreground/45 ring-2 ring-background
                transition-colors
                group-hover:bg-primary/60
              "
              aria-hidden="true"
            />

            <!-- Date range -->
            <p
              class="
                text-[11px] font-medium text-muted-foreground/90 tabular-nums
              "
            >
              {{ item.period }}
            </p>

            <!-- Role / certification title -->
            <p class="mt-1 text-base font-normal tracking-tight text-foreground">
              {{ item.label }}
            </p>

            <!-- Company / institution — link when a URL is available -->
            <NuxtLink
              v-if="item.url"
              :to="item.url"
              target="_blank"
              external
              class="
                mt-1 inline-block text-sm text-muted-foreground underline
                decoration-primary/25 underline-offset-[3px] transition-colors
                hover:text-foreground hover:decoration-primary/45
              "
            >
              {{ item.subLabel }}
            </NuxtLink>

            <p
              v-else
              class="mt-1 text-sm text-muted-foreground"
            >
              {{ item.subLabel }}
            </p>
          </Motion>

        </Motion>
      </AnimatePresence>

    </div>

  </Section>
</template>
