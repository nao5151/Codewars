function sumStrings(a, b) {
  a = a.split('').reverse();
  b = b.split('').reverse();
  const digits = Math.max(a.length, b.length);
  let result = '';
  let up = false;
  for (let i = 0; i < digits; i++) {
    let s = (+a[i] || 0) + (+b[i] || 0) + (up ? 1 : 0);
    if (s >= 10) {
      up = true;
      s = s % 10;
    } else {
      up = false;
    }
    result = s + result;
  }
  if (up) {
    result = '1' + result;
  }
  return result.replace(/^0+/, '');
}
