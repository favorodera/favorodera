<script setup lang="ts">
import { computed } from 'vue'
import { type IconProps, iconVariants } from '.'

const props = defineProps<IconProps>()

const { root } = iconVariants()

const classNames = computed(() => root({
  class: props.class,
}))
</script>

<template>
  <NuxtIcon
    data-slot="icon"
    v-bind="props"
    :class="classNames"
    :name="name"
  />
</template>
