import stringLenght from './Task1.js';

test('stringLenght returns the length of the string', () => {
  // Arrange
  const str = 'Microverse';

  // Act
  const result = stringLenght(str);

  // Assert
  expect(result).toBe(10);
});

test('stringLenght Throw an error if the length is less than one.', () => {
  // Arrange
  const str = '';

  // Act & Assert
  expect(() => stringLenght(str)).toThrowError('The length must be between 1 and 10.');
});

test('stringLenght Throw an error if the length is greater than ten', () => {
  // Arrange
  const str = 'This string is very long';

  // Act & Assert
  expect(() => stringLenght(str)).toThrowError('The length must be between 1 and 10.');
});
