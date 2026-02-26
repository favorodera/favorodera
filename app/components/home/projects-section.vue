<template>

  <section
    class="grid grid-cols-1 gap-3"
    aria-label="projects section"
  >
    <h2>Projects</h2>

    <div
      aria-label="projects container"
      class="grid grid-cols-1 gap-3"
    >

      <ProjectCards
        :limit="2"
      />

    </div>

    <NuxtLink
      to="/projects"
      class="text-sm"
    >
      View all projects
    </NuxtLink>

  </section>

</template>
