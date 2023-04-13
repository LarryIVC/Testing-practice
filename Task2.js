function reverseString(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be a string');
  }
  return string.split('').reverse().join('');
}

export default reverseString;