<script setup lang="ts">
const breadcrumbs = [
  { label: 'About', path: '#about' },
  { label: 'Work', path: '#projects' },
  { label: 'Contact', path: '#contact' },
]
</script>

<template>
  <nav
    class="
      flex items-center justify-end gap-x-4 mbe-14 max-block-5

      sm:mbe-16

      **:uppercase **:font-normal **:text-xs
    "
  >
    <ul class="items-center gap-x-4 flex max-block-5">
      <template
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
      >
        <li>
          <Button
            as-child
            variant="link"
          >
            <NuxtLink :to="crumb.path">
              {{ crumb.label }}
            </NuxtLink>
          </Button>
        </li>

        <Separator
          v-if="index < breadcrumbs.length - 1"
          as="li"
          orientation="vertical"
        />
      </template>
    </ul>

    <Separator
      orientation="vertical"
    />

    <ColorScheme
      placeholder="THEMING..."
      tag="span"
      class="text-muted-foreground"
    >
      <button
        class="
          transition-colors duration-300

          hover:text-muted-foreground
        "
        @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
      >
        {{ $colorMode.value }}
      </button>
    </ColorScheme>
  </nav>
</template>
