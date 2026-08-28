<script setup lang="ts">
const profile = await useAsyncData('profile', () => {
  return queryCollection('profile').first()
})

const portraitLoadFailed = ref(false)
</script>

<template>
  <section
    aria-labelledby="name"
    class="
      pbs-16

      sm:pbs-24
    "
  >
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }"
    >
      <template v-if="profile.data.value">
        <div
          class="
            flex items-end gap-5

            sm:gap-7
          "
        >
          <div
            class="
              relative flex-none overflow-hidden bg-muted block-22 inline-18

              sm:block-28 sm:inline-24
            "
          >
            <span
              v-if="portraitLoadFailed"
              class="
                flex items-center justify-center font-mono text-sm
                text-muted-foreground uppercase block-full inline-full
              "
            >
              {{ profile.data.value.initials }}
            </span>

            <NuxtImg
              :src="profile.data.value.portrait"
              :alt="`Portrait of ${profile.data.value.name}`"
              class="object-cover grayscale inline-full min-block-full"
              @error="portraitLoadFailed = true"
            />
          </div>

          <h1
            id="name"
            class="
              text-[2.5rem] leading-[0.92] font-medium tracking-[-0.035em]

              sm:text-[3.75rem]
            "
          >
            <span class="block">
              {{ profile.data.value.displayName[0] }}
            </span>

            <span class="block text-muted-foreground">
              {{ profile.data.value.displayName.slice(1).join(' ') }}
            </span>
          </h1>
        </div>

        <p
          class="
            mbs-7 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono
            text-[10px] tracking-[0.18em] text-muted-foreground uppercase
          "
        >
          <span
            v-for="(item, index) in profile.data.value.roleLine"
            :key="item"
            class="flex items-center gap-2"
          >
            <span v-if="index > 0">·</span>
            {{ item }}
          </span>
        </p>

        <div
          class="
            mbs-6 space-y-1.5 text-[0.95rem] leading-relaxed

            sm:text-base
          "
        >
          <p>
            {{ profile.data.value.bio[0] }}
          </p>

          <p class="text-muted-foreground">
            {{ profile.data.value.bio[1] }}
          </p>
        </div>
      </template>
    </Motion>
  </section>
</template>
