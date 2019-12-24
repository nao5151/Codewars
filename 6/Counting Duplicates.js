// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/

function duplicateCount(text){
  const letters = [...text.toLowerCase()].sort();
  let seek = 0;
  let result = 0;
  while(seek < letters.length) {
    const i = letters.lastIndexOf(letters[seek]);
    if (i > seek) {
      result++;
      seek = i + 1;
    } else {
      seek++;
    }
  }
  return result;
}