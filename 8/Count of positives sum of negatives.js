// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }
  
  return input.reduce((acc, cur) => {
    if (cur > 0) {
      acc[0]++;
    } else {
      acc[1] += cur; 
    }
    return acc;
  }, [0, 0]);
}