# Websocket

## 简介

**接入URL: `wss://sock.xyt.com/ws`**

**心跳消息**

当用户的` Websocket `客户端连接到` XYT `的` Websocket `服务器后，服务器会定期(当前设为` 30 `秒)向其发送` ping `消息并包含当前时间的时间戳，如下:

```js
{ data: { time: 1586249815378 }, send: "ping" }
```

当用户的 ` Websocket `客户端接收到此心跳消息后，应返回` pong `消息并包含当前时间的时间戳，如下：

```js
{ send: "pong", data: 1586249814687 }
```

**注意：当` Websocket` 服务器连续发送了`ping`消息五分钟后却没有收到任何一次`pong`消息返回后，服务器将主动断开与此客户端的连接。**

**订阅主题**

成功建立与` Websocket `服务器的连接后，` Websocket `客户端发送如下请求以订阅特定主题

```js
{ subscribe: 主题名, data: { 参数1:参数值, 参数2:参数值,...... } }
```

示例:

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

**取消订阅**

取消订阅格式如下:

```js
{ unsubscribe: 主题名, data: { 参数1:参数值,参数2:参数值,...... } }
```

示例:

```js
 { unsubscribe: "scale", data: { symbol: "btcusdt", type: "MIN_1" } }
```

## 订阅深度

**示例:**

```js
{ subscribe: "depth", data: { symbol: "btcusdt", type: 0, size: 100 } }
```

**请求数据描述如下:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | Yes
symbol | 币对名称 | Yes
type | 深度档位(默认值:0) | Yes
size | 数量默认值:100(10, 20, 50, 100, 200, 1000) | Yes

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
a | data | 卖出：价格,数量,条数 | array
b | data | 买入：价格,数量,条数 | array
s | data | 币对名称 | string
send | 无 | 订阅主题名称 | string


## 最新成交

**示例:**

```js
{ subscribe: "newTrade", data: { symbol: "btcusdt" } }
```

**请求数据描述如下:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | Yes
symbol | 币对名称 | Yes

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
list | data | Id,价格,数量,方向,创建时间 | array
symbol | data | 币对名称 | string
send | 无 | 订阅主题名称 | string

## 24小时行情

**示例:**

```js
{ subscribe: "ticker" }
```

**请求数据描述如下:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | Yes

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
a | data | 成交额 | float
h | data | 最高价 | float
l | data | 最低价 | float
o | data | opening price | float
p | data | 当前价 | float
s | data | 币对名称 | float
t | data | 日期 | date
v | data | 成交量 | float
send | 无 | 订阅主题名称 | string

## 单个币对行情

**示例:**

```js
{ subscribe: "symbolTicker", data: { symbol: "btcusdt" } }
```

**请求数据描述如下:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | Yes
symbol | 币对名称 | Yes

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
a | data | 成交额 | float
h | data | 最高价 | float
l | data | 最低价 | float
o | data | opening price | float
p | data | 当前价 | float
s | data | 币对名称 | float
t | data | 日期 | date
v | data | 成交量 | float
send | 无 | 订阅主题名称 | string


## K 线

**示例:**

```js
{ subscribe: "scale", data: { symbol: "btcusdt", type: "MIN_1" } }
```

**请求数据描述如下:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | Yes
symbol | 币对名称 | Yes
type | K线类型(MIN_1一分钟,MIN_5五钟,MIN_15十五分钟,MIN_30三十分钟,HOUR_1一小时,HOUR_4四小时,DAY_1一天,WEEK_1一周,MONTH_1一个月) | Yes

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
a | data | 成交额 | float
c | data | 收盘价 | float
h | data | 最高价 | float
i | data | id | float
l | data | 最低价 | float
o | data | opening price | float
s | data | 币对名称 | float
t | data | K 线类型 | date
v | data | 交易量 | float
send | 无 | 订阅主题名称 | string

## 账户

**示例:**

```js
{ subscribe:"account", data: { "token": "Token", "memberId": 100028 } }
```

**请求数据描述如下:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | Yes
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
b | data | 资金余额 | float
c | data | coin | float
l | data | 冻结金额 | float
m | data | user ID | integer
send | 无 | 订阅主题名称 | string

## 订单

**示例:**

```js
{ subscribe:"order", data: { "token": "Token", "memberId": 100028 } }
```

**请求数据描述如下:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | Yes
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
symbol | data | 币对名称 | string
baseCoin | data | 基准货币，symbol的前半段 | string
quoteCoin | data | 计价货币,symbol的后半段 | string
price | data | 价格 | float
volume | data | 数量 | float
takerFeeRate | data | taker rate | float
makerFeeRate | data | maker rate | float
side | data | 交易方向(BUY买入,SELL卖出) | string
type | data | 订单类型(LIMIT限价，MARKET市价) | string
source | data | 来源(WEB,H5,APP,API) | string
date | data | 生效时间 | date
createdDate | data | 创建时间 | date
updatedDate | data | 修改时间 | date
pushed | data | 是否推送 | boolean
tradeCount | data | 交易次数 | long
currentVolume | data | 当前数量 | float
dealVolume | data | 成交数量 | float
dealAmount | data | 成交金额 | float
dealPrice | data | 平均成交价 | float
send | 无 | 订阅主题名称 | string
