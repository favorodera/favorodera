<template>

  <div class="flex flex-wrap gap-2">

    <template v-if="preset=='iconed-text'">

      <ProseA
        v-for="item, index in contact"
        :key="index"
        :href="item.to"
        target="_blank"
        class="flex items-center gap-1"
        rel="noopener noreferrer"
        :title="item.label"
      >
        <UIcon
          :name="item.icon"
          class="size-4"
        />

        <span>{{ item.label }}</span>
      </ProseA>

    </template>
  

  </div>

</template>

<script setup lang="ts">
const { owner: { contact } } = useAppConfig()

withDefaults(defineProps<{
  preset?: 'icon-only' | 'iconed-text'
}>(), {
  preset: 'iconed-text',
})
</script>
