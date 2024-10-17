<template>
  <section class="w-full flex flex-col items-center justify-between gap-y-10">
    <LazyHomeHeader />
    <LazyHomeAbout />
    <LazyHomeRecentWorks />
    <LazyHomeEducation />
    <!-- <LazyHomeExperience /> NO EXPERIENCE YET -->
    <LazyHomeContact />
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>
