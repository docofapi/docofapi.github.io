# Websocket

## Introduction

**Access URL: `wss://sock.xyt.com/ws`**

**Heartbeat message**

When the user's Websocket client connects to XYT's Websocket server, the server will periodically (currently set to 30 seconds) to send it a ping message containing the current time stamp, as follows:

```js
{ data: { time: 1586249815378 }, send: "ping" }
```

When the user's Websocket client receives this heartbeat message, it should return a pong message and include the current time stamp, as follows:

```js
{ send: "pong", data: 1586249814687 }
```

**Note: When the Websocket server has continuously sent ping messages for five minutes but has not received any pong message return, the server will actively disconnect the client.**

**Subscribe to topics**

After successfully establishing a connection with the Websocket server, the Websocket client sends the following request to subscribe to a specific topic.

```js
{ subscribe: topics, data: { parameter 1: parameter value, parameter 2: parameter value,... } }
```

Example:

```js
{ subscribe: "scale", data: { symbol: "btcusdt", type: "MIN_1" } }
```

Examples of response values:

```js
{
  data: {
    a: 15.7901804
    c: 7177.34
    h: 7177.43
    i: 1586312760
    l: 7177.25
    o: 7177.43
    s: "btcusdt"
    t: "MIN_1"
    v: 0.0022
  }
  send: "scale"
}
```

**Unsubscribe**

The unsubscribe format is as follows:

```js
{ unsubscribe: topics, data: { parameter 1: parameter value, parameter 2: parameter value,... } }
```

Example:

```js
 { unsubscribe: "scale", data: { symbol: "btcusdt", type: "MIN_1" } }
```

## Subscribe to depth

**Example:**

