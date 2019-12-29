// https://www.codewars.com/kata/56f78a42f749ba513b00037f/

const sum = (numbers) => numbers.reduce((s, n) => s + n, 0);
// https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

function rolldiceSumProb(arr, totalSides){
  const combinations = cartesian(
    ...Array.from({length: totalSides}, () => [1, 2, 3, 4, 5, 6])
  )
  const match = combinations.filter(c => sum(c) === arr).length;
  return match / Math.pow(6, totalSides);
}
