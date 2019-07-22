# sort-deep-object-arrays

[![NPM version](https://badge.fury.io/js/sort-deep-object-arrays.svg)](http://badge.fury.io/js/sort-deep-object-arrays) [![Travis-CI](https://travis-ci.org/aiham/sort-deep-object-arrays.svg?branch=master)](https://travis-ci.org/aiham/sort-deep-object-arrays)

Sort objects and arrays of objects nested deeply within other objects or arrays

## Requirements

- [Node.js](http://nodejs.org/) v0.12 or higher

## Usage

Install as a local dependency for your project:

```sh
npm install --save sort-deep-object-arrays
```

Run in command line

```sh
bin/sort-deep-object-arrays.js input-json-file
```

Require and use it in your code:

```js
var sortDeepObjectArrays = require('sort-deep-object-arrays');

var myUnsortedObject = {
    b: 2,
    a: 1,
    d: [3, 5, 1],
    c: 3,
    e: [
        {
            f: 7,
            g: 8,
            h: 9
        },
        {
            g: 2,
            h: 3,
            f: 1
        },
        {
            g: 5,
            f: 4,
            h: 6
        }
    ]
};

var mySortedObject = sortDeepObjectArrays(myUnsortedObject);

console.log(JSON.stringify(mySortedObject, null, 2));
```

This should output:

```json
{
  "a": 1,
  "b": 2,
  "c": 3,
  "d": [
    1,
    3,
    5
  ],
  "e": [
    {
      "f": 1,
      "g": 2,
      "h": 3
    },
    {
      "f": 4,
      "g": 5,
      "h": 6
    },
    {
      "f": 7,
      "g": 8,
      "h": 9
    }
  ]
}
```

## Tests

Run tests with `npm test`. Written in tape. Automatically tested using [Travis CI](https://travis-ci.org/aiham/sort-deep-object-arrays)
