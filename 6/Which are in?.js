// https://www.codewars.com/kata/550554fd08b86f84fe000a58/

function inArray(array1,array2){
  const set = array1.reduce((acc, cur) => {
    if (array2.find(str => new RegExp(cur).test(str))) {
      acc.add(cur);
    }
    return acc;
  }, new Set());
  return [...set].sort();
}