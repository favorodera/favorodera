<template>

  <section class="space-y-4">
    
    <h1>
      Find or Contact me on
    </h1>
    
    <section class="w-full flex flex-wrap gap-4">
  
      <NuxtLink
        v-for="(item, index) in socials"
        :key="index"
        :to="item.url"
        target="_blank"
        class="w-max flex items-center gap-2 rounded-md bg-brand-elevate px-2 py-1 text-brand-text hover:bg-brand-elevate/70"
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
const { data: socials } = await useLazyAsyncData(
  'socials',
  () => queryCollection('stackAndSocials').all(),
  { transform: data => data[0].socials },
)
</script>
  
