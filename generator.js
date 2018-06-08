'use strict';

function generator(N) {
  let i = 0;
  let json = {};

  while (true) {
    if (JSON.stringify(json).length >= N) break;
    json[i++] = Math.ceil(Math.random(N) * N);
  }

  if (JSON.stringify(json).length >= N) {
    delete json[--i];
  }
  return json;
}

if (process.argv[2]) {
  var fs = require('fs');
  fs.writeFile(
    'data.json',
    JSON.stringify(generator(process.argv[2])),
    'utf8', () => {});
}
module.exports = generator;
