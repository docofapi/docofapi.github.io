# 账户相关

## 根据板块获取保证金

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
scene | 场景(REAL实际，VIRTUAL虚拟) | Yes
board | 合约板块编码 | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | Timestamp | Yes

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
availableBalance | data | 可用保证金 | float
board | data | 合约板块编码 | string
coin | data | coin | string
fee | data | 手续费 | float
orderBalance | data | 委托（冻结）保证金 | float
positionBalance | data | 仓位（占用）保证金 | float
profit | data | 盈亏 | float
rate | data | 保证金率 | float
scene | data | 场景(REAL实际，VIRTUAL虚拟) | string

## 获取用户所有保证金

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
time | Timestamp | Yes

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
availableBalance | data | 可用保证金 | float
board | data | 合约板块编码 | string
coin | data | coin | string
fee | data | 手续费 | float
orderBalance | data | 委托（冻结）保证金 | float
positionBalance | data | 仓位（占用）保证金 | float
profit | data | 盈亏 | float
rate | data | 保证金率 | float
scene | data | 场景(REAL实际，VIRTUAL虚拟) | string
