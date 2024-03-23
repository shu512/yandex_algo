const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("a.txt", "utf8").toString().trim().split('\n');

const n = Number(lines[0]);
const dict = {};
lines[2].split(' ').forEach(pl => dict[pl] = true);

for(let i = 2; i <= n; i++) {
  const set = new Set(lines[i * 2].split(' '));
  Object.keys(dict).forEach(key => {
    if (!set.has(key)) {
      delete dict[key];
    }
  });
}

const playlists = Object.keys(dict).sort();
const result = playlists.length + '\n' + playlists.join(' ');
console.log(result);

// writeFileSync("output.txt", result);