<template>
  <div class="icon-text flex gap-1 items-center">
    <img v-if="icon" class="w-[25px] h-[25px]" :src="iconMap[icon] ?? unknown" data-test="icontext-icon" />
    <span data-test="icontext-text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import ts from "@/assets/icons/ts.webp";
import nuxt from "@/assets/icons/nuxt.webp";
import pinia from "@/assets/icons/pinia.webp";
import vitest from "@/assets/icons/vitest.webp";
import vue from "@/assets/icons/vue.webp";
import gitlab from "@/assets/icons/gitlab.webp";
import tailwind from "@/assets/icons/tailwind.webp";
import unirender from "@/assets/icons/unirender.webp";
import quasar from "@/assets/icons/quasar.webp";
import docker from "@/assets/icons/docker.webp";
import mongo from "@/assets/icons/mongo.webp";
import unknown from "@/assets/icons/unknown.webp";

defineProps<{
  icon: string;
  text: string;
}>();

const iconMap = {
  ts,
  nuxt,
  pinia,
  vitest,
  vue,
  gitlab,
  tailwind,
  unirender,
  quasar,
  docker,
  mongo,
};
</script>
