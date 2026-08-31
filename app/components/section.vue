<script setup lang="ts">
type Props = {
  leading: {
    index: string
    title: string
  }
  trailing?: string
}

const props = withDefaults(defineProps<Props>(), {
  trailing: undefined,
})

const ariaLabel = computed(() => {
  const title = props.leading.title.toLowerCase().replaceAll(' ', '-')

  return `${props.leading.index}-${title}`
})
</script>

<template>
  <section>
    <!-- Heading -->
    <div
      class="flex items-center gap-4"
    >
      <!-- Left Hand Side: Index & Title -->
      <h2
        :id="ariaLabel"
        class="flex-none text-2xs"
      >
        <span
          aria-hidden="true"
          class="tabular-nums"
        >
          {{ `${props.leading.index} /` }}
        </span>
        {{ props.leading.title }}
      </h2>

      <!-- Center Line Layout Divider -->
      <div
        role="separator"
        class="flex-1 bg-border block-px"
      />

      <!-- Right Hand Side: Trailing Content -->
      <span
        v-if="props.trailing"
        class="flex-none text-2xs tabular-nums"
      >
        {{ props.trailing }}
      </span>
    </div>

    <slot />
  </section>
</template>
