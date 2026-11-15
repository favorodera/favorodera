<script setup lang="ts">
import { seo } from '~/data/seo'

useHead({ titleTemplate: '%s' })

useSeoMeta({
  colorScheme: 'dark light',
  description: seo.description,
  themeColor: [
    { content: '#fcfcfc', media: '(prefers-color-scheme: light)' },
    { content: '#000000', media: '(prefers-color-scheme: dark)' },
  ],
  title: seo.title,
  twitterCard: 'summary_large_image',
  twitterCreator: '@favorodera',
  twitterSite: '@favorodera',
})

defineOgImage('Image.takumi', [
  { key: 'og' },
  { height: 800, key: 'whatsapp', width: 800 },
])
</script>

<template>
  <div
    class="
      mx-auto flex flex-col items-center px-5 py-10 inline-full max-inline-lg
      min-block-dvh

      md:px-8 md:pbs-22 md:pbe-14
    "
  >
    <SiteHeader />

    <main class="flex-1 inline-full">
      <HomeIntro />

      <HomeExperience />

      <HomeProjects />
    </main>

    <SiteFooter />
  </div>
</template>
