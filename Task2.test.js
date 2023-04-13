  import reverseString from "./Task2.js";
  
  test('Should return a reverse string', () => {
    // Arrange
    const str = 'Microverse';

    // Act
    const result = reverseString(str);

    // Assert
    expect(result).toBe('esrevorciM');
  });

  test('should throw an error if argument is not a string', () => {
    // Arrange
    const arg = 42;

    // Act and Assert
    expect(() => reverseString(arg)).toThrow('The argument must be a string');
  });

