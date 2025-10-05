<template>
  
  <ol class="space-y-4">

    <li
      v-for="post, index in posts"
      :key="index"
    >

      <Post :post="post" />

    </li>

    <li class="flex justify-end">
      <ProseA
        to="/posts"
        class="flex items-center gap-2 font-sofia text-sm font-light"
      >
        View More

        <UIcon
          name="ph:arrow-right-light"
          class="size-4"
        />
      </ProseA>
    </li>

  </ol>

</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData(
  'latest-posts',
  () => queryCollection('posts').limit(2).all(),
)
</script>
