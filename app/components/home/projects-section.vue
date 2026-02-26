<template>

  <section class="mt-8 grid grid-cols-1 gap-3">
    <h2>Projects</h2>

    <div role="list">

      <ProjectCards
        :limit="2"
        role="listitem"
      />

    </div>
  </section>

</template>
