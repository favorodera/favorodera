<script setup lang="ts">
import experience from '#data/experience.json'

const ALWAYS_VISIBLE = 3

const visibleItems = computed(() => {
  return experience.slice(0, ALWAYS_VISIBLE)
})

const remainingItems = computed(() => {
  return experience.slice(ALWAYS_VISIBLE)
})
</script>

<template>
  <Section
    :leading="{
      index:'01',
      title:'Experience'
    }"
    :trailing="String(experience.length).padStart(2, '0')"
  >
    <Collapsible :show-trigger="remainingItems.length > 0">
      <template #visible="{open}">
        <ExperienceItem
          v-for="item, index in visibleItems"
          :key="item.id"
          :item="item"
          :index="index"
          :is-last="index === visibleItems.length - 1? !(open && remainingItems.length > 0) : false"
        />
      </template>

      <template #hidden>
        <ExperienceItem
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
