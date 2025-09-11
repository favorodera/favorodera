<template>
  <div
    class="w-full h-full flex flex-col items-center justify-center bg-[#090909] text-white p-6 sm:p-10"
  >
    <NuxtImg
      :src="avatar"
      width="128"
      height="128"
      :alt="`Avatar of ${name}`"
      class="rounded-xl shadow-lg"
      loading="eager"
      fetchpriority="high"
    />

    <h1
      class="mt-4 text-3xl font-bold tracking-tight leading-none text-center"
    >
      {{ name }}
    </h1>

    <p
      class="text-xl text-center text-white/80 max-w-[600px] leading-snug"
    >
      {{ headline }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name?: string
    headline?: string
    avatar?: string
  }>(),
  {
    name: 'John Doe',
    headline: 'Crafting digital experiences that inspire.',
    avatar: 'https://favorodera.vercel.app/avatar.png',
  },
)
</script>

<style scoped>
</style>
