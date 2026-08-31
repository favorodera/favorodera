<script setup lang="ts">
import experience from '#data/experience.json'
</script>

<template>
  <Section
    :leading="{
      index:'01',
      title:'Experience'
    }"
    :trailing="String(experience.length).padStart(2, '0')"
  >
    <!-- Items list -->
    <ul
      class="
        mbs-5 scroll-fade-y scrollbar-none gap-5 overflow-y-auto block-72
        scroll-fade-18
      "
    >
      <li
        v-for="item in experience"
        :key="item.id"
        class="
          border-be py-5

          sm:grid sm:grid-cols-[auto_1fr] sm:items-start sm:gap-x-6
        "
      >
        <!-- Period -->
        <p
          class="
            flex items-center gap-1.5 text-2xs

            sm:pbs-1
          "
        >
          {{ item.from }} - {{ item.to }}
        </p>

        <!-- Role, company and note -->
        <div
          class="
            mbs-2

            sm:mbs-0
          "
        >
          <!-- Role -->
          <h3
            class="
              text-[0.95rem] leading-snug

              sm:text-base
            "
          >
            {{ item.role }}
          </h3>

          <!-- Company -->
          <p
            class="mbs-1.5 text-2xs"
          >
            {{ item.company }}
          </p>

          <!-- Note -->
          <p class="mbs-3 text-sm/relaxed text-muted-foreground">
            {{ item.note }}
          </p>
        </div>
      </li>
    </ul>
  </Section>
</template>
