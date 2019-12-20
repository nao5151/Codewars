// https://www.codewars.com/kata/515e271a311df0350d00000f/

function squareSum(numbers){
  return numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0)
}