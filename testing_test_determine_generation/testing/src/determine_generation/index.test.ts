import {determineGeneration} from "@/determine_generation";

describe("determineGeneration", () => {
  describe("equivalence class test", () => {
    test("Invalid age: age = -5", () => {
      expect(determineGeneration(-5)).toBe("Invalid age");
    });
    test("Child: age = 10", () => {
      expect(determineGeneration(10)).toBe("Child");
    });
  });

  describe("boundary value test", () => {
    test("Child and Young boundary: age = 12, age = 13", () => {
      expect(determineGeneration(12)).toBe("Child");
      expect(determineGeneration(13)).toBe("Young");
    });
  });

  describe("decision table test", () => {
    test("Child: age = 0, age = 6, age = 12", () => {
      expect(determineGeneration(0)).toBe("Child");
      expect(determineGeneration(6)).toBe("Child");
      expect(determineGeneration(12)).toBe("Child");
    });
    test("Young: age = 13, age = 20, age = 29", () => {
      expect(determineGeneration(13)).toBe("Young");
      expect(determineGeneration(20)).toBe("Young");
      expect(determineGeneration(29)).toBe("Young");
    });
    test("Adult: age = 30, age = 50, age = 100", () => {
      expect(determineGeneration(30)).toBe("Adult");
      expect(determineGeneration(50)).toBe("Adult");
      expect(determineGeneration(100)).toBe("Adult");
    });
  });
});
