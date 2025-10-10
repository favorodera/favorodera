<template>
  
  <UPage>

    <UContainer>

      <template v-if="bookmarks">
    
        <UPageHeader
          title="Bookmarks"
          description="Cool and awesome stuffs I&apos;ve found on the internet. You might like them too!"
        />


        <UPageBody>


          <ul class="space-y-4">

            <li
              v-for="bookmark, index in bookmarks"
              :key="index"
            >

              <BookmarkItem v-bind="bookmark" />

            </li>

          </ul>

          <AppSurround :left="{ path: '/', text: 'Back to Home' }" />
         

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
const { data: bookmarks, error } = await useAsyncData(
  'bookmarks',
  () => queryCollection('bookmarks').first(),
  {
    transform: bookmarks => bookmarks?.bookmarks,
  },
)
</script>

<style scoped>

</style>
