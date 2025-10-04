<template>
  
  <ol class="space-y-4">

    <li
      v-for="post, index in posts"
      :key="index"
    >

      <article class="group relative space-y-2">

        <h3
          class="font-semibold text-highlighted group-hover:underline"
          :title="post.title"
        >
          {{ post.title }}


          <ULink
            as="h3"
            :to="`/posts/${post.id}`"
            class="absolute inset-0 "
          />
        </h3>

        <p class="line-clamp-2 grow text-sm dark:text-muted">
          {{ post.description }}
        </p>

      </article>

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
