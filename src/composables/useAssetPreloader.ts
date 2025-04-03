import assets from "@/assets";
import { ref } from "vue";

export function useAssetPreloader() {
  let assetsLoaded = 0;
  let timeoutPassed = false;

  const loading = ref(true);

  for (const assetSrc of assets) {
    const image = new Image();
    image.onload = () => {
      assetsLoaded += 1;
      checkLoaded();
    };
    image.src = assetSrc;
  }

  setTimeout(() => {
    timeoutPassed = true;
    checkLoaded();
  }, 1000);

  function checkLoaded() {
    if (assetsLoaded === assets.length && timeoutPassed) {
      loading.value = false;
    }
  }

  return { loading };
}
