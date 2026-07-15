<template>
  <div
    class="
      max-inline-2xl mx-auto px-6 grid grid-rows-[auto_1fr_auto] min-block-full
      inline-full relative

      sm:px-8
    "
  >
    <Motion
      as="header"
      :initial="{ y: -40, opacity: 0, filter: 'blur(8px)' }"
      :animate="{ y: 0, opacity: 1, filter: 'blur(0px)' }"
      :transition="{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }"
      class="bg-background sticky inset-bs-0 section-padding z-50"
    >
      <AppNav />
    </Motion>

    <main
      id="main"
      tabindex="-1"
      class="outline-none"
    >
      <NuxtRouteAnnouncer />
      <slot />
    </main>

    <Motion
      as="footer"
      :initial="{ y: 60, opacity: 0, filter: 'blur(6px)' }"
      :while-in-view="{ y: 0, opacity: 1, filter: 'blur(0px)' }"
      :transition="{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }"
      :in-view-options="{ once: true, margin: '-15px' }"
      class="
        text-sm text-muted-foreground py-8 border-bs mbs-12

        sm:py-12 sm:mbs-16

        md:mbs-20
      "
    >
      © 2024 - {{ new Date().getFullYear() }} Favour Emeka
    </Motion>
  </div>
</template>