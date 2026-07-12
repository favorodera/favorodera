<template>
  <div
    class="
      max-inline-2xl mx-auto px-6 py-12 grid grid-rows-[auto_1fr_auto]
      min-block-full inline-full

      sm:px-8 sm:py-16

      md:py-20
    "
  >
    <header>
      <AppNav />
    </header>

    <main
      id="main"
      tabindex="-1"
    >
      <NuxtRouteAnnouncer />
      <slot />
    </main>

    <footer class="py-8 text-center text-sm text-muted-foreground">
      © 2026 Favour Emeka
    </footer>
  </div>
</template>
