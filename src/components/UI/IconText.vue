<template>
  <div class="icon-text flex gap-1 items-center">
    <img v-if="icon" class="w-[25px] h-[25px]" :src="iconMap[icon]" />
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  text: string;
}>();

const iconMap = {
  ts: "/icons/ts.webp",
  nuxt: "/icons/nuxt.webp",
  pinia: "/icons/pinia.webp",
  vitest: "/icons/vitest.webp",
  vue: "/icons/vue.webp",
  gitlab: "/icons/gitlab.webp",
  tailwind: "/icons/tailwind.webp",
  unirender: "/icons/unirender.webp",
  quasar: "/icons/quasar.webp",
  docker: "/icons/docker.webp",
  mongo: "/icons/mongo.webp",
};
</script>
