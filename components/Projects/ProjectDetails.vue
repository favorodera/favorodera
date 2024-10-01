<template>
  <template v-if="!error">
    <section
      class="w-full flex flex-col gap-y-4"
    >
      <div
        class="aspect-1.5 w-full overflow-hidden b-1 b-transparent rounded-4 b-solid sm:aspect-auto"
      >
        <Image
          v-if="status === 'success'"
          :alt="projects?.name"
          :src="projects?.image"
          width="100%"
          height="100%"
        />

        <Skeleton
          v-else
          width="100%"
          class="min-h-25rem"
        />
      </div>

      <div class="flex flex-col gap-y-8 text-xs md:text-sm">
        <div class="w-full flex flex-col items-start gap-2 lg:flex-row lg:gap-4">
          <div
            class="min-w-37.5 flex flex items-center gap-2 text-blue-500 font-medium capitalize lg:sticky lg:top-10"
          >
            <i class="i-heroicons-folder-solid text-xl" />
            <p>Name</p>
          </div>
          <p v-if="status === 'success'">
            {{ projects?.name }}
          </p>
          <div
            v-else
            class="w-full flex gap-4"
          >
            <Skeleton
              width="20%"
              class="h-2"
              border-radius="1rem"
            />

            <Skeleton
              width="2rem"
              class="h-2"
              border-radius="1rem"
            />
          </div>
        </div>

        <div class="w-full flex flex-col items-start gap-2 lg:flex-row lg:gap-4">
          <div
            class="min-w-37.5 flex items-center gap-2 text-orange-400 font-medium capitalize lg:sticky lg:top-10"
          >
            <i class="i-heroicons-list-bullet-solid text-xl" />
            <p>Description</p>
          </div>
          <p v-if="status === 'success'">
            {{ projects?.description }}
          </p>
          <div
            v-else
            class="w-full flex flex-col gap-4"
          >
            <Skeleton
              width="80%"
              class="h-2"
              border-radius="1rem"
            />

            <Skeleton
              width="60%"
              class="h-2"
              border-radius="1rem"
            />

            <Skeleton
              width="40%"
              class="h-2"
              border-radius="1rem"
            />

            <Skeleton
              width="20%"
              class="h-2"
              border-radius="1rem"
            />
          </div>
        </div>

        <div class="w-full flex flex-col items-start gap-2 lg:flex-row lg:gap-4">
          <div
            class="min-w-37.5 flex items-center gap-2 text-purple-400 font-medium capitalize lg:sticky lg:top-10"
          >
            <i class="i-heroicons-square-3-stack-3d-solid text-xl" />
            <p>Technologies</p>
          </div>
          <div
            class="flex flex-1 flex-wrap gap-2"
          >
            <template v-if="status === 'success'">
              <p
                v-for="technology in projects?.technologies"
                :key="technology"
                class="rounded bg-#1c1c1c px-2 py-1 font-semibold tracking-widest"
              >
                {{ technology }}
              </p>
            </template>

            <template v-else>
              <Skeleton
                v-for="n in 6"
                :key="n"
                width="4rem"
                class="min-h-8"
              />
            </template>
          </div>
        </div>

        <div class="w-full flex flex-col items-start gap-2 lg:flex-row lg:gap-4">
          <div
            class="min-w-37.5 flex items-center gap-2 font-medium capitalize lg:sticky lg:top-10"
            :class="projects?.status === 'Production' ? 'text-green-500' : projects?.status === 'Issues' ? 'text-red-500' : projects?.status === 'Development' ? 'text-orange-400' : 'text-white'"
          >
            <i
              :class="projects?.status === 'Production' ? 'i-heroicons-check-circle-solid' : projects?.status === 'Issues' ? 'i-heroicons-exclamation-circle-solid' : projects?.status === 'Development' ? 'i-heroicons-command-line-solid' : 'i-heroicons-clock-solid'"
              class="text-xl"
            />
            <p>Status</p>
          </div>
          <p v-if="status === 'success'">
            {{ projects?.status }}
          </p>
          <Skeleton
            v-else
            width="30%"
            class="h-2"
            border-radius="1rem"
          />
        </div>

        <div class="w-full flex flex-col items-start gap-2 lg:flex-row lg:gap-4">
          <div
            class="min-w-37.5 flex items-center gap-2 text-teal-500 font-medium capitalize lg:sticky lg:top-10"
          >
            <i class="i-heroicons-clock-solid text-xl" />
            <p>Created</p>
          </div>
          <p v-if="status === 'success'">
            {{ projects?.created }}
          </p>
          <Skeleton
            v-else
            width="30%"
            class="h-2"
            border-radius="1rem"
          />
        </div>

        <Divider v-if="status === 'success'" />

        <div
          v-if="status === 'success'"
          class="w-full flex flex-col items-start gap-2 lg:flex-row lg:gap-4"
        >
          <div
            class="min-w-37.5 flex items-center gap-2 text-blue-700 font-medium capitalize lg:sticky lg:top-10"
          >
            <i class="i-heroicons-document-solid text-xl" />
            <p>Link Access</p>
          </div>

          <div class="w-full flex flex-1 flex-col gap-2">
            <NuxtLink
              :to="projects?.repository"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2 b-1 b-#262626 rounded-md b-solid bg-transparent px-4 py-2 text-xs text-white decoration-none duration-1000 delay-50 ease property-all hover:bg-gray/15 md:text-sm"
            >
              <i class="i-prime-github text-xl" /><p>Repository</p>
            </NuxtLink>
            <NuxtLink
              :to="projects?.link"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2 b-1 b-#262626 rounded-md b-solid bg-transparent px-4 py-2 text-xs text-white decoration-none duration-1000 delay-50 ease property-all hover:bg-gray/15 md:text-sm"
            >
              <i class="i-prime-external-link text-xl" /><p>Live Site</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>

  <template v-else>
    <div class="w-full b-1 b-red-500/60 rounded b-solid bg-red-500/5 px-3.5 py-2.5">
      <p class="text-xs text-red-500">
        Oops!! 🫢 Network error
        There's something wrong with your network. Please check your network and reload the page.
      </p>
    </div>
  </template>
</template>

<script setup lang="ts">
const { name } = useRoute().params
const {
  data: projects,
  status,
  error,
} = await useLazyAsyncData(
  `projects-${name}`,
  () => $fetch(`/api/projects?projectName=${name}`, { timeout: 30000, method: 'GET' }),
  { server: false, transform: projects => projects.data[0] },
)
</script>
