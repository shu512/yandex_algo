const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("f.txt", "utf8").toString().trim().split('\n');

const dict = {};

lines[0].split(' ').forEach(word => {
  if (!dict[word[0]]) dict[word[0]] = [];
  if (wordIsBetter(dict, word)) {
    dict[word[0]] = dict[word[0]].filter(w => !w.startsWith(word));
    dict[word[0]].push(word);
  } else {
    if (shoudAdd(dict, word)) {
      dict[word[0]].push(word);
    }
  }
});

const result = [];
lines[1].split(' ').forEach(word => {
  if (!dict[word[0]]) {
    result.push(word);
    return;
  }

  let found = false;
  dict[word[0]].forEach(reduction => {
    if (word.startsWith(reduction)) {
      result.push(reduction);
      found = true;
      return;
    }
  });
  if (found) return;
  result.push(word);
});

// console.log(result.join(' '));
writeFileSync("output.txt", result.join(' '));

function wordIsBetter(dict, word) {
  const index = dict[word[0]].findIndex(w => w.startsWith(word));
  return index !== -1;
}

function shoudAdd(dict, word) {
  const index = dict[word[0]].findIndex(w => word.startsWith(w));
  return index === -1;
}