import { it, expect } from "vitest";
import { add } from "./math";

it("should summerize all numbers in an Array : ", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});


