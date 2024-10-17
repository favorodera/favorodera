<template>
  <div class="w-full flex items-center justify-between gap-4">
    <p class="w-max flex shrink-0 gap-1 text-xs font-semibold md:text-sm">
      {{ contactType }}:
      <ULink
        class="w-max text-xs text-#a3a3a3 font-normal decoration-none md:text-sm hover:decoration-underline"
        :to="contactUrl"
        target="_blank"
        rel="noopener noreferrer"
      >{{ contactValue }}
      </ULink>
    </p>

    <UDivider :ui="{ border: { base: 'dark:b-gray/25' } }" />
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
