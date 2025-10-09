<template>

  <UPage
    :ui="{
      root: 'flex flex-col lg:grid-cols-[minmax(0,256px)_48rem_minmax(0,256px)] xl:grid xl:grid-cols-[minmax(0,256px)_48rem_minmax(0,256px)] xl:gap-8 mx-auto w-fit',
      center: 'lg:col-span-[48rem] lg:col-start-2 xl:col-span-[48rem] xl:col-start-2',
      right: 'lg:col-span-1 xl:col-span-1 order-first lg:order-last xl:order-last',
    }"
  >

    <UContainer class="lg:px-0">

      <template v-if="page">

        <UContentToc
          v-if="page.body?.toc?.links?.length"
          title="Table of Contents"
          :links="page.body.toc.links"
          :ui="{
            root: 'xl:hidden xl:bg-[initial]',
            container: 'lg:py-0 lg:pt-6 lg:pb-4.5 lg:border-b xl:border-0 [&>button]:lg:flex [&>button]:cursor-pointer [&>p]:lg:hidden [&>div:first-of-type]:lg:!flex [&>div:last-of-type]:lg:!hidden ',
            trailingIcon: 'lg:inline',
          }"
        />

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

          <AppSurround :left="{ path: '/articles', text: 'Back to Articles' }" />

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

    <template
      v-if="page?.body?.toc?.links?.length"
      #right
    >
      <UContentToc
        title="Table of Contents"
        :links="page.body.toc.links"
        :ui="{
          root: 'max-xl:hidden xl:p-0 -mx-0 sm:-mx-0 xl:m-0 xl:pr-8',
          container: 'xl:p-0',
        }"
      />
    </template>
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
