<template>
  <header class="w-full flex flex-col gap-y-16">
    <div class="flex items-center justify-end gap-4">
      <div class="flex items-center gap-1">
        <i class="i-heroicons-clock size-6" />
        <p v-if="currentTime">
          {{ currentTime }}
        </p>
        <Skeleton
          v-else
          width="12rem"
          class="h-10"
        />
      </div>

      <Button
        :icon="isDarkMode ? 'i-heroicons-sun-solid' : 'i-heroicons-moon-solid'"
        outlined
        pt:root:class="decoration-none group bg-transparent p-1 aspect-square b-gray hover:b-black dark:hover:b-white w-max"
        pt:icon:class="text-black dark:text-white  size-4"
        @click="toggleDarkMode"
      />
    </div>
    <div class="flex items-end justify-center gap-4 lg:pl-37.5">
      <Avatar
        image="../images/avatar.jpg"
        size="xlarge"
        shape="circle"
        pt:root:class="flex-shrink-0"
      />

      <div class="text-sm font-600">
        <p class="text-xl">
          FAVOUR EMEKA
        </p>
        <div class="flex items-center gap-1 text-emerald">
          <div class="h-3 w-3 animate-pulse rounded-full bg-emerald" />
          <p>AVAILABLE FOR WORK</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const currentTime = ref('')
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  useColorMode().preference = isDarkMode.value ? 'light' : 'dark'
}

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
