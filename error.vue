<template>

  <section class="w-full flex flex-auto flex-col items-center justify-center gap-4">

    <h1 class="text-center text-4xl">
      {{ error.statusCode }}
    </h1>

    <p class="break-all text-center text-xl text-brand-textGray">
      {{ error.message }}
    </p>

    <button
      type="button"
      class="w-max flex items-center gap-2 rounded-md bg-brand-elevate px-2 py-1 font-medium hover:bg-brand-elevate/70"
      @click="navigateTo('/')"
    >
      <NuxtIcon
        name="i-hugeicons:home-01"
        class="size-5 shrink-0"
      />

      <span>HOME</span>

    </button>


  </section>

</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useHead({
  title: 'Favorodera | Error',
})

</script>
