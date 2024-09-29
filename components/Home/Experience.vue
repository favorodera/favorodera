<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="min-w-37.5 flex gap-2 text-4 font-700 lg:sticky lg:top-10">
      <i class="i-heroicons-briefcase-solid" />
      <p>
        EXPERIENCE
      </p>
    </div>

    <div class="w-full flex flex-col gap-4">
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
          pt:root:class="grow-1 min-h-17rem basis-20rem  rounded-4 "
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
