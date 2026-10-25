/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */

// Check whether a positive integer is prime.
const isPrime = (input: number): boolean => {
  // Numbers less than 2 are not prime.
  if (input < 2) {
    return false;
  }

  // Check possible divisors up to the square root.
  for (let divisor = 2; divisor * divisor <= input; divisor++) {
    if (input % divisor === 0) {
      return false;
    }
  }

  // No divisors found, so the number is prime.
  return true;
};

// Applies the FizzBuzzWhizz rules to a positive integer.
export const game = (input: number) => {
  // Check prime numbers before applying the standard rules.
  if (isPrime(input)) {
    if (input === 3) {
      return "FizzWhizz";
    }

    if (input === 5) {
      return "BuzzWhizz";
    }

    return "Whizz";
  }

  // Check combined divisibility first to prioritize FizzBuzz.
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }

  // Check divisibility by 3.
  if (input % 3 === 0) {
    return "Fizz";
  }

  // Check divisibility by 5.
  if (input % 5 === 0) {
    return "Buzz";
  }

  // Return the original number if no conditions are met.
  return input;
};