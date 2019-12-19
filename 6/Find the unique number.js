// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] !== arr[1]) {
    return arr[0];
  } else {
    return arr[arr.length - 1];
  }
}