<script setup lang="ts">
/**
 * Destructure socials from the typed app config.
 * Used to render the primary CTA (X / Twitter DM) and the
 * secondary social links row (all channels except X).
 */
const { profile: { socials } } = useAppConfig()
</script>

<template>
  <Section
    label="Contact"
    title="Open to good conversations and the right opportunities."
  >

    <!-- Body copy  -->
    <Motion
      :initial="{ opacity: 0, y: 8 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.35, delay: 0.08, ease: [0.25, 0, 0, 1] }"
      :in-view-options="{ once: true }"
      as="p"
      class="text-sm/relaxed text-muted-foreground"
    >
      If you're working on something interesting, need a frontend engineer who cares about the craft, or just want to talk shop — my inbox is open. Pick whatever channel works for you below.
    </Motion>

    <!-- CTA row: primary button + secondary social links  -->
    <Motion
      :initial="{ opacity: 0, y: 8 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.35, delay: 0.16, ease: [0.25, 0, 0, 1] }"
      :in-view-options="{ once: true }"
      class="
        mt-4 flex flex-col gap-3
        sm:flex-row sm:items-center sm:justify-between
      "
    >
      <!-- Primary CTA — direct message on X -->
      <Button
        size="sm"
        class="w-fit"
      >
        <Icon :name="socials.x.icon" />
        <NuxtLink
          external
          target="_blank"
          :to="socials.x.url"
        >
          Message on X
        </NuxtLink>
      </Button>

      <!-- Secondary links — all other channels (email, github, linkedin, …) -->
      <div
        class="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium tracking-wide"
      >
        <NuxtLink
          v-for="social, key in Object.fromEntries(Object.entries(socials).filter(([key]) => key !== 'x'))"
          :key
          external
          target="_blank"
          :to="social.url"
          class="
            inline-flex cursor-pointer items-center gap-1 tracking-normal
            text-muted-foreground uppercase underline-offset-2 transition-colors
            hover:text-foreground
          "
        >
          <Icon
            :name="social.icon"
            class="size-3 shrink-0"
          />
          {{ key }}
        </NuxtLink>
      </div>
    </Motion>

  </Section>
</template>
