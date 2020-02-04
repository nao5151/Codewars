function rgb(r, g, b){
  return (hex(r) + hex(g) + hex(b)).toUpperCase();
}

function hex(num) {
  const n = Math.min(Math.max(num, 0), 255);
  return n.toString(16).padStart(2, '0');
}
