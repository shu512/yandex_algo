const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("c.txt", "utf8").toString().trim().split('\n');

let result = 0;

for(let i = 1; i < lines.length; i++) {
  let spaces = Number(lines[i]);
  result += getPresses(spaces);
}

// console.log(`result = ${result}`);

writeFileSync("output.txt", result.toString());

function getPresses(spaces) {
  let a;
  switch (spaces % 4) {
    case 0:
      a = 0;
      break;
    case 1:
      a = 1;
      break;
    case 2:
    case 3:
      a = 2;
      break;
  }
  return Math.trunc(spaces / 4) + a;
}
