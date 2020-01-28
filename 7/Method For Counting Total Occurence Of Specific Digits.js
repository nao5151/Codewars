function List() {
  this.countSpecDigits = function(integersLists, digitsList) {
    const str = integersLists.join('');
    return digitsList.map(n => [n, (str.match(new RegExp(String(n), 'g')) || []).length])
  }
}
