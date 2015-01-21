#!/usr/bin/env node
'use strict';

var Restyler = require('./src/restyler')
  , Clause = require('./src/clause');

var concat = require('concat-stream');

var fs = require('fs');


var argv = process.argv.slice(2);


var usage = function () {
  fs.createReadStream(__dirname + '/usage.txt').pipe(process.stdout);
};


var main = function () {
  process.stdin.pipe(concat({ encoding: 'string' }, function (text) {
    var restyler = Restyler(text);

    argv.forEach(function (expr) {
      Clause(expr)(restyler);
    });

    console.log(restyler.text());
  }));
};


(argv.length == 1 && argv == '--help') ? usage() : main();
