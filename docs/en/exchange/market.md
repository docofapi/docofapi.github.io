# Market data

## Get the latest transactions

**Request path: /market/getNewTrade**

**Request Protocol: POST**

**API signature: No**

**Example request parameters:**

```js
symbol=btcusdt&size=100
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
symbol | coin pair name | Yes
size | quantity(The minimum is 1, the maximum is 100) | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":[{
    "createdDate": "2020-04-07T02:25:17.537+0000",
    "id": "20200407102517TD5E8BE48D146BF11155C241BCF68D524AD6",
    "price": 7320.01,
    "side": "SELL",
    "symbol": "btcusdt",
    "volume": 0.000957
  }],
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
createdDate | data | time | date
id | data | id | string
price | data | price | float
side | data | direction: BUY: buy, SELL: sell | string
symbol | data | coin pair name | string
volume | data | quantity | float

## Get K line according to time

**Request path: /market/getScaleByDate**

**Request Protocol: POST**

**API signature: No**

**Example request parameters:**

```js
symbol=btcusdt&type=MIN_1&from=1585866600&to=1586046600
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
    "amount": 300.81443324,
    "close": 7307.97,
    "date": "2020-04-07 08:00:00",
    "high": 7331.17,
    "id": 1586217600,
    "low": 7307.44,
    "open": 7328.76,
    "symbol": "btcusdt",
    "type": "MIN_1",
    "volume": 0.041112
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
symbol | data | coin pair name | string
type | data | k line type | string
volume | data |trading volume  | float

## Get depth

**Request path: /market/getDepth**

**Request Protocol: POST**

**API signature: No**

**Example request parameters:**

```js
symbol=btcusdt&type=0&size=20
```

**The requested data is described as follows:：**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
symbol | coin pair name | Yes
type | depth gear (default: 0) | Yes
size | quantity | No

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":{
    "buyList": [
      [ 7289.64, 0.000789, 1 ],
      [ 7286.9, 0.000187, 1 ]
    ],
    "sellList": [
      [ 7291.22, 0.00025, 1 ],
      [ 7291.45, 0.000142, 1 ]
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
buyList | data | buying:price, quantity, total | array
sellList | data | sell:price, quantity, total | array
symbol | data | coin pair name | string

## Get 24-hour quotes

**Request path: /market/getBySymbol**

**Request Protocol: GET**

**API signature: No**

**Example request parameters:**

```js
symbol=btcusdt
```

**The requested data is described as follows:**
Node name(keyword) | Description | Required
-- | -- | -- | -- |
symbol | coin pair name | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":{
    "amount": 167734.38085126,
    "date": "2020-04-06T16:00:00.000+0000",
    "high": 7445.93,
    "low": 7084.95,
    "open": 7141.9,
    "price": 7272.41,
    "symbol": "btcusdt",
    "volume": 23.077366
  },
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
amount | data | turnover | float
date | data | date | date
high | data | highest price | float
low | data | lowest price | float
open | data | opening price | float
price | data | current price | float
symbol | data | coin pair name | string
volume | data | volume  | float


## Get a 24-hour market list

**Request path: /market/findAll**

**Request Protocol: GET**

**API signature: No**

**Request parameters: None**

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":[{
    "amount": 167734.38085126,
    "date": "2020-04-06T16:00:00.000+0000",
    "high": 7445.93,
    "low": 7084.95,
    "open": 7141.9,
    "price": 7272.41,
    "symbol": "btcusdt",
    "volume": 23.077366
  }],
  "arguments": null,
  "success": true
}
```
**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
amount | data | turnover | float
date | data | date | date
high | data | highest price | float
low | data | lowest price | float
open | data | opening price | float
price | data | current price | float
symbol | data | coin pair name | string
volume | data |volume  | float
