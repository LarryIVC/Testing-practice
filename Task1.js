function stringLenght(string) {
  const len = string.length;

  if (len < 1 || len > 10) {
    throw new Error('The length must be between 1 and 10.');
  }

  return len;
}

export default stringLenght;