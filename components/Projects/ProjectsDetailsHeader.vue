<template>
  <header
    class="sticky top-0 w-full flex items-center justify-between gap-y-16 bg-black py-4"
  >
    <Button
      label="GO BACK"
      icon="i-heroicons-arrow-long-left-solid"
      text
      to="/projects"
      as="router-link"
      pt:root:class="decoration-none group bg-transparent"
      pt:label:class="text-white group-hover:text-#a3a3a3 text-xs md:text-sm tracking-widest font-bold"
      pt:icon:class="text-white group-hover:text-#a3a3a3 text-2xl"
    />
  </header>
</template>
