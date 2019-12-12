// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/

const map = new Map([
  ['A', 'T'],
  ['T', 'A'],
  ['G', 'C'],
  ['C', 'G'],
]);

function DNAStrand(dna){
  return dna.replace(/[ATCG]/g, match => map.get(match));
}