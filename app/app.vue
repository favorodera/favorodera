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
  <MotionConfig
    reduced-motion="user"
  >
    <div
      class="
        mx-auto grid grid-cols-1 gap-24 px-6 pbs-8 pbe-20 inline-full
        max-inline-2xl min-block-dvh

        sm:gap-32 sm:px-8
      "
    >
      <NuxtLink
        to="#main"
        class="
          fixed inset-s-4 inset-bs-4 z-50 -translate-y-[calc(100%+1rem)]

          focus:translate-y-0
        "
      >
        Skip to main content
      </NuxtLink>

      <Header />

      <main
        id="main"
        class="
          grid grid-cols-1 gap-24

          sm:gap-32
        "
      >
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  </MotionConfig>
</template>
