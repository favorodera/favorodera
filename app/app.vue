<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  meta: [
    { name: 'google-site-verification', content: 'qYU6PqljRftNzCNBLdEFxnKJKwH-Aj7aJ9CLp6itnhM' },
  ],
})
</script>

<template>

  <div
    aria-label="app"
    class="grid min-h-dvh w-full grid-cols-1 grid-rows-[1fr]"
  >

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Analytics />

  </div>

</template>
