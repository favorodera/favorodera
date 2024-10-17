<template>
  <section class="m-auto h-screen w-full flex items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-col items-center justify-center gap-4">
        <h1 class="text-center text-xl font-bold">
          {{ error?.statusCode }}|Error
        </h1>
        <h2 class="text-center text-sm font-semibold">
          {{ error?.message }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Favorodera | Error',
})
defineProps({
  error: {
    type: Object,
  },
})
</script>
