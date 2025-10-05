<template>
  
  <ol class="space-y-4">

    <li
      v-for="post, index in posts"
      :key="index"
    >

      <Post :post="post" />

    </li>

  </ol>

</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData(
  'posts',
  () => queryCollection('posts').all(),
)
</script>
