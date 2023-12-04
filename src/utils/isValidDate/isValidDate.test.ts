import { isValidDate } from "./isValidDate";

describe("is valid date function", () => {
  it("should handle valid date", () => {
    const dateString = "01/01/2023";
    expect(isValidDate(dateString)).toBe(true);
  });

  it("should return false for empty date string", () => {
    const dateString = "";
    expect(isValidDate(dateString)).toBe(false);
  });

  it("should return false for invalid date string", () => {
    const dateString = "88/22/2002";
    expect(isValidDate(dateString)).toBe(false);
  });

  it("should return false for incorrect date string", () => {
    const dateString = "30/02/2023";
    expect(isValidDate(dateString)).toBe(false);
  });
});
