[![npm](https://nodei.co/npm/ass-restyler.png)](https://nodei.co/npm/ass-restyler/)

# ass-restyler

[![Dependency Status][david-badge]][david]

Small utility for changing SSA/ASS subtitle styles. Check out its [CLI interface](https://www.npmjs.com/packages/ass-restyler-cli).

[david]: https://david-dm.org/eush77/ass-restyler
[david-badge]: https://david-dm.org/eush77/ass-restyler.png

## Example

```
var parse = require('ass-parser');
var restyle = require('ass-restyler');
var stringify = require('ass-stringify');

var subtitle = fs.readFileSync('subtitle.ass', { encoding: 'utf8' });
var ass = parse(subtitle, { comments: true });
var restyler = restyle(ass);

restyler.set('Default', 'MarginV', 335);
restyler.set('Default', 'Fontsize', restyler.get('Default', 'Fontsize'));

console.log(stringify(restyler.value));
```

## API

### `restyler = assRestyler(ass)`

Returns the restyler wrapper for the subtitle.

`ass` - subtitle in the [ass-parser](https://www.npmjs.com/packages/ass-parser) format.

### `restyler.get(style, property)`

Get the value of the property in the specific style.

### `restyler.set(style, property, value)`

Set the value of the property in the specific style.

### `restyler.value`

Subtitle being edited. It is the same subtitle (same by identity) as in the original `assRestyler` call.

## References

- [Wikipedia page](http://en.wikipedia.org/wiki/SubStation_Alpha)
- [format specification](http://www.perlfu.co.uk/projects/asa/ass-specs.doc)
- [ASS styles](http://docs.aegisub.org/3.2/Styles/)

## Install

```shell
npm install ass-restyler
```

## License

MIT
