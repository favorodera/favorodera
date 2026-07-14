<script setup lang="ts">
import { animate } from 'motion-v'

const props = defineProps<{
  initText: string
  revealText: string
}>()

const displayedText = ref(props.initText)
const characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

let animationController: ReturnType<typeof animate> | undefined

const triggerScramble = (target: string) => {
  if (animationController) animationController.stop()

  animationController = animate(0, target.length, {
    duration: 0.3,
    ease: 'easeOut',
    onComplete: () => {
      displayedText.value = target
    },
    onUpdate: (latest) => {
      const iteration = Math.floor(latest)

      displayedText.value = [...target]
        .map((character, index) => {
          if (index < iteration) return target[index]
          return characterSet[Math.floor(Math.random() * characterSet.length)]
        })
        .join('')
    },
  })
}

const handlePointerEnter = () => triggerScramble(props.revealText)
const handlePointerLeave = () => triggerScramble(props.initText)
</script>

<template>
  <!-- eslint-disable-next-line vue-a11y/no-static-element-interactions -->
  <span
    class="inline-block"
    @mouseenter="handlePointerEnter"
    @mouseleave="handlePointerLeave"
    @focusin="handlePointerEnter"
    @focusout="handlePointerLeave"
  >
    {{ displayedText }}
  </span>
</template>
