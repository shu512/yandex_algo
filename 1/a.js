// const { createInterface } = require("readline");

// const lines = [];

// createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
//   .on("line", (line) => {
//     lines.push(line.toString().trim());
//   }).on("close", () => {
//     const p = lines[0].split(' ')[0];
//     const v = lines[0].split(' ')[1];
//     const q = lines[1].split(' ')[0];
//     const m = lines[1].split(' ')[1];
//     main(p, v, q, m);
//   });





const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("a.txt", "utf8").toString().trim().split('\n');

const p = Number(lines[0].split(' ')[0]);
const v = Number(lines[0].split(' ')[1]);
const q = Number(lines[1].split(' ')[0]);
const m = Number(lines[1].split(' ')[1]);

let min, minStep;
let max, maxStep;

if (p <= q) {
  min = p;
  minStep = v;
  max = q;
  maxStep = m;
} else {
  min = q;
  minStep = m;
  max = p;
  maxStep = v;
}

let left1 = min - minStep;
let right1 = min + minStep;
let left2 = max - maxStep;
let right2 = max + maxStep;


let result;

if (left1 <= left2 && right1 >= right2) {
  result = right1 - left1 + 1; // 1
} else if (left2 <= left1 && right2 >= right1) {
  result = right2 - left2 + 1; // 2
} else if (right1 >= left2) {
  result = right2 - left1 + 1; // 4
} else {
  result = right1 - left1 + 1 + right2 - left2 + 1; // 3
}

// console.log(`result = ${result}`);

writeFileSync("output.txt", result.toString());