<template>
  <div class="icon-link flex gap-1 items-center leading-7">
    <img class="w-[25px] h-[25px]" :src="iconMap[icon] ?? unknown" data-test="iconlink-icon" />
    <a class="text-ellipsis overflow-hidden whitespace-nowrap" data-test="iconlink-text" :href="link" :target="sameTab ? '' : '_blank'">{{ text ? text : link }}</a>
  </div>
</template>

<script setup lang="ts">
import linkIcon from "@/assets/icons/link.webp";
import github from "@/assets/icons/github.webp";
import gitlab from "@/assets/icons/gitlab.webp";
import unknown from "@/assets/icons/unknown.webp";

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
