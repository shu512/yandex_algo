const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("f.txt", "utf8").toString().trim().split('\n');

const sectors = lines[1].split(' ').map(pr => Number(pr));
const [a, b, k] = lines[2].split(' ').map(pr => Number(pr));
let max = 0;

if ((b - a) / k >= sectors.length) {
    max = Math.max(...sectors);
} else {
    for (let i = a; i <= b; i += k) {
        max = Math.max(max, launch(sectors, k, i));
    }
}

const result = max.toString();
console.log(result);

// writeFileSync("output.txt", result);

function launch(sectors, k, v) {
    let times = v % k === 0 ? (v / k) - 1 : Math.trunc(v / k);
    const indexDirect = times % sectors.length;
    const indexOpposite = indexDirect === 0 ? 0 : sectors.length - indexDirect;
    return Math.max(sectors[indexDirect], sectors[indexOpposite]);
}
