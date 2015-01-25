'use strict';


var isStyleSection = function (section) {
  return /\bStyles\b/.test(section);
};


/**
 * Make "style map": object that references SSA/ASS styles via style names.
 *
 * @arg {string} ass
 * @return {Object}
 */
module.exports = function (ass) {
  return ass.reduce(function (styles, section) {
    if (!isStyleSection(section.section)) {
      return styles;
    }

    return section.body.reduce(function (styles, style) {
      if (style.key != 'Style') {
        return styles;
      }

      style = style.value;

      if (styles[style.Name]) {
        throw new Error('Conflicting styles!');
      }

      styles[style.Name] = style;
      return styles;
    }, styles);
  }, Object.create(null));
};
