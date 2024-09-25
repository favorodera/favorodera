<template>
  <section class="grid w-full items-center justify-between gap-y-10">
    <LazyHomeHeader />
    <LazyHomeAbout />
    <LazyHomeRecentWorks />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>
