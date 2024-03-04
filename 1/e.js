const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("e.txt", "utf8").toString().trim().split('\n');

let resultNumb = -1;
let result = '-1';
const n = Number(lines[0].split(' ')[0]);
const k = Number(lines[0].split(' ')[1]);
const d = Number(lines[0].split(' ')[2]);

for(let i = 0; i < 10; i++) {
  const numb = n * 10 + i;
  if (numb % k === 0) {
    resultNumb = numb;
    break;
  }
}

if (resultNumb !== -1) {
  result = resultNumb.toString() + '0'.repeat(d - 1);
}

console.log(`result = ${result}`);

// writeFileSync("output.txt", result.toString());
