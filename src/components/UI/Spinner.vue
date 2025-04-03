<template>
  <div class="spinner fixed inset-0 grid place-items-center z-10" :style="`background-color: ${bgColor ?? '#222'}`">
    <div class="spinner-inner flex flex-col gap-4">
      <img src="@/assets/spinner.svg" />
      <span class="font-bold">{{ text ?? "Загрузка..." }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  bgColor?: string;
  text?: string;
}>();
</script>
