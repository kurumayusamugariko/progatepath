import {countWord} from "@/count_word";

test("countWord", () => {
  expect(countWord("hello world", "hello")).toBe(1);
  expect(countWord("hello world", "world")).toBe(1);
  expect(countWord("hello world", "")).toBe(-1);
  expect(countWord("", "hello")).toBe(-1);
  expect(countWord("hello", "hello")).toBe(1);
  expect(countWord(" hello world!", "hello")).toBe(1);
  expect(countWord("hello hello world", "hello")).toBe(2);
  expect(countWord("hello hello world", "world")).toBe(1);
  expect(countWord("hello hello world", "test")).toBe(0);
});
