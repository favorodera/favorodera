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
    aria-label="Contact"
  >
    <h2 class="text-lg">
      Find me on
    </h2>

    <nav
      aria-label="Social media links"
      class="my-0 flex flex-wrap items-center justify-start gap-3"
    >

      <ul class="my-0 flex flex-wrap items-center justify-start gap-3">
        <li
          v-for="social in socials"
          :key="social.label"
        >
          <NuxtLink
            :to="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="
              w-fit text-sm text-muted-foreground transition-colors duration-300
              hover:text-foreground
            "
          >
            {{ social.label }}
            <span class="sr-only">(opens in a new tab)</span>
          </NuxtLink>
        </li>
      </ul>
  
    </nav>

  </section>

</template>
