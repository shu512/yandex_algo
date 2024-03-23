const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("b.txt", "utf8").toString().trim().split('\n');

const result = isAnagram(lines[0], lines[1]) ? 'YES' : 'NO';
console.log(result);
// writeFileSync("output.txt", result);

function isAnagram(str1, str2) {
  const dict = {};

  if (str1.length !== str2.length) return false;

  for(let i = 0; i < str1.length; i++) {
    if (!dict[str1[i]]) dict[str1[i]] = 0;
    dict[str1[i]]++;
  }

  for(let i = 0; i < str2.length; i++) {
    if (!dict[str2[i]]) return false;
    dict[str2[i]]--;
    if (dict[str2[i]] < 0) return false;
  }

  return true;
}