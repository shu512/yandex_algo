const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("c.txt", "utf8").toString().trim().split('\n');

const lengths = lines[1].split(' ').map(l => Number(l));

const max = Math.max(...lengths);
const maxIndex = lengths.findIndex(l => l === max);
const sum = lengths.reduce((prev, cur, index) => index === maxIndex ? prev : prev + cur, 0);
let result = sum >= max ? sum + max : max - sum;
console.log(`result = ${result}`);

// writeFileSync("output.txt", result.toString());