# pinggo [![Build Status](https://travis-ci.org/bukinoshita/pinggo.svg?branch=master)](https://travis-ci.org/bukinoshita/pinggo)

> Ping average round trip times in milli-seconds

## Install

```
$ yarn add pinggo
```

## Usage

```js
const pinggo = require('pingoo')

const ping = await pinggo('192.69.96.1')
console.log(`Your average ping is ${ping}`)
// => Your average ping is 20.080ms
```

## API

### pinggo(ip)

#### ip

Type: `string`<br/>
Default: `localhost`<br/>
Optional

## Related

- [pinggo-cli](https://github.com/bukinoshita/pinggo-cli) — :signal_strength: Check your ping before match making, don't play with lag

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
