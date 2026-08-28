<script setup lang="ts">
import profile from '~/data/profile.json'
</script>

<template>
  <div
    class="
      flex flex-col items-center justify-center gap-4 bg-[#070707] px-24 py-20
      text-[#ffffff] inline-full min-block-full
    "
  >
    <h1
      :style="{
        fontFamily: `Instrument Serif', serif`
      }"
      class="font-serif text-9xl leading-none"
    >
      {{ profile.name }}
    </h1>

    <span
      :style="{
        fontFamily: `Bricolage Grotesque', sans-serif`
      }"
      class="text-4xl tracking-widest uppercase"
    >
      [ {{ profile.role }} ]
    </span>
  </div>
</template>
