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

const motion = motionUtils()
</script>

<template>
  <Motion
    as="section"
    :aria-labelledby="ariaLabel"
    :variants="motion.containerVariants"
    initial="hidden"
    animate="visible"
  >
    <!-- Heading -->
    <Motion
      as="div"
      :aria-labelledby="ariaLabel"
      :variants="motion.containerVariants"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="{ once: true, margin: '-10% 0% -10% 0%' }"
      class="flex items-center gap-4"
    >
      <!-- Left Hand Side: Index & Title -->
      <h2
        :id="ariaLabel"
        class="flex-none overflow-hidden text-2xs"
      >
        <Motion
          as="span"
          class="block"
          :variants="motion.fadeInFromBottom"
        >
          <span
            aria-hidden="true"
            class="tabular-nums"
          >
            {{ `${props.leading.index} /` }}
          </span>
          {{ props.leading.title }}
        </Motion>
      </h2>

      <!-- Center Line Layout Divider -->
      <Motion
        as-child
        class="flex-1 origin-left bg-border block-px"
        :variants="motion.scaleInFromLeft"
      >
        <Separator />
      </Motion>

      <!-- Right Hand Side: Trailing Content -->
      <span
        v-if="props.trailing"
        class="block overflow-hidden"
      >
        <Motion
          as="span"
          class="block flex-none text-2xs tabular-nums"
          :variants="motion.fadeInFromBottom"
        >
          {{ props.trailing }}
        </Motion>
      </span>
    </Motion>

    <slot />
  </Motion>
</template>
