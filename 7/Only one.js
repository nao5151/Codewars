// https://www.codewars.com/kata/5734c38da41454b7f700106e/

function onlyOne() {
  return [...arguments].filter(v => v).length === 1;
}