<script setup lang="ts">
useSeoMeta({
  colorScheme: 'dark light',
  googleSiteVerification: 'qYU6PqljRftNzCNBLdEFxnKJKwH-Aj7aJ9CLp6itnhM',
  twitterCard: 'summary_large_image',
  twitterCreator: '@favorodera',
  twitterSite: '@favorodera',
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
