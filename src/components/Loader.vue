<template>
  <div class="loader fixed inset-0 bg-white grid place-items-center">
    <div class="loader-inner flex flex-col gap-4">
      <img src="/loader.svg" />
      <span class="font-bold">Загрузка...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const emit = defineEmits<{
  loaded: [];
}>();

let assetsLoaded = 0;
let timeoutPassed = false;

const checkLoaded = () => {
  if (assetsLoaded === assets.length - 1 && timeoutPassed) {
    emit("loaded");
  }
};

const assets = [
  "/avatar.webp",

  // icons
  "/icons/docker.webp",
  "/icons/github.webp",
  "/icons/gitlab.webp",
  "/icons/link.webp",
  "/icons/mongo.webp",
  "/icons/nuxt.webp",
  "/icons/pinia.webp",
  "/icons/quasar.webp",
  "/icons/tailwing.webp",
  "/icons/ts.webp",
  "/icons/unirender.webp",
  "/icons/vitest.webp",
  "/icons/vue.webp",

  // screenshots

  // consul
  "/screenshots/consul1.webp",
  "/screenshots/consul2.webp",
  "/screenshots/consul3.webp",
  "/screenshots/consul4.webp",
  "/screenshots/consul5.webp",

  // pet
  "/screenshots/pet1.webp",
  "/screenshots/pet2.webp",
  "/screenshots/pet3.webp",
  "/screenshots/pet4.webp",

  // sirius
  "/screenshots/sirius1.webp",
  "/screenshots/sirius2.webp",
  "/screenshots/sirius3.webp",
  "/screenshots/sirius4.webp",

  // tapsmart
  "/screenshots/tapsmart1.webp",
  "/screenshots/tapsmart2.webp",
  "/screenshots/tapsmart3.webp",
  "/screenshots/tapsmart4.webp",
  "/screenshots/tapsmart5.webp",

  // tokling
  "/screenshots/tokling1.webp",
  "/screenshots/tokling2.webp",
  "/screenshots/tokling3.webp",
  "/screenshots/tokling4.webp",
  "/screenshots/tokling5.webp",
  "/screenshots/tokling6.webp",
  "/screenshots/tokling7.webp",

  // unirender
  "/screenshots/unirender1.webp",
  "/screenshots/unirender2.webp",
  "/screenshots/unirender3.webp",
  "/screenshots/unirender4.webp",
];

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
