import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("should yield NaN for non-transferable values", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2  = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
