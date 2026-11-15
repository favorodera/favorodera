<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <BaseSection title="Projects">
    <BaseCollapsibleList
      v-slot="{ item }"
      :items="projects"
    >
      <NuxtLink
        :to="item.url"
        target="_blank"
        class="
          text-sm

          hover:*:underline
        "
      >
        <h3>
          {{ item.title }}
        </h3>

        <p class="text-muted-foreground">
          {{ item.description }}
        </p>
      </NuxtLink>
    </BaseCollapsibleList>
  </BaseSection>
</template>
