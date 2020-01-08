function find_average(array) {
  return array.reduce((sum, num) => sum + num, 0) / array.length;
}
