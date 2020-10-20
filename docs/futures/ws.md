
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
{ subscribe: "contractScale", data: { symbol: "btcusdt", scene: "REAL", type: "MIN_1" } }
```

响应值示例:

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

**取消订阅**

取消订阅格式如下:

```js
{ unsubscribe: 主题名, data: { 参数1:参数值,参数2:参数值,...... } }
```

示例:

```js
 { unsubscribe: "contractScale", data: { symbol: "btcusdt", scene: "REAL", type: "MIN_1" } }
```

## 合约深度订阅

**示例:**

```js
{ subscribe: "contractDepth", data: { symbol: "ltcusdt", scene: "REAL", type: 0, size: 1000 } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
scene | 场景(REAL:实际，VIRTUAL:虚拟) | 是
type | 深度档位(默认值:0) | 是
size | 数量默认值:100(10, 20, 50, 100, 200, 1000) | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
a | data | 卖出：价格,数量,条数 | array
b | data | 买入：价格,数量,条数 | array
n | data | 场景(REAL:实际，VIRTUAL:虚拟) | string
s | data | 币对名称 | string
send | 无 | 订阅主题名称 | string


## 合约最新成交订阅

**示例:**

```js
{ subscribe: "contractNewTrade", data: { symbol: "ltcusdt", scene: "REAL" } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
scene | 场景(REAL:实际，VIRTUAL:虚拟) | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
d | l | 创建时间 | date
e | l | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
i | l | id | string
p | l | 价格 | float
v | l | 数量 | float
n | data | 场景(REAL:实际，VIRTUAL:虚拟) | string
s | data | 币对名称 | string
send | 无 | 订阅主题名称 | string

## 24小时行情订阅

**示例:**

```js
{subscribe: "contractTicker", data: {scene: "REAL"}}
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
scene | 场景(REAL:实际，VIRTUAL:虚拟) | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
a | data | 成交额 | float
b | data | 买一价格 | float
c | data | 引用指数价格 | float
e | data | 卖一价格 | float
f | data | 资金费率 | float
h | data | 最高价 | float
i | data | 指数价格 | float
j | data | 合理基差 | float
l | data | 最低价 | float
m | data | 标记价格 | float
n | data | 场景(REAL:实际，VIRTUAL:虚拟) | string
o | data | 开盘价 | float
p | data | 当前价 | float
r | data | 引用指数代号 | string
s | data | 币对 | string
t | data | 日期 | date
v | data | 成交量 | float
send | 无 | 订阅主题名称 | string

## 合约单个币对行情订阅

**示例:**

```js
{subscribe: "contractSymbolTicker", data: {symbol: "btcusdt", scene: "REAL"}}
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
scene | 场景(REAL:实际，VIRTUAL:虚拟) | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
a | data | 成交额 | float
b | data | 买一价格 | float
c | data | 引用指数价格 | float
e | data | 卖一价格 | float
f | data | 资金费率 | float
h | data | 最高价 | float
i | data | 指数价格 | float
j | data | 合理基差 | float
l | data | 最低价 | float
m | data | 标记价格 | float
n | data | 场景(REAL:实际，VIRTUAL:虚拟) | string
o | data | 开盘价 | float
p | data | 当前价 | float
r | data | 引用指数代号 | string
s | data | 币对 | string
t | data | 日期 | date
v | data | 成交量 | float
send | 无 | 订阅主题名称 | string


## 合约价 K 线订阅

**示例:**

```js
{ subscribe: "contractScale", data: {symbol: "btcusdt", type: "MIN_1", scene: "REAL"} }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
type | K线类型(MIN_1:一分钟,MIN_5:五分钟,MIN_15:十五分钟,MIN_30:三十分钟,HOUR_1:一小时,HOUR_4:四小时,DAY_1:一天,WEEK_1:一周,MONTH_1:一个月) | 是
scene | 场景(REAL:实际，VIRTUAL:虚拟) | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
a | data | 成交额 | float
c | data | 收盘价 | float
h | data | 最高价 | float
i | data | id | String
l | data | 最低价 | float
n | data | 场景(REAL:实际，VIRTUAL:虚拟) | String
o | data | 开盘价 | float
s | data | 币对名称 | String
t | data | K 线类型 | String
v | data | 交易量 | float
send | 无 | 订阅主题名称 | string

## 指数价 K 线订阅

**示例:**

```js
{ subscribe: "indexScale", data: {symbol: "btcusdt", type: "MIN_1"} }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
type | K线类型(MIN_1:一分钟,MIN_5:五分钟,MIN_15:十五分钟,MIN_30:三十分钟,HOUR_1:一小时,HOUR_4:四小时,DAY_1:一天,WEEK_1:一周,MONTH_1:一个月) | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
c | data | 收盘价 | float
h | data | 最高价 | float
i | data | id | String
l | data | 最低价 | float
o | data | 开盘价 | float
s | data | 币对名称 | String
t | data | K 线类型 | String
send | 无 | 订阅主题名称 | string

## 标记价 K 线订阅

**示例:**

```js
{ subscribe: "markScale", data: {symbol: "btcusdt", type: "MIN_1", scene: "REAL"} }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
type | K线类型(MIN_1:一分钟,MIN_5:五分钟,MIN_15:十五分钟,MIN_30:三十分钟,HOUR_1:一小时,HOUR_4:四小时,DAY_1:一天,WEEK_1:一周,MONTH_1:一个月) | 是
scene | 场景(REAL:实际，VIRTUAL:虚拟) | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
c | data | 收盘价 | float
h | data | 最高价 | float
i | data | id | String
l | data | 最低价 | float
n | data | 场景(REAL:实际，VIRTUAL:虚拟) | String
o | data | 开盘价 | float
s | data | 币对名称 | String
t | data | K 线类型 | String
send | 无 | 订阅主题名称 | string

## 保证金账户订阅

**示例:**

```js
{ subscribe:"margin", data: { "token": "Token", "memberId": 100094 } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
token | token | 是
memberId | 用户ID | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
m | data | 用户ID | integer
b | data | 合约板块编码 | String
n | data | 场景(REAL:实际，VIRTUAL:虚拟) | String
c | data | 币种 | String
a | data | 可用保证金 | float
o | data | 委托（冻结）保证金 | float
p | data | 仓位（占用）保证金 | float
r | data | 保证金率 | float
i | data | 盈亏 | float
f | data | 手续费 | float
send | 无 | 订阅主题名称 | string

## 合约订单订阅

**示例:**

```js
{ subscribe:"contractOrder", data: { "token": "Token", "memberId": 100094 } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
token | token | 是
memberId | 用户ID | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
board | data | 合约板块编码 | string
coin | data | 结算币种 | string
createdDate | data | 创建时间 | date
currentVolume | data | 当前数量 | float
date | data | 生效时间 | date
dealAmount | data | 成交金额 | float
dealPrice | data | 平均成交价 | float
dealVolume | data | 成交数量 | float
id | data | 订单id | string
lossPrice | data | 止损价 | float
makerFeeRate | data | 挂单方手续费率 | float
margin | data | 保证金 | float
marginDiscount | data | 保证金折扣 | float
memberId | data | 用户id | integer
multiplier | data | 杠杆倍数 | integer
passive | data | 是否强平(true:启用,false:禁用) | boolean
positionSide | data | 仓位方向(ENTRY:开仓, EXIT:平仓)  | string
positionId | data | 仓位ID | string
price | data | 价格 | float
profitPrice | data | 止盈价 | float
pushed | data | 是否推送(true:启用,false:禁用) | boolean
quantity | data | 手数 | float
referenceSymbol | data | 引用指数代号 | string
referencePrice | data | 指数价 | float
roleCode | data | 角色编码 | string
scene | data | 场景(REAL:实际，VIRTUAL:虚拟)	 | string
side | data | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
size | data | 合约面值 | float
source | data | 来源(WEB,H5,APP,API) | string
symbol | data | 币对 | string
takerFeeRate | data | 吃单方手续费率 | float
tradeCount | data | 交易次数 | long
type | data | 订单类型(LIMIT限价, MARKET市价, STOP突破价, PROFIT_LOSS止盈止损) | string
updatedDate | data | 修改时间 | date
volume | data | 数量 | float

## 仓位信息订阅

**示例:**

```js
{ subscribe:"position", data: { "token": "Token", "memberId": 100094 } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
token | token | 是
memberId | 用户ID | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
board | data | 合约板块编码 | string
coin | data | 结算货币 | string
createdDate | data | 创建时间 | date
currentId   | data | 仓位记录ID | string
entryAmount | data | 开仓金额 | float
entryFee | data | 开仓手续费 | float
entryMargin | data | 开仓保证金 | float
entryPrice | data | 开仓均价 | float
entryVolume | data | 开仓数量 | float
exitAmount | data | 平仓金额 | float
exitFee | data | 平仓手续费 | float
exitMargin | data | 平仓保证金 | float
exitPrice | data | 平仓均价 | float
exitReferencePrice | data | 总平均指数价格(平仓) | float
exitVolume | data | 平仓数量 | float
fee | data | 持仓占用手续费 | float
id | data | 仓位ID | string
margin | data | 保证金 | float
memberId | data | 用户ID | integer
multiplier | data | 杠杆倍数 | integer
orderVolume | data | 委托数量 | float
passive | data | 是否强平(true:是,false否) | boolean
price | data | 当前开仓均价 | float
profit | data | 盈亏 | float
referenceSymbol | data | 引用指数代号 | string
roleCode  | data | 角色编码 | string
scene | data | 场景(REAL:实际，VIRTUAL:虚拟) | string
side | data | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
symbol | data | 币对 | string
updatedDate | data | 修改时间 | date
volume | data | 成交数量 | float
