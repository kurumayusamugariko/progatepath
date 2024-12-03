import {isValidDate} from "@/is_valid_date";

describe("isValidDate", () => {
  test("returns true for a valid date", () => {
    expect(isValidDate(2023, 10, 15)).toBe(true);
  });

  test("returns false for an invalid date", () => {
    expect(isValidDate(2023, 2, 30)).toBe(false);
  });

  test("returns false for a date with invalid month", () => {
    expect(isValidDate(2023, 13, 15)).toBe(false);
  });

  test("returns false for a date with invalid day", () => {
    expect(isValidDate(2023, 4, 31)).toBe(false);
  });

  test("returns true for a leap year date", () => {
    expect(isValidDate(2024, 2, 29)).toBe(true);
  });

  test("returns false for a non-leap year date", () => {
    expect(isValidDate(2023, 2, 29)).toBe(false);
  });
});
