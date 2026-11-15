<script setup lang="ts">
defineSlots<{ default: () => void }>()

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
    <h2
      v-if="props.title"
      :id="headingId"
      class="
        mbe-4 text-xs/tight tracking-widest text-muted-foreground uppercase
      "
    >
      {{ props.title }}
    </h2>

    <slot />
  </section>
</template>
