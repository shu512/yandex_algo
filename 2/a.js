const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("a.txt", "utf8").toString().trim().split('\n');

const x = [];
const y = [];
for(let i = 1; i < lines.length; i++) {
    const temp = lines[i].split(' ');
    x.push(Number(temp[0]));
    y.push(Number(temp[1]));
}
const minX = Math.min(...x);
const minY = Math.min(...y);
const maxX = Math.max(...x);
const maxY = Math.max(...y);

const result = `${minX} ${minY} ${maxX} ${maxY}`;
console.log(result);

// writeFileSync("output.txt", result);