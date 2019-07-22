'use strict';

var test = require('tape'),
  sortDeep = require('./index');

function compare(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

test('basic objects', function(t) {
  var a = { a: 1, b: 2, c: 3 },
    b = { b: 2, a: 1, c: 3 },
    c = { c: 3, a: 1, b: 2 };

  a = sortDeep(a);
  b = sortDeep(b);
  c = sortDeep(c);

  t.assert(compare(a, b));
  t.assert(compare(a, c));
  t.assert(compare(b, c));

  t.end();
});

test('basic arrays', function(t) {
  var a = [1, 2, 3],
    b = [3, 1, 2],
    c = [2, 1, 3];

  a = sortDeep(a);
  b = sortDeep(b);
  c = sortDeep(c);

  t.assert(compare(a, b));
  t.assert(compare(a, c));
  t.assert(compare(b, c));

  t.end();
});

test('array of objects', function(t) {
  var a = [
      {
        a: 1,
        b: 2,
        c: 3
      },
      {
        a: 4,
        b: 5,
        c: 6
      },
      {
        a: 7,
        b: 8,
        c: 9
      }
    ],
    b = [
      {
        b: 2,
        a: 1,
        c: 3
      },
      {
        a: 4,
        c: 6,
        b: 5
      },
      {
        b: 8,
        c: 9,
        a: 7
      }
    ],
    c = [
      {
        b: 5,
        a: 4,
        c: 6
      },
      {
        a: 7,
        b: 8,
        c: 9
      },
      {
        b: 2,
        c: 3,
        a: 1
      }
    ];

  a = sortDeep(a);
  b = sortDeep(b);
  c = sortDeep(c);

  t.assert(compare(a, b));
  t.assert(compare(a, c));
  t.assert(compare(b, c));

  t.end();
});

test('complex object', function(t) {
  var a = {
      a: 1,
      b: 'foo',
      c: [3, 2, 1],
      d: ['foo', 'bar'],
      e: {
        a: 1,
        b: 'foo',
        c: [3, 2, 1],
        d: ['foo', 'bar']
      },
      f: [
        {
          a: 'foo',
          b: 'bar',
          c: [
            {
              a: 'whiz',
              b: 'bang'
            },
            {
              a: 'foo',
              b: 'bar'
            }
          ]
        },
        {
          a: 'baz',
          b: 'bang',
          c: [
            {
              a: 'foo',
              b: 'bar'
            },
            {
              a: 'whiz',
              b: 'bang'
            }
          ]
        }
      ]
    },
    b = {
      a: 1,
      d: ['foo', 'bar'],
      b: 'foo',
      c: [2, 1, 3],
      e: {
        a: 1,
        b: 'foo',
        c: [3, 2, 1],
        d: ['bar', 'foo']
      },
      f: [
        {
          a: 'baz',
          b: 'bang',
          c: [
            {
              a: 'foo',
              b: 'bar'
            },
            {
              a: 'whiz',
              b: 'bang'
            }
          ]
        },
        {
          a: 'foo',
          b: 'bar',
          c: [
            {
              a: 'foo',
              b: 'bar'
            },
            {
              a: 'whiz',
              b: 'bang'
            }
          ]
        }
      ]
    },
    c = {
      c: [3, 2, 1],
      d: ['bar', 'foo'],
      e: {
        a: 1,
        b: 'foo',
        c: [1, 3, 2],
        d: ['foo', 'bar']
      },
      a: 1,
      b: 'foo',
      f: [
        {
          a: 'foo',
          c: [
            {
              b: 'bang',
              a: 'whiz'
            },
            {
              b: 'bar',
              a: 'foo'
            }
          ],
          b: 'bar'
        },
        {
          b: 'bang',
          a: 'baz',
          c: [
            {
              a: 'foo',
              b: 'bar'
            },
            {
              a: 'whiz',
              b: 'bang'
            }
          ]
        }
      ]
    };

  a = sortDeep(a);
  b = sortDeep(b);
  c = sortDeep(c);

  t.assert(compare(a, b));
  t.assert(compare(a, c));
  t.assert(compare(b, c));

  t.end();
});
