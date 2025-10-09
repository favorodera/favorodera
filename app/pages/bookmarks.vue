<template>
  
  <UPage>

    <UContainer>

      <template v-if="bookmarks">
    
        <UPageHeader
          title="Bookmarks"
          description="Cool and awesome stuffs I&apos;ve found on the internet."
        />


        <UPageBody>


          <ul class="space-y-4">

            <li
              v-for="bookmark, index in bookmarks.bookmarks"
              :key="index"
            >

              <BookmarkItem v-bind="bookmark" />

            </li>

            <li class="flex justify-end">

              <ULink
                to="https://logo.dev"
                external
                target="_blank"
                active
                class="text-xs font-medium text-muted"
              >
                Logos by Logo.dev <UIcon
                  name="ph:arrow-up-right-thin"
                  class="ml-0.5 inline-block align-text-bottom"
                />
              </ULink>

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
)
</script>

<style scoped>

</style>
