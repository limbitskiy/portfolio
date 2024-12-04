<template>
  <Transition name="fade" mode="out-in">
    <Loader v-if="isLoaderShown" @loaded="onLoaded" />
  </Transition>
  <Transition name="fade" mode="out-in">
    <Portfolio v-if="isPortfolioShown" />
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let gsapCtx;

const isPortfolioShown = ref(false);
const isLoaderShown = ref(true);

const onLoaded = () => {
  isLoaderShown.value = false;

  setTimeout(() => {
    isPortfolioShown.value = true;
  }, 500);
};

onMounted(() => {
  const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

onUnmounted(() => {
  gsapCtx?.revert();
});
</script>
