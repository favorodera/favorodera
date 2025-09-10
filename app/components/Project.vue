<template>
  <UCard
    :ui="{
      root: 'divide-y-0',
      header: 'font-sans font-semibold tracking-tight sm:px-3 p-2 sm:p-3',
      body: 'p-2 sm:p-3 sm:px-3 sm:py-0 text-pretty text-xs',
      footer: 'sm:px-3 p-2 sm:p-3 flex gap-1.5 flex-wrap',
    }"
  >
  
    <template #header>
      <NuxtLink
        :to="url"
        class="flex gap-1 items-center hover:underline w-fit"
        target="_blank"
      >
        {{ name }}
        <UIcon
          name="lucide:external-link"
          size="15"
        />
      </NuxtLink>
    </template>

    {{ description }}
    <template #footer>
      <UBadge
        v-for="(technology, index) in technologies"
        :key="index"
        :label="technology"
        variant="soft"
        size="sm"
      />
    </template>
  </UCard>
</template>

<script lang="ts" setup>
defineProps<{
  name: string
  description: string
  technologies: string[]
  url: string
}>()
</script>
