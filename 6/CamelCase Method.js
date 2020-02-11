String.prototype.camelCase = function() {
  return this.split(' ').reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1), '');
}
