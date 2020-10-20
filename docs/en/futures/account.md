# Account related

## Get margin according to the board

**Request path: /open/margin/getMarginByBoard**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
scene=REAL&board=STD&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
board | contract board code | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":{
    "availableBalance": 2722401.0612728773,
    "board": "STD",
    "coin": "USDT",
    "fee": 0,
    "orderBalance": 469539.5047,
    "positionBalance": 7839338.2017,
    "profit": 8747.087028101838,
    "rate": 1.3276,
    "scene": "REAL"
  },
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
availableBalance | data | available margin | float
board | data | contract board code | string
coin | data | coin | string
fee | data | fees | float
orderBalance | data | entrusted (frozen) margin | float
positionBalance | data | position (occupied) margin | float
profit | data | profit and loss | float
rate | data | margin rate | float
scene | data | scene(REAL:real, VIRTUAL:virtual) | string

## Get all the user deposit

**Request path: /open/margin/getMargin**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":[{
    "availableBalance": 2722401.0612728773,
    "board": "STD",
    "coin": "USDT",
    "fee": 0,
    "orderBalance": 469539.5047,
    "positionBalance": 7839338.2017,
    "profit": 8747.087028101838,
    "rate": 1.3276,
    "scene": "REAL"
  }],
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
availableBalance | data | available margin | float
board | data | contract board code | string
coin | data | coin | string
fee | data | fees | float
orderBalance | data | entrusted (frozen) margin | float
positionBalance | data | position (occupied) margin | float
profit | data | profit and loss | float
rate | data | margin rate | float
scene | data | scene(REAL:real, VIRTUAL:virtual) | string
