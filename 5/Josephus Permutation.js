function josephus(items, k) {
  const result = [];
  let next = 0;
  while(items.length > 0) {
    next += (k - 1);
    while(next >= items.length) {
      next -= items.length;
    }
    result.push(items.splice(next, 1)[0]);
  }
  return result;
}
