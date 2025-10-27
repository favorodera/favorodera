<template>
  <div
    class="flex h-full w-full flex-col justify-between overflow-hidden bg-black p-14 "
    style="font-family: 'Geist'"
  >
  
    <div class="flex flex-col leading-tight">

      <h1 class=" text-5xl font-bold text-white">
        {{ title }}
      </h1>

      <p class=" text-xl font-medium text-gray-300">
        {{ description }}
      </p>

    </div>
  

    <div class="flex size-20 items-center justify-center overflow-hidden rounded-full">

      <NuxtImg
        src="/avatar.jpg"
        width="80"
        height="80"
        fit="cover"
      />

    </div>
  
  
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
