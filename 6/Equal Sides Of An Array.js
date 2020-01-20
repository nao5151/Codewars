function findEvenIndex(arr) {
  return arr.findIndex((_, i) => sum(arr.slice(0, i)) === sum(arr.slice(i + 1)));
}

function sum(arr) {
  return arr.reduce((s, n) => s + n, 0);
}
