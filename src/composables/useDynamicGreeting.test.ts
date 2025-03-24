import { useDynamicGreeting } from "@/composables/useDynamicGreeting";

describe("useDynamicGreeting", () => {
  it("returns `Доброе утро!` if hours are >=5 & <=11", () => {
    const { greetingString: greetingStringMin } = useDynamicGreeting(5);
    expect(greetingStringMin.value).toBe("Доброе утро!");

    const { greetingString: greetingStringBetween } = useDynamicGreeting(8);
    expect(greetingStringBetween.value).toBe("Доброе утро!");

    const { greetingString: greetingStringMax } = useDynamicGreeting(11);
    expect(greetingStringMax.value).toBe("Доброе утро!");
  });

  it("returns `Добрый день!` if hours are >=12 & <=17", () => {
    const { greetingString: greetingStringMin } = useDynamicGreeting(12);
    expect(greetingStringMin.value).toBe("Добрый день!");

    const { greetingString: greetingStringBetween } = useDynamicGreeting(14);
    expect(greetingStringBetween.value).toBe("Добрый день!");

    const { greetingString: greetingStringMax } = useDynamicGreeting(17);
    expect(greetingStringMax.value).toBe("Добрый день!");
  });

  it("returns `Добрый вечер!` if hours are >=18 & <=22", () => {
    const { greetingString: greetingStringMin } = useDynamicGreeting(18);
    expect(greetingStringMin.value).toBe("Добрый вечер!");

    const { greetingString: greetingStringBetween } = useDynamicGreeting(20);
    expect(greetingStringBetween.value).toBe("Добрый вечер!");

    const { greetingString: greetingStringMax } = useDynamicGreeting(22);
    expect(greetingStringMax.value).toBe("Добрый вечер!");
  });

  it("returns `Доброй ночи!` if hours are >=23 & <=4", () => {
    const { greetingString: greetingStringMin } = useDynamicGreeting(23);
    expect(greetingStringMin.value).toBe("Доброй ночи!");

    const { greetingString: greetingStringBetween } = useDynamicGreeting(0);
    expect(greetingStringBetween.value).toBe("Доброй ночи!");

    const { greetingString: greetingStringMax } = useDynamicGreeting(4);
    expect(greetingStringMax.value).toBe("Доброй ночи!");
  });

  it("returns `Здравствуйте!` if hours are could not be calculated", () => {
    const { greetingString: greetingString1 } = useDynamicGreeting("test");
    expect(greetingString1.value).toBe("Здравствуйте!");

    const { greetingString: greetingString2 } = useDynamicGreeting("");
    expect(greetingString2.value).toBe("Здравствуйте!");
  });
});
