<template>
  <header class="w-full flex flex-col gap-16">
    <div class="flex items-center justify-end gap-4">
      <div class="flex items-center gap-1 font-600">
        <i class="i-heroicons-clock-solid size-6" />
        <p v-if="currentTime">
          {{ currentTime }}
        </p>
        <Skeleton
          v-else
          width="12rem"
          class="h-10"
        />
      </div>
      <Select
        v-model="$colorMode.preference"
        :options="['light', 'dark', 'system']"
        pt:dropdown:style="display:none;"
        :pt="{ root: { style: 'background:transparent;' } }"
      >
        <template #value="slotProps">
          <i
            v-if="slotProps.value"
            class="text-2xl text-black font-400 dark:text-white"
            :class="
              slotProps.value === 'light'
                ? 'i-heroicons-sun-solid'
                : slotProps.value === 'dark'
                  ? 'i-heroicons-moon-solid'
                  : 'i-heroicons-computer-desktop-solid'
            "
          />
        </template>
        <template #option="slotProps">
          <div class="flex items-center gap-1">
            <i
              :class="
                slotProps.option === 'light'
                  ? 'i-heroicons-sun-solid'
                  : slotProps.option === 'dark'
                    ? 'i-heroicons-moon-solid'
                    : 'i-heroicons-computer-desktop-solid '
              "
            />
            <p class="capitalize">
              {{ slotProps.option }}
            </p>
          </div>
        </template>
      </Select>
    </div>
    <div class="flex items-end justify-center gap-4">
      <Avatar
        image="https://lh3.googleusercontent.com/a/ACg8ocIl5OIPOEbL6CgJpbTrpW7kC9HLnzb8QzB2dGrF9UQivv0BAbde=s96-c"
        size="xlarge"
        shape="circle"
        :pt="{ root: 'flex-shrink-0' }"
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
const timeZone = ref('GMT+1')
function formatTime() {
  const now = new Date()
  now.setUTCHours(now.getUTCHours() + parseInt(timeZone.value.slice(3), 10))
  const hours = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const meridian = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 || 12
  return `${formattedHours}:${minutes} ${meridian} ${timeZone.value}`
}

onMounted(() => setInterval(() => {
  currentTime.value = formatTime()
}, 1000))
</script>
