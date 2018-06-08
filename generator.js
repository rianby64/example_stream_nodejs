'use strict';

var len = 2;
function generator(N) {
  let i = 0;
  let json = {};

  let period = 0;
  while (true) {
    if (len >= N) break;
    let key = i++;
    let value = Math.ceil(Math.random(N) * N);
    json[key] = value;
    len += 3
        + key.toString().length
        + value.toString().length
        + (period++ > 0 ? 1 : 0);
  }
  if (len >= N && i > 1) {
    let key = --i;
    let value = json[i];
    delete json[i];
    len -= 3
        + key.toString().length
        + value.toString().length
        + (period++ > 0 ? 1 : 0);
  }
  return json;
}

if (process.argv[2]) {
  var rjson = generator(process.argv[2]);
  var fs = require('fs');
  fs.writeFile(
    'data.json',
    JSON.stringify(rjson),
    'utf8', () => {});
}
module.exports = generator;
