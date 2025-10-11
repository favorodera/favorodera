<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-75 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-75 translate-y-4"
    mode="out-in"
  >

    <button
      v-if="showButton"
      type="button"
      title="Scroll to top"
      class="fixed right-6 bottom-6 z-50 cursor-pointer rounded-lg border border-dashed border-default p-2 transition-all hover:border-inverted"
      @click="y = 0"
    >

      <Icon
        name="ph:arrow-up-bold"
        class="size-5"
      />

    </button>

  </Transition>

</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll({
  behavior: 'smooth',
})

const showButton = computed(() => {
  if (import.meta.client) {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercentage = (y.value / scrollHeight) * 100
    return scrollPercentage > 50
  }
  return false
})
</script>

<style scoped>

</style>
