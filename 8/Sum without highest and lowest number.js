function sumArray(array) {
  return (array || [])
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b, 0);
}
