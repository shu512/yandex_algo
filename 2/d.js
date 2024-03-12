const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("d.txt", "utf8").toString().trim().split('\n');

const xs = [];
const ys = [];
let result = 0;
for(let i = 1; i < lines.length; i++) {
    const temp = lines[i].split(' ');
    xs.push(Number(temp[0]));
    ys.push(Number(temp[1]));
}

for(let i = 0; i < xs.length; i++) {
    if (!cellIsExist(xs[i] - 1, ys[i])) {
        result++;
    }
    if (!cellIsExist(xs[i] + 1, ys[i])) {
        result++;
    }
    if (!cellIsExist(xs[i], ys[i] - 1)) {
        result++;
    }
    if (!cellIsExist(xs[i], ys[i] + 1)) {
        result++;
    }
}

console.log(result);
// writeFileSync("output.txt", result.toString());

function cellIsExist(x, y) {
    for(let i = 0; i < xs.length; i++) {
        if (xs[i] === x && ys[i] === y) {
            return true;
        }
    }
    return false;
}
