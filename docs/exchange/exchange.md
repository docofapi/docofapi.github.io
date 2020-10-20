# 币币交易

## 查询当前委托

**请求路径: /open/order/getCurrentPage**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
size=10&page=1&symbol=btcusdt&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
size | 每页数量(默认值10) | 否
page | 当前页(默认值1) | 否
symbol | 币对名称 | 否
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
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
side | rows | 交易方向(BUY: 买入,SELL: 卖出) | string
source | rows | 来源(WEB,H5,APP,API) | string
symbol | rows | 币对名称 | string
takerFeeRate | rows | 吃单方手续费率 | float
tradeCount | rows | 交易次数 | long
type | rows | 订单类型(LIMIT:限价，MARKET:市价) | string
updatedDate | rows | 修改时间 | date
volume | rows | 数量 | float

## 下单

**请求路径: /open/order/create**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
symbol=btcusdt&price=7374.06&volume=4&side=SELL&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下：**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
symbol | 币对名称 | 是
price | 委托单价 | 是
volume | 数量 | 是
side | 买卖方向(BUY: 买入,SELL: 卖出) | 是
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例:**

```js
{
  "type": "SUCCESS",
  "data": "EX202004071549271315E8C30878571E40EE1444A78",
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
data | 无 | 订单号 | string


## 撤单

**请求路径: /open/order/cancel**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
orderId=EX202004071549271315E8C30878571E40EE1444A78&token=Token&sign=签名&nonce=123123&time=1586239136316&symbol=btcusdt
```

**请求数据描述如下：**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
orderId | 订单ID | 是
token | token | 是
sign | 签名 | 是
nonce | 随机数 | 是
time | 时间戳 | 是
symbol | 币对名称 | 否

**响应值示例:**

```js
{
  "type": "SUCCESS",
  "data": "EX202004071549271315E8C30878571E40EE1444A78",
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
data | 无 | 订单号 | string

## 批量撤单

**请求路径: /open/order/batchCancel**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
orderIds=EX202004071549271315E8C30878571E40EE1444A78&symbol=btcusdt&side=SELL&minPrice=7390&maxPrice=7395&size=2&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下：**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
orderIds | 订单ID, “,”隔开 | 否
symbol | 币对名称 | 否
side | 买卖方向(BUY: 买入,SELL: 卖出) | 否
minPrice | 最小价格 | 否
maxPrice | 最大价格 | 否
size | 撤单数量 | 否
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例:**

```js
{
  "type": "SUCCESS",
  "data":[ "EX202004071549271315E8C30878571E40EE1444A78" ],
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**
节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
data | 无 | 订单号 | array


## 根据ID获取当前委托订单详情

**请求路径: /open/order/getCurrentById**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
orderId=EX202004071549271315E8C30878571E40EE1444A78&symbol=btcusdt&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
orderId | 订单 | 是
symbol | 币对名称 | 是
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例：**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
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
side | data | 交易方向(BUY: 买入,SELL: 卖出) | string
source | data | 来源(WEB,H5,APP,API) | string
symbol | data | 币对名称 | string
takerFeeRate | data | 吃单方手续费率 | float
tradeCount | data | 交易次数 | long
type | data | 订单类型(LIMIT:限价，MARKET:市价) | string
updatedDate | data | 修改时间 | date
volume | data | 数量 | float

## 获取所有的交易数据

**请求路径: /open/deal/findPage**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
pageSize=20&page=1&sort=1&symbol=btcusdt&orderId=EX202004071549271315E8C30878571E40EE1444A78&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
pageSize | 每页数量(默认值20) | 否
page | 当前页(默认值1) | 否
sort | 排序方式(默认值1,0:升序,1:降序) | 否
symbol | 币对名称 | 否
orderId | 订单ID | 否
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
footers | data | 页脚 | array
rows | data | 数据列表 | array
total | data | 总条数 | long
id | rows | id | string
orderId | rows | 订单ID | string
side | rows | 交易方向(BUY: 买入,SELL: 卖出) | string
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
