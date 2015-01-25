'use strict';

var Styles = require('..');

var test = require('tape')
  , strformat = require('strformat');


var facts = [
  ['DefaultVCD', 'Fontname', 'Arial'],
  ['Default', 'Fontname', 'Century Gothic'],
  ['Overlap', 'Fontname', 'QuaySansMdITCTT'],
  ['credits', 'Fontname', 'Book Antiqua'],
  ['DefaultVCD', 'Bold', '-1'],
  ['Default', 'SecondaryColour', '&H00000000'],
  ['Overlap', 'Shadow', '1.5'],
  ['credits', 'BorderStyle', '1']
];


test('query', function (t) {
  var styles = Styles(require('./before.json'));

  facts.forEach(function (f) {
    t.equal(styles[f[0]][f[1]], f[2],
            strformat('{0}:{1} == "{2}"', f));
  });

  t.end();
});
