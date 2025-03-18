<template>

  <button
    v-for="(experience, index) in experiences"
    :key="index"
    type="button"
    class="flex items-start gap-2"
  >
  
    <NuxtIcon
      :name="experience.icon"
      class="size-[2.25rem] shrink-0"
    />
  
    <div class="flex flex-col gap-1">
  
      <div class="flex items-center gap-2">

        <h2 class="text-start text-xl font-medium">
          {{ experience.firm }}
        </h2>

        <span class="bg-brand-elevate rounded-sm px-1 py-0.5 text-xs">{{ experience.type }}</span>
        <span class="bg-brand-elevate rounded-sm px-1 py-0.5 text-xs">{{ experience.location }}</span>

      </div>
  
      <p class="text-start text-lg text-brand-textGray">
        {{ experience.role }}
      </p>
      
      <p class="text-start text-lg text-brand-textGray">
        {{ experience.duration }}
      </p>
  
    </div>

  
  </button>
  
</template>
  
<script setup lang="ts">
const { data: experiences } = await useLazyAsyncData(
  'experiences',
  () => queryCollection('experience').order('stem', 'DESC').all(),
)
  
</script>
  
