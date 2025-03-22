<template>

  <main class="w-full flex flex-auto flex-col items-center justify-center">

    <NuxtPage />

  </main>

</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: title => `Favorodera | ${title}`,
  profileFirstName:'Favour',
  profileLastName:'Emeka',
  profileGender:'Male',
  ogType:'profile',
  twitterCard:'summary_large_image',
  twitterCreator:'@favorodera',
  twitterSite:'@favorodera',
})

</script>

<style scoped lang="css">

</style>
