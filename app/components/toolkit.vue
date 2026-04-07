<script setup lang="ts">
import data from '~/data/toolkit.json'

/** All toolkit entries from the data file — technology tags shown in the section. */
const toolkit = data.items
</script>

<template>
  <Section
    label="Toolkit"
    title="The languages, frameworks, and tools I reach for when building — things I've used enough to trust in production."
  >

    <!-- Staggered technology badge list -->
    <ul
      class="flex flex-wrap gap-2"
      role="list"
    >

      <Motion
        v-for="tool, index in toolkit"
        :key="index"
        as="li"
        :initial="{ opacity: 0, y: 10 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.35, delay: Math.min(index, 5) * 0.07, ease: [0.25, 0, 0, 1] }"
        :in-view-options="{ once: true, margin: '-30px' }"
      >

        <!-- Each tool links to its official site and renders as an outline badge -->
        <Button
          as-child
          size="sm"
          variant="outline"
        >
          <NuxtLink
            :to="tool.url"
            target="_blank"
            external
          >
            {{ tool.name }}
          </NuxtLink>
        </Button>

      </Motion>

    </ul>

  </Section>
</template>
