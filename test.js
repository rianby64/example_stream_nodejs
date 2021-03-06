var test = require('tape');
var generator = require('./generator.js');

test('ok', function(t) {
  const N = 1000;
  const I = 1000;
  t.plan(I);

  for (let i = 0; i < I; i++) {
    const N_ = Math.ceil(Math.random(N) * N) + 7;
    const w = generator(N_);
    t.ok(7 <= w.length && w.length <= N_);
  }
});
