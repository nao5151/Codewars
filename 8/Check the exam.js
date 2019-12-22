// https://www.codewars.com/kata/5a3dd29055519e23ec000074/

function checkExam(array1, array2) {
  const correct = array2.filter((a, i) => a === array1[i]).length;
  const empty = array2.filter(a => !a).length;
  const incorrect = array2.length - correct - empty;
  return Math.max((correct * 4) + (incorrect * -1), 0);
}