<script setup lang="ts">
useSeoMeta({
  charset: 'utf8',
  colorScheme: 'dark light',
  description: 'Frontend engineer building accessible, type-safe interfaces with Vue, Nuxt, and TypeScript. Creator of CentoUI, NotForm, and other open-source tools.',
  googleSiteVerification: 'qYU6PqljRftNzCNBLdEFxnKJKwH-Aj7aJ9CLp6itnhM',
  ogDescription: 'Frontend engineer building accessible, type-safe interfaces with Vue, Nuxt, and TypeScript. Explore projects, OSS tools, and more.',
  ogTitle: 'Favour Emeka | Frontend Engineer',
  ogUrl: 'https://favorodera.vercel.app',
  themeColor: [
    {
      content: '#ffffff',
      media: '(prefers-color-scheme: light)',
    },
    {
      content: '#070707',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  twitterCard: 'summary_large_image',
  twitterCreator: '@favorodera',
  twitterDescription: 'Frontend engineer building accessible, type-safe interfaces with Vue, Nuxt, and TypeScript. Explore projects, OSS tools, and more.',
  twitterSite: '@favorodera',
  twitterTitle: 'Favour Emeka | Frontend Engineer',
  viewport: 'width=device-width, initial-scale=1',
})

defineOgImage('Image.takumi')
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
