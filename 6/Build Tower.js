// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/

function towerBuilder(nFloors) {
  return Array.from({length: nFloors}, (v, i) => {
    const space = nFloors - (i + 1);
    const ast = i * 2 + 1;
    return (
      ' '.repeat(space) +
      '*'.repeat(ast) +
      ' '.repeat(space)
    )
  });
}