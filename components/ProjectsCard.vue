<template>
  <ULink
    :to="projectPath"
    class="group flex flex-col gap-y-2 rounded-4 bg-#1c1c1c p-3 text-white decoration-none shadow-2xl"
  >
    <div class="group aspect-ratio-1.5 overflow-hidden b b-transparent rounded-4 bg-#0a0a0a p-1">
      <div class="size-full overflow-hidden rounded-lg duration-1000 delay-100 property-all group-hover:scale-150">
        <img
          :alt="projectName"
          :src="projectImage"
          class="size-full object-cover"
        >
      </div>
    </div>

    <div class="flex flex-col gap-y-1">
      <strong class="line-clamp-1 text-sm">
        Name:{{ projectName }}
      </strong>
      <p class="line-clamp-1 text-xs text-#a3a3a3">
        {{ projectDescription }}
      </p>
    </div>
  </ULink>
</template>

<script setup lang="ts">
defineProps({
  projectName: String,
  projectPath: String,
  projectImage: String,
  projectDescription: String,
})
</script>
