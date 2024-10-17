<template>
  <header class="w-full flex flex-col items-center justify-between gap-y-10">
    <time
      :datetime="currentTime"
      class="inline-flex items-center self-end gap-2 text-4 font-semibold"
    >
      <i class="i-heroicons-clock size-6" /> {{ currentTime ? currentTime : 'CHECKING TIME...' }}
    </time>

    <div class="flex items-end justify-center gap-4 lg:pl-37.5">
      <UAvatar
        src="../images/avatar.jpg"
        size="2xl"
        alt="Favour Emeka"
      />

      <div class="flex flex-col gap-2 font-semibold tracking-widest">
        <p class="text-2xl">
          FAVOUR EMEKA
        </p>
        <div class="flex items-center gap-3 text-xs text-emerald">
          <div class="flex items-center gap-1">
            <i class="h-3 w-3 animate-pulse rounded-full bg-emerald" />
            <p>AVAILABLE</p>
          </div>
          <ULink
            class="text-#A3A3A3 decoration-none hover:underline"
            to="#contact"
          >
            @LETS TALK
          </ULink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const currentTime = ref('')

onMounted(() =>
  setInterval(() => {
    currentTime.value = new Date().toLocaleString('en-US', {
      timeZoneName: 'short',
      timeZone: 'Africa/Lagos',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    })
  }, 1000),
)
</script>
