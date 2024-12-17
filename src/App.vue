<template>
  <Transition name="fade" mode="out-in">
    <Loader v-if="isLoaderShown" @loaded="onLoaded" />
  </Transition>
  <Transition name="fade" mode="out-in">
    <Portfolio v-if="isPortfolioShown" :isDarkTheme="isDarkTheme" @theme-change="onManualThemeChange" />
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let gsapCtx;

const isPortfolioShown = ref(false);
const isLoaderShown = ref(true);
const isDarkTheme = ref(true);

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

  if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");

    setThemeClass(theme);
  } else {
    const timeOfDay = new Date().getHours();
    const theme = timeOfDay > 5 && timeOfDay < 17 ? "light" : "dark";

    setThemeClass(theme);
  }
});

const setThemeClass = (theme: string, store?: boolean) => {
  if (theme === "light") {
    document.body.classList.remove("dark-theme");
    isDarkTheme.value = false;
  } else {
    document.body.classList.add("dark-theme");
    isDarkTheme.value = true;
  }

  if (store) {
    localStorage.setItem("theme", theme);
  }
};

const onManualThemeChange = () => {
  const newTheme = isDarkTheme.value === true ? "light" : "dark";
  isDarkTheme.value = !isDarkTheme.value;
  setThemeClass(newTheme, true);
};

onUnmounted(() => {
  gsapCtx?.revert();
});
</script>
