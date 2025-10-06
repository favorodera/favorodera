<template>

  <footer class="flex h-(--ui-header-height) items-center px-4">

    <div class="mx-auto flex max-w-screen-lg flex-wrap justify-center gap-4 whitespace-nowrap">

      <UButton
        title="Login"
        variant="link"
        color="neutral"
        size="sm"
        label="Login"
        :class="linkClass"
      />

      <UButton
        title="Profile"
        variant="link"
        color="neutral"
        size="sm"
        label="Profile"
        :class="linkClass"
      />

      <UButton
        title="Logout"
        variant="link"
        color="neutral"
        size="sm"
        label="Logout"
        :class="linkClass"
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
        :class="linkClass"
      />

    </div>

  </footer>

</template>

<script setup lang="ts">

const linkClass = 'p-0 font-sofia font-light'

const footerLinks = ref([
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Privacy', to: '/privacy' },
])

</script>
