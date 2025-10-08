<template>
  <div class="mx-auto mt-8 grid max-w-screen-md gap-6 text-sm md:grid-cols-2 lg:mt-12">

    <div class="order-1 max-w-full place-self-start overflow-hidden md:order-0">

      <UButton
        :to="left.path"
        :label="left.text"
        color="neutral"
        variant="link"
        leading
        icon="ph:arrow-left"
        active
        :ui="{ base: 'p-0', leadingIcon: 'size-4' }"
      />

    </div>

    <div
      v-if="right"
      class="flex items-center justify-center gap-2 md:justify-end"
    >

      <UButton
        :to="right.path"
        :label="right.text"
        color="neutral"
        variant="link"
        trailing
        icon="ph:arrow-right"
        active
        :ui="{ base: 'p-0', trailingIcon: 'size-4' }"
      />

    </div>

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
