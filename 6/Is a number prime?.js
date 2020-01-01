// https://www.codewars.com/kata/5262119038c0985a5b00029f/

function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
