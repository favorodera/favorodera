<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="flex gap-2 text-4 font-700">
      <i class="i-heroicons-academic-cap-solid" />
      <p class="w-37.5">
        EDUCATION
      </p>
    </div>

    <div class="grid w-full gap-4">
      <template v-if="educations?.data && status === 'success'">
        <EducationCard
          v-for="education in educations?.data"
          :key="education.course"
          :course="education.course"
          :institute="education.institute"
          :institute-url="education.institute_url"
          :start-date="education.start_date"
          :end-date="education.end_date"
          :description="education.description"
        />
      </template>

      <template v-else>
        <Skeleton
          v-for="n in 2"
          :key="n"
          pt:root:class="grow-1 min-h-17rem basis-20rem  rounded-4 bg-#1c1c1c/10 dark:bg-#1c1c1c"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: educations, status } = await useAsyncData(
  'educations',
  () => $fetch('/api/education', { method: 'GET' }),
  { server: false },
)
</script>
