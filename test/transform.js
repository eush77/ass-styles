'use strict';

var Styles = require('..');

var test = require('tape');


var transform = function (styles) {
  var replacements = [
    ['DefaultVCD', 'Fontname', 'Comic Sans'],
    ['Default', 'Fontname', 'Comic Sans'],
    ['Overlap', 'Fontname', 'Comic Sans'],
    ['credits', 'Fontname', 'Comic Sans'],
    ['Default', 'SecondaryColour', '&H00FF00FF']
  ];

  replacements.forEach(function (r) {
    styles[r[0]][r[1]] = r[2];
  });

  styles.DefaultVCD.Bold = Number(styles.DefaultVCD.Bold) + 3;
  styles.Overlap.Shadow = Number(styles.Overlap.Shadow) + 0.5;
  styles.credits.BorderStyle = styles.credits.BorderStyle * 2;

  return styles;
};


test('transform', function (t) {
  var ass = require('./before.json');
  transform(Styles(ass));
  t.deepEqual(ass, require('./after.json'));
  t.end();
});
