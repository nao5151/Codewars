var moveZeros = function (arr) {
  const result = [];
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      result.push(arr[i]);
      count++;
    } else {
      result.splice(i - count, 0, arr[i]);
    }
  }
  return result;
}
