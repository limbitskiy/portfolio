<template>
  <div class="icon-text flex gap-1 items-center leading-7">
    <img class="w-[25px] h-[25px]" :src="iconMap[icon]" />
    <a class="text-ellipsis overflow-hidden whitespace-nowrap" :href="link" :target="sameTab ? '' : '_blank'">{{ text ? text : link }}</a>
  </div>
</template>

<script setup lang="ts">
import linkIcon from "@/assets/icons/link.webp";
import github from "@/assets/icons/github.webp";
import gitlab from "@/assets/icons/gitlab.webp";

defineProps<{
  icon: string;
  link: string;
  text?: string;
  sameTab?: boolean;
}>();

const iconMap = {
  link: linkIcon,
  github,
  gitlab,
};
</script>
