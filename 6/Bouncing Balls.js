// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/

function bouncingBall (h, bounce, window) {
  if (h <= 0 || h <= window || bounce <= 0 || 1 <= bounce) {
    return -1;
  }

  let h2 = h * bounce;
  let i = 1;
  while (h2 > window) {
    i += 2;
    h2 *= bounce;
  }
  return i;
}
