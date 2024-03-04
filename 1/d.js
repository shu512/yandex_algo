const { readFileSync, writeFileSync } = require("fs");
const lines = readFileSync("d.txt", "utf8").toString().trim().split('\n');

let result = 0;
let mat = [];

for (let i = 0; i < 8; i++) {
  mat.push(lines[i].split(''));
}

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (mat[i][j] === 'R') rook(mat, i, j);
    if (mat[i][j] === 'B') bishop(mat, i, j);
  }
}

// output(mat);

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (mat[i][j] === '*') result++;
  }
}

console.log(`result = ${result}`);

// writeFileSync("output.txt", result.toString());

function bishop(mat, x, y) {
  // main diag
  for (let i = 1; x + i < 8 && y + i < 8; i++) {
    if (mat[x + i][y + i] === '*' || mat[x + i][y + i] === '-') {
      mat[x + i][y + i] = '-';
    } else {
      break;
    }
  }

  for (let i = 1; x - i >= 0 && y - i >= 0; i++) {
    if (mat[x - i][y - i] === '*' || mat[x - i][y - i] === '-') {
      mat[x - i][y - i] = '-';
    } else {
      break;
    }
  }
  // side diag
  for (let i = 1; x + i < 8 && y - i >= 0; i++) {
    if (mat[x + i][ y - i] === '*' || mat[x + i][ y - i] === '-') {
      mat[x + i][ y - i] = '-';
    } else {
      break;
    }
  }
  for (let i = 1; x - i >= 0 && y + i < 8; i++) {
    if (mat[x - i][y + i] === '*' || mat[x - i][y + i] === '-') {
      mat[x - i][y + i] = '-';
    } else {
      break;
    }
  }
}

function rook(mat, x, y) {
  // left
  for(let i = x - 1; i >= 0; i--) {
    if (mat[i][y] === '*' || mat[i][y] === '-') {
      mat[i][y] = '-';
    } else {
      break;
    }
  }
  // right
  for(let i = x + 1; i < 8; i++) {
    if (mat[i][y] === '*' || mat[i][y] === '-') {
      mat[i][y] = '-';
    } else {
      break;
    }
  }
  // top
  for(let j = y - 1; j >= 0; j--) {
    if (mat[x][j] === '*' || mat[x][j] === '-') {
      mat[x][j] = '-';
    } else {
      break;
    }
  }
  // bottom
  for(let j = y + 1; j < 8; j++) {
    if (mat[x][j] === '*' || mat[x][j] === '-') {
      mat[x][j] = '-';
    } else {
      break;
    }
  }
}

function output(mat) {
  let str = '';
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      str += mat[i][j] + ' ';
    }
    str += '\n';
  }
  console.log(str);
}
