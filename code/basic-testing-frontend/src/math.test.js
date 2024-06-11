import { it, expect } from "vitest";
import { add } from "./math";

// AAA pattern for usnit testing
it("should summerize all numbers in an Array : ", () => {
  const numbers = [12, 2, 3, 8, 6]; //Arrange phase
  const result = add(numbers); //Act phase
  //Assert Phase
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should send NaN if a least one invalid number is provided", () => {
  // AAA pattern -> Arrange , Act, Assert
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct NaN if an array of numeric string value is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  expect(result).toBe(expectedResult);
});
