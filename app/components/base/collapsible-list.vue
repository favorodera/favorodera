<script setup lang="ts" generic="TItem extends { id: string }">
defineSlots<{ default?: (props: { item: TItem }) => void }>()

const props = withDefaults(defineProps<{
  items: TItem[]
  limit?: number
}>(), {
  limit: 3,
})

const visibleItems = computed(() => {
  return props.items.slice(0, props.limit)
})
const hiddenItems = computed(() => {
  return props.items.slice(props.limit)
})
</script>

<template>
  <CollapsibleRoot
    v-slot="{ open }"
    class="flex flex-col"
  >
    <ul class="flex flex-col gap-5">
      <li
        v-for="item in visibleItems"
        :key="item.id"
      >
        <slot :item="item" />
      </li>
    </ul>

    <CollapsibleContent
      class="
        overflow-hidden

        motion-reduce:animate-none

        data-[state=closed]:animate-collapsible-close

        data-[state=open]:animate-collapsible-open
      "
    >
      <ul class="flex flex-col gap-4 pbs-4">
        <li
          v-for="item in hiddenItems"
          :key="item.id"
        >
          <slot :item="item" />
        </li>
      </ul>
    </CollapsibleContent>

    <CollapsibleTrigger
      v-if="hiddenItems.length > 0"
      as-child
    >
      <BaseButton
        type="button"
        variant="text"
        class="mbs-4 self-end text-[10px] tracking-widest uppercase"
      >
        Show {{ open ? 'less' : 'more' }}
      </BaseButton>
    </CollapsibleTrigger>
  </CollapsibleRoot>
</template>
