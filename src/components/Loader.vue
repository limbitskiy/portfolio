<template>
  <div class="loader fixed inset-0 bg-white grid place-items-center">
    <div class="loader-inner flex flex-col gap-4">
      <img src="@/assets/loader.svg" />
      <span class="font-bold">Загрузка...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import assets from "@/assets";

const emit = defineEmits<{
  loaded: [];
}>();

let assetsLoaded = 0;
let timeoutPassed = false;

const checkLoaded = () => {
  if (assetsLoaded === assets.length && timeoutPassed) {
    emit("loaded");
  }
};

for (const assetSrc of assets) {
  const image = new Image();
  image.onload = () => {
    assetsLoaded += 1;
    checkLoaded();
  };
  image.src = assetSrc;
}

onMounted(() => {
  setTimeout(() => {
    timeoutPassed = true;
    checkLoaded();
  }, 1000);
});
</script>
