<template>

  <UPage>

    <UPageBody>

      <template v-if="page">

        <div class="mb-8">

          <ProseH1 class="mb-0">
            Projects
          </ProseH1>

          <ProseP class="mt-2">
            A showcase of projects I've created, from open-source to personal work.
          </ProseP>

        </div>

        <ContentRenderer :value="page" />
        
      </template>

      <template v-else-if="error">
        <UError
          :error="{
            statusCode: error.statusCode,
            statusMessage: error.statusMessage,
            message: error.message,
          }"
        />
      </template>

    </UPageBody>

  </UPage>

</template>

<script setup lang="ts">
const { data: page, error } = await useAsyncData(
  'projects-index',
  () => queryCollection('projectsIndex').path('/projects').first(),
)
</script>
