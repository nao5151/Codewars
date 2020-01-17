function sum(str) {
  return str.split('').reduce((sum, num) => sum + Number(num), 0);
}

function weightSort(a, b) {
  const sumA = sum(a);
  const sumB = sum(b);
  return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
}

function orderWeight(strng) {
  return strng.split(' ').sort(weightSort).join(' ');
}
