import { timeSince } from "@/utils/timeSince";

describe("timeSince", () => {
  it("returns time for +5 years", () => {
    // const startDate = new Date(2020, 7, 6);
    const date = new Date("2025, 7, 6").getTime();

    const result = timeSince(date);
    expect(result).toBe("4г, 10м, 29дн, 15ч, 52м, 12с");
  });

  it("returns time for +10 years", () => {
    const date = new Date("2030, 7, 6").getTime();
    const result = timeSince(date);
    expect(result).toBe("9г, 10м, 29дн, 10ч, 46м, 12с");
  });

  it("returns undefined if calculated time is not valid", () => {
    const result1 = timeSince(12);
    expect(result1).toBeUndefined();

    const result2 = timeSince("");
    expect(result2).toBeUndefined();

    const result3 = timeSince("text");
    expect(result3).toBeUndefined();

    const randomNum = 124653654543;
    const result4 = timeSince(randomNum);
    expect(result4).toBeUndefined();
  });
});
