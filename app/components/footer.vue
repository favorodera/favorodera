<template>

  <footer class="flex h-(--ui-header-height) items-center px-4 text-center text-xs font-light ">

    <div class="mx-auto flex max-w-screen-lg flex-wrap justify-center gap-4 whitespace-nowrap">

      <ULink
        v-for="item, index in footerLinks"
        :key="index"
        :href="item.to"
        rel="noopener noreferrer"
        :title="item.label"
      >
        <span>{{ item.label }}</span>
      </ULink>

    </div>

  </footer>

</template>

<script setup lang="ts">

const footerLinks = ref([
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Privacy', to: '/privacy' },
])

</script>
