<template>

  <main class="w-full flex flex-[1_1_auto] flex-col gap-y-10">

    <ContentDoc
      path="/projects"
      tag="section"
      class="w-full flex flex-col gap-y-10"
    />

  </main>

</template>

<script setup lang="ts">
useHead({
  title: 'Projects',
})
</script>
