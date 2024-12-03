import {fizzbuzz} from "./fizzbuzz";

test("Return FizzBuzz when the number is divisible by 3 and 5", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});
test("Return Fizz when the number is divisible by 3", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});
test("Return Buzz when the number is divisible by 5", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});
test("Return a number when the number is not divisible by 3 or 5", () => {
  expect(fizzbuzz(1)).toBe("1");
});