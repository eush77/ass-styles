#!/usr/bin/env node
'use strict';

var Styler = require('./src/ass-styler');

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
      var m = expr.match(/^([^.]+)\.([^.]+)=(.*)$/);
      styler.set(m[1], m[2], m[3]);
    });

    console.log(styler.text());
  }));
};


(argv.length == 1 && argv == '--help') ? usage() : main();
