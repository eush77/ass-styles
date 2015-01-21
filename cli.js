#!/usr/bin/env node
'use strict';

var Styler = require('./src/ass-styler')
  , Clause = require('./src/clause');

var concat = require('concat-stream');

var fs = require('fs');


var argv = process.argv.slice(2);


var usage = function () {
  fs.createReadStream(__dirname + '/usage.txt').pipe(process.stdout);
};


var main = function () {
  process.stdin.pipe(concat({ encoding: 'string' }, function (text) {
    var styler = Styler(text);

    argv.forEach(function (expr) {
      Clause(expr)(styler);
    });

    console.log(styler.text());
  }));
};


(argv.length == 1 && argv == '--help') ? usage() : main();
