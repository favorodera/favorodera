<script setup lang="ts">
import projects from '#data/projects.json'
</script>

<template>
  <Section
    :leading="{
      index: '02',
      title: 'Work',
    }"
    :trailing="String(projects.length).padStart(2, '0')"
  >
    <!-- Items list -->
    <ul
      class="
        mbs-5 scroll-fade-y scrollbar-none gap-5 overflow-y-auto block-72
        scroll-fade-18
      "
    >
      <li
        v-for="item in projects"
        :key="item.id"
      >
        <NuxtLink
          class="
            group block border-be py-5 outline-none

            focus-visible:ring-1 focus-visible:ring-ring
          "

          :to="item.url"
          target="_blank"
          rel="noopener noreferrer"
          external
        >
          <div class="flex items-baseline justify-between gap-4">
            <h3
              class="
                text-[0.95rem] leading-snug transition-transform

                group-hover:translate-x-1

                sm:text-base
              "
            >
              {{ item.title }}
            </h3>

            <IconsArrowUpRight
              class="
                flex-none text-muted-foreground opacity-0
                transition-[translate,opacity] block-3.5 inline-3.5

                group-hover:translate-x-0.5 group-hover:opacity-100

                group-focus-visible:opacity-100
              "
            />
          </div>

          <p
            class="
              mbs-1.5 text-sm/relaxed text-muted-foreground transition-transform

              group-hover:translate-x-1
            "
          >
            {{ item.description }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </Section>
</template>
