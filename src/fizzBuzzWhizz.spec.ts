import { game } from "./fizzBuzzWhizz";

describe("FizzBuzzWhizz Game", () => {
  // Verify that 1 remains unchanged.
  test("If the number is 1 return 1", () => {
    const result = game(1);
    expect(result).toEqual(1);
  });

  // Verify prime numbers and their combined rules.
  test("If the number is 2 return Whizz", () => {
    const result = game(2);
    expect(result).toEqual("Whizz");
  });

  test("If the number is 3 return FizzWhizz", () => {
    const result = game(3);
    expect(result).toEqual("FizzWhizz");
  });

  test("If the number is 4 return 4", () => {
    const result = game(4);
    expect(result).toEqual(4);
  });

  test("If the number is 5 return BuzzWhizz", () => {
    const result = game(5);
    expect(result).toEqual("BuzzWhizz");
  });

  test("If the number is 7 return Whizz", () => {
    const result = game(7);
    expect(result).toEqual("Whizz");
  });

  // Verify the Fizz and Buzz rules for composite numbers.
  test("If the number is 9 return Fizz", () => {
    const result = game(9);
    expect(result).toEqual("Fizz");
  });

  test("If the number is 15 return FizzBuzz", () => {
    const result = game(15);
    expect(result).toEqual("FizzBuzz");
  });

  test("If the number is 25 return Buzz", () => {
    const result = game(25);
    expect(result).toEqual("Buzz");
  });

  test("If the number is 49 return 49", () => {
    const result = game(49);
    expect(result).toEqual(49);
  });

  test("If the number is 97 return Whizz", () => {
    const result = game(97);
    expect(result).toEqual("Whizz");
  });

  // Verify FizzBuzz rules using different multiples of 15.
  test("should validate FizzBuzz rules using multiples of 15", () => {
    // Use positive odd values to avoid prime numbers in these cases.
    for (const k of [1, 3, 11, 100001]) {
      expect(game(15 * k + 1)).toBe(15 * k + 1);
      expect(game(15 * k + 3)).toBe("Fizz");
      expect(game(15 * k + 5)).toBe("Buzz");
      expect(game(15 * k + 15)).toBe("FizzBuzz");
    }
  });

  // Verify prime numbers greater than 100.
  test("If the number is 101 return Whizz", () => {
    const result = game(101);
    expect(result).toEqual("Whizz");
  });

  test("If the number is 2003 return Whizz", () => {
    const result = game(2003);
    expect(result).toEqual("Whizz");
  });

  // Verify that composite numbers are not classified as prime.
  test("If the number is 121 return 121", () => {
    const result = game(121);
    expect(result).toEqual(121);
  });
  // Verify that negative numbers are rejected.
  test("should reject negative numbers", () => {
    expect(() => game(-3)).toThrow(RangeError);
  });
});