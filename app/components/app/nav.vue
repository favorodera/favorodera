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
      flex items-center justify-end gap-x-4 mbe-14 max-block-5

      sm:mbe-16
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
            class="uppercase font-normal text-xs"
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

    <ColorScheme>
      <Button
        variant="link"
        square
        aria-label="Toggle color mode"
        class="
          min-block-5 inline-5

          hover:text-muted-foreground
        "
        @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
      >
        <Icon :name="$colorMode.value === 'dark' ? 'hugeicons:sun-02' : 'hugeicons:moon-02'" />
      </Button>

      <template #placeholder>
        <div class="min-block-5 inline-5 bg-muted rounded-sm" />
      </template>
    </ColorScheme>
  </nav>
</template>
