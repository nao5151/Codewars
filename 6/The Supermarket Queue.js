function queueTime(customers, n) {
  const len = customers.length;
  if (len === 0) {
    return 0;
  }
  const queue = Array.from({length: Math.min(n, len)}, () => 0);
  for(let i = 0; i < len; i++) {
    const min = Math.min(...queue);
    const idx = queue.findIndex(t => t === min);
    queue[idx] += customers[i];
  }
  return Math.max(...queue);
}
