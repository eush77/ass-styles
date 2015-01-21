'use strict';

var styleMap = require('./stylemap');

var parse = require('ass-parser')
  , stringify = require('ass-stringify');


var protoAssStyler = {
  get: function (style, property) {
    return this.styles[style][property];
  },

  set: function (style, property, value) {
    this.styles[style][property] = value;
    return this;
  },

  text: function () {
    return stringify(this.ass);
  }
};


module.exports = function (sub) {
  var ass = parse(sub, { comments: true });

  return Object.create(protoAssStyler, {
    ass: {
      enumerable: true,
      value: ass
    },
    styles: {
      enumerable: true,
      writable: true,
      value: styleMap(ass)
    }
  });
};
