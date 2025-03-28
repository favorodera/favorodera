<template>

  <nav
    class="fixed bottom-4 right-4 z-10 flex cursor-pointer gap-2 rounded-full bg-brand-elevate p-4"
    @click.stop="isMenuOpen = !isMenuOpen"
  >

    <NuxtIcon
      :name="isMenuOpen ? 'hugeicons:cancel-01': 'hugeicons:menu-square'"
      :class="[
        'shrink-0',
        {
          'rotate-90': isMenuOpen,
        },
      ]"
    />

    <Transition
      mode="out-in"
      enter-from-class="transform opacity-0"
      enter-to-class="transform opacity-100"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0"
    >

      <ul
        v-if="isMenuOpen"
        class="absolute bottom-14 right-0 z-10 flex flex-col gap-2 border border-brand-elevate rounded-3 bg-brand-background p-2"
      >

        <li
          v-for="item in navigation"
          :key="item.path"
        >

          <NuxtLink
            :to="item.path"
            class="w-full flex items-center gap-2 rounded-md bg-brand-elevate px-2 py-1 hover:bg-brand-elevate/70"
          >
            <NuxtIcon
              :name="item.icon"
              class="shrink-0"
            />

            <span>{{ item.name }}</span>

          </NuxtLink>

        </li>

      </ul>

    </Transition>

  </nav>

</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const navigation = ref([
  {
    name: 'Home',
    path: '/',
    icon: 'hugeicons:home-01',
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: 'hugeicons:wrench-01',
  },
  {
    name: 'Posts',
    path: '/posts',
    icon: 'hugeicons:notebook-01',
  },
])
</script>

<style scoped lang="css">

</style>
