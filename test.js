var test = require('tape');
var generator = require('./generator.js');

test('ok', function(t) {
  const N = 100;
  const I = 10;
  t.plan(I);

  for (let i = 0; i < I; i++) {
    const N_ = Math.ceil(Math.random(N) * (N + 1));
    t.ok(JSON.stringify(generator(N_)).length <= N_);
  }
});
