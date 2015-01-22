'use strict';

var Restyler = require('..');

var test = require('tape');


var transform = function (restyler) {
  var replacements = [
    ['DefaultVCD', 'Fontname', 'Comic Sans'],
    ['Default', 'Fontname', 'Comic Sans'],
    ['Overlap', 'Fontname', 'Comic Sans'],
    ['credits', 'Fontname', 'Comic Sans'],
    ['Default', 'SecondaryColour', '&H00FF00FF']
  ];

  replacements.forEach(function (r) {
    restyler.set(r[0], r[1], r[2]);
  });

  restyler.set('DefaultVCD', 'Bold', Number(restyler.get('DefaultVCD', 'Bold')) + 3);
  restyler.set('Overlap', 'Shadow', Number(restyler.get('Overlap', 'Shadow')) + 0.5);
  restyler.set('credits', 'BorderStyle', restyler.get('credits', 'BorderStyle') * 2);

  return restyler;
};


test('transform', function (t) {
  var restyler = Restyler(require('./before.json'));
  t.deepEqual(transform(restyler).value, require('./after.json'));
  t.end();
});
