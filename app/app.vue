<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  meta: [
    { name: 'google-site-verification', content: 'qYU6PqljRftNzCNBLdEFxnKJKwH-Aj7aJ9CLp6itnhM' },
  ],
})

  
</script>

<template>

  <div>

    <NuxtPage />
    <Analytics />

  </div>

</template>
