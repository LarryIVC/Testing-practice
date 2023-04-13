import capitalize from "./Task4.js";

describe("capitalize function", () => {
  test("capitalizes the first character of a string", () => {
    // Arrange: set up the input string
    const inputString = "microverse";
    
    // Act: call the capitalize function
    const result = capitalize(inputString);
    
    // Assert: verify that the first character is capitalized
    expect(result.charAt(0)).toBe("M");
  });
  
  test("returns the original string with only the first character capitalized", () => {
    // Arrange: set up the input string
    const inputString = "microverse";
    
    // Act: call the capitalize function
    const result = capitalize(inputString);
    
    // Assert: verify that the result is as expected
    expect(result).toBe("Microverse");
  });
});