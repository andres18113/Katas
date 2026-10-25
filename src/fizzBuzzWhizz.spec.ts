import { game } from "./fizzBuzzWhizz";

describe("FizzBuzz Game", () => {
  // Verify that numbers without matching rules remain unchanged.
  test("If the number is 1 return 1", () => {
    const result = game(1);
    expect(result).toEqual(1);
  });

  test("If the number is 2 return 2", () => {
    const result = game(2);
    expect(result).toEqual(2);
  });

  // Verify the Fizz rule for numbers divisible by 3.
  test("If the number is 3 return Fizz", () => {
    const result = game(3);
    expect(result).toEqual("Fizz");
  });

  test("If the number is 4 return 4", () => {
    const result = game(4);
    expect(result).toEqual(4);
  });

  // Verify the Buzz rule for numbers divisible by 5.
  test("If the number is 5 return Buzz", () => {
    const result = game(5);
    expect(result).toEqual("Buzz");
  });

  // Verify the combined rule for numbers divisible by both 3 and 5.
  test("If the number is 15 return FizzBuzz", () => {
    const result = game(15);
    expect(result).toEqual("FizzBuzz");
  });

  // Verify FizzBuzz rules at different scales using multiples of 15.
  test("should validate FizzBuzz rules using multiples of 15", () => {
    for (const k of [0, 1, 10, 100000]) {
      // Check the four possible divisibility cases.
      expect(game(15 * k + 1)).toBe(15 * k + 1);
      expect(game(15 * k + 3)).toBe("Fizz");
      expect(game(15 * k + 5)).toBe("Buzz");
      expect(game(15 * k + 15)).toBe("FizzBuzz");
    }
  });
});