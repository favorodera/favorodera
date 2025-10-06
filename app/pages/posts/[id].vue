<template>

  <UPage>

    <UPageBody class="max-w-(--ui-container)">

      <template v-if="page">

        <div class="mb-0 xl:mx-auto xl:grid xl:grid-cols-[256px_768px_256px] xl:items-start">

          <div class="col-start-2 mx-auto mb-8 max-w-screen-md xl:mx-0">
            <ProseH1 class="mb-0">
              {{ page.title }}
            </ProseH1>

            <NuxtTime
              class="mt-2 font-sofia text-sm font-light dark:text-muted"
              :datetime="page.date"
              year="numeric"
              month="long"
              day="numeric"
            />
          </div>
          
        </div>
        

        <div class="xl:mx-auto xl:grid xl:grid-cols-[256px_768px_256px] xl:items-start">

          <ContentRenderer
            :value="page"
            class="col-start-2 mx-auto max-w-screen-md xl:mx-0"
          />

          <div class="sticky top-(--ui-header-height) bottom-0 hidden h-screen space-y-6 overflow-y-auto py-6 pl-6 xl:block">

            <UContentToc
              v-if="page.body?.toc?.links?.length"
              :links="tocs"
              :ui="{
                title: 'text-sm font-medium dark:text-muted',
                root: 'mx-0 px-0 sm:mx-0 sm:px-0 relative top-0 w-full',
                container: 'pt-0 sm:pt-0 pb-0 sm:pb-0 lg:py-0',
                link: 'font-sofia font-light',
              }"
            />

            <USeparator />

            <div class="flex items-center gap-4">

              <UButton
                v-for="item, index in contact"
                :key="index"
                :to="item.to"
                :icon="item.icon"
                variant="link"
                color="neutral"
                external
                target="_blank"
                size="sm"
                class="p-0 "
              />

            </div>

          </div>

        </div>

        <Surround
          path="/posts"
          text="Back to Posts"
        />

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

    </UPageBody>

    <!-- <template
      v-if="page"
      #right
    >
      <UPageAside>

        <UContentToc
          v-if="page.body?.toc?.links?.length"
          :links="tocs"
        />
      </UPageAside>
    </template> -->

  </UPage>

</template>

<script setup lang="ts">
const { id } = useRoute().params
const { owner: { contact } } = useAppConfig()

const { data: page, error } = await useAsyncData(
  `posts-${id}`,
  () => queryCollection('posts').where('slug', '=', id).first(),
  { watch: [() => id] },
)

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
  ogTitle: () => page.value?.title,
  ogDescription: () => page.value?.description,
  twitterTitle: () => page.value?.title,
  twitterDescription: () => page.value?.description,
})

const tocs = computed(() => {
  return (page.value?.body?.toc?.links || []).map(({ children, ...rest }) => rest)
})
</script>
