<template>
  <section
    v-if="totalItems > itemsPerPage && itemsPerPage > 0"
    class="w-full flex items-center justify-center gap-5 p-2"
  >

    <div class="w-max flex items-center justify-end gap-5">

      <button
        type="button"
        class="text-xl disabled:text-brand-textGray hover:text-brand-textGray"
        :disabled="isFirstPage"
        @click="paginate('start')"
      >
        <NuxtIcon name="hugeicons:arrow-left-double" />
      </button>

      <button
        type="button"
        class="text-xl disabled:text-brand-textGray hover:text-brand-textGray"
        :disabled="isFirstPage"
        @click="paginate('prev')"
      >
        <NuxtIcon name="hugeicons:arrow-left-01" />
      </button>

    </div>

    <span class="text-center text-sm text-brand-textGray">
      {{ paginator.start + 1 }} to {{ Math.min(paginator.end, totalItems) }} of {{ totalItems }}
    </span>

    <div class="w-max flex items-center justify-start gap-5">

      <button
        type="button"
        class="text-xl disabled:text-brand-textGray hover:text-brand-textGray"
        :disabled="isLastPage"
        @click="paginate('next')"
      >
        <NuxtIcon name="hugeicons:arrow-right-01" />
      </button>

      <button
        type="button"
        class="text-xl disabled:text-brand-textGray hover:text-brand-textGray"
        :disabled="isLastPage"
        @click="paginate('end')"
      >
        <NuxtIcon name="hugeicons:arrow-right-double" />
      </button>
      
    </div>
    
  </section>
  
</template>

<script setup lang="ts">
const props = defineProps<{
  itemsPerPage: number
  totalItems: number
}>()

const emit = defineEmits<{
  (emit: 'page-change', payload: { start: number, end: number }): void
}>()

const paginator = ref({
  start: 0,
  end: Math.min(props.itemsPerPage, props.totalItems),
})

watch(() => props.itemsPerPage, (newVal) => {
  paginator.value.start = 0
  paginator.value.end = Math.min(newVal, props.totalItems)
  emitPageChange()
})

const isFirstPage = computed(() => paginator.value.start === 0)
const isLastPage = computed(() => paginator.value.end >= props.totalItems)

function paginate(direction: 'next' | 'prev' | 'start' | 'end') {
  const total = props.totalItems
  const perPage = props.itemsPerPage

  switch (direction) {
    case 'next':
      if (paginator.value.end < total) {
        const newStart = paginator.value.start + perPage
        paginator.value.start = newStart
        paginator.value.end = Math.min(newStart + perPage, total)
      }
      break
    case 'prev':
      if (paginator.value.start > 0) {
        const newStart = Math.max(paginator.value.start - perPage, 0)
        paginator.value.start = newStart
        paginator.value.end = newStart + perPage
      }
      break
    case 'start':
      paginator.value.start = 0
      paginator.value.end = Math.min(perPage, total)
      break
    case 'end': {
      const totalPages = Math.ceil(total / perPage)
      paginator.value.start = (totalPages - 1) * perPage
      paginator.value.end = total
      break
    }
  }
  
  emitPageChange()
}

function emitPageChange() {
  emit('page-change', {
    start: paginator.value.start,
    end: paginator.value.end,
  })
}
</script>
