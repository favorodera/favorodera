<template>

  <UHeader
    title=""
    :ui="{ root: 'border-none', right: 'gap-4' }"
  >

    <template #right>

      <ULink
        v-for="item in navigation[0]"
        :key="item.to"
        :to="item.to"
        :title="item.label"
      >
        <UIcon
          :name="item.icon"
          class="size-5"
        />
      </ULink>

      <USeparator
        orientation="vertical"
        class="h-6"
        :decorative="false"
      />
      

      <ULink
        v-for="item, index in navigation[1]"
        :key="item.to"
        :to="item.to"
        :title="item.label"
        external
        target="_blank"
      >
        <UIcon
          :name="item.icon"
          :class="index === 0 ? 'size-4.5' : 'size-4'"
        />
      </ULink>

      <USeparator
        orientation="vertical"
        class="h-6"
        :decorative="false"
      />

      <UColorModeButton
        variant="link"
        class="p-0"
        color="neutral"
      >
        <template #fallback>
          <UButton
            loading
            variant="link"
            class="p-0"
            color="neutral"
          />
        </template>

      </UColorModeButton>

    </template>

  </UHeader>

</template>

<script setup lang="ts">

const { owner: { contact } } = useAppConfig()

const navigation = computed(() => ([

  [
    { label: 'Home', to: '/', icon: 'ph:house-duotone' },
    { label: 'Blog', to: '/blog', icon: 'ph:notebook-duotone' },
    { label: 'Projects', to: '/projects', icon: 'ph:brackets-angle-duotone' },
    { label: 'Ask Me Anything', to: '/ama', icon: 'ph:chat-circle-dots-duotone' },
    { label: 'Resume', to: 'https://resume.favorodera.com', icon: 'ph:file-text-duotone' },
  ],

  [...contact],

]))

</script>
