function solution(number) {
  const a = Array.from({length: (number - 1) / 3}, (v, i) => 3 * (i + 1));
  const b = Array.from({length: (number - 1) / 5}, (v, i) => 5 * (i + 1));
  return Array.from(new Set(a.concat(b))).reduce((s, n) => s += n, 0);
}
