// https://www.codewars.com/kata/541c8630095125aba6000c00/

function digital_root(n) {
  const arr = n.toString().split('')
  if (arr.length <= 2) {
    return arr.reduce(sum, 0);
  } else {
    return digital_root(arr.reduce(sum, 0));
  }
}

function sum(a, b) {
  return a + Number(b);
}