// https://www.codewars.com/kata/5842df8ccbd22792a4000245/

function expandedForm(num) {
  return num.toString().split('').reduce((acc, cur, i, array) => {
    const n = Number(cur);
    if (n > 0) {
      acc.push(n * Math.pow(10, (array.length - 1) - i));
    }
    return acc;
  }, []).join(' + ');  
}