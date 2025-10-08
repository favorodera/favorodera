<template>
  
  <UPage>

    <UContainer>

      <template v-if="articles">

        <UPageHeader
          title="Articles"
          description="Browse a curated collection of my articles on web development, programming, and technology, sharing insights, tutorials, and personal experiences."
        />

        <UPageBody>
          <ol class="space-y-8">
            <li
              v-for="article, index in articles"
              :key="index"
            >
              <AppArticleCard :article="article" />
            </li>
            <li>
              <AppSurround :left="{ path: '/', text: 'Back to Home' }" />
            </li>
          </ol>
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
const { data: articles, error } = await useAsyncData(
  'recent-articles',
  () => queryCollection('articles')
    .order('id', 'DESC')
    .select('title', 'date', 'slug', 'description')
    .all(),
)
</script>
