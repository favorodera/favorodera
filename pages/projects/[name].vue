<template>
  <section class="w-full flex flex-col gap-y-2">
    <LazyProjectsDetailsHeader />
    <LazyProjectsProjectDetails />
    <ScrollTop
      icon="i-heroicons-arrow-up"
      pt:button:root="text-white text-lg b-gray hover:b-white bg-black"
    />
  </section>
</template>
