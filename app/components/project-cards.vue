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

  <NuxtLink
    v-for="project in projects"
    :key="project.name"
    :to="project.url"
    target="_blank"
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
    </p>

  </NuxtLink>

</template>
