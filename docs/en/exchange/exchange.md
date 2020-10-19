# 币币交易

## 查询当前委托

**Request path: /open/order/getCurrentPage**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
size=10&page=1&symbol=btcusdt&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
size | 每页数量(默认值10) | No
page | 当前页(默认值1) | No
symbol | 币对名称 | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | Timestamp | Yes

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

Node name (keyword) | Parent node | Description | Type
-- | -- | -- | -- |
footers | data | 页脚 | array
rows | data | 数据列表 | array
total | data | 总条数 | long
baseCoin | rows | 基准货币，symbol的前半段 | string
currentVolume | rows | 当前数量 | float
date | rows | 生效时间 | date
dealAmount | rows | 成交金额 | float
dealPrice | rows | 平均成交价 | float
dealVolume | rows | 成交数量 | float
id | rows | id | string
makerFeeRate | rows | 挂单方手续费率 | float
memberId | rows | 用户ID | integer
price | rows | 价格 | float
pushed | rows | 是否推送 | boolean
quoteCoin | rows | 计价货币,symbol的后半段 | string
side | rows | 交易方向(BUY买入,SELL卖出) | string
source | rows | 来源(WEB,H5,APP,API) | string
symbol | rows | 币对名称 | string
takerFeeRate | rows | 吃单方手续费率 | float
tradeCount | rows | 交易次数 | long
type | rows | 订单类型(LIMIT限价，MARKET市价) | string
updatedDate | rows | 修改时间 | date
volume | rows | 数量 | float

## 下单

**Request path: /open/order/create**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
symbol=btcusdt&price=7374.06&volume=4&side=SELL&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**请求数据描述如下：**

Node name (keyword) | Description | Required
-- | -- | -- | -- |
symbol | 币对名称 | Yes
price | 委托单价 | Yes
volume | 数量 | Yes
side | 买卖方向(BUY买入,SELL卖出) | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | Timestamp | Yes

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

Node name (keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | 无 | 订单号 | string


## 撤单

**Request path: /open/order/cancel**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
orderId=EX202004071549271315E8C30878571E40EE1444A78&token=Token&sign=signature&nonce=123123&time=1586239136316&symbol=btcusdt
```

**请求数据描述如下：**

Node name (keyword) | Description | Required
-- | -- | -- | -- |
orderId | 订单ID | Yes
token | token | Yes
sign | signature | Yes
nonce | random number | Yes
time | Timestamp | Yes
symbol | 币对名称 | No

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

Node name (keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | 无 | 订单号 | string

## 批量撤单

**Request path: /open/order/batchCancel**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
orderIds=EX202004071549271315E8C30878571E40EE1444A78&symbol=btcusdt&side=SELL&minPrice=7390&maxPrice=7395&size=2&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**请求数据描述如下：**

Node name (keyword) | Description | Required
-- | -- | -- | -- |
orderIds | 订单ID, “,”隔开 | No
symbol | 币对名称 | No
side | 买卖方向(BUY买入,SELL卖出) | No
minPrice | 最小价格 | No
maxPrice | 最大价格 | No
size | 撤单数量 | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | Timestamp | Yes

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
Node name (keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | 无 | 订单号 | array


## 根据ID获取当前委托订单详情

**Request path: /open/order/getCurrentById**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
orderId=EX202004071549271315E8C30878571E40EE1444A78&symbol=btcusdt&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name (keyword) | Description | Required
-- | -- | -- | -- |
orderId | 订单 | Yes
symbol | 币对名称 | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | Timestamp | Yes

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

Node name (keyword) | Parent node | Description | Type
-- | -- | -- | -- |
baseCoin | data | 基准货币，symbol的前半段 | string
createdDate | data | 创建时间 | date
currentVolume | data | 当前数量 | float
date | data | 生效时间 | date
dealAmount | data | 成交金额 | float
dealPrice | data | 平均成交价 | float
dealVolume | data | 成交数量 | float
id | data | id | string
makerFeeRate | data | 挂单方手续费率 | float
memberId | data | 用户ID | integer
price | data | 价格 | float
pushed | data | 是否推送 | boolean
quoteCoin | data | 计价货币,symbol的后半段 | string
side | data | 交易方向(BUY买入,SELL卖出) | string
source | data | 来源(WEB,H5,APP,API) | string
symbol | data | 币对名称 | string
takerFeeRate | data | 吃单方手续费率 | float
tradeCount | data | 交易次数 | long
type | data | 订单类型(LIMIT限价，MARKET市价) | string
updatedDate | data | 修改时间 | date
volume | data | 数量 | float

## 获取所有的交易数据

**Request path: /open/deal/findPage**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
pageSize=20&page=1&sort=1&symbol=btcusdt&orderId=EX202004071549271315E8C30878571E40EE1444A78&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name (keyword) | Description | Required
-- | -- | -- | -- |
pageSize | 每页数量(默认值20) | No
page | 当前页(默认值1) | No
sort | 排序方式(默认值1,0升序,1降序) | No
symbol | 币对名称 | No
orderId | 订单ID | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | Timestamp | Yes

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

Node name (keyword) | Parent node | Description | Type
-- | -- | -- | -- |
footers | data | 页脚 | array
rows | data | 数据列表 | array
total | data | 总条数 | long
id | rows | id | string
orderId | rows | 订单ID | string
side | rows | 交易方向(BUY买入,SELL卖出) | string
symbol | rows | 币对名称 | string
volume | rows | 成交数量 | float
orderPrice | rows | 订单价格 | float
price | rows | 成交价格 | float
payCoin | rows | 付出币种 | string
gainCoin | rows | 得到币种 | string
payVolume | rows | 付出数量 | float
gainVolume | rows | 得到数量 | float
feeRate | rows | 手续费率 | float
fee | rows | 手续费 | float
back | rows | 退还数量 | float
createdDate | rows | 创建时间 | date
