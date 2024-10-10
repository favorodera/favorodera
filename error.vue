<template>
  <section class="m-auto h-screen w-full flex items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <div class="flex items-center gap-2">
        <h1>404</h1>
        <Divider
          layout="vertical"
          type="solid"
          pt:root:class=" b-solid b-1 h-10"
        />
        <h2 class="text-sm">
          This page could not be found
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Favorodera | Error',
})
</script>
