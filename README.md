Generic utility functions (Mixin Lodash)

☞ [Javascript Tutorial for Absolute Beginners](https://morioh.com/list/5dcd0341203e265d661aa028)

☞ [Modern JavaScript [ ES6, ES7, ES8 ] Crash Course](https://morioh.com/p/f146ca613761)

# Installation

```js
npm install mix-dash
```

# Example Usage

```js

var _ = require('mix-dash');

```


```js
_.isNullOrUndefined(null); // return true
```

```js
_.setNullwhenEmpty(''); // return null
```

```js
_.isUrl('http://google.com'); // return true
```

```js
_.isNullOrWhiteSpace(''); // return true
_.isNullOrWhiteSpace('  '); // return true
_.isNullOrWhiteSpace(null); // return true
_.isNullOrWhiteSpace('&nbsp;'); // return true
_.isNullOrWhiteSpace('Hello'); // return false
```

```js
_.slug('Zero to Hero with Node.js');
// return zero-to-hero-with-node-js
```

```js
_.updateQueryString('http://localhost:3000/cart?couponCode=abc','couponCode','def');
// return http://localhost:3000/cart?couponCode=def
```

```js

_.toKb(100000); // return 100K
_.toKb(9890000); // return 9,89M

```

```js

_.isCrawl('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'); // return false
_.isCrawl('facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'); // return true
_.isCrawl('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'); // return true

```
Convert seconds to hh:mm:ss javascript
```js

_.toHHMMSS(15859); // return 04:24:19

```

Number format
```js

_.numberFormat(10000000); // return 10,000,000

```

Random date range
```js

_.randomDate(new Date('2016-04-01T03:24:00'),new Date('2016-05-01T03:24:00'));

```

Random String Password
```js

//_.randomString(length, chars);

//Chars Include
//a: Include Lowercase ( e.g. abcdefgh )
//A: Include Uppercase ( e.g. ABCDEFGH )
//#: Include Numbers ( e.g. 123456789 )
//!: Include Symbols ( e.g. @#$% )

_.randomString(20,'A#');
// return: 6A7FFY1049EXH8CBF6GK

_.randomString(20,'aA');
// return: KFRnObQPuLmNyqMLnkiR

_.randomString(20,'aA#');
// FRBmz3RBlzsF8b57WAe6

_.randomString(20,'aA#!');
// return: R]]^[V0b'igJA<A[i7&F

```

Convert json key
```js


var map = {
    name : "id",
    amount : "total",
    reported : "updated",
    // date : "issued"
};
var a = {
    name : "Foo",
    amount: 55,
    reported : false,
    date : "10/01/2001"
};

_.mirror(a, map);

//{ id: 'Foo', total: 55, updated: false, date: '10/01/2001' }

```

Use with Vue
```js
Vue.use(_);
```

Conversion between the bitcoin base unit (BTC) and other units (Satoshi, μBTC, ...)
```js
//['BTC', 'mBTC', 'μBTC', 'bit', 'Satoshi', 'sat']
_.toUnit(5,'BTC', 'sat');
_.toSAT(5);
// 500000000

_.toUnit(50000,'sat', 'BTC');
_.toBTC(50000);
// 0.0005

```