const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("e.txt", "utf8").toString().trim().split('\n');

const arr1 = lines[1].split(' ').map(v => Number(v));
const arr2 = lines[3].split(' ').map(v => Number(v));
const arr3 = lines[5].split(' ').map(v => Number(v));

const set1 = new Set(arr1);
const set2 = new Set(arr2);
const set3 = new Set(arr3);

const result = [];

for(let i = 0; i < arr1.length; i++) {
  let count = 0;
  if (set1.has(arr1[i])) count++;
  if (set2.has(arr1[i])) count++;
  if (set3.has(arr1[i])) count++;

  if (count >= 2) {
    result.push(arr1[i]);
    set1.delete(arr1[i]);
    set2.delete(arr1[i]);
    set3.delete(arr1[i]);
  }
}

for(let i = 0; i < arr2.length; i++) {
  let count = 0;
  if (set2.has(arr2[i])) count++;
  if (set3.has(arr2[i])) count++;

  if (count >= 2) result.push(arr2[i]);
}

console.log(result.sort((a, b) => a - b));
// writeFileSync("output.txt", result.sort((a, b) => a - b).join(' '));

