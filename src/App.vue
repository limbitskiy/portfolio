<template>
  <Transition name="fade" mode="out-in">
    <Spinner v-if="loading" bg-color="#1b1b1f" />
  </Transition>
  <Transition name="slide-up" mode="out-in">
    <div v-show="isPortfolioShown" class="overflow-x-hidden">
      <ThemeSwitch />
      <Portfolio />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import gsap from "gsap";
import Lenis from "lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import Spinner from "@/components/UI/Spinner.vue";
import { useAssetPreloader } from "@/composables/useAssetPreloader";
import ThemeSwitch from "@/components/UI/ThemeSwitch.vue";

const { loading } = useAssetPreloader();

gsap.registerPlugin(ScrollTrigger);

let gsapCtx;

const isPortfolioShown = ref(false);

const unwatch = watch(loading, (value) => {
  if (!value) {
    setTimeout(() => {
      isPortfolioShown.value = true;
      unwatch();
    }, 500);
  }
});

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
