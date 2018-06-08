'use strict';

function generator(N) {
  if (N < 7) {
    N = 7;
  }
  let i = 0;
  let json = '{'
  let len = 2;
  let period = 0;
  let last_len = len;
  while (true) {
    if (len >= N) break;
    let key = i++;
    let value = Math.ceil(Math.random(N) * N);
    json += `"${key}":${value},`;
    last_len = len;
    len += 3
        + key.toString().length
        + value.toString().length
        + (period++ > 0 ? 1 : 0);
  }

  if (len > N) {
    json = json.slice(0, last_len);
    len = last_len;
  }

  json = json.slice(0, json.length - 1);
  json += '}';
  if (json[0] != '{') {
    json = '{' + json;
  }
  return json;
}

if (process.argv[2]) {
  var rjson = generator(process.argv[2]);
  var fs = require('fs');
  fs.writeFile(
    'data.json',
    rjson,
    'utf8', () => {});
}
module.exports = generator;
