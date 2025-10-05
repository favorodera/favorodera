<template>
  <div class="mx-auto mt-8 grid max-w-screen-md gap-6 text-sm md:grid-cols-2 lg:mt-12">

    <div class="order-1 max-w-full place-self-start overflow-hidden md:order-0">

      <ProseA
        :to="path"
        class="flex items-center gap-2 font-sofia text-sm font-light"
      >

        <UIcon
          name="ph:arrow-left-light"
          class="size-4"
        />
        {{ text }}

        
      </ProseA>

    </div>

    <div class="flex items-center justify-center gap-2 md:justify-end">

      <span class="font-light text-muted">Follow me on</span>

      <div class="flex items-center justify-center gap-2">

        <UButton
          v-for="item, index in contact"
          :key="index"
          :to="item.to"
          :icon="item.icon"
          variant="link"
          color="neutral"
          external
          target="_blank"
          size="sm"
          class="p-0 "
        />

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  path: string
}>()

const { owner: { contact } } = useAppConfig()
</script>
