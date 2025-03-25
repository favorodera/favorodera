<template>

  <main
    v-if="page"
    class="w-full flex flex-auto flex-col items-start gap-4"
  >

    <header class="w-full flex flex-col gap-1 ">

      <h1 class="text-start">
        {{ page.title }}
      </h1>

      <p class="text-start text-brand-textGray">
        {{ page.date }} &centerdot; {{ page.duration }}
      </p>

    </header>
      
    <ContentRenderer
      :value="page.body"
      tag="section"
      class="w-full flex flex-auto flex-col items-start justify-center gap-2"
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
  overflow-x: scroll;
  padding: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: #b4b6b8 transparent;

  > code {
    padding: 0;
  }
}

pre::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

pre::-webkit-scrollbar-thumb {
  background-color: #b4b6b8;
  border-radius: 0.5rem;
}

pre::-webkit-scrollbar {
  height: 0.25rem;
}

pre::-webkit-scrollbar-button{
  display: none;
}
</style>
  
