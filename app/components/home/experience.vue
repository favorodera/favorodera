<script setup lang="ts">
import { experience } from '~/data/experience'
</script>

<template>
  <BaseSection title="Experience">
    <template #action>
      <BaseButton
        as-child
        variant="text"
        class="text-[10px] tracking-widest uppercase"
      >
        <NuxtLink
          external
          to="/resume"
          target="_blank"
          rel="noopener"
        >
          View resume
        </NuxtLink>
      </BaseButton>
    </template>

    <BaseCollapsibleList
      v-slot="{ item }"
      :items="experience"
    >
      <article>
        <h3 class="text-sm">
          {{ item.role }}
        </h3>

        <div
          class="
            flex flex-wrap items-baseline justify-between gap-x-6 text-xs
            text-muted-foreground inline-full
          "
        >
          <span>
            {{ item.company }}
          </span>

          <span class="tabular-nums">
            {{ item.from }} {{ item?.to ?`- ${item.to}`:'' }}
          </span>
        </div>
      </article>
    </BaseCollapsibleList>
  </BaseSection>
</template>
