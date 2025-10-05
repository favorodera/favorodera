<template>

  <footer class="flex h-(--ui-header-height) items-center px-4">

    <div class="mx-auto flex max-w-screen-lg flex-wrap justify-center gap-4 whitespace-nowrap">

      <UButton
        title="Login"
        variant="link"
        color="neutral"
        size="sm"
        label="Login"
        :ui="{
          base: 'p-0',
          label: 'font-light font-sofia dark:text-muted',
        }"
      />

      <UButton
        title="Profile"
        variant="link"
        color="neutral"
        size="sm"
        label="Profile"
        :ui="{
          base: 'p-0',
          label: 'font-light font-sofia',
        }"
      />

      <UButton
        title="Logout"
        variant="link"
        color="neutral"
        size="sm"
        label="Logout"
        :ui="{
          base: 'p-0',
          label: 'font-light font-sofia ',
        }"
      />

      <UButton
        v-for="item, index in footerLinks"
        :key="index"
        :to="item.to"
        :title="item.label"
        variant="link"
        color="neutral"
        size="sm"
        :label="item.label"
        :ui="{
          base: 'p-0',
          label: 'font-light font-sofia',
        }"
      />

    </div>

  </footer>

</template>

<script setup lang="ts">

const footerLinks = ref([
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Privacy', to: '/privacy' },
])

</script>
