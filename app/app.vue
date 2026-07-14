<script setup lang="ts">
useSeoMeta({
  description: 'Favour Emeka — Frontend Engineer building accessible, type-safe interface systems for Vue and Nuxt.',
  ogDescription: 'Frontend Engineer building accessible, type-safe interface systems for Vue and Nuxt.',
  ogImage: 'https://myopengraph.com/api/v1/render/bd9686a9-86b0-49f0-91eb-96645db5e055',
  ogTitle: 'Favour Emeka — Frontend Engineer',
  ogUrl: 'https://favorodera.vercel.app',
  title: 'Favour Emeka — Frontend Engineer',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Frontend Engineer building accessible, type-safe interface systems for Vue and Nuxt.',
  twitterImage: 'https://myopengraph.com/api/v1/render/bd9686a9-86b0-49f0-91eb-96645db5e055',
  twitterTitle: 'Favour Emeka — Frontend Engineer',
})
</script>

<template>
  <div class="min-inline-full min-block-dvh grid">
    <NuxtLink
      to="#main"
      class="
        fixed inset-bs-4 inset-s-4 -translate-y-[calc(100%+1rem)] z-50
        outline-none

        focus:translate-y-0 focus:ring-2 focus:ring-ring
      "
    >
      Skip to main content
    </NuxtLink>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
