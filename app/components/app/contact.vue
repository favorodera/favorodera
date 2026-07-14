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
    <Motion
      as="h2"
      :initial="{ opacity: 0, x: -20 }"
      :while-in-view="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
      :in-view-options="{ once: true, margin: '-50px' }"
      class="text-sm text-muted-foreground"
    >
      CONTACT
    </Motion>

    <Motion
      as="h3"
      :initial="{ opacity: 0, y: 50, filter: 'blur(8px)' }"
      :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
      :transition="{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }"
      :in-view-options="{ once: true, margin: '-80px' }"
      class="
        font-serif text-4xl

        sm:text-5xl

        lg:text-6xl
      "
    >
      Let's work together!
    </Motion>

    <Motion
      as="p"
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
      :in-view-options="{ once: true, margin: '-50px' }"
      class="text-[15px] text-muted-foreground"
    >
      Have a project in mind, or just want to chat? I'm always open to interesting opportunities and conversations.
    </Motion>

    <Motion
      as="div"
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }"
      :in-view-options="{ once: true, margin: '-50px' }"
    >
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
          <AppScrambleText
            init-text="Send me a Mail"
            reveal-text="favorodera@gmail.com"
          />
        </NuxtLink>
      </Button>
    </Motion>

    <ul class="flex gap-8 items-center flex-wrap">
      <li
        v-for="social, index in profile.socials"
        :key="index"
      >
        <Motion
          as="div"
          :initial="{ opacity: 0, y: 10 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }"
          :in-view-options="{ once: true, margin: '-30px' }"
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
        </Motion>
      </li>
    </ul>
  </section>
</template>
