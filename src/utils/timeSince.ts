const msInYear = 31556952000;
const msInMonth = 2629746000;
const msInDay = 86400000;
const msInHour = 3600000;
const msInMinute = 60000;
const msInSecond = 1000;

export function timeSince(dateNumber: number | string) {
  if (typeof dateNumber != "number") return;

  const startDate = new Date(2020, 7, 6);
  const totalMsPassed = dateNumber - +startDate;

  const { result: years, remainder: yearRemainder } = divideWithRemainder(totalMsPassed, msInYear);
  const { result: months, remainder: monthRemainder } = divideWithRemainder(yearRemainder, msInMonth);
  const { result: days, remainder: daysRemainder } = divideWithRemainder(monthRemainder, msInDay);
  const { result: hours, remainder: hoursRemainder } = divideWithRemainder(daysRemainder, msInHour);
  const { result: minutes, remainder: minutesRemainder } = divideWithRemainder(hoursRemainder, msInMinute);
  const { result: seconds } = divideWithRemainder(minutesRemainder, msInSecond);

  if (years >= 0 && months >= 0 && days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0) {
    return `${years}г, ${months}м, ${days}дн, ${hours}ч, ${minutes}м, ${seconds}с`;
  } else {
    return undefined;
  }
}

function divideWithRemainder(a: number, b: number) {
  const result = Math.trunc(a / b);
  const remainder = a % b;
  return { result, remainder };
}
