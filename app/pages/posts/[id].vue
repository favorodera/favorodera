<template>

  <UPage class="mx-auto max-w-screen-md">

    <template v-if="page">

      <div class="mb-8">
        <ProseH1 class="mb-0">
          {{ page.title }}
        </ProseH1>

        <NuxtTime
          class="mt-2 font-sofia text-sm font-light dark:text-muted"
          :datetime="page.date"
          year="numeric"
          month="long"
          day="numeric"
        />

      </div>

      <ContentRenderer :value="page" />

      <Surround
        path="/posts"
        text="Back to Posts"
      />

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

  </UPage>

</template>

<script setup lang="ts">
const { id } = useRoute().params

const { data: page, error } = await useAsyncData(
  `posts-${id}`,
  () => queryCollection('posts').where('slug', '=', id).first(),
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
