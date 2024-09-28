<template>
  <NuxtLink
    :to="projectPath"
    class="group w-full flex grow-1 basis-20rem flex-col gap-y-2 rounded-4 bg-#1c1c1c/10 p-3 text-black decoration-none dark:bg-#1c1c1c dark:text-white dark:shadow-2xl"
  >
    <div class="group aspect-ratio-1.5 overflow-hidden b rounded-4 bg-#0a0a0a/10 p-1 dark:bg-#0a0a0a">
      <div class="size-full overflow-hidden rounded-lg duration-1000 delay-100 property-all group-hover:scale-150">
        <Image
          :alt="projectName"
          :src="projectImage"
          width="100%"
          height="100%"
        />
      </div>
    </div>

    <div class="flex flex-col gap-y-1">
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
