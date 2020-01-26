function digPow(n, p) {
  const sum = String(n).split('').reduce((sum, num, i) => sum + (num ** (p + i)), 0);
  return sum % n === 0 ? sum / n : -1;
}
