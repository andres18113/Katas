import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should works', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
  test('should works 2', () => {
    const result = game(2);
    expect(result).toEqual(2);
  });

  test("If the number is 3 return Fizz", () => {
    const result = game(3);
    expect(result).toEqual("Fizz");
  });

  test("If the number is 4 return 4", () => {
    const result = game(4);
    expect(result).toEqual(4);
  });
  test("If the number is 5 return 5", () => {
    const result = game(5);
    expect(result).toEqual("Buzz");
  });
  test("If the number is 15 return FizzBuzz", () => {
  const result = game(15);
  expect(result).toEqual("FizzBuzz");
  });
});