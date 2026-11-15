<script setup lang="ts">
const slots = defineSlots<{
  action?: () => void
  default?: () => void
}>()

const props = withDefaults(defineProps<{ title?: string }>(), {
  title: undefined,
})

const headingId = useId()
</script>

<template>
  <section
    :aria-labelledby="props.title ? headingId : undefined"
    class="mbs-10 inline-full"
  >
    <div
      v-if="props.title || slots.action"
      class="mbe-4 flex items-baseline justify-between gap-4"
    >
      <h2
        v-if="props.title"
        :id="headingId"
        class="text-xs/tight tracking-widest text-muted-foreground uppercase"
      >
        {{ props.title }}
      </h2>

      <slot name="action" />
    </div>

    <slot />
  </section>
</template>
