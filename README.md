# pinggo

> Ping average round trip times in milli-seconds

## Install
```
$ npm install --save pinggo
```

## Usage
```js
import pinggo from 'pinggo'

const puts = (error, stdout, stderr) => console.log(`Your avarage ping is ${stdout}ms`)
pinggo('192.69.96.1', puts)
// => Your avarage ping is 20.080ms
```

## API
### pinggo(ip, cb)

#### ip
Type: `string`<br/>
Default: `localhost`
Optional

#### cb
Type: `function`<br/>

## License
[MIT](https://github.com/bukinoshita/pinggo/blob/master/LICENSE) &copy; Bu Kinoshita
