// https://www.codewars.com/kata/56541980fa08ab47a0000040/

function printerError(s) {
  const match = s.match(/[^a-m]/gi);
  const err = match ? match.length : 0;
  return `${err}/${s.length}`;
}
