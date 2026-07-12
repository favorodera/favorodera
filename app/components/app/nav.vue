<script setup lang="ts">
const breadcrumbs = [
  { label: 'About', path: '#about' },
  { label: 'Work', path: '#work' },
  { label: 'Contact', path: '#contact' },
]
</script>

<template>
  <nav
    class="
      flex flex-wrap items-center justify-end gap-x-3 gap-y-2 mbe-14

      sm:mbe-16
    "
  >
    <template
      v-for="(crumb, index) in breadcrumbs"
      :key="index"
    >
      <Button
        as-child
        variant="link"
        class="uppercase font-normal text-xs"
      >
        <NuxtLink :to="crumb.path">
          {{ crumb.label }}
        </NuxtLink>
      </Button>

      <Separator
        v-if="index < breadcrumbs.length - 1"
        orientation="vertical"
      >
        |
      </Separator>
    </template>

    <Separator
      orientation="vertical"
    >
      |
    </Separator>

    <ColorScheme>
      <Button
        variant="ghost"
        square
        size="sm"
        aria-label="Toggle color mode"
        @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
      >
        <Icon :name="$colorMode.value === 'dark' ? 'hugeicons:sun-02' : 'hugeicons:moon-02'" />
      </Button>

      <template #placeholder>
        <div class="min-block-7 inline-7 bg-muted rounded-md" />
      </template>
    </ColorScheme>
  </nav>
</template>
