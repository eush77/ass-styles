[![npm](https://nodei.co/npm/ass-styles.png)](https://nodei.co/npm/ass-styles/)

# ass-styles

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Extract styles from SSA/ASS subtitles, edit & save back.

[travis]: https://travis-ci.org/eush77/ass-styles
[travis-badge]: https://travis-ci.org/eush77/ass-styles.svg
[david]: https://david-dm.org/eush77/ass-styles
[david-badge]: https://david-dm.org/eush77/ass-styles.png

## Example

```js
var parse = require('ass-parser');
var getStyles = require('ass-restyler');
var stringify = require('ass-stringify');

var subtitle = fs.readFileSync('subtitle.ass', { encoding: 'utf8' });
var ass = parse(subtitle, { comments: true });
var styles = getStyles(ass);

styles.Default.MarginV = 335;
styles.Default.Fontsize = Number(restyler.Default.Fontsize) + 10;

console.log(stringify(ass));
```

## API

### `styles = assStyles(ass)`

`ass` - subtitle in the [ass-parser](https://www.npmjs.com/packages/ass-parser) format.

Returns the object containing all the styles from all the styling sections.

`styles[style]` references the original parse tree node, so editing is fully supported.

`styles[style][attribute]` is a value of the attribute in the specific style. It is usually a string and should always be expected to be a string.

## References

- [Wikipedia page](http://en.wikipedia.org/wiki/SubStation_Alpha)
- [format specification](http://www.perlfu.co.uk/projects/asa/ass-specs.doc)
- [ASS styles](http://docs.aegisub.org/3.2/Styles/)

## Related

- [ass-restyler](https://www.npmjs.com/packages/ass-restyler) - command line utility for changing SSA/ASS styles.
- [ass-parser](https://www.npmjs.com/packages/ass-parser) - SSA/ASS parser.
- [ass-stringify](https://www.npmjs.com/packages/ass-stringify) - stringify SSA/ASS parse tree.

## Install

```shell
npm install ass-styles
```

## License

MIT
