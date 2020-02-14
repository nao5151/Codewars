function encrypt(text, n) {
  let result = text;
  while(n > 0 && result) {
    let a = '';
    let b = '';
    for(let i = 0; i < result.length; i++) {
      if (i % 2 === 0) {
        b += result.charAt(i);
      } else {
        a += result.charAt(i);
      }
    }
    result = a + b;
    n--;
  }
  return result;
}

function decrypt(encryptedText, n) {
  let result = encryptedText;
  while(n > 0 && encryptedText) {
    const a = result.slice(0, result.length / 2).split('');
    const b = result.slice(result.length / 2).split('');
    let c = '';
    for(let i = 0; i < result.length; i++) {
      c += i % 2 === 0 ? b.shift() : a.shift();
    }
    result = c;
    n--;
  }
  return result;
}
