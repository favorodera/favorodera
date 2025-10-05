<template>

  <UPage class="mx-auto max-w-screen-md">

    <template v-if="page">

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

  </UPage>

</template>

<script setup lang="ts">
const { data: page, error } = await useAsyncData(
  'posts-index',
  () => queryCollection('postsIndex').path('/posts').first(),
)
</script>
