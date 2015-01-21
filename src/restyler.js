'use strict';

var styleMap = require('./stylemap');


var protoRestyler = {
  get: function (style, property) {
    return this.styles[style][property];
  },

  set: function (style, property, value) {
    this.styles[style][property] = value;
    return this;
  }
};


module.exports = function (ass) {
  return Object.create(protoRestyler, {
    value: {
      enumerable: true,
      value: ass
    },
    styles: {
      value: styleMap(ass)
    }
  });
};
