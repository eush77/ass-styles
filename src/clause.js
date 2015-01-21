'use strict';


module.exports = function (expr) {
  var m = expr.match(/^([^.]+)\.([^=]*[^-+=])([-+]?)=(.*)$/);

  var style = m[1];
  var property = m[2];
  var modifier = m[3];
  var value = m[4];

  if (!modifier) {
    return function (styler) {
      styler.set(style, property, value);
    };
  }
  else {
    value = Number(value);
    return function (styler) {
      var oldValue = +styler.get(style, property);
      var newValue = (modifier == '+') ? oldValue + value : oldValue - value;
      return styler.set(style, property, newValue);
    };
  }
};
