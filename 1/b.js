const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("b.txt", "utf8").toString().trim().split('\n');

const g11 = Number(lines[0].split(':')[0]);
const g12 = Number(lines[0].split(':')[1]);
const g21 = Number(lines[1].split(':')[0]);
const g22 = Number(lines[1].split(':')[1]);
const firstGameHome = lines[2] === '1';
const sum1 = g11 + g21;
const sum2 = g12 + g22;

let result;
if (sum1 > sum2) {
  result = 0;
} else if (firstGameHome) {
  result = sum2 - sum1;
  if (result + g21 <= g12) {
    result++;
  }
} else {
  if (!firstGameHome && g11 > g22) {
    result = sum2 - sum1;
  } else {
    result = sum2 - sum1 + 1;
  }
}

// console.log(`result = ${result}`);

writeFileSync("output.txt", result.toString());