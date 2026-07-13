<script setup lang="ts">
import profile from '~/data/profile.json'
</script>

<template>
  <section
    id="contact"
    class="
      section-padding grid gap-6

      sm:gap-8
    "
  >
    <h2 class="text-sm text-muted-foreground">
      CONTACT
    </h2>

    <h3
      class="
        font-serif text-4xl

        sm:text-5xl

        lg:text-6xl
      "
    >
      Let's work together
    </h3>

    <p class="text-[15px] text-muted-foreground">
      Have a project in mind, or just want to chat? I'm always open to interesting opportunities and conversations.
    </p>

    <NuxtLink
      :href="`mailto:${profile.email}`"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`Email ${profile.email}`"
      class="
        underline-offset-4 font-serif text-2xl decoration-1 outline-none
        inline-fit

        hover:underline

        sm:text-3xl

        focus-visible:ring-2 focus-visible:ring-ring
      "
    >
      Send me a Mail
    </NuxtLink>

    <ul class="flex gap-8 items-center flex-wrap">
      <li
        v-for="social, index in profile.socials"
        :key="index"
      >
        <NuxtLink
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="
            underline-offset-4 uppercase text-sm text-muted-foreground
            duration-300 outline-none

            hover:underline hover:text-foreground

            focus-visible:ring-2 focus-visible:ring-ring
          "
        >
          {{ social.label }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
