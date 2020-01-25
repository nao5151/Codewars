// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/

function scramble(str1, str2) {
  const map = {};
  for(let i = 0; i < str1.length; i++) {
    const s = str1[i];
    if (map[s]) {
      map[s]++;
    } else {
      map[s] = 1;
    }
  }
  
  for (let i = 0; i < str2.length; i++) {
    const s = str2[i];
    if (map[s] && map[s] > 0) {
      map[s]--;
    } else {
      return false;
    }
  }
  return true;
}
