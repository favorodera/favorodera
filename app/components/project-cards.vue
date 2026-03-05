<script setup lang="ts">
const props = defineProps<{
  limit?: number
}>()

const queryBuilder = computed(() => {
  const query = queryCollection('projectsJson')
    .order('stem', 'DESC')

  if (props.limit) {
    query.limit(props.limit)
  }

  return query
})

const { data: projects } = await useAsyncData('projects', () => queryBuilder.value.all())
</script>

<template>

  <nav
    aria-label="Projects list"
    class="grid grid-cols-1 gap-3"
  >

    <NuxtLink
      v-for="project in projects"
      :key="project.name"
      :to="project.url"
      target="_blank"
      rel="noopener noreferrer"
      :title="project.name"
      class="
        group
        *:transition-all *:duration-300 *:ease-in-out
      "
    >

      <h3
        class="
          text-lg text-foreground/80 tabular-nums
          group-hover:text-foreground
        "
      >
        {{ project.name }}
      </h3>

      <p
        class="
          mt-0 text-sm text-muted-foreground
          group-hover:text-foreground
        "
      >
        {{ project.description }}
        <span class="sr-only">(opens in a new tab)</span>
      </p>

    </NuxtLink>

  </nav>

</template>
