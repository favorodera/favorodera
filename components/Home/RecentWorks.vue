<template>
  <section class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">
    <div class="flex gap-2 text-4 font-700">
      <i class="i-heroicons-solid-code" />
      <p class="w-37.5">
        RECENT WORKS
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <div class="w-full flex flex-wrap gap-4">
        <ProjectsCard
          v-for="n in 2"
          :key="n"
          project-name="Brainiac"
          project-path="/projects/brainiac"
          project-image="/images/myProfilePicture.jpg"
          project-description="Lorem ipsum dolor sit amLorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dicta accusantium ad quae veritatis veniam eligendi debitis est, labore"
        />
      </div>
      <Button
        as="router-link"
        to="/projects"
        label="View More"
        icon="i-heroicons-arrow-right-solid"
        icon-pos="right"
        raised
        pt:root:class="p-1 dark:bg-#1c1c1c bg-#1c1c1c/10 hover:bg-gray/10 decoration-none dark:text-white  text-black b-0 h-8 px-3 w-max self-end "
        pt:label:class="font-400"
        pt:icon:class=" text-5"
      />
    </div>
  </section>
</template>
