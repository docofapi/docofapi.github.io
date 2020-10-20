# Market data

## Get contract price K line according to time

**Request path: /contract/market/getScaleByDate**

**Request Protocol: POST**

**API signature: No**

**Example request parameters:**

```js
symbol=btcusdt&scene=REAL&type=MIN_1&from=1601246645&to=1601258645
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
symbol | coin pair name | Yes
scene | scene(REAL:real, VIRTUAL: virtual) | Yes
type | k line type (MIN_1: one minute, MIN_5: five minutes, MIN_15: fifteen minutes, MIN_30: thirty minutes, HOUR_1: one hour, HOUR_4: four hours, DAY_1: one day, WEEK_1: one week, MONTH_1: one month) | Yes
from | starting time(timestamp) | Yes
to | end Time(timestamp) | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":[{
    "amount": 31582.115,
    "close": 10742.1,
    "date": "2020-09-28 06:45:00",
    "high": 10742.7,
    "id": 1601246700,
    "low": 10741.6,
    "open": 10742.6,
    "scene": "REAL",
    "symbol": "btcusdt",
    "type": "MIN_1",
    "volume": 2.94
  }],
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
amount | data | transaction amount | float
close | data | closing price | float
date | data | date | date
high | data | highest price | float
id | data | id | string
low | data | lowest price | float
open | data | opening price | float
scene | data | scene(REAL:real, VIRTUAL: virtual) | string
symbol | data | coin pair name | string
type | data | k line type | string
volume | data | volume  | float

## Get index price K line according to time

**Request path: /contract/market/index/getIndexScaleByDate**

**Request Protocol: POST**

**API signature: No**

**Example request parameters:**

```js
symbol=btcusdt&type=MIN_1&from=1601246645&to=1601258645
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
symbol | coin pair name | Yes
type | k line type (MIN_1: one minute, MIN_5: five minutes, MIN_15: fifteen minutes, MIN_30: thirty minutes, HOUR_1: one hour, HOUR_4: four hours, DAY_1: one day, WEEK_1: one week, MONTH_1: one month) | Yes
from | starting time(timestamp) | Yes
to | end Time(timestamp) | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":[{
    'close': 11369.57,
    'date': "2020-10-15 11:16:00",
    'high': 11369.58,
    'id': 1602731760,
    'low': 11367.95,
    'open': 11368.48,
    'scene': null,
    'symbol': "btcusdt",
    'type': "MIN_1"
  }],
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
close | data | closing price | float
date | data | date | date
high | data | highest price | float
id | data | id | string
low | data | lowest price | float
open | data | opening price | float
scene | data | scene(REAL:real, VIRTUAL:virtual)  | string
symbol | data | coin pair name | string
type | data | k line type | string

## Get marked price candlestick based on time

**Request path: /contract/market/mark/getScaleByDate**

**Request Protocol: POST**

**API signature: No**

**Example request parameters:**

```js
symbol=btcusdt&scene=REAL&type=MIN_1&from=1601246645&to=1601258645
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
symbol | coin pair name | Yes
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
type | k line type (MIN_1: one minute, MIN_5: five minutes, MIN_15: fifteen minutes, MIN_30: thirty minutes, HOUR_1: one hour, HOUR_4: four hours, DAY_1: one day, WEEK_1: one week, MONTH_1: one month) | Yes
from | starting time(timestamp) | Yes
to | end Time(timestamp) | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":[{
    "close": 10742.1,
    "date": "2020-09-28 06:45:00",
    "high": 10742.7,
    "id": 1601246700,
    "low": 10741.6,
    "open": 10742.6,
    "scene": "REAL",
    "symbol": "btcusdt",
    "type": "MIN_1",
  }],
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
close | data | closing price | float
date | data | date | date
high | data | highest price | float
id | data | id | string
low | data | lowest price | float
open | data | opening price | float
scene | data | scene(REAL:real, VIRTUAL:virtual)  | string
symbol | data | coin pair name | string
type | data | k line type | string

## Get contract depth

**Request path: /contract/market/getDepth**

**Request Protocol: POST**

**API signature: No**

**Example request parameters:**

```js
symbol=btcusdt&scene=REAL&type=0&size=20
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
symbol | coin pair name | Yes
scene | scene(REAL:real, VIRTUAL:virtual)  | Yes
type | depth gear (default: 0) | Yes
size | quantity | No

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":{
    "buyList": [
      [ 10868.8, 0.56, 1 ],
      [ 10868.7, 0.04, 1 ]
    ],
    "scene": "REAL",
    "sellList": [
      [ 10868.9, 0.08, 1 ],
      [ 10869.4, 0.52, 1 ]
    ],
    "symbol": "btcusdt"
  },
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
buyList | data | buying: price, quantity, total | array
scene | data | scene(REAL:real, VIRTUAL:virtual) | string
sellList | data | sell:price, quantity, total | array
symbol | data | coin pair name | string

