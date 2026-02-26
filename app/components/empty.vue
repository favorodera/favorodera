<script setup lang="ts">
defineProps<{
  title: string
  description: string
  actions?: {
    label: string
    onClick: () => void
  }[]
}>()
</script>

<template>
  <section
    class="
      grid auto-rows-min grid-cols-1 grid-rows-3 place-items-center gap-1
      self-center p-4 text-center
    "
  >

    <h1 class="tabular-nums">
      {{ title }}
    </h1>

    <p class="mt-0 text-muted-foreground">
      {{ description }}
    </p>

    <menu
      v-if="actions"
      class="grid auto-rows-min grid-cols-2 gap-4"
    >

      <li
        v-for="action in actions"
        :key="action.label"
        :class="{
          'col-span-full': actions.length < 2,
        }"
      >
        <button
          class="
            button w-full bg-secondary text-secondary-foreground
            hover:bg-secondary/80
          "
          @click="action.onClick"
        >
          {{ action.label }}
        </button>
      
      </li>

    </menu>

  </section>
</template>
