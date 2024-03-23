const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("d.txt", "utf8").toString().trim().split('\n');

const k = Number(lines[0].split(' ')[1]);

const result = isRepeat(k, lines[1].split(' ')) ? 'YES' : 'NO';
console.log(result);
// writeFileSync("output.txt", result);

function isRepeat(k, arr) {
  const dict = {};
  arr.forEach((val, index) => {
    if (dict[val]) dict[val].push(index);
    else dict[val] = [index];
  });
  for(const key in dict) {
    for(let i = 0; i < dict[key].length - 1; i++) {
      if (Number(dict[key][i + 1]) - Number(dict[key][i]) <= k) return true;
    }
  }

  return false;
}
