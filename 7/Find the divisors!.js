// https://www.codewars.com/kata/544aed4c4a30184e960010f4/

function divisors(integer) {
  const result = [];
  let i = 2, j = integer;
  while (i < j) {
    if (integer % i === 0) {
      j = integer / i;
      result.push(i, j);
    }
    i++;
  }
  
  return result.length > 0 ? result.sort((a, b) => a - b) : `${integer} is prime`;
};