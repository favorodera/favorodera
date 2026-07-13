<template>
  <div
    class="
      max-inline-2xl mx-auto px-6 grid grid-rows-[auto_1fr_auto] min-block-full
      inline-full relative

      sm:px-8
    "
  >
    <header
      class="bg-background sticky inset-bs-0 section-padding z-50"
    >
      <AppNav />
    </header>

    <main
      id="main"
      tabindex="-1"
    >
      <NuxtRouteAnnouncer />
      <slot />
    </main>

    <footer
      class="
        text-sm text-muted-foreground py-8 border-bs mbs-12

        sm:py-12 sm:mbs-16

        md:mbs-20
      "
    >
      © 2024 - {{ new Date().getFullYear() }} Favour Emeka
    </footer>
  </div>
</template>