```js
{ subscribe: "depth", data: { symbol: "btcusdt", type: 0, size: 100 } }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
symbol | coin pair name | Yes
type | depth gear (default: 0) | Yes
size | quantity default value: 100 (10, 20, 50, 100, 200, 1000) | Yes

**Examples of response values:**

```js
{
  "data": {
    "a": [[7355.39, 1.8322, 1], [7355.45, 1.9431, 1]],
    "b": [[7320.68, 2.9592, 1], [7320.65, 1.2953, 1]],
    "s": "btcusdt"
  },
  "send": "depth"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
a | data | sell:price, quantity, total | array
b | data | buying:price,quantity,total | array
s | data | coin pair name | string
send | None | subscription topic name | string


## Subscribe to the latest transactions

**Example:**

```js
{ subscribe: "newTrade", data: { symbol: "btcusdt" } }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
symbol | coin pair name | Yes

**Examples of response values:**

```js
{
  "data": {
    "list": [[
      "20200407165640TD5E8C4048753B3C23ECE532DF3B4E7F4979",
      7351.76,
      2.9339,
      "BUY",
      1586249800783
    ]],
    "symbol": "btcusdt"
  },
  "send": "newTrade"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
list | data | Id,price,quantity,direction,creation time | array
symbol | data | coin pair name | string
send | None | subscription topic name | string

## Subscribe to the 24-hour market

**Example:**

```js
{ subscribe: "ticker" }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes

**Examples of response values:**

```js
{
  "data": [{
    "a": 620008785.911856,
    "h": 9958.09,
    "l": 7105.66,
    "o": 7148.31,
    "p": 7359.72,
    "s": "btcusdt",
    "t": 1586188800000,
    "v": 85182.9932
    },{
    "a": 1609127.705476,
    "h": 19.57,
    "l": 12.679,
    "o": 13.257,
    "p": 13.647,
    "s": "mipusdt",
    "t": 1586188800000,
    "v": 119165.856
  }],
  "send": "ticker"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
a | data | turnover | float
h | data | highest price | float
l | data | lowest price | float
o | data | opening price | float
p | data | current price | float
s | data | coin pair name | float
t | data | date | date
v | data | volume | float
send | None | subscription topic name | string

## Subscribe to a single coin pair market

**Example:**

```js
{ subscribe: "symbolTicker", data: { symbol: "btcusdt" } }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
symbol | coin pair name | Yes

**Examples of response values:**

```js
{
  "data": {
    "a": 620008785.911856,
    "h": 9958.09,
    "l": 7105.66,
    "o": 7148.31,
    "p": 7359.72,
    "s": "btcusdt",
    "t": 1586188800000,
    "v": 85182.9932
  },
  "send": "symbolTicker"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
a | data | turnover | float
h | data | highest price | float
l | data | lowest price | float
o | data | opening price | float
p | data | current price | float
s | data | coin pair name | float
t | data | date | date
v | data | volume | float
send | None | subscription topic name | string


## Subscribe to K Line

**Example:**

```js
{ subscribe: "scale", data: { symbol: "btcusdt", type: "MIN_1" } }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
symbol | coin pair name | Yes
type | k line type (MIN_1: one minute, MIN_5: five minutes, MIN_15: fifteen minutes, MIN_30: thirty minutes, HOUR_1: one hour, HOUR_4: four hours, DAY_1: one day, WEEK_1: one week, MONTH_1: one month) | Yes

**Examples of response values:**

```js
{
  "data": {
    "a": 39220.97378,
    "c": 7361.16,
    "h": 7361.16,
    "i": 1586249880,
    "l": 7360,
    "o": 7360,
    "s": "btcusdt",
    "t": "MIN_1",
    "v": 5.3285
  },
  "send": "scale"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
a | data | transaction amount | float
c | data | closing price | float
h | data | highest price | float
i | data | id | float
l | data | lowest price | float
o | data | opening price | float
s | data | coin pair name | float
t | data | k line type | date
v | data | volume | float
send | None | subscription topic name | string

## Subscribe to account

**Example:**

```js
{ subscribe:"account", data: { "token": "Token", "memberId": 100028 } }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
token | token | Yes
memberId | user ID | Yes

**Examples of response values:**

```js
{
  "data":{
    "b": 41182.9218000000000000,
    "c": "USDT",
    "l": 73422.4000000000000000,
    "m": 100028
  },
  "send": "account"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
b | data | balance | float
c | data | coin | float
l | data | frozen amount | float
m | data | user ID | integer
send | None | subscription topic name | string

## Subscribe to order

**Example:**

```js
{ subscribe:"order", data: { "token": "Token", "memberId": 100028 } }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
token | token | Yes
memberId | user ID | Yes

**Examples of response values:**

```js
{
  "data": {
    "id": "EX202004081445455065E8D73198571E40EE1547249",
    "memberId": 100028,
    "symbol": "btcusdt",
    "baseCoin": "BTC",
    "quoteCoin": "USDT",
    "price": 7342.24,
    "volume": 10,
    "takerFeeRate": 0.002,
    "makerFeeRate": 0.002,
    "side": "BUY",
    "type": "LIMIT",
    "source": "WEB",
    "date": 1586328345512,
    "createdDate": 1586328345506,
    "updatedDate": 1586328345506,
    "pushed": null,
    "tradeCount": null,
    "currentVolume": null,
    "dealVolume": null,
    "dealAmount": null,
    "dealPrice": null
  },
  "send": "order"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
id | data | id | string
memberId | data | user ID | integer
symbol | data | coin pair name | string
baseCoin | data | base coin, the first half of the symbol | string
quoteCoin | data | denomination coin, the second half of the symbol | string
price | data | price | float
volume | data | quantity | float
takerFeeRate | data | taker rate | float
makerFeeRate | data | maker rate | float
side | data | Trading direction (BUY: buy, SELL: sell) | string
type | data | order type (LIMIT: limit price, MARKET: market price) | string
source | data | source(WEB,H5,APP,API) | string
date | data | effective time | date
createdDate | data | creation time | date
updatedDate | data | update time | date
pushed | data | whether to push | boolean
tradeCount | data | transactions | long
currentVolume | data | current quantity | float
dealVolume | data | number of transactions | float
dealAmount | data | turnover | float
dealPrice | data | average transaction price | float
send | None | subscription topic name | string
