'use strict';
function *gen(N) {
  if (N < 7) {
    N = 7;
  }
  let i = 0;
  let json = ''
  let len = 2;
  let period = 0;
  let entry;
  while (len < N) {
    entry = `"${i++}":${Math.ceil(Math.random(N) * N)}`
    len += entry.length;
    if (len > N) {
      yield false;
    } else {
      len++;
      if (i == 1) {
        yield `${entry}`;
      } else {
        yield `,${entry}`;
      }
    }
  }
}
if (process.argv[2]) {
  var fs = require('fs');
  var file = fs.createWriteStream('./data.json');
  file.write('{');
  let chunks = [];
  for (let w of gen(Number(process.argv[2]))) {
    if (w) {
      chunks.push(w);
    }

    if (chunks.length > 1000) {
      file.write(chunks.join(''), 'utf8');
      chunks.length = 0;
    }
  }

  if (chunks.length > 0) {
    file.write(chunks.join(''), 'utf8');
  }
  file.write('}');
  file.end();
}

function generator(N) {
  let r = '';
  r += '{';
  for (let w of gen(N)) {
    if (w) {
      r += w;
    }
  }
  r += '}';
  return r;
}

module.exports = generator;
