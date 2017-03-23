#!/usr/bin/env node

var sortDeepObjectArrays = require('../index');

(function(){
  if (process.argv.length <= 2) {
    console.log('Usage: sort-deep-object-arrays.js input-file-path');
    return;
  }

  require('fs').readFile(process.argv[2], 'utf8', function(err, data){
    var json = JSON.parse(data);
    var sorted = sortDeepObjectArrays(json);
    console.log(JSON.stringify(sorted, null, 2));
  });
})();
