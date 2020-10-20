
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
{ subscribe: "contractScale", data: { symbol: "btcusdt", scene: "REAL", type: "MIN_1" } }
```

Examples of response values:

```js
{
  data: {
    a: 0
    c: 10678.3
    h: 10678.3
    i: 1601364600
    l: 10678.3
    n: "REAL"
    o: 10678.3
    s: "btcusdt"
    t: "MIN_1"
    v: 0
  }
  send: "contractScale"
}
```

**Unsubscribe**

The unsubscribe format is as follows:

```js
{ unsubscribe: topics, data: { parameter 1: parameter value, parameter 2: parameter value,... } }
```

Example:

```js
 { unsubscribe: "contractScale", data: { symbol: "btcusdt", scene: "REAL", type: "MIN_1" } }
```

## Subscribe to contract depth

**Example:**

```js
{ subscribe: "contractDepth", data: { symbol: "ltcusdt", scene: "REAL", type: 0, size: 1000 } }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
symbol | coin pair name | Yes
scene | scene(REAL: real, VIRTUAL: virtual) | Yes
type | depth gear (default: 0) | Yes
size | quantity default value: 100 (10, 20, 50, 100, 200, 1000) | Yes

**Examples of response values:**

```js
{
  "data": {
    "a": [[45.54, 3.2, 1], [45.55, 10.1, 1]],
    "b": [[45.53, 3, 1], [45.51, 3.1, 1]],
    "n": "REAL",
    "s": "ltcusdt"
  },
  "send": "contractDepth"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
a | data | sell: price,quantity,total | array
b | data | buying:price,quantity,total | array
n | data | scene(REAL: real, VIRTUAL: virtual) | string
s | data | coin pair name | string
send | None | subscription topic name | string


## Subscribe to contract latest transaction

**Example:**

```js
{ subscribe: "contractNewTrade", data: { symbol: "ltcusdt", scene: "REAL" } }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
symbol | coin pair name | Yes
scene | scene(REAL:real, VIRTUAL:virtual) | Yes

**Examples of response values:**

```js
{
  "data": {
    "l": [{
        "d": 1601366810000,
        "e": "SELL",
        "i": "20200929160650TC5F72EB1A4E4BB67ADF7298CF",
        "p": 45.53,
        "v": 0.2
    }],
    "n": "REAL",
    "s": "btcusdt"
  },
  "send": "newTrade"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
d | l | creation time | date
e | l | direction (open position: BUY (long), SELL (short); close position: BUY (short), SELL (long)) | string
i | l | id | string
p | l | price | float
v | l | quantity | float
n | data | scene(REAL: real, VIRTUAL: virtual) | string
s | data | coin pair name | string
send | None | subscription topic name | string

## Subscribe to 24-hour market subscription

**Example:**

```js
{subscribe: "contractTicker", data: {scene: "REAL"}}
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
scene | scene(REAL: real, VIRTUAL: virtual) | Yes

**Examples of response values:**

```js
{
  "data": [{
    "a": 83549772.051,
    "b": 10717.9,
    "c": null,
    "e": 10718,
    "f": -0.000216,
    "h": 10914.9,
    "i": 10720.27,
    "j": -1.4,
    "l": 10649.2,
    "m": 10718.87,
    "n": "REAL",
    "o": 10902.9,
    "p": 10717.9,
    "r": null,
    "s": "btcusdt",
    "t": 1601308800000,
    "v": 7760.31
  }],
  "send": "contractTicker"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
a | data | turnover | float
b | data | first purchase price | float
c | data | quoted index price | float
e | data | first selling price | float
f | data | funding rate | float
h | data | highest price | float
i | data | index price | float
j | data | reasonable basis | float
l | data | lowest price | float
m | data | mark price | float
n | data | scene(REAL: real, VIRTUAL: virtual) | string
o | data | opening price | float
p | data | current price | float
r | data | reference index code | string
s | data | coin pair | string
t | data | date | date
v | data | volume | float
send | None | subscription topic name | string

## Subscribe to contract single coin pair market

**Example:**

```js
{subscribe: "contractSymbolTicker", data: {symbol: "btcusdt", scene: "REAL"}}
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
symbol | coin pair name | Yes
scene | scene(REAL: real, VIRTUAL: virtual) | Yes

**Examples of response values:**

