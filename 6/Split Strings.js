function solution(str) {
  return str.match(/.{1,2}/gi).map(s => s.padEnd(2, '_'));
}
