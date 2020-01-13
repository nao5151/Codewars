function narcissistic(value) {
  const nums = String(value).split('');
  const sum = nums.reduce((a, b) => a + Math.pow(b, nums.length), 0);
  return value === sum;
}