```js
{
  "data": {
    "a": 83549772.051,
    "b": 10717.9,
    "c": null,
    "e": 10718,
    "f": -0.000216,
    "h": 10914.9,
    "i": 10720.27,,
    "j": -1.4,
    "l": 10649.2,
    "m": 10718.87,
    "n": "REAL",
    "o": 10902.9,
    "p": 10717.9,
    "r": null,
    "s": "btcusdt",
    "t": 1601308800000,
    "v": 7760.31
  },
  "send": "contractSymbolTicker"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
a | data | turnover | float
b | data | first purchase price | float
c | data | quoted index price | float
e | data | first selling price | float
f | data | funding rate | float
h | data | highest price | float
i | data | index price | float
j | data | reasonable basis | float
l | data | lowest price | float
m | data | mark price | float
n | data | scene(REAL: real, VIRTUAL: virtual) | string
o | data | opening price | float
p | data | current price | float
r | data | reference index code | string
s | data | coin pair | string
t | data | date | date
v | data | volume | float
send | None | subscription topic name | string


## Subscribe to contract price K line

**Example:**

```js
{ subscribe: "contractScale", data: {symbol: "btcusdt", type: "MIN_1", scene: "REAL"} }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
symbol | coin pair name | Yes
type | k line type (MIN_1: one minute, MIN_5: five minutes, MIN_15: fifteen minutes, MIN_30: thirty minutes, HOUR_1: one hour, HOUR_4: four hours, DAY_1: one day, WEEK_1: one week, MONTH_1: one month) | Yes
scene | scene(REAL: real, VIRTUAL: virtual) | Yes

**Examples of response values:**

```js
{
  "data": {
    "a": 0,
    "c": 10736.5,
    "h": 10736.5,
    "i": 1601370720,
    "l": 10736.5,
    "n": "REAL",
    "o": 10736.5,
    "s": "btcusdt",
    "t": "MIN_1",
    "v": 0
  },
  "send": "contractScale"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
a | data | turnover | float
c | data | closing price | float
h | data | highest price | float
i | data | id | String
l | data | lowest price | float
n | data | scene(REAL: real, VIRTUAL: virtual) | String
o | data | opening price | float
s | data | coin pair name | String
t | data | k line type | String
v | data | volume | float
send | None | subscription topic name | string

## Subscribe to index price candlestick

**Example:**

```js
{ subscribe: "indexScale", data: {symbol: "btcusdt", type: "MIN_1"} }
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
    "c": 10740.73,
    "h": 10740.73,
    "i": 1601371320,
    "l": 10740.73,
    "o": 10740.73,
    "s": "btcusdt",
    "t": "MIN_1"
  },
  "send": "indexScale"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
c | data | closing price | float
h | data | highest price | float
i | data | id | String
l | data | lowest price | float
o | data | opening price | float
s | data | coin pair name | String
t | data | k line type | String
send | None | subscription topic name | string

## Subscribe to mark price candlestick

**Example:**

```js
{ subscribe: "markScale", data: {symbol: "btcusdt", type: "MIN_1", scene: "REAL"} }
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | subscribed topic name | Yes
symbol | coin pair name | Yes
type | k line type (MIN_1: one minute, MIN_5: five minutes, MIN_15: fifteen minutes, MIN_30: thirty minutes, HOUR_1: one hour, HOUR_4: four hours, DAY_1: one day, WEEK_1: one week, MONTH_1: one month) | Yes
scene | scene(REAL: real, VIRTUAL: virtual) | Yes

**Examples of response values:**

```js
{
  "data": {
    "c": 10728.25,
    "h": 10730.23,
    "i": null,
    "l": 10727.98,
    "n": "REAL",
    "o": 10730.23,
    "s": "btcusdt",
    "t": "MIN_1"
  },
  "send": "markScale"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
c | data | closing price | float
h | data | highest price | float
i | data | id | String
l | data | lowest price | float
n | data | scene(REAL: real, VIRTUAL: virtual) | String
o | data | opening price | float
s | data | coin pair name | String
t | data | k line type | String
send | None | subscription topic name | string

## Subscribe to margin

**Example:**

```js
{ subscribe:"margin", data: { "token": "Token", "memberId": 100094 } }
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
    "m": 100094,
    "b": "STD",
    "n": "REAL",
    "c": "USDT",
    "a": 2722401.0612728773,
    "o": 469539.5047,
    "p": 7839338.2017,
    "r": 1.3276,
    "i": 8747.087028101838,
    "f": 0
  },
  "send": "margin"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
m | data | user ID | integer
b | data | contract board code | String
n | data | scene(REAL: real, VIRTUAL: virtual) | String
c | data | coin | String
a | data | available margin | float
o | data | entrusted (frozen) margin | float
p | data | position (occupied) margin | float
r | data | margin rate | float
i | data | profit and loss | float
f | data | fees | float
send | None | subscription topic name | string

## Subscribe to contract order

**Example:**

```js
{ subscribe:"contractOrder", data: { "token": "Token", "memberId": 100094 } }
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
    "board": "STAND",
    "coin": "USDT",
    "createdDate": 1601372619000,
    "currentVolume": null,
    "date": 1601372619308,
    "dealAmount": null,
    "dealPrice": null,
    "dealVolume": null,
    "id": "CT202009291743395F7301CB50F35B256BDC5FA8",
    "lossPrice": null,
    "makerFeeRate": null,
    "margin": 10716.7,
    "marginDiscount": 1,
    "memberId": 100094,
    "multiplier": 10,
    "passive": null,
    "positionId": null,
    "positionSide": "ENTRY",
    "price": 10716.7,
    "profitPrice": null,
    "pushed": null,
    "quantity": 10,
    "referencePrice": null,
    "referenceSymbol": null,
    "roleCode": "STAND_1",
    "scene": "REAL",
    "side": "SELL",
    "size": 1,
    "source": "WEB",
    "symbol": "btcusdt",
    "takerFeeRate": null,
    "tradeCount": null,
    "type": "LIMIT",
    "updatedDate": 1601372619000,
    "volume": 10
  },
  "send": "contractOrder"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
