<template>

  <UPage>

    <UContainer>

      <template v-if="page">

        <UPageHeader
          :title="page.title"
        >
    
          <template #description>
            <NuxtTime
              :datetime="page.date"
              year="numeric"
              month="long"
              day="numeric"
            />
          </template>

        </UPageHeader>

        <UPageBody>
          <ContentRenderer :value="page" />

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
const { id } = useRoute().params

const { data: page, error } = await useAsyncData(
  `articles-${id}`,
  () => queryCollection('articles')
    .where('slug', '=', id)
    .first(),
  { watch: [() => id] },
)

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
  ogTitle: () => page.value?.title,
  ogDescription: () => page.value?.description,
  twitterTitle: () => page.value?.title,
  twitterDescription: () => page.value?.description,
})
</script>

<style scoped>

</style>
