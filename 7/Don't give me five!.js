function dontGiveMeFive(start, end) {
  let result = 0;
  for(let i = start; i <= end; i++) {
    if (i.toString().includes('5')) {
      continue;
    }
    result++;
  }
  return result;
}
