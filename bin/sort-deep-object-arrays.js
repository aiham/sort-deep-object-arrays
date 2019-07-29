#!/usr/bin/env node

var sortDeepObjectArrays = require('../');
var fs = require('fs');
var path = require('path');

(function() {
  if (process.argv.length <= 2) {
    console.log('Usage: sort-deep-object-arrays /path/to/input/file.json');
    return;
  }

  var filePath = path.resolve(process.argv[2]);
  fs.readFile(filePath, 'utf8', function(err, text) {
    if (err) {
      console.error('Failed to read file (' + filePath + '): ', err);
      process.exit(1);
    }
    var data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error('Failed to parse JSON file (' + filePath + '): ', e);
      console.error('--------FILE CONTENT START----------');
      console.error(text);
      console.error('--------FILE CONTENT END------------');
      process.exit(1);
    }
    var sortedData = sortDeepObjectArrays(data);
    console.log(JSON.stringify(sortedData, null, 2));
  });
})();
