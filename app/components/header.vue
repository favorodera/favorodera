<script setup lang="ts">
import data from '~/data/projects.json'

/**
 * Picks the most recent project (index 0) to surface in the hero bio line.
 * Returns `undefined` if the projects list is empty.
 */
const latestProject = data.items.at(-1)

/** Profile data from app.config.ts — drives the avatar, name, role, and CTAs. */
const { profile } = useAppConfig()

/**
 * Returns Motion animation props for a staggered fade-up entrance.
 *
 * @param delay - Extra delay in seconds added on top of the base transition.
 * @returns Motion `initial`, `animate`, and `transition` prop objects.
 *
 * @example
 * // avatar block fades in at t=0, bio at t=0.08, CTA at t=0.24
 * <Motion v-bind="fade(0.08)" />
 */
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.25, 0, 0, 1] as const },
})
</script>

<template>
  <header
    aria-label="Hero section"
    class="space-y-5"
  >

    <!-- ── Avatar + name / role / location ───────────────────────────────────── -->
    <Motion
      v-bind="fade(0)"
      as="div"
      role="group"
      aria-label="Avatar, name, role and location"
      class="
        flex gap-4
        sm:items-start
      "
    >

      <!-- Circular avatar with primary-colour overlay for brand tint -->
      <Avatar
        class="
          relative size-16 shrink-0 overflow-hidden rounded-full ring-1
          ring-border/50
        "
      >
        <AvatarImage
          :src="profile.avatar"
          :alt="profile.name"
          height="64"
          width="64"
          class="object-cover contrast-[1.06] grayscale"
          loading="lazy"
        />
        <AvatarFallback>{{ profile.initials }}</AvatarFallback>

        <!-- Decorative colour tint overlay — aria-hidden so it's skipped by AT -->
        <span
          class="
            pointer-events-none absolute inset-0 bg-primary mix-blend-color
          "
          aria-hidden="true"
        />
      </Avatar>

      <!-- Name, role and location text block -->
      <div
        class="min-w-0 space-y-2"
        role="group"
        aria-label="Name, Role and Location"
      >
        <h1
          class="
            text-2xl font-normal tracking-tight
            md:text-[1.65rem]
          "
        >
          {{ profile.name }}
        </h1>
        <p
          class="
            text-[11px] font-medium tracking-[0.14em] text-muted-foreground
            uppercase
          "
        >
          {{ profile.role }} · {{ profile.location }}
        </p>
      </div>

    </Motion>

    <!-- Bio paragraph 1 -->
    <Motion
      v-bind="fade(0.08)"
      as="p"
      class="
        text-sm/relaxed text-muted-foreground
        md:text-base/relaxed
      "
    >
      Based in Nigeria, I build developer tooling and production interfaces that hold up at scale.
    </Motion>

    <!-- Bio paragraph 2: currently working on (latest project) -->
    <Motion
      v-if="latestProject"
      v-bind="fade(0.16)"
      as="p"
      class="
        text-sm/relaxed text-muted-foreground
        md:text-base/relaxed
      "
    >
      Currently working on <NuxtLink
        :to="latestProject.url"
        target="_blank"
        external
        class="
          text-sm/relaxed text-foreground underline decoration-primary/30
          underline-offset-[3px] transition-colors
          hover:decoration-primary/55
          md:text-base/relaxed
        "
      >
        {{ latestProject.name }}
      </NuxtLink> — {{ latestProject.description }}
    </Motion>

    <!-- CTA buttons + availability note -->
    <Motion
      v-bind="fade(0.24)"
      as="div"
      role="group"
      aria-label="Action Buttons and Links"
      class="
        flex flex-col gap-2.5
        sm:flex-row sm:flex-wrap sm:items-center
      "
    >

      <!-- Primary + secondary action buttons -->
      <div
        class="flex flex-wrap gap-2"
        role="group"
        aria-label="Action Buttons"
      >
        <Button
          size="sm"
          as-child
        >
          <NuxtLink
            external
            :to="profile.socials.email.url"
            target="_blank"
          >
            <Icon :name="profile.socials.email.icon" />
            Get in touch
          </NuxtLink>
        </Button>

        <Button
          size="sm"
          as-child
          variant="outline"
        >
          <NuxtLink
            external
            :to="profile.socials.github.url"
            target="_blank"
          >
            <Icon :name="profile.socials.github.icon" />
            GitHub
          </NuxtLink>
        </Button>
      </div>

      <!-- Availability status note -->
      <p
        class="
          text-xs/tight text-muted-foreground
          sm:pl-1
        "
      >
        Open to aligned conversations
      </p>

    </Motion>

  </header>
</template>
