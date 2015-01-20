#!/usr/bin/env node
'use strict';

var Styler = require('./src/ass-styler');

var concat = require('concat-stream');


process.stdin.pipe(concat({ encoding: 'string' }, function (text) {
  var styler = Styler(text);

  process.argv.slice(2).forEach(function (expr) {
    var m = expr.match(/^([^.]+)\.([^.]+)=(.*)$/);
    styler.set(m[1], m[2], m[3]);
  });

  console.log(styler.text());
}));
