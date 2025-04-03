<template>
  <div class="theme-switch-cnt flex justify-end p-4 relative">
    <div class="bg-changer w-10 h-10 rounded-full absolute z[1]"></div>
    <button @click="onToggleTheme" class="z-[2]">
      <Transition name="slide-right" mode="out-in">
        <img v-if="isDark" class="h-10 saturate-50" :src="SunButton" />
        <img v-else class="h-10" :src="MoonButton" />
      </Transition>
    </button>
  </div>
</template>

<script setup lang="ts">
import SunButton from "@/assets/sun-button.webp";
import MoonButton from "@/assets/moon-button.webp";
import { useDark, useToggle } from "@vueuse/core";
import gsap from "gsap";
import { onMounted, onUnmounted } from "vue";
import { useWindowSize } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { width, height } = useWindowSize();

let gsapCtx;

function onToggleTheme() {
  let radius = Math.max(width.value, height.value);
  gsapCtx?.themeChange(radius * 2, isDark.value);
}

function setup() {
  gsapCtx = gsap.context(() => {});

  gsapCtx.add("themeChange", (diameter: number, isDark: boolean) => {
    const tl = gsap.timeline();

    tl.set(".bg-changer", {
      backgroundColor: isDark ? "white" : "#1b1b1f",
    });
    tl.to(".bg-changer", {
      scale: (diameter + 400) / 40,
      duration: 0.3,
      ease: "power1",
      onComplete: () => {
        toggleDark();
        tl.revert();
      },
    });
  });
}

onMounted(() => {
  setup();
});

onUnmounted(() => {
  gsapCtx.revert();
});
</script>
