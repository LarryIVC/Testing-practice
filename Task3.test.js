import Calculator from "./Task3.js";

const calculator = new Calculator();

describe("Calculator add method", () => {
  test("adds two positive numbers", () => {
    
    //Arrange
    const a=2;
    const b=3;

    //Act
    const result = calculator.add(a,b);

    //Assert
    expect(result).toBe(5);
  });
  
  test("adds a positive and negative number", () => {

    // Arrange
    const a= 2;
    const b= -3;

    // Act
    const result = calculator.add(a, b);

    // Assert
    expect(result).toBe(-1);
  });
  
  test("adds two negative numbers", () => {

    // Arrange
    const a= -2;
    const b= -3;

    // Act
    const result = calculator.add(a, b);

    // Assert
    expect(result).toBe(-5);
  });
});

describe("Calculator subtract method", () => {
  test("subtracts a positive number from a larger positive number", () => {

    // Arrange
    const a= 5;
    const b= 2;

    // Act
    const result = calculator.subtract(a, b);

    // Assert
    expect(result).toBe(3);
  });
  
  test("subtracts a negative number from a positive number", () => {

    // Arrange
    const a= 5;
    const b= -2;

    // Act
    const result = calculator.subtract(a, b);

    // Assert
    expect(result).toBe(7);
  });
  
  test("subtracts a larger positive number from a smaller positive number", () => {

    // Arrange
    const a= 2;
    const b= 5;

    // Act
    const result = calculator.subtract(a, b);

    // Assert
    expect(result).toBe(-3);
  });
});

describe("Calculator multiply method", () => {

  test("multiplies two positive numbers", () => {
    
    // Arrange
    const a= 2;
    const b= 3;

    // Act
    const result = calculator.multiply(a, b);

    // Assert
    expect(result).toBe(6);
  });
  
  test("multiplies a positive and negative number", () => {

    // Arrange
    const a= 2;
    const b= -3;

    // Act
    const result = calculator.multiply(a, b);

    // Assert
    expect(result).toBe(-6);
  });
  
  test("multiplies two negative numbers", () => {

    // Arrange
    const a= -2;
    const b= -3;

    // Act
    const result = calculator.multiply(a, b);

    // Assert
    expect(result).toBe(6);
  });
});

describe("Calculator divide method", () => {
  test("divides a larger positive number by a smaller positive number", () => {

    // Arrange
    const a= 6;
    const b= 2;

    // Act
    const result = calculator.divide(a, b);

    // Assert
    expect(result).toBe(3);
  });
  
  test("divides a positive number by a negative number", () => {

    // Arrange
    const a= 6;
    const b= -2;

    // Act
    const result = calculator.divide(a, b);

    // Assert
    expect(result).toBe(-3);
  });
  
  test("throws an error when dividing by zero", () => {

    // Arrange
    const a= 6;
    const b= 0;
 
    // Act & Assert
    expect(() => calculator.divide(a, b)).toThrow("Cannot divide by zero!");
  });
});
