// https://www.codewars.com/kata/54ff3102c1bad923760001f3/

function getCount(str) {
  return (str.match(/[aiueo]/gi) || []).length;
}