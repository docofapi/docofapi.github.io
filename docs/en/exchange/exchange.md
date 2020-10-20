# Exchange

## Query current order

**Request path: /open/order/getCurrentPage**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
size=10&page=1&symbol=btcusdt&token=token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
size | number of pages(default 10) | No
page | current page(default 1) | No
symbol | coin pair name | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":{
    "footers": null,
    "rows": [{
      "baseCoin": "BTC",
      "createdDate": "2020-04-07T06:30:05.421Z",
      "currentVolume": 2,
      "date": "2020-04-07T06:30:05.421Z",
      "dealAmount": null,
      "dealPrice": null,
      "dealVolume": null,
      "id": "EX202004011741026765E8461AEA771E14AC706B6A5",
      "makerFeeRate": 0.002,
      "memberId": 3,
      "price": 7277.01,
      "pushed": true,
      "quoteCoin": "USDT",
      "side": "BUY",
      "source": "WEB",
      "symbol": "btcusdt",
      "takerFeeRate": 0.002,
      "tradeCount": null,
      "type": "LIMIT",
      "updatedDate": "2020-04-07T06:30:05.421Z",
      "volume": 2
    }],
    "total": 1
  },
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
footers | data | footer | array
rows | data | datasheets | array
total | data | total | long
baseCoin | rows | base coin, the first half of the symbol | string
currentVolume | rows | current quantity | float
date | rows | effective time | date
dealAmount | rows | turnover | float
dealPrice | rows | average transaction price | float
dealVolume | rows | number of transactions | float
id | rows | id | string
makerFeeRate | rows | maker rate | float
memberId | rows | user ID | integer
price | rows | price | float
pushed | rows | whether to push | boolean
quoteCoin | rows | denomination coin, the second half of the symbol | string
side | rows | Trading direction (BUY: buy, SELL: sell) | string
source | rows | source(WEB,H5,APP,API) | string
symbol | rows | coin pair name | string
takerFeeRate | rows | taker rate | float
tradeCount | rows | transactions | long
type | rows | order type (LIMIT: limit price, MARKET: market price) | string
updatedDate | rows | update time | date
volume | rows | quantity | float

## Place an order

**Request path: /open/order/create**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
symbol=btcusdt&price=7374.06&volume=4&side=SELL&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
symbol | coin pair name | Yes
price | commission price | Yes
volume | quantity | Yes
side | buying and selling direction (BUY: buy, SELL: sell) | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data": "EX202004071549271315E8C30878571E40EE1444A78",
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | None | order id | string


## Cancel order

**Request path: /open/order/cancel**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
orderId=EX202004071549271315E8C30878571E40EE1444A78&token=Token&sign=signature&nonce=123123&time=1586239136316&symbol=btcusdt
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
orderId | order id | Yes
token | token | Yes
sign | signature | Yes
nonce | random number | Yes
time | timestamp | Yes
symbol | coin pair name | No

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data": "EX202004071549271315E8C30878571E40EE1444A78",
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | None | order id | string

## Batch cancellation

**Request path: /open/order/batchCancel**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
orderIds=EX202004071549271315E8C30878571E40EE1444A78&symbol=btcusdt&side=SELL&minPrice=7390&maxPrice=7395&size=2&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
orderIds | order ID, separated by commas | No
symbol | coin pair name | No
side | buying and selling direction (BUY: buy, SELL: sell) | No
minPrice | lowest price | No
maxPrice | highest price | No
size | number of cancelled orders | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":[ "EX202004071549271315E8C30878571E40EE1444A78" ],
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**
Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | None | order id | array


## Get current order details based on ID

**Request path: /open/order/getCurrentById**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
orderId=EX202004071549271315E8C30878571E40EE1444A78&symbol=btcusdt&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
orderId | order ID | Yes
symbol | coin pair name | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":{
    "baseCoin": "BTC",
    "createdDate": "2020-04-07T06:30:05.421Z",
    "currentVolume": 2,
    "date": "2020-04-07T06:30:05.421Z",
    "dealAmount": null,
    "dealPrice": null,
    "dealVolume": null,
    "id": "EX202004011741026765E8461AEA771E14AC706B6A5",
    "makerFeeRate": 0.002,
    "memberId": 3,
    "price": 7277.01,
    "pushed": true,
    "quoteCoin": "USDT",
    "side": "BUY",
    "source": "WEB",
    "symbol": "btcusdt",
    "takerFeeRate": 0.002,
    "tradeCount": null,
    "type": "LIMIT",
    "updatedDate": "2020-04-07T06:30:05.421Z",
    "volume": 2
  },
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
baseCoin | data | base coin, the first half of the symbol | string
createdDate | data | creation time | date
currentVolume | data | current quantity | float
date | data | effective time | date
dealAmount | data | turnover | float
dealPrice | data | average transaction price | float
dealVolume | data | number of transactions | float
id | data | id | string
makerFeeRate | data | maker rate | float
memberId | data | user ID | integer
price | data | price | float
pushed | data | whether to push | boolean
quoteCoin | data | denomination coin, the second half of the symbol | string
side | data | Trading direction (BUY: buy, SELL: sell) | string
source | data | source(WEB,H5,APP,API) | string
symbol | data | coin pair name | string
takerFeeRate | data | taker rate | float
tradeCount | data | transactions | long
type | data | order type (LIMIT: limit price, MARKET: market price) | string
updatedDate | data | update time | date
volume | data | quantity | float

## Get all transaction data

**Request path: /open/deal/findPage**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
pageSize=20&page=1&sort=1&symbol=btcusdt&orderId=EX202004071549271315E8C30878571E40EE1444A78&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
pageSize | number of pages(default 20) | No
page | current page(default 1) | No
sort | sorting method (default 1,0: ascending order, 1: descending order) | No
symbol | coin pair name | No
orderId | order ID | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data": {
    "footers": null,
    "rows": [{
      "id": "202004071549271E88F46E91FD180603F",
      "orderId": "EX202004071549271315E8C30878571E40EE1444A78",
      "side": "BUY",
      "symbol": "btusdt",
      "volume": 8.88,
      "orderPrice": 7343.12,
      "price": 7343.12,
      "payCoin": "USDT",
      "gainCoin": "BTC",
      "payVolume": 6.54174108,
      "gainVolume": 8.88,
      "feeRate": 0.002,
      "fee": 0.002,
      "back": 0.02080764,
      "createdDate": 1575622120000,
    }],
    "total": 1,
  }
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
footers | data | footer | array
rows | data | datasheets | array
total | data | total | long
id | rows | id | string
orderId | rows | order ID | string
side | rows | Trading direction (BUY: buy, SELL: sell) | string
symbol | rows | coin pair name | string
volume | rows | number of transactions | float
orderPrice | rows | order price | float
price | rows | deal price | float
payCoin | rows | payment coin | string
gainCoin | rows | get coin | string
payVolume | rows | quantity paid | float
gainVolume | rows | get the quantity | float
feeRate | rows | commission rate | float
fee | rows | fees | float
back | rows | quantity returned | float
createdDate | rows | creation time | date
