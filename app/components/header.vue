<template>
  <header
    class="flex items-center justify-end inline-full"
  >
    <ColorScheme>
      <ThemeToggle />

      <template #placeholder>
        <span
          aria-hidden
          class="animate-pulse rounded-full bg-muted block-6 inline-6"
        />
      </template>
    </ColorScheme>
  </header>
</template>
