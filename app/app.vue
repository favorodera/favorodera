<template>
  <UApp
    tabindex="-1"
    :toaster="{
      expand: false,
      position: 'top-center',
      progress: false,
      duration: 3000,
    }"
  >
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator
      color="white"
      error-color="red"
    />

    <Header />
    
    <UMain>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      
    </UMain>

    <Footer />

  </UApp>

</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Favour Emeka',
  titleTemplate: '%s %separator Favour Emeka',
  description: 'Frontend Web Developer specializing in Vue.js, Nuxt.js and Typescript.',
  ogTitle: 'Favour Emeka',
  ogDescription: 'Frontend Web Developer specializing in Vue.js, Nuxt.js and Typescript.',
  ogImage: '[og:image]',
  ogUrl: 'https://favorodera.vercel.app/',
  twitterTitle: 'Favour Emeka',
  twitterDescription: 'Frontend Web Developer specializing in Vue.js, Nuxt.js and Typescript.',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary_large_image',
  themeColor: [
    { content: '#000000', media: '(prefers-color-scheme: dark)' },
    { content: '#ffffff', media: '(prefers-color-scheme: light)' },
  ],
})
</script>
