'use strict';

module.exports = sortDeep;

function isObject(obj) {
  return obj && typeof obj === 'object';
}

function hashObject(obj) {
  if (Array.isArray(obj)) {
    return JSON.stringify(obj);
  }
  if (isObject(obj)) {
    return JSON.stringify(
      Object.keys(obj)
        .sort()
        .filter(function(key) {
          return !Array.isArray(obj[key]) && !isObject(obj[key]);
        })
        .map(function(key) {
          return [key, obj[key]];
        })
    );
  }
  return obj;
}

function compareArrayObjects(a, b) {
  var aKey = hashObject(a),
    bKey = hashObject(b);

  return aKey < bKey ? -1 : aKey > bKey ? 1 : 0;
}

function sortDeep(root) {
  if (Array.isArray(root)) {
    return root.map(sortDeep).sort(compareArrayObjects);
  }

  if (isObject(root)) {
    return Object.keys(root)
      .sort()
      .reduce(function(sortedRoot, key) {
        sortedRoot[key] = sortDeep(root[key]);
        return sortedRoot;
      }, {});
  }

  return root;
}
