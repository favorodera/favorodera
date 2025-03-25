<template>

  <div
    v-for="(experience, index) in experiences"
    :key="index"
    class="w-full flex items-center gap-2"
  >
  
    <NuxtIcon
      :name="experience.icon"
      class="size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-brand-textGray"
    />
  
    <div class="flex flex-col gap-1">
  
      <div class="flex flex-wrap items-center gap-2">

        <h3 class="text-start">
          {{ experience.firm }}
        </h3>

        <span class="rounded-sm bg-brand-elevate px-1 py-0.5 text-xs">{{ experience.type }}</span>
        <span class="rounded-sm bg-brand-elevate px-1 py-0.5 text-xs">{{ experience.duration }}</span>

      </div>
  
      <p class="text-start text-[clamp(1rem,1.8vw,1.1rem)] text-brand-textGray">
        {{ experience.role }}
      </p>
  
    </div>

  
  </div>
  
</template>
  
<script setup lang="ts">
const { data: experiences } = await useLazyAsyncData(
  'experiences',
  () => queryCollection('experiences').order('stem', 'DESC').all(),
)

</script>
  
