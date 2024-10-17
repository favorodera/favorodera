<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="min-w-37.5 flex flex items-center gap-2 text-4 font-700 lg:sticky lg:top-10">
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

      <template v-else-if="error">
        <div
          class="col-span-2 b-1 b-red-500/60 rounded b-solid bg-red-500/5 px-3.5 py-2.5"
        >
          <p class="text-xs text-red-500">
            Oops!! 🫢 Network error.
            There's something wrong with your network. Please check your network and reload the page.
          </p>
        </div>
      </template>

      <template v-else>
        <USkeleton
          :ui="{ rounded: 'rounded-2xl', background: 'dark:bg-gray/15' }"
          class="grow-1 basis-20rem"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: educations, status, error } = await useAsyncData(
  'educations',
  () => $fetch('/api/education', { timeout: 30000, method: 'GET' }),
  { server: false },
)
</script>
