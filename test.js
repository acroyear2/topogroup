var group = require('./');
var test = require('tap').test;

test(function (t) {
  var groups = group([ 'y', 'j', 'x' ], [
    [ 'x', 'j' ],
    [ 'x', 'y' ],
    [ 'y', 'j' ]
  ]);

  t.equal(groups.length, 1);
  t.equal(groups[0][0], 'x');
  t.deepEqual(groups[0].slice(1), [ 'y', 'j' ]);

  groups = group([ 'x', 'j', 'y', 'k' ], [
    [ 'x', 'y' ],
    [ 'y', 'j' ],
    [ 'x', 'j' ],
    [ 'k', 'j' ]
  ]);

  t.equal(groups.length, 3);
  t.equal(groups[0][0], 'x');
  t.equal(groups[1][0], 'k');
  t.equal(groups[2][0], 'j');
  t.deepEqual(groups[1].slice(1), [ 'j' ]);

  groups = group([ 'x', 'y', 'k', 'j', 'w', 'a' ], [
    [ 'x', 'y' ],
    [ 'x', 'j' ],
    [ 'y', 'j' ],
    [ 'k', 'j' ],
    [ 'k', 'a' ],
    [ 'j', 'a' ],
    [ 'a', 'w' ]
  ]);

  t.equal(groups.length, 4);
  t.equal(groups[0][0], 'x');
  t.equal(groups[1][0], 'k');
  t.equal(groups[2][0], 'j');
  t.equal(groups[3][0], 'a');
  t.deepEqual(groups[2].slice(1), [ 'a' ]);
  t.deepEqual(groups[3].slice(1), [ 'w' ]);

  t.end();
});
