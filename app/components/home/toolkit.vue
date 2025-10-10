<template>

  <ul class="flex flex-wrap gap-4">

    <li
      v-for="tool, index in toolkit"
      :key="index"
    >

      <NuxtLink
        :to="tool.url"
        target="_blank"
        external
        class="flex items-center gap-1.5 rounded-lg border border-dashed border-transparent px-2 py-1.5 text-sm transition-all hover:border-inverted"
      >

        <Icon
          :name="tool.icon"
          class="size-4"
        />

        {{ tool.label }}

      </NuxtLink>

    </li>

  </ul>

</template>

<script setup lang="ts">
const { data: toolkit } = await useAsyncData(
  'toolkit',
  () => queryCollection('toolkit').first(),
  {
    transform: toolkit => toolkit?.toolkit,
  },
)
</script>

<style scoped>

</style>
