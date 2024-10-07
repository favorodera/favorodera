<template>
  <section class="m-auto h-screen w-full flex items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <div class="flex items-center gap-2">
        <h1>404</h1>
        <Divider
          layout="vertical"
          type="solid"
          pt:root:class=" b-solid b-1 h-10"
        />
        <h2 class="text-sm">
          This page could not be found
        </h2>
      </div>

      <Button
        as="router-link"
        to="/"
        label="Take Me Home"
        icon="i-heroicons-home-solid "
        icon-pos="right"
        pt:root:class="p-1 bg-#1c1c1c hover:bg-gray/10 decoration-none text-white b-0 h-8 px-3 w-max  "
        pt:label:class="font-bold"
        pt:icon:class=" text-5"
      />
    </div>
  </section>
</template>
