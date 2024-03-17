const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("e.txt", "utf8").toString().trim().split('\n');

let positive = [];
let negative = [];

for(let i = 1; i < lines.length; i++) {
    const a = Number(lines[i].split(' ')[0]);
    const b = Number(lines[i].split(' ')[1]);
    if (a - b >= 0) {
        positive.push([a, b, i]);
    } else {
        negative.push([a, b, i]);
    }
}

let afterPositive;
let negativeMax = getMaxA(negative);

if (negativeMax) {
    let max = [-1];
    for (let i = 0; i < positive.length; i++) {
        const sum = diff(positive[i]) + negativeMax[0];
        if (positive[i][0] > sum && positive[i][0] > max[0]) {
            max = positive[i];
            found = true;
        }
    }
    if (max[0] === -1) {
        afterPositive = negativeMax;
    } else {
        afterPositive = max;
    }

    let newMax = [-1, 0];
    if (max[0] !== -1) {
        for (let i = 0; i < positive.length; i++) {
            const sum1 = diff(positive[i]) + afterPositive[0];
            const sum2 = diff(afterPositive) + positive[i][0];

            const sum3 = diff(newMax) + positive[i][0];
            const sum4 = diff(positive[i]) + newMax[0];

            if (sum2 > sum1 && sum3 > sum4) {
                newMax = positive[i];
            }
        }

        if (newMax[0] !== -1) {
            afterPositive = newMax;
        }
    }

    if (max[0] === -1 && newMax[0] === -1 ) {
        const index = negative.findIndex(n => n[2] === negativeMax[2]);
        negative.splice(index, 1);
    } else {
        const index = positive.findIndex(p => p[2] === afterPositive[2]);
        positive.splice(index, 1);
    }

} else {
    afterPositive = getMinDiff(positive);
    const index = positive.findIndex(p => p[2] === afterPositive[2]);
    positive.splice(index, 1);
}

let attitude = 0;
for(let i = 0; i < positive.length; i++) {
    attitude += positive[i][0] - positive[i][1];
}
attitude += afterPositive[0];

result = attitude.toString() + '\n';
result += positive.map(p => p[2]).join(' ');
result += ' ' + afterPositive[2] + ' ';
result += negative.map(p => p[2]).join(' ');

// console.log(result);

writeFileSync("output.txt", result);

function diff(val) {
    return val[0] - val[1];
}

function getMaxA(arr) {
    if (arr.length === 0) return;
    return arr.reduce((max, cur) => cur[0] > max[0] ? cur : max);
}

/*
    return min diff
    if diffs are equal then return diff with max a
*/
function getMinDiff(arr) {
    return arr.reduce((min, cur) => {
        if (diff(cur) === diff(min)) {
            return cur[0] > min[0] ? cur : min;
        } else {
            return diff(cur) < diff(min) ? cur : min;
        }
    });
}
