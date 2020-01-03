function cache(func) {
  const map = new Map();
  return (a, b) => {
    const key = JSON.stringify(a) + JSON.stringify(b);
    if (!map.has(key)) {
      map.set(key, func(a, b));
    }
    return map.get(key);
  };
}
