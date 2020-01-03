function subtractionByRegrouping(minuend, subtrahend) {
  const a = minuend.toString().split('').map(Number);
  const b = subtrahend.toString().split('').map(Number);
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] < b[i]) {
      a[i - 1] -= 1;
      a[i] += 10;
    }
  }
  return a.reverse();
}
