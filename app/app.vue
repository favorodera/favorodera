<script setup lang="ts">
useSeoMeta({
  title: 'Favour Emeka — Frontend Engineer',
  description: 'Frontend engineer based in Nigeria building interfaces that hold up at scale.',
  ogTitle: 'Favour Emeka — Frontend Engineer',
  ogDescription: 'Frontend engineer based in Nigeria building interfaces that hold up at scale.',
  ogImage: 'https://myopengraph.com/api/v1/render/bd9686a9-86b0-49f0-91eb-96645db5e055',
  ogUrl: 'https://favorodera.vercel.app',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Favour Emeka — Frontend Engineer',
  twitterDescription: 'Frontend engineer based in Nigeria building interfaces that hold up at scale.',
  twitterImage: 'https://myopengraph.com/api/v1/render/bd9686a9-86b0-49f0-91eb-96645db5e055',
})
</script>

<template>
  <!--
    Root app shell — provides the skip-link and the centred max-w-xl column.
    NuxtPage renders the active page (pages/index.vue) inside <main>.
  -->
  <div
    class="
      grid min-h-dvh w-full grid-cols-1 grid-rows-[1fr] place-content-center
    "
  >

    <!-- Skip-to-content link: visible only on keyboard focus (sr-only + focus:not-sr-only) -->
    <NuxtLink
      to="#main"
      class="
        sr-only
        focus:not-sr-only focus:absolute focus:z-100 focus:rounded-md
        focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium
        focus:text-primary-foreground focus:shadow-md focus:outline-none
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        focus-visible:ring-offset-background
      "
    >
      Skip to main content
    </NuxtLink>

    <!-- Main content column — max-width constrained and horizontally padded -->
    <main
      id="main"
      class="
        relative mx-auto grid size-full max-w-xl grid-cols-1 grid-rows-[1fr]
        place-content-center px-4 pt-9 pb-14
        md:px-6 md:pt-11 md:pb-16
      "
    >
      <!-- Announces route changes to screen readers -->
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>

  </div>
</template>
