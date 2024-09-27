<template>
  <div class="w-full flex items-center justify-between gap-4">
    <p class="w-max flex shrink-0 gap-1 font-bold">
      {{ contactType }}:
      <NuxtLink
        class="w-max text-xs text-black font-normal decoration-none md:text-sm dark:text-gray hover:decoration-underline"
        :to="contactUrl"
        target="_blank"
        rel="noopener noreferrer"
      >{{ contactValue }}
      </NuxtLink>
    </p>
    <Divider />
    <i :class="`${contactIcon} ${contactIcon === 'i-prime-twitter' ? 'h-3' : 'text-4'} shrink-0`" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  contactType: String,
  contactValue: String,
  contactUrl: String,
  contactIcon: String,
})
</script>
