import * as core from '@actions/core';
import * as fs from 'fs';
import * as path from 'path';
const repoRoot = path.resolve(__dirname, '..');
const readmePath = path.resolve(repoRoot, 'README.md');
const MARK = {
  kyu: '<!-- KYU_SUMMARY -->'
}

async function run() {
  try { 
    const map = new Map<string, string[]>();
    const kyuDirNames = fs.readdirSync(repoRoot).filter(name => Number.isInteger(Number(name)));
    for (let i = 0; i < kyuDirNames.length; i++) {
      const kyu = kyuDirNames[i];
      map.set(kyu, fs.readdirSync(path.resolve(repoRoot, kyu)))
    }

    const md = fs.readFileSync(readmePath).toString();
    const newMd = md.replace(new RegExp(MARK.kyu + '.*' + MARK.kyu, 's'), createKyuSummary(map));
    fs.writeFileSync(readmePath, newMd);
    core.setOutput(new Date().toLocaleString(), 'finish');
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

function createKyuSummary(map: Map<string, string[]>) {
  const table = [
    MARK.kyu,
    `|kyu|solved|`,
    `|:-:|:-:|`
  ];
  for (const [kyu, files] of map.entries()) {
    table.push(`|${kyu}|${files.length}|`)
  }
  table.push(MARK.kyu);
  return table.join('\n');
}

run()