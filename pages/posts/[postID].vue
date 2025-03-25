<template>

  <main
    v-if="page"
    class="w-full flex flex-auto flex-col items-start gap-4"
  >

    <header class="w-full flex flex-col gap-1">

      <h1 class="text-start">
        
        <NuxtLink :to="page.path">

          {{ page.title }}

        </NuxtLink>

      </h1>

      <p class="text-start text-brand-textGray">
        {{ page.date }} &centerdot; {{ page.duration }}
      </p>

    </header>
      
    <ContentRenderer
      :value="page.body"
      tag="section"
      class="w-full flex flex-auto flex-col items-start justify-center gap-1"
    />
      
  </main>
          
</template>
      
<script setup lang="ts">
const { postID } = useRoute().params

const { data: page } = await useLazyAsyncData(
  `${postID}-post-page`,
  () => queryCollection('posts').path(`/posts/${postID}`).first(),
)

console.log(page.value?.path, postID)
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

.linkText {
  color:#6eb8ff
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
  
