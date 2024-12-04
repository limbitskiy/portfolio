import { computed, onMounted, onUnmounted, ref } from "vue";

export const useTimeSince = () => {
  let interval: ReturnType<typeof setInterval>;

  const timeString = ref({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeAgo = () => {
    const startDate = new Date(2020, 7, 6);
    const timeAgo = Date.now() - +startDate;

    timeString.value.years = Math.trunc(timeAgo / 31556952000);
    const months = timeAgo % 31556952000;
    timeString.value.months = Math.trunc(months / 2629746000);
    const days = months % 2629746000;
    timeString.value.days = Math.trunc(days / 86400000);
    const hours = days % 86400000;
    timeString.value.hours = Math.trunc(hours / 3600000);
    const minutes = hours % 3600000;
    timeString.value.minutes = Math.trunc(minutes / 60000);
    const seconds = minutes % 60000;
    timeString.value.seconds = Math.trunc(seconds / 1000);
  };

  const timeSince = computed(
    () =>
      `${timeString.value.years}г, ${timeString.value.months}м, ${timeString.value.days}дн, ${timeString.value.hours}ч, ${timeString.value.minutes}м, ${timeString.value.seconds}с`
  );

  onMounted(() => {
    calculateTimeAgo();

    setInterval(() => {
      calculateTimeAgo();
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(interval);
  });

  return {
    timeSince,
  };
};
