<script setup lang="ts">
import { profile } from '~/data/profile'

const isEmailCopied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  try {
    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    await navigator.clipboard.writeText(profile.email)
    isEmailCopied.value = true

    clearTimeout(resetTimer)
    // eslint-disable-next-line unicorn/no-top-level-assignment-in-function
    resetTimer = setTimeout(() => {
      isEmailCopied.value = false
    }, 2000)
  } catch {
    // Clipboard access can be denied; the mailto link above still works.
  }
}

onBeforeUnmount(() => {
  clearTimeout(resetTimer)
})
</script>

<template>
  <footer
    class="
      mbs-10 flex flex-col gap-6 border-bs border-border pbs-6 inline-full

      sm:flex-row sm:items-end sm:justify-between
    "
  >
    <div class="flex flex-col gap-1.5">
      <p class="text-sm text-muted-foreground">
        {{ profile.availability }}
      </p>

      <div class="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <BaseButton
          type="button"
          variant="text"
          class="
            cursor-copy text-xl font-semibold tracking-tight min-inline-fit

            sm:text-2xl
          "
          @click="copyEmail"
        >
          {{ profile.email }}
        </BaseButton>

        <span
          aria-hidden="true"
          class="
            text-[11px] tracking-widest text-muted-foreground transition-opacity

            motion-reduce:transition-none
          "
          :class="isEmailCopied? 'opacity-100' : 'opacity-0'"
        >
          COPIED
        </span>

        <span
          aria-live="polite"
          class="sr-only"
        >
          {{ isEmailCopied ? 'Email address copied to clipboard' : '' }}
        </span>
      </div>
    </div>
  </footer>
</template>
