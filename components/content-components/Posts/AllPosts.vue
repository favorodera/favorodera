<template>
  <section class="w-full flex flex-auto flex-col justify-between gap-4">

    <h1 class="text-start">
      Posts
    </h1>

    <input
      id="posts-search"
      v-model="postsQuery"
      type="search"
      placeholder="Enter keyword(s)"
      name="posts-search"
      class="w-full border border-brand-elevate rounded-md bg-transparent p-2 text-brand-textGray outline-none"
    >

    <div
      ref="postsContainer"
      class="w-full flex flex-auto flex-col items-start justify-start gap-4"
    >
      <ContentUtilsPosts
        v-if="filteredPosts.length > 0 && visiblePosts.length"
        :posts="visiblePosts"
      />

      <div
        v-else
        class="w-full flex flex-auto flex-col items-center justify-center gap-2"
      >
        <NuxtIcon
          name="hugeicons:file-not-found"
          class="size-[clamp(1.2rem,5vw,1.4rem)] shrink-0 text-brand-textGray"
        />
        
        <p class="text-start text-[clamp(0.8rem,1.8vw,1.1rem)] text-brand-textGray">
          No post found
        </p>

      </div>

    </div>

    <ContentUtilsPaginator
      :items-per-page="itemsPerPage"
      :total-items="filteredPosts.length"
      @page-change="updateVisiblePosts"
    />
    
  </section>

</template>

<script setup lang="ts">
import type { PostsCollectionItem } from '@nuxt/content'

const { data: posts } = await useLazyAsyncData(
  'all-posts',
  () => queryCollection('posts').order('stem', 'DESC').all(),
)

const postsContainer = ref<HTMLElement | null>(null)
const itemsPerPage = ref(0)
const visiblePosts = ref<PostsCollectionItem[]>([])
const postsQuery = ref('')
const resizeObserver = ref<ResizeObserver | null>(null)


function normalizeSearchText(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\p{Z}\s]/gu, '')
    .replace(/[^\p{L}\p{N}]/gu, '')
    .toLowerCase()
}

const filteredPosts = computed(() => {
  if (!posts.value) return []
  const query = normalizeSearchText(postsQuery.value)
  if (!query) return posts.value

  return posts.value.filter((post) => {
    const postText = normalizeSearchText(`${post.title} ${post.description} ${post.tags.join(' ')}`)
    return postText.includes(query)
  })
})

function calculateItemsPerPage() {
  if (!postsContainer.value) return

  const containerHeight = postsContainer.value.offsetHeight
  const cardHeight = 100
  const gap = 16

  itemsPerPage.value = Math.max(1, Math.floor((containerHeight + gap) / (cardHeight + gap)))
}

function updateVisiblePosts({ start, end }: { start: number, end: number }) {
  visiblePosts.value = filteredPosts.value.slice(start, end)
}

watch(filteredPosts, () => {
  nextTick(() => {
    updateVisiblePosts({ start: 0, end: itemsPerPage.value })
  })
})

onMounted(() => {

  nextTick(() => {

    requestAnimationFrame(() => {

      calculateItemsPerPage()
      if (posts.value) {
        updateVisiblePosts({ start: 0, end: itemsPerPage.value })
      }

    })
    if (postsContainer.value) {

      resizeObserver.value = new ResizeObserver(() => {

        requestAnimationFrame(() => {
          calculateItemsPerPage()
          updateVisiblePosts({ start: 0, end: itemsPerPage.value })
        })

      })

      resizeObserver.value.observe(postsContainer.value)
    }
  })
})

onBeforeUnmount(() => {
  if (resizeObserver.value && postsContainer.value) {
    resizeObserver.value.unobserve(postsContainer.value)
    resizeObserver.value.disconnect()
  }
})

watch(posts, (newPosts) => {
  if (newPosts) {

    nextTick(() => {

      requestAnimationFrame(() => {
        calculateItemsPerPage()
        updateVisiblePosts({ start: 0, end: itemsPerPage.value })
      })

    })
  }
})
</script>
