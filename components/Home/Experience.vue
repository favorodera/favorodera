<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="flex gap-2 text-4 font-700">
      <i class="i-heroicons-briefcase-solid" />
      <p class="w-37.5">
        EXPERIENCE
      </p>
    </div>

    <div class="grid w-full gap-4">
      <template v-if="experiences?.data && status === 'success'">
        <EducationCard
          v-for="experience in experiences?.data"
          :key="experience.firm"
          :course="experience.position"
          :institute="experience.firm"
          :institute-url="experience.firm_url"
          :start-date="experience.start_date"
          :end-date="experience.end_date"
          :description="experience.description"
        />
      </template>

      <template v-else>
        <Skeleton
          pt:root:class="grow-1 min-h-17rem basis-20rem  rounded-4 bg-#1c1c1c/10 dark:bg-#1c1c1c"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: experiences, status } = await useAsyncData(
  'experiences',
  () => $fetch('/api/experience', { method: 'GET' }),
  { server: false },
)
</script>
