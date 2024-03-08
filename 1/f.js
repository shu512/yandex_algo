const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("f.txt", "utf8").toString().trim().split('\n');

let result = '';
let cur = Number(lines[1].split(' ')[0]);

lines[1].split(' ').forEach((str, index) => {
  if (index === 0) return;
  const b = Number(str);

  if (isOdd(cur)) {
    if (isOdd(b)) {
      result += 'x';
      cur = 3;
    } else {
      result += '+';
      cur = 3;
    }
  } else {
    if (isOdd(b)) {
      result += '+';
      cur = 3;
    } else {
      result += '+';
      cur = 2;
    }
  }
});


console.log(`result = ${result}`);

// writeFileSync("output.txt", result.toString());

function isOdd(numb) {
  return Math.abs(numb) % 2 === 1;
}
