<template>
  
  <ol class="space-y-4">

    <li
      v-for="project, index in projects"
      :key="index"
    >

      <article class="group relative rounded-md border border-default transition-all hover:border-accented ">

        <div class="flex h-full flex-col p-4">

          <h3
            class="flex items-center gap-2 font-semibold text-highlighted"
            :title="project.title"
          >
            {{ project.title }}

            <UIcon
              name="ph:arrow-square-out-duotone"
              class="size-4 opacity-0 transition-opacity group-hover:opacity-100 dark:text-muted"
            />
              
            <ULink
              as="h3"
              :to="project.url"
              target="_blank"
              class="absolute inset-0 "
            />
          </h3>

          <p class="mt-2 line-clamp-2 grow text-sm dark:text-muted">
            {{ project.description }}
          </p>

          <ol class="mt-4 flex flex-wrap gap-2">

            <li
              v-for="technology, position in project.technologies"
              :key="position"
            >
              <UBadge
                :label="technology"
                color="neutral"
                variant="soft"
                class="rounded-full text-xs font-medium text-highlighted dark:text-muted"
              />
            </li>
           

          </ol>

        </div>

      </article>

    </li>

    <li class="flex justify-end">
      <ProseA
        to="/projects"
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
const { data: projects } = await useAsyncData(
  'recent-projects',
  () => queryCollection('projects').limit(2).all(),
)
</script>
