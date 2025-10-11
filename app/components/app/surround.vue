<template>
  <div class="mt-8 grid auto-cols-min grid-cols-[1fr_auto] gap-6 text-sm lg:mt-12">

    <UButton
      :to="left.path"
      :label="left.text"
      color="neutral"
      variant="link"
      leading
      icon="ph:caret-left"
      active
      :ui="{ base: 'p-0 place-self-start', leadingIcon: 'size-4' }"
    />


    <UButton
      v-if="right"
      :to="right.path"
      :label="right.text"
      color="neutral"
      variant="link"
      trailing
      icon="ph:caret-right"
      active
      :ui="{ base: 'p-0 place-self-end', trailingIcon: 'size-4' }"
    />

  </div>

</template>

<script setup lang="ts">
defineProps<{
  right?: {
    text: string
    path: string
  }
  left: {
    text: string
    path: string
  }
}>()

</script>
