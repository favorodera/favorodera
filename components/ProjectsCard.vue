<template>
  <NuxtLink
    :to="projectPath"
    class="group grid w-full grow-1 basis-20rem gap-y-2 rounded-4 bg-#1c1c1c/10 p-3 text-black decoration-none shadow-2xl dark:bg-#1c1c1c dark:text-white"
  >
    <div class="group aspect-ratio-1.5 overflow-hidden b rounded-4 bg-#0a0a0a/10 p-1 dark:bg-#0a0a0a">
      <div class="size-full overflow-hidden rounded-lg duration-1000 delay-100 property-all group-hover:scale-150">
        <Image
          :alt="projectName"
          :src="projectImage"
          width="100%"
          pt:root:class="size-full object-cover"
        />
      </div>
    </div>

    <div class="grid gap-y-1">
      <strong class="line-clamp-1 text-sm">
        Name:{{ projectName }}
      </strong>
      <p class="line-clamp-1 text-xs dark:text-gray">
        {{ projectDescription }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  projectName: String,
  projectPath: String,
  projectImage: String,
  projectDescription: String,
})
</script>
