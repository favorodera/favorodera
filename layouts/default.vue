<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="min-h-screen w-full flex flex-col items-center justify-between gap-y-10">
    <slot />

    <LazyFooter />
  </section>
</template>
