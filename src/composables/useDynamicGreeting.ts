import { ref } from "vue";

export const useDynamicGreeting = (hours: number | string) => {
  const greetingString = ref("Здравствуйте!");

  if (typeof hours !== "number") {
    return { greetingString };
  }

  if (hours >= 5 && hours < 12) {
    greetingString.value = "Доброе утро!";
  } else if (hours >= 12 && hours <= 17) {
    greetingString.value = "Добрый день!";
  } else if (hours > 17 && hours <= 22) {
    greetingString.value = "Добрый вечер!";
  } else {
    greetingString.value = "Доброй ночи!";
  }

  return { greetingString };
};
