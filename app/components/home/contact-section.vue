<script setup lang="ts">

const socials = [
  { label: 'GitHub', url: 'https://github.com/favorodera' },
  { label: 'X', url: 'https://x.com/favorodera' },
  { label: 'Facebook', url: 'https://facebook.com/favorodera' },
]

</script>

<template>

  <section
    class="grid grid-cols-1"
    aria-label="contact section"
  >
    <h2 class="text-lg">
      Find me on
    </h2>

    <ul
      aria-label="socials container"
      class="my-0 flex flex-wrap items-center justify-start gap-3"
    >

      <li
        v-for="social in socials"
        :key="social.label"
      >
        <NuxtLink
          :to="social.url"
          class="
            w-fit text-sm text-muted-foreground transition-colors duration-300
            hover:text-foreground
          "
        >
          {{ social.label }}
        </NuxtLink>
      </li>
  
    </ul>

  </section>

</template>
