<template>
  <!-- mobile view -->
  <div v-if="screenWidth <= 1024" class="project flex flex-col">
    <div class="project-title h-[50px] text-white flex flex-col items-end justify-center px-4 leading-6" :style="`background-color: ${color}`">
      <span class="font-bold" style="font-size: clamp(22px, 4vw, 28px)">{{ title }}</span>
      <span style="font-size: clamp(14px, 3vw, 17px)">{{ subtitle }}</span>
    </div>

    <div class="project-desc flex flex-col gap-[3dvh] my-[4dvh] px-4 overflow-hidden">
      <slot name="desc">Project description </slot>
    </div>

    <div class="project-images px-4 mb-[4dvh]">
      <div class="carousel overflow-hidden">
        <VSlickCarousel v-bind="mobileSettings">
          <slot name="mobileImages"></slot>
        </VSlickCarousel>
      </div>
    </div>

    <div class="project-details bg-[var(--grey-bg)] flex flex-col gap-4 py-8 px-4 mb-[10dvh]">
      <slot name="details"> Project details </slot>
    </div>
  </div>

  <!-- desktop view -->
  <div v-else class="project">
    <div class="project-title h-[50px] text-white flex items-center gap-2 justify-end px-4 lg:px-0 lg:justify-start relative" :style="`background-color: ${color}`">
      <div class="title-left h-[50px] w-[50vw] absolute -left-[50vw]" :style="`background-color: ${color}`"></div>
      <span class="font-bold" style="font-size: clamp(22px, 4vw, 28px)">{{ title }}</span>
      <span class="relative bottom-2" style="font-size: clamp(14px, 3vw, 17px)">{{ subtitle }}</span>
    </div>

    <div ref="gridRef" class="grid-two grid grid-cols-[7fr_5fr] gap-[4vw]">
      <div class="project-left overflow-hidden">
        <div class="project-desc flex flex-col gap-[3dvh] my-[4dvh] px-4 overflow-hidden">
          <slot name="desc">Project description </slot>
        </div>

        <div class="project-images px-4 pb-[10dvh]">
          <div class="carousel">
            <VSlickCarousel v-bind="settings">
              <slot name="images"></slot>
            </VSlickCarousel>
          </div>
        </div>
      </div>

      <div ref="rightRef" class="project-right relative">
        <div class="project-details sticky top-0 bg-[var(--grey-bg)] flex flex-col gap-4 py-8 px-8">
          <slot name="details"> Project details </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

// carousel
import "v-slick-carousel/style.css";
import { VSlickCarousel } from "v-slick-carousel";
import type { Settings } from "v-slick-carousel";

const props = defineProps<{
  color: string;
  title: string;
  subtitle: string;
  carouselSettings: {};
}>();

const { width: screenWidth } = useWindowSize();

const settings: Settings = {
  arrows: false,
  dots: false,
  infinite: true,
  groupsToShow: 3,
  groupsToScroll: 1,
  slidesPerGroup: 1,
  swipe: true,
  ignorePrefersReducedMotion: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  ...props.carouselSettings,
};

const mobileSettings: Settings = {
  ...settings,
  groupsToShow: 1,
  ...props.carouselSettings,
};
</script>
