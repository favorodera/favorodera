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

        <UDrawer
          v-model:open="isDrawerOpen"
          direction="right"
          inset
          :handle="false"
          :ui="{
            body: 'block space-y-6 min-xl:hidden',
            content: 'w-full lg:max-w-1/3 max-w-2/3',
          }"
        >

          <UButton
            trailing
            color="neutral"
            variant="subtle"
            icon="ph:list"
            size="lg"
            title="Table of Contents"
            class="fixed right-4 bottom-12 z-10 rounded-full sm:right-6 lg:right-8 min-xl:hidden"
          />

          <template #body>

            <UContentToc
              v-if="page.body?.toc?.links?.length"
              :links="tocs"
              title="Table of Contents"
              default-open
              :ui="{
                title: 'text-sm font-medium dark:text-toned',
                root: 'mx-0 px-0 sm:mx-0 sm:px-0 relative top-0 w-full',
                container: 'pt-0 sm:pt-0 pb-0 sm:pb-0 lg:py-0 border-none [&>button]:pointer-events-none [&>button]:disabled:cursor-default [&>button]:disabled',
                link: 'font-sofia font-light ',
                trailing: 'hidden',
                linkText: 'toc-link-mobile',
              }"
              @click.stop="(event:Event) => {
                console.log(event.target)

                const eventTarget = event.target as HTMLElement

                if (eventTarget.classList.contains('toc-link-mobile')) {
                  isDrawerOpen = false
                }

              }"
            />

            <USeparator />

            <div class="flex flex-col">

              <UButton
                v-for="item, index in anchorLinks[0]"
                :key="index"
                :to="item.to"
                :icon="item.icon"
                :label="item.label"
                variant="link"
                color="neutral"
                :ui="{
                  base: 'p-0 py-1 font-sofia text-sm font-light',
                  leadingIcon: 'size-4 ',
                }"
                @click="isDrawerOpen = false"
              />

            </div>

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
                class="p-0"
                @click="isDrawerOpen = false"
              />

            </div>

          </template>
        </UDrawer>
        

        <div class="xl:mx-auto xl:grid xl:grid-cols-[256px_768px_256px] xl:items-start">

          <ContentRenderer
            :value="page"
            class="col-start-2 mx-auto max-w-screen-md xl:mx-0"
          />

          <div class="sticky top-(--ui-header-height) bottom-0 hidden h-screen space-y-6 overflow-y-auto py-6 pl-6 xl:block">

            <UContentToc
              v-if="page.body?.toc?.links?.length"
              :links="tocs"
              title="Table of Contents"
              :ui="{
                title: 'text-sm font-medium dark:text-toned',
                root: 'mx-0 px-0 sm:mx-0 sm:px-0 relative top-0 w-full',
                container: 'pt-0 sm:pt-0 pb-0 sm:pb-0 lg:py-0',
                link: 'font-sofia font-light',
              }"
            />

            <USeparator />

            <div class="flex flex-col">

              <UButton
                v-for="item, index in anchorLinks[0]"
                :key="index"
                :to="item.to"
                :icon="item.icon"
                :label="item.label"
                variant="link"
                color="neutral"
                :ui="{
                  base: 'p-0 py-1 font-sofia text-sm font-light',
                  leadingIcon: 'size-4 ',
                }"
              />

            </div>

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
                class="p-0"
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

  </UPage>

</template>

<script setup lang="ts">
const { id } = useRoute().params
const { owner: { contact } } = useAppConfig()
const isDrawerOpen = ref(false)

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

const anchorLinks = ref([

  [
    { label: 'Share your impression', icon: 'ph:thumbs-up', to: '#what-do-you-think' },
    { label: 'Join the conversation', icon: 'ph:chats-circle', to: '#comments' },
  ],

  [
    { label: 'Ask me anything', icon: 'ph:chat-circle-dots', to: '/ama' },
  ],

])

onMounted(() => {
  useEventListener(document, 'click', (e) => {
    if ((e.target as HTMLElement).classList.contains('toc-link-mobile')) {
      isDrawerOpen.value = false
    }
  })
})

</script>
