<template>

  <section class="space-y-4">
  
    <h2>
      Tech Stack
    </h2>
  
    <section class="w-full flex flex-wrap gap-4">

      <NuxtLink
        v-for="(item, index) in stack"
        :key="index"
        :to="item.url"
        target="_blank"
        class="w-max flex items-center gap-2 rounded-md bg-brand-elevate px-2 py-1 hover:bg-brand-elevate/70"
      >

        <NuxtIcon
          :name="item.icon"
          class="shrink-0"
        />

        <span>{{ item.name }}</span>

      </NuxtLink>

    </section>
  
  </section>
  
</template>

<script setup lang="ts">
const { data: stack } = await useLazyAsyncData(
  'stack',
  () => queryCollection('stackAndSocials').all(),
  { transform: data => data[0].stack },
)
</script>
