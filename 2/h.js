const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("h.txt", "utf8").toString().trim().split('\n');

const n = Number(lines[0].split(' ')[0]);
const m = Number(lines[0].split(' ')[1]);

let mat = [];

for (let i = 1; i <= n; i++) {
  mat.push(lines[i].split(' ').map(n => Number(n)));
}

const [_, maxI, maxJ] = findMax(mat, -1, -1);

const [__, ___, maxJ1] = findMax(mat, maxI, -1);
const [max1] = findMax(mat, maxI, maxJ1);

const [____, maxI2] = findMax(mat, -1, maxJ);
const [max2] = findMax(mat, maxI2, maxJ);

let result;
if (max1 < max2) {
    result = (maxI + 1) + ' ' + (maxJ1 + 1);
} else {
    result = (maxI2 + 1) + ' ' + (maxJ + 1);
}

console.log(result);

// writeFileSync("output.txt", result);

function findMax(mat, skipI, skipJ) {
    let max = 0;
    let maxi = -1;
    let maxj = -1;
    for (let i = 0; i < mat.length; i++) {
        if (i === skipI) continue;
        for (let j = 0; j < mat[0].length; j++) {
            if (j === skipJ) continue;
            if (mat[i][j] > max) {
                max = mat[i][j];
                maxi = i;
                maxj = j;
            }
        }
    }
    // console.log(`skipI = ${skipI} skipJ = ${skipJ}`);
    // console.log(`max = ${max} maxi = ${maxi} maxj = ${maxj}`);
    return [max, maxi, maxj];
}

function output(mat) {
    let str = '';
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++) {
        str += mat[i][j] + ' ';
      }
      str += '\n';
    }
    console.log(str);
}