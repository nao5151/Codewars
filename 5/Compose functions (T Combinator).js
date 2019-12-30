// https://www.codewars.com/kata/51f9d3db4095e07f130001ee/

var compose = function() {
  const [a, b, ...c] = arguments;
  return b ? compose(b(a), ...c) : a;
}
