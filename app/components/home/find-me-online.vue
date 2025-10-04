<template>

  <div class="flex flex-wrap gap-2">

    <ProseA
      v-for="item, index in contact"
      :key="index"
      :to="item.to"
      target="_blank"
      class="flex items-center gap-1"
      rel="noopener noreferrer"
      :title="`My ${item.label}`"
    >
      <UIcon
        :name="item.icon"
        class="size-4"
      />

      <span>{{ item.label }}</span>
    </ProseA>

  </div>


</template>

<script setup lang="ts">
const { owner: { contact } } = useAppConfig()

</script>
