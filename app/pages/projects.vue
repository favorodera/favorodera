<template>
  
  <UPage>

    <UContainer>

      <template v-if="projects">

        <UPageHeader
          title="Projects"
          description="Explore a curated selection of my open-source, collaborative, and personal projects, each reflecting my passion for building useful and creative solutions."
        />


        <UPageBody>

          <ul
            class="space-y-8"
          >

            <li
              v-for="project, index in projects"
              :key="index"
            >

              <AppProjectCard
                header-as="h2"
                :project="project"
              />

            </li>


          </ul>

          <AppSurround :left="{ path: '/', text: 'Back to Home' }" />
         

        </UPageBody>

      </template>

      <UError
        v-else
        :error="{
          statusCode: error?.statusCode || 500,
          statusMessage: error?.statusMessage || 'Internal Server Error',
          message: error?.message || 'Something went wrong!',
        }"
      />

    </UContainer>
  </UPage>

</template>

<script setup lang="ts">
const { data: projects, error } = await useAsyncData(
  'projects',
  () => queryCollection('projects')
    .select('title', 'description', 'url', 'thumbnail', 'id')
    .order('id', 'DESC')
    .all(),
)
</script>
