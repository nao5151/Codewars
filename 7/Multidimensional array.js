// https://www.codewars.com/kata/5a34e2eab6cfd7fcbc000008/

function getElement(array, indexes) {
  return indexes.reduce((acc, cur) => acc[cur], array)
}