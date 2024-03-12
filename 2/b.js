const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("b.txt", "utf8").toString().trim().split('\n');

const k = Number(lines[0].split(' ')[1]);
const prices = lines[1].split(' ').map(pr => Number(pr));
let max = 0;

for(let i = 0; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
        const profit = prices[i + j] - prices[i];
        if (profit > max) {
            max = profit;
        }
    }
}

const result = max;
console.log(result);

// writeFileSync("output.txt", result.toString());