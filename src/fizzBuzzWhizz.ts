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

  
// Applies the FizzBuzz rules to a positive integer.
export const game = (input: number) => {
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