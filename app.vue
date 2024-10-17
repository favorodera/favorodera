<template>
  <NuxtLoadingIndicator color="white" />
  <section
    class="min-h-screen w-full flex flex-col items-center justify-between gap-y-10"
  >
    <LazyNuxtPage />

    <LazyFooter />

    <ScrollTop />
  </section>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Favour Emeka',
  ogTitle: 'Favour Emeka',
  description: 'Favour Emeka | Vue/Nuxt Frontend Developer',
  ogDescription: 'Favour Emeka | Vue/Nuxt Frontend Developer',
  ogUrl: 'https://favorodera.vercel.app',
  ogSiteName: 'Favour Emeka | Vue/Nuxt Frontend Developer',
  ogImage: {
    url: 'https://favorodera.vercel.app/images/avatar.jpg',
    alt: 'Favour Emeka | Vue/Nuxt Frontend Developer',
    type: 'image/jpeg',
    width: 1200,
    height: 630,
  },
  ogType: 'profile',
  ogLocale: 'en_NG',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Favour Emeka | Vue/Nuxt Frontend Developer',
  twitterDescription: 'Favour Emeka | Vue/Nuxt Frontend Developer',
  twitterImage: {
    url: 'https://pbs.twimg.com/profile_images/1781932691182522368/8I_wmKdt_400x400.jpg',
    alt: 'Favour Emeka | Vue/Nuxt Frontend Developer',
  },
  twitterSite: '@favorodera',
  twitterCreator: '@favorodera',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: 'yes',
    viewportFit: 'cover',
  },
  charset: 'UTF-8',
})
useHead({
  titleTemplate(title) {
    return title ? `Favour Emeka | ${title}` : 'Favour Emeka'
  },
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
    },
  ],
})
</script>
