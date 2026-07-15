<script setup lang="ts">
import profile from '~/data/profile.json'
import '../../assets/css/index.css?raw'

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div
    class="
      min-block-full inline-full flex flex-col gap-4 items-center justify-center
      bg-[#070707] text-[#ffffff] px-24 py-20
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
      class="text-4xl uppercase tracking-widest"
    >
      [ {{ profile.role }} ]
    </span>
  </div>
</template>
