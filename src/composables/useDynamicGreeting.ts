import { ref } from "vue";

export const useDynamicGreeting = () => {
  const greetingString = ref("Доброе время суток!");

  const clientTime = new Date();
  const hours = clientTime.getHours();

  if (hours < 12) {
    greetingString.value = "Доброе утро!";
  } else if (hours > 12 && hours < 17) {
    greetingString.value = "Добрый день!";
  }
  if (hours > 17) {
    greetingString.value = "Добрый вечер!";
  }

  return { greetingString };
};
