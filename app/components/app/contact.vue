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

    <Button
      as-child
      variant="link"
      class="
        font-serif text-2xl inline-fit capitalize

        sm:text-3xl
      "
    >
      <NuxtLink
        :href="`mailto:${profile.email}`"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Send me a Mail via ${profile.email}`"
      >
        Send me a Mail
      </NuxtLink>
    </Button>

    <ul class="flex gap-8 items-center flex-wrap">
      <li
        v-for="social, index in profile.socials"
        :key="index"
      >
        <Button
          as-child
          variant="link"
          class="
            text-muted-foreground

            hover:text-foreground
          "
        >
          <NuxtLink
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ social.label }}
          </NuxtLink>
        </Button>
      </li>
    </ul>
  </section>
</template>
