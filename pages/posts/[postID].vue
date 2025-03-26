<template>

  <main
    v-if="page && status === 'success'"
    class="w-full flex flex-auto flex-col items-start gap-4"
  >

    <header class="w-full flex flex-col gap-1">

      <h1 class="text-start">
        
        <NuxtLink :to="page.path">

          {{ page.title }}

        </NuxtLink>

      </h1>

      <div class="w-full flex items-center gap-4">

        <p class="text-start text-brand-textGray">
          {{ page.date }} &centerdot; {{ page.duration }}
        </p>

        <button
          type="button"
          class="w-max flex items-center gap-2 rounded-md bg-brand-elevate px-1 py-0.5 hover:bg-brand-elevate/70"
          @click="sharePost"
        >

          <NuxtIcon
            name="hugeicons:share-08"
            class="shrink-0"
          />

          <span>SHARE</span>

        </button>

      </div>

    </header>
      
    <ContentRenderer
      :value="page.body"
      tag="section"
      class="w-full flex flex-auto flex-col items-start justify-center gap-1"
    />
      
  </main>

  <section
    v-else
    class="w-full flex flex-auto flex-col items-center justify-center gap-2"
  >

    <h2 class="text-center">
      Post Not Found!
    </h2>

    <p class="break-all text-center text-brand-textGray">
      The post you're looking for doesn't exist.
    </p>

    <NuxtLink
      to="/posts"
      class="w-max flex items-center gap-2 rounded-md bg-brand-elevate px-2 py-1 hover:bg-brand-elevate/70"
    >
      <NuxtIcon
        name="i-hugeicons:license"
        class="shrink-0"
      />

      <span>POSTS</span>

    </NuxtLink>


  </section>
          
</template>
      
<script setup lang="ts">
const { postID } = useRoute().params

const { data: page, status } = await useLazyAsyncData(
  `${postID}-post-page`,
  () => queryCollection('posts').path(`/posts/${postID}`).first(),
)

useSeoMeta({
  title: () => `Posts | ${page.value?.title}`,
  twitterTitle: () => page.value?.title,
  description: () => page.value?.description,
  ogDescription: () => page.value?.description,
  twitterDescription: () => page.value?.description,
})

const shareDetails = computed(() => {
  return {
    title: page.value?.title,
    text: page.value?.description,
    url: `https://favorodera.vercel.app/posts/${postID}`,
  }
})

async function sharePost() {
  await navigator.share(shareDetails.value)
}
</script>
    
<style lang="css">
code, pre {
  background-color: #27272A;
  border-radius: 0.375rem;
  color: #b4b6b8;
  width: 100%;
}

code {
  padding: 0.25rem;
}

pre {
  overflow-x: auto;
  padding: 0.5rem;
  scrollbar-width: none;
  margin-bottom: 0.4rem ;
  
  > code {
    padding: 0;
  }
}

ul {
  list-style-type: disc;
  list-style-position: inside;
}

.postLink {
  color:#6eb8ff;

  &:hover {
    opacity: 0.8;
  }

  &::after {
    content: '↗'
  }
}

p > img:nth-child(1) {
  background: #27272A;
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin-top: 0.4rem;

  >img {
    border-radius: 500rem;
  }
}
</style>
  
