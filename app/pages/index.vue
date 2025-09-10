<template>
  <UContainer class="flex flex-col flex-auto gap-y-8 py-12 w-full">

    <template v-if="page">

      <PageHeader
        :name="page.name"
        :headline="page.headline"
        :location="page.location"
        :avatar="page.avatar"
        :contacts="page.contact"
      />

      <About :about="page.about" />

      <PageSection title="Work Experience">
 
        <WorkExperience
          v-for="(experience, index) in page.workExperience"
          :key="index"
          v-bind="experience"
        />

      </PageSection>

      <PageSection title="Skills">
        
        <div class="flex flex-wrap gap-1">
          <UBadge
            v-for="(skill, index) in page.skills"
            :key="index"
            :label="skill"
            variant="soft"
          />
        </div>

      </PageSection>

      <PageSection title="Education">
 
        <Education
          v-for="(education, index) in page.education"
          :key="index"
          v-bind="education"
        />

      </PageSection>
  
      <PageSection title="Projects">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Project
            v-for="(project, index) in page.projects"
            :key="index"
            v-bind="project"
          />
        </div>
      </PageSection>

    </template>

  </UContainer>
 
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData(
  'index-page',
  () => queryCollection('index').first(),
)

defineOgImageComponent('OGImage', {
  name: page.value?.name,
  headline: page.value?.headline,
})

useSeoMeta({
  title: () => page.value?.name,
  ogTitle: () => page.value?.name,
  description: () => page.value?.headline,
  ogDescription: () => page.value?.headline,
  twitterTitle: () => page.value?.name,
  twitterDescription: () => page.value?.headline,
})
</script>

<style scoped>

</style>
