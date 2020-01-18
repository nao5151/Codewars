function spin(s) {
  return s.split('').reverse().join('');
}

function spinWords(str) {
  return str.split(' ').map(s => s.length >= 5 ? spin(s) : s).join(' ');
}
