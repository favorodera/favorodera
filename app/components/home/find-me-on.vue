<template>

  <ol class="space-y-5">

    <li
      v-for="item, index in contact"
      :key="index"
    >
      <ULink
        :to="item.to"
        target="_blank"
        active
        external
        class="group flex items-end gap-4 **:transition-all hover:text-toned"
        :title="`My ${item.label}`"
      >
        <span class="min-w-fit text-sm">
          {{ item.label }}
        </span>

        <USeparator
          type="dashed"
          :ui="{ border: 'group-hover:border-accented' }"
        />

        <Icon
          :name="item.icon"
          class="size-5 shrink-0"
        />
      </ULink>
    
    </li>

  </ol>
</template>

<script lang="ts" setup>
const { owner: { contact } } = useAppConfig()
</script>