board | data | contract board code | string
coin | data | settlement coin | string
createdDate | data | creation time | date
currentVolume | data | current quantity | float
date | data | effective time | date
dealAmount | data | turnover | float
dealPrice | data | average transaction price | float
dealVolume | data | number of transactions | float
id | data | order ID | string
lossPrice | data | stop price | float
makerFeeRate | data | maker rate | float
margin | data | margin | float
marginDiscount | data | margin discount | float
memberId | data | user ID | integer
multiplier | data | leverage | integer
passive | data | whether to liquidate(true:enable,false:disable) | boolean
positionSide | data | position direction (ENTRY: open position, EXIT: close position)  | string
positionId | data | position ID | string
price | data | price | float
profitPrice | data | take profit price | float
pushed | data | whether to push(true:enable,false:disable) | boolean
quantity | data | volume | float
referenceSymbol | data | reference index code | string
referencePrice | data | index price | float
roleCode | data | role coding | string
scene | data | scene(REAL: real, VIRTUAL: virtual)	 | string
side | data | direction (open position: BUY (long), SELL (short); close position: BUY (short), SELL (long)) | string
size | data | contract price | float
source | data | source(WEB,H5,APP,API) | string
symbol | data | coin pair | string
takerFeeRate | data | taker rate | float
tradeCount | data | transactions | long
type | data | order type (LIMIT: limit price, MARKET: market price, STOP: breakthrough price, PROFIT_LOSS: stop profit and stop loss) | string
updatedDate | data | update time | date
volume | data | quantity | float

## Subscribe to position information

**Example:**

```js
{ subscribe:"position", data: { "token": "Token", "memberId": 100094 } }
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
    "board": "STAND",
    "coin": "USDT",
    "createdDate": 1601372619000,
    "currentId": "202009291743393375F7301CB0BDD2737CB64A2A7",
    "entryAmount": null,
    "entryFee": null,
    "entryMargin": 190.7769,
    "entryPrice": null,
    "entryVolume": 0.89,
    "exitAmount": null,
    "exitFee": null,
    "exitMargin": null,
    "exitPrice": null,
    "exitReferencePrice": null,
    "exitVolume": null,
    "fee": null,
    "id": "CT202009291742475F73019750F35B256BDC5F59",
    "margin": 190.7769,
    "memberId": 100094,
    "multiplier": 50,
    "orderVolume": 0.89,
    "passive": null,
    "price": 10717.8,
    "profit": null,
    "referenceSymbol": null,
    "roleCode": null,
    "scene": "REAL",
    "side": "BUY",
    "symbol": "btcusdt",
    "updatedDate": null,
    "volume": 0.89
  },
  "send": "position"
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
board | data | contract board code | string
coin | data | settlement coin | string
createdDate | data | creation time | date
currentId   | data | position ID | string
entryAmount | data | opening amount | float
entryFee | data | opening fee | float
entryMargin | data | open margin | float
entryPrice | data | average open price | float
entryVolume | data | number of open positions | float
exitAmount | data | liquidation amount | float
exitFee | data | closing fee | float
exitMargin | data | liquidation margin | float
exitPrice | data | average closing price | float
exitReferencePrice | data | total average index price (closed position) | float
exitVolume | data | number of closed positions | float
fee | data | fees for holding positions | float
id | data | position ID | string
margin | data | margin | float
memberId | data | user ID | integer
multiplier | data | leverage | integer
orderVolume | data | entrust quantity | float
passive | data | whether to liquidate(true:Yes,false否) | boolean
price | data | current average price | float
profit | data | profit and loss | float
referenceSymbol | data | reference index code | string
roleCode  | data | role coding | string
scene | data | scene(REAL: real, VIRTUAL: virtual) | string
side | data | direction (open position: BUY (long), SELL (short); close position: BUY (short), SELL (long)) | string
symbol | data | coin pair | string
updatedDate | data | update time | date
volume | data | number of transactions | float
