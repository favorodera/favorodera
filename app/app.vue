<script setup lang="ts">
const appConfig = useAppConfig()

useSeoMeta({
  charset: 'utf8',
  colorScheme: 'dark light',
  description: () => appConfig.seoDescription,
  googleSiteVerification: 'qYU6PqljRftNzCNBLdEFxnKJKwH-Aj7aJ9CLp6itnhM',
  ogDescription: () => appConfig.seoDescription,
  ogTitle: () => appConfig.seoTitle,
  ogUrl: () => appConfig.siteUrl,
  twitterCard: 'summary_large_image',
  twitterCreator: '@favorodera',
  twitterDescription: () => appConfig.seoDescription,
  twitterSite: '@favorodera',
  twitterTitle: () => appConfig.seoTitle,
  viewport: 'width=device-width, initial-scale=1',
})

defineOgImage('Image.takumi')
</script>

<template>
  <div class="min-block-dvh min-inline-full">
    <NuxtLink
      to="#main"
      class="
        fixed inset-s-4 inset-bs-4 z-50 -translate-y-[calc(100%+1rem)]

        focus:translate-y-0
      "
    >
      Skip to main content
    </NuxtLink>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
