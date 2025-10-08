<template>
  
  <ul class="space-y-8">


    <li
      v-for="article, index in articles"
      :key="index"
    >
      <AppArticleCard :article="article" />
    </li>

    <li class="mt-4 flex items-center justify-center">

      <UButton
        label="All Articles"
        to="/articles"
        color="neutral"
        variant="link"
        trailing
        icon="ph:arrow-right"
        active
        :ui="{ trailingIcon: 'size-4' }"
      />

    </li>


  </ul>

</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData(
  'recent-articles',
  () => queryCollection('articles')
    .order('id', 'DESC')
    .select('title', 'date', 'slug', 'description')
    .limit(2)
    .all(),
)
</script>

<style scoped>

</style>
