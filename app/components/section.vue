<script setup lang="ts">
/**
 * Generic section wrapper used by Projects, Toolkit, Timeline, and Contact.
 *
 * Renders a visually consistent section with:
 *  - An animated separator above
 *  - A header row with a label tag, optional action slot, and an h2 title
 *  - A default slot for the section body content
 *
 * @prop label - Short uppercase label shown above the title (e.g. "Projects").
 *               Also used as the `aria-label` on the `<section>` element.
 * @prop title - Descriptive subtitle rendered as an `<h2>`.
 */
defineProps<{
  label: string
  title: string
}>()
</script>

<template>
  <section
    class="mt-10 scroll-mt-4"
    :aria-label="label"
  >

    <!-- Animated separator rule above each section -->
    <Motion
      as-child
      :initial="{ opacity: 0 }"
      :while-in-view="{ opacity: 1 }"
      :transition="{ duration: 0.3, ease: [0.25, 0, 0, 1] }"
      :in-view-options="{ once: true }"
      class="mb-8 bg-border/60"
    >
      <Separator />
    </Motion>

    <!-- Section header: label + optional action slot + title -->
    <Motion
      as="div"
      :initial="{ opacity: 0, y: 8 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.3, ease: [0.25, 0, 0, 1] }"
      :in-view-options="{ once: true, margin: '-20px' }"
      class="mb-5 space-y-2"
      role="group"
      :aria-label="`${label} section header`"
    >

      <div
        class="
          flex flex-col gap-3
          sm:flex-row sm:items-end sm:justify-between
        "
      >
        <!--
          Decorative uppercase label tag.
          aria-hidden because the parent <section> already carries the same
          text as its aria-label.
        -->
        <p
          aria-hidden="true"
          class="
            text-[11px] font-medium tracking-[0.14em] text-muted-foreground
            uppercase
          "
        >
          {{ label }}
        </p>

        <!-- Optional slot for section-level controls (e.g. tab list in Timeline) -->
        <slot name="action" />
      </div>

      <!-- Section subtitle / description -->
      <h2
        class="
          text-sm/relaxed font-normal tracking-tight text-muted-foreground
          md:text-base/relaxed
        "
      >
        {{ title }}
      </h2>
    </Motion>

    <!-- Section body -->
    <slot />

  </section>
</template>
