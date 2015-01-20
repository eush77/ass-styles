'use strict';

var styleMap = require('./stylemap');

var assParser = require('ass-parser');


var protoAssStyler = {
  set: function (style, property, value) {
    this.styles[style][property] = value;
    return this;
  },

  text: function () {
    return JSON.stringify(this.ass, null, 4);
  }
};


module.exports = function (text) {
  var ass = assParser(text, { comments: true });

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
