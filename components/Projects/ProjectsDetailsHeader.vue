<template>
  <header
    class="sticky top-0 w-full flex items-center justify-between gap-y-16 bg-black py-4"
  >
    <UButton
      label="GO BACK"
      to="/projects"
      size="lg"
      color="gray"
      variant="ghost"
      icon="i-heroicons-arrow-long-left-solid"
      :padded="false"
      :ui="{
        gap: { lg: 'gap-2' },
        icon: {
          size: {
            lg: 'size-6',
          },
        },
        font: 'font-bold',
        size: { lg: 'text-xs md:text-sm tracking-widest' },
        base: 'property-color duration-500 } ',
        color: {
          gray: {
            ghost:
              'dark:hover:text-#a3a3a3 dark:hover:bg-transparent dark:text-white',
          },
        },
      }"
    />
  </header>
</template>
