<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="min-w-37.5 flex gap-2 text-4 font-700 lg:sticky lg:top-10">
      <i class="i-heroicons-academic-cap-solid" />
      <p>
        EDUCATION
      </p>
    </div>

    <div class="w-full flex flex-col gap-4">
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
          pt:root:class="grow-1 basis-20rem  rounded-4"
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
