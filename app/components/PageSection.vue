<template>
  <section
    class="flex flex-col gap-y-3"
    :aria-labelledby="`${title}-Heading`"
  >
    <h2
      :id="`${title}-Heading`"
      class="text-xl font-bold"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>()
</script>
