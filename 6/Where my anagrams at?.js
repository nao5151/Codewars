function anagrams(word, words) {
  const sorted = sort(word)
  return words.filter(w => sort(w) === sorted);
}

function sort(str) {
  return str.split('').sort().join('');
}