## Get contract 24-hour market

**Request path: /contract/market/getBySymbol**

**Request Protocol: GET**

**API signature: No**

**Example request parameters:**

```js
scene=REAL&symbol=btcusdt
```

**The requested data is described as follows:**
Node name(keyword) | Description | Required
-- | -- | -- | -- |
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
symbol | coin pair name | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":{
    "amount": 83010025.392,
    "basis": -1.1,
    "buy": 10868.8,
    "date": "2020-09-27T16:00:00.000+0000",
    "fundingRate": 0.000101,
    "high": 10945.5,
    "indexPrice": 10867.75,
    "low": 10701.7,
    "markPrice": 10866.65,
    "open": 10749.8,
    "price": 10868.9,
    "referencePrice": null,
    "referenceSymbol": null,
    "scene": "REAL",
    "sell": 10868.9,
    "symbol": "btcusdt",
    "volume": 7679.67,
  },
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
amount | data | turnover | float
basis | data | reasonable basis | float
buy | data | first purchase price | float
date | data | date | date
fundingRate | data | funding rate | float
high | data | highest price | float
indexPrice | data | index price | float
low | data | lowest price | float
markPrice | data | mark price | float
open | data |opening price  | float
price | data | current price | float
referencePrice | data | quoted index price | float
referenceSymbol | data | reference index code | string
scene | data | scene(REAL: real, VIRTUAL: virtual) | string
sell | data | first selling price | float
symbol | data | coin pair  | string
volume | data | volume  | float

## Get contract 24-hour market list

**Request path: /contract/market/findAll**

**Request Protocol: GET**

**API signature: No**

**Example request parameters:**

```js
scene=REAL
```

**The requested data is described as follows:**
Node name(keyword) | Description | Required
-- | -- | -- | -- |
scene | scene(REAL:real, VIRTUAL:virtual) | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":[{
    "amount": 103508.7984,
    "basis": -0.0005,
    "buy": 0.2433,
    "date": "2020-09-27T16:00:00.000+0000",
    "fundingRate": 0.001234,
    "high": 0.2463,
    "indexPrice": 0.2431,
    "low": 0.2404,
    "markPrice": 0.2426,
    "open": 0.242,
    "price": 0.2433,
    "referencePrice": null,
    "referenceSymbol": null,
    "scene": "REAL",
    "sell": 0.2435,
    "symbol": "xrpusdt",
    "volume": 424896
  }],
  "arguments": null,
  "success": true
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
amount | data | turnover | float
basis | data | reasonable basis | float
buy | data | first purchase price | float
date | data | date | date
fundingRate | data | funding rate | float
high | data | highest price | float
indexPrice | data | index price | float
low | data | lowest price | float
markPrice | data | mark price | float
open | data |opening price  | float
price | data | current price | float
referencePrice | data | quoted index price | float
referenceSymbol | data | reference index code | string
scene | data | scene(REAL:real, VIRTUAL:virtual) | string
sell | data | first selling price | float
symbol | data | coin pair  | string
volume | data | volume  | float
