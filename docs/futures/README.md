# 合约交易

::: tip
本页面是合约交易 API 文档
:::

本页面的主要内容如下：

<!-- - [公共](./common.md)
- [基础数据](./base-data.md)
- [行情数据](./market.md)
- [账户相关](./account.md)
- [币币交易](./exchange.md)
- [Websocket](./ws.md) -->

# 合约

## 公共

### 接口

**接口地址: ` https://www.xyt.com/api `**

### 签名

**签名生成规则如下:**

参与签名的字段包括有效的` token `（`Token `，其获取方式详见帮助中心）， ` time `（由开发者生成的当前时间戳），` nonce`（随机数），对所有待签名参数按照字段名的` ASCII `码从小到大排序（字典序）后，使用 键值对的格式（即` key1value1key2value2…`）拼接成字符串` str `,注意：如果请求参数中的` value `为` NULL `的情况，则在拼接字符串时不计入签名字符串，参数名均为小写字符,接下来对` str + KEY`(密钥) 作` MD5 `加密，字段名和字段值都采用原始值，不进行` str `转义。即` sign=Md5(str + KEY)`。

**参数如下:**

```js
{
  "scene": "REAL",
  "board": "STD",
  "symbol": "btcusdt",
  "id": "20200120",
  "time": 1585885434629,
  "nonce": "123123",
  "token": "r4er3r423vfr342543f.53uhj4g34g"
}
KEY:"oi678k78km5j675i766"
```

**拼接完成后:**

```js
String1 = "id20200120nonce123123sceneREALboardSTDsymbolbtcusdttime1585885434629tokenr4er3r423vfr342543f.53uhj4g34goi678k78km5j675i766"
sign = "F5DB0F896659467AC527BD01C07EE692"
```

### 公共响应值

**响应值示例:**

```js
{
  "type": "SUCCESS",
  "data": "响应数据",
  "arguments": null,
  "msg": "suc"
}
```

**响应数据描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
type | 无 | 响应码 | string
data | 无 | 响应数据 | 任意类型
arguments | 无 | 国际化参数(成功时返回null) | array
success | 无 | true / false | boolean

> 获取 type 列表： https://www.xyt.com/api/common/findLocale/{语言}
>
> 语言：de_DE、en_US、fr_FR、ja_JP、ko_KR、ru_RU、th_TH、zh_CN、zh_TW

## 基础数据

### 获取所有合约板块

**请求路径: /boardType/findAll**

**请求协议: GET**

**接口签名: 无**

**请求参数: 无**

**响应值示例:**

```js
{
  "type": "SUCCESS",
  "data": [{
    "code": "STD",
    "coin": "USDT",
    "coinPrecision": 4,
    "contractList": [{
        "baseCoin": "BTC",
        "basisMaxSize": 30,
        "contractBoardName": "BTCUSDT",
        "depthPrecisionList": "1,0",
        "enabledEntry": true,
        "enabledExit": true,
        "fresh": true,
        "fundingMultiplier": 1,
        "fundingPrecision": 6,
        "index": {
            "enabled": true,
            "weightList": [{
                "exchange": "BINANCE",
                "weight": 0.3
            }]
        },
        "indexSymbol": "btcusdt",
        "interval": 8,
        "makerFeeRate": 0.00025,
        "markInterval": 500,
        "maxMultiplier": 50,
        "maxVolume": 10,
        "minMultiplier": 1,
        "minVolume": 0.01,
        "multiplierList": "1,10,20,30,50",
        "openDate": "2020-07-29T02:35:29.000+0000",
        "openPrice": 10923,
        "positionMaxSize": 50,
        "pricePrecision": 1,
        "priceRate": 0.01,
        "quoteCoin": "USDT",
        "referenceSymbol": null,
        "size": 1,
        "symbol": "btcusdt",
        "takerFeeRate": 0.00075,
        "volumePrecision": 2,
        "weight": 100
    }],
    "enabledEntry": true,
    "enabledExit": true,
    "enabledMarginDeposit": true,
    "enabledMarginWithdraw": true,
    "holdMarginRate": 0.3,
    "iconUrl": null,
    "localMap": {
        "de_DE": null,
        "en_US": "Standard contract",
        "fr_FR": null,
        "ja_JP": "標準永久契約",
        "ko_KR": "표준 영구 계약",
        "ru_RU": "Стандартный договор",
        "th_TH": "โซนถาวรมาตรฐาน",
        "zh_CN": "",
        "zh_TW": "標準永續區"
    },
    "name": "标准永续区",
    "visibled": true,
    "weight": 4
  }],
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
code | data | 编码 | string
coin | data | 结算币种 | string
coinPrecision | data | 结算币种精度 | integer
baseCoin | contractList | 基准货币 | string
basisMaxSize | contractList | 基差计算条数 | integer
contractBoardName | contractList | 合约板块名称 | string
depthPrecisionList | contractList | 深度精度(“,”隔开) | string
enabledEntry | contractList | 启用开仓(true:启用,false禁用) | boolean
enabledExit | contractList | 启用平仓(true:启用,false禁用) | boolean
fresh | contractList | 新上币对(true:启用,false禁用) | boolean
fundingMultiplier | contractList | 资金费率倍数 | float
fundingPrecision | contractList | 资金费率精度 | integer
enabled | index | 启用(true:启用,false禁用) | boolean
exchange | weightList | 交易所 | string
weight | weightList | 权重 | float
indexSymbol | contractList | 指数代号 | string
interval | contractList | 资金费率间隔(h) | integer
makerFeeRate | contractList | 挂单方手续费率 | float
markInterval | contractList | 标记价格间隔(ms) | integer
maxMultiplier | contractList | 最大杠杆倍数 | integer
maxVolume | contractList | 最高手数 | float
minMultiplier | contractList | 最小杠杆倍数 | integer
minVolume | contractList | 最低手数 | float
multiplierList | contractList | 杠杆倍数区间段 | string
openDate | contractList | 开盘时间 | date
openPrice | contractList | 开盘价 | float
positionMaxSize | contractList | 仓位最大条数 | integer
pricePrecision | contractList | 价格精度 | integer
priceRate | contractList | 价格浮动率 | float
quoteCoin | contractList | 计价货币 | string
referenceSymbol | contractList | 引用指数代号 | string
size | contractList | 合约面值 | float
symbol | contractList | 币对 | string
takerFeeRate | contractList | 吃单方手续费率 | float
volumePrecision  | contractList  | 手精度 | integer
weight  | contractList | 权重 | integer
enabledEntry | data | 启用开仓(true:启用,false禁用) | boolean
enabledExit | data | 启用平仓(true:启用,false禁用) | boolean
enabledMarginDeposit | data | 启用充保证金(true:启用,false禁用) | boolean
enabledMarginWithdraw | data | 启用提保证金(true:启用,false禁用) | boolean
holdMarginRate | data | 维持保证金率 | float
iconUrl | data | 图标路径 | string
localMap | data | 国际化语言Map<String, String> | string
name | data | 板块名称 | string
visibled | data | 是否公共(true:启用,false禁用) | boolean
weight | data | 权重 | integer


## 行情数据

### 根据时间获取合约价格 K 线

**请求路径: /contract/market/getScaleByDate**

**请求协议: POST**

**接口签名: 无**

**请求参数示例:**

```js
symbol=btcusdt&scene=REAL&type=MIN_1&from=1601246645&to=1601258645
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
symbol | 币对名称 | 是
scene | 场景(REAL真实，VIRTUAL虚拟) | 是
type | K线类型(MIN_1一分钟,MIN_5五钟,MIN_15十五分钟,MIN_30三十分钟,HOUR_1一小时,HOUR_4四小时,DAY_1一天,WEEK_1一周,MONTH_1一个月) | 是
from | 开始时间(时间戳) | 是
to | 结束时间(时间戳) | 是

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
amount | data | 交易额 | float
close | data | 收盘价 | float
date | data | 日期 | date
high | data | 最高价 | float
id | data | id | string
low | data | 最低价 | float
open | data | 开盘价 | float
scene | data | 场景(REAL真实，VIRTUAL虚拟) | string
symbol | data | 币对名称 | string
type | data | K线类型 | string
volume | data |交易量  | float

### 获取合约深度

**请求路径: /contract/market/getDepth**

**请求协议: POST**

**接口签名: 无**

**请求参数示例:**

```js
symbol=btcusdt&scene=REAL&type=0&size=20
```

**请求数据描述如下：**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
symbol | 币对名称 | 是
scene | 场景场景(REAL真实，VIRTUAL虚拟) | 是
type | 深度档位(默认值:0) | 是
size | 数量 | 否

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
buyList | data | 买入：价格、数量、条数 | array
scene | data | 场景(REAL真实，VIRTUAL虚拟) | string
sellList | data | 卖出：价格、数量、条数 | array
symbol | data | 币对名称 | string

### 获取合约 24 小时行情

**请求路径: /contract/market/getBySymbol**

**请求协议: GET**

**接口签名: 无**

**请求参数示例:**

```js
scene=REAL&symbol=btcusdt
```

**请求数据描述如下：**
节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
scene | 场景(REAL真实，VIRTUAL虚拟) | 是
symbol | 币对名称 | 是

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
amount | data | 成交额 | float
basis | data | 合理基差 | float
buy | data | 买一价格 | float
date | data | 日期 | date
fundingRate | data | 资金费率 | float
high | data | 最高价 | float
indexPrice | data | 指数价格 | float
low | data | 最低价 | float
markPrice | data | 标记价格 | float
open | data |开盘价  | float
price | data | 当前价 | float
referencePrice | data | 引用指数价格 | float
referenceSymbol | data | 引用指数代号 | string
scene | data | 场景(REAL真实，VIRTUAL虚拟) | string
sell | data | 卖一价格 | float
symbol | data | 币对  | string
volume | data | 成交量  | float

### 获取合约 24 小时行情列表

**请求路径: /contract/market/findAll**

**请求协议: GET**

**接口签名: 无**

**请求参数示例:**

```js
scene=REAL
```

**请求数据描述如下：**
节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
scene | 场景(REAL真实，VIRTUAL虚拟) | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
amount | data | 成交额 | float
basis | data | 合理基差 | float
buy | data | 买一价格 | float
date | data | 日期 | date
fundingRate | data | 资金费率 | float
high | data | 最高价 | float
indexPrice | data | 指数价格 | float
low | data | 最低价 | float
markPrice | data | 标记价格 | float
open | data |开盘价  | float
price | data | 当前价 | float
referencePrice | data | 引用指数价格 | float
referenceSymbol | data | 引用指数代号 | string
scene | data | 场景(REAL真实，VIRTUAL虚拟) | string
sell | data | 卖一价格 | float
symbol | data | 币对  | string
volume | data | 成交量  | float

## 账户相关

### 根据板块获取保证金

**请求路径: /open/margin/getMarginByBoard**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
scene=REAL&board=STD&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
board | 合约板块编码 | 是
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例：**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
availableBalance | data | 可用保证金+仓位价值 | float
board | data | 合约板块编码 | string
coin | data | 币种 | string
fee | data | 手续费 | float
orderBalance | data | 委托（冻结）保证金 | float
positionBalance | data | 仓位（占用）保证金 | float
profit | data | 盈亏 | float
rate | data | 保证金率 | float
scene | data | 场景(REAL实际，VIRTUAL虚拟) | string

### 获取用户所有保证金

**请求路径: /open/margin/getMargin**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例：**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
availableBalance | data | 可用保证金+仓位价值 | float
board | data | 合约板块编码 | string
coin | data | 币种 | string
fee | data | 手续费 | float
orderBalance | data | 委托（冻结）保证金 | float
positionBalance | data | 仓位（占用）保证金 | float
profit | data | 盈亏 | float
rate | data | 保证金率 | float
scene | data | 场景(REAL实际，VIRTUAL虚拟) | string

## 合约交易

### 查询当前委托

**请求路径: /open/contractOrder/getCurrentPage**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
size=10&page=1&scene=REAL&board=STD&symbol=btcusdt&positionId=CT202009221345165F698F6C50F35B256BD76B0B
&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
size | 每页数量(默认值10) | 否
page | 当前页(默认值1) | 否
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
board | 合约板块编码 | 是
symbol | 币对名称 | 是
positionId | 仓位ID | 否
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
        "id":"CT202009281739095F71AF3D50F35B256BD7F7A1",
        "memberId":100106,
        "symbol":"eosusdt",
        "scene":"REAL",
        "board":"STD",
        "coin":"USDT",
        "price":2.5866,
        "profitPrice":null,
        "lossPrice":null,
        "volume":430,
        "multiplier":30,
        "size":1,
        "quantity":430,
        "referenceSymbol":null,
        "referencePrice":null,
        "margin":38.3201,
        "takerFeeRate":null,
        "makerFeeRate":null,
        "side":"BUY",
        "positionSide":"EXIT",
        "positionId":"CT202009221405565F69944450F35B256BD78F4D",
        "type":"LIMIT",
        "source":"API",
        "date":"2020-09-28T09:39:09.065+0000",
        "passive":null,
        "createdDate":"2020-09-28T09:39:09.000+0000",
        "updatedDate":"2020-09-28T09:39:09.072+0000",
        "pushed":true,
        "roleCode":"STAND_1",
        "marginDiscount":null,
        "tradeCount":null,
        "currentVolume":430,
        "dealVolume":null,
        "dealAmount":null,
        "dealPrice":null
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
id | rows | 订单id | string
memberId | rows | 用户id | integer
symbol | rows | 币对 | string
scene | rows | 场景(REAL实际，VIRTUAL虚拟)	 | string
board | rows | 合约板块编码 | string
coin | rows | 结算币种 | string
price | rows | 价格 | float
profitPrice | rows | 止盈价 | float
lossPrice | rows | 止损价 | float
volume | rows | 数量 | float
multiplier | rows | 杠杆倍数 | integer
size | rows | 合约面值 | float
quantity | rows | 手数 | float
referenceSymbol | rows | 引用指数代号 | string
referencePrice | rows | 指数价 | float
margin | rows | 保证金 | float
takerFeeRate | rows | 吃单方手续费率 | float
makerFeeRate | rows | 挂单方手续费率 | float
side | rows | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
positionSide | rows | 仓位方向(ENTRY开仓, EXIT平仓)  | string
positionId | rows | 仓位ID | string
type | rows | 订单类型(LIMIT限价, MARKET市价, STOP突破价, PROFIT_LOSS止盈止损) | string
source | rows | 来源(WEB,H5,APP,API) | string
date | rows | 生效时间 | date
passive | rows | 是否强平(true:启用,false禁用) | boolean
createdDate | rows | 创建时间 | date
updatedDate | rows | 修改时间 | date
pushed | rows | 是否推送(true:启用,false禁用) | boolean
roleCode | rows | 角色编码 | string
marginDiscount | rows | 保证金折扣 | float
tradeCount | rows | 交易次数 | long
currentVolume | rows | 当前数量 | float
dealVolume | rows | 成交数量 | float
dealAmount | rows | 成交金额 | float
dealPrice | rows | 平均成交价 | float

### 开仓下单

**请求路径: /open/contractOrder/createEntry**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
scene=REAL&type=LIMIT&side=SELL&board=STD&symbol=btcusdt&price=7374.06&quantity=4&multiplier=10&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下：**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
type | 订单类型(LIMIT限价，MARKET市价，STOP突破价，PROFIT_LOSS止盈止损) | 是
side | 订单方向(BUY开多, SELL开空) | 是
board | 合约板块编码 | 是
symbol | 币对名称 | 是
price | 委托单价 | 是
quantity | 手数 | 是
multiplier | 杠杆倍数 | 是
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例:**

```js
{
    "type": "SUCCESS,
    "data": "CT202009291022415F729A7150F35B256BDB7523",
    "arguments": null,
    "success": true

}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
data | 无 | 订单号 | string


### 平仓下单

**请求路径: /open/contractOrder/createExit**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
scene=REAL&symbol=btcusdt&board=STD&type=LIMIT&positionId=CT202008111343545F32301A29517D008E0A089C
&price=7374.06&quantity=4&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下：**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
symbol | 币对名称 | 是
board | 合约板块编码 | 是
type | 订单类型(LIMIT限价，MARKET市价，STOP突破价，PROFIT_LOSS止盈止损) | 是
positionId | 仓位ID | 是
price | 委托单价 | 是
quantity | 手数 | 是
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例:**

```js
{
    "type": "SUCCESS,
    "data": "CT202009291102025F72A3AA50F35B256BDBAC8B",
    "arguments": null,
    "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
data | 无 | 订单号 | string


### 撤单

**请求路径: /open/contractOrder/cancel**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
orderId=CT202009291022415F729A7150F35B256BDB7523&symbol=btcusdt
&board=STD&scene=REAL&token=Token&sign=签名&nonce=123123&time=1586239136316
```

**请求数据描述如下：**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
orderId | 订单ID | 是
symbol | 交易对 | 是
board | 合约板块编码 | 是
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
token | token | 是
sign | 签名 | 是
nonce | 随机数 | 是
time | 时间戳 | 是
symbol | 币对名称 | 否

**响应值示例:**

```js
{
    "type": "SUCCESS",
    "data": null,
    "arguments": null,
    "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
data | 无 | 无 | string

### 批量撤单

**请求路径: /open/contractOrder/batchCancel**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
orderIds=CT202009291022415F729A7150F35B256BDB7523&symbol=btcusdt&scene=REAL&side=SELL
&minPrice=7390&maxPrice=7395&size=2&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下：**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
orderIds | 订单ID, “,”隔开 | 否
symbol | 币对名称 | 是
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
size | 撤单数量 | 否
side | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | 否
minPrice | 最小价格 | 否
maxPrice | 最大价格 | 否
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例:**

```js
{
    "type": "SUCCESS",
    "data":[
        CT202009291302575F72C00150F35B256BDC3A11, CT202009291302225F72BFDE50F35B256BDC399F
        ],
    "arguments": null,
    "success": true

}
```

**响应值描述如下:**
节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
data | 无 | 订单号 | array


### 根据ID获取当前委托订单详情

**请求路径: /open/contractOrder/getCurrentById**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
scene=REAL&id=EX202004071549271315E8C30878571E40EE1444A78&board=STD&symbol=btcusdt&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
orderId | 订单ID | 是
board | 合约板块编码 | 是
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
       "id":"CT202009281739095F71AF3D50F35B256BD7F7A1",
        "memberId":100106,
        "symbol":"eosusdt",
        "scene":"REAL",
        "board":"STD",
        "coin":"USDT",
        "price":2.5866,
        "profitPrice":null,
        "lossPrice":null,
        "volume":430,
        "multiplier":30,
        "size":1,
        "quantity":430,
        "referenceSymbol":null,
        "referencePrice":null,
        "margin":38.3201,
        "takerFeeRate":null,
        "makerFeeRate":null,
        "side":"BUY",
        "positionSide":"EXIT",
        "positionId":"CT202009221405565F69944450F35B256BD78F4D",
        "type":"LIMIT",
        "source":"API",
        "date":"2020-09-28T09:39:09.065+0000",
        "passive":null,
        "createdDate":"2020-09-28T09:39:09.000+0000",
        "updatedDate":"2020-09-28T09:39:09.072+0000",
        "pushed":true,
        "roleCode":"STAND_1",
        "marginDiscount":null,
        "tradeCount":null,
        "currentVolume":430,
        "dealVolume":null,
        "dealAmount":null,
        "dealPrice":null
  },
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
id | data | 订单id | string
memberId | data | 用户id | integer
symbol | data | 币对 | string
scene | data | 场景(REAL实际，VIRTUAL虚拟)	 | string
board | data | 合约板块编码 | string
coin | data | 结算币种 | string
price | data | 价格 | float
profitPrice | data | 止盈价 | float
lossPrice | data | 止损价 | float
volume | data | 数量 | float
multiplier | data | 杠杆倍数 | integer
size | data | 合约面值 | float
quantity | data | 手数 | float
referenceSymbol | data | 引用指数代号 | string
referencePrice | data | 指数价 | float
margin | data | 保证金 | float
takerFeeRate | data | 吃单方手续费率 | float
makerFeeRate | data | 挂单方手续费率 | float
side | data | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
positionSide | data | 仓位方向(ENTRY开仓, EXIT平仓)  | string
positionId | data | 仓位ID | string
type | data | 订单类型(LIMIT限价, MARKET市价, STOP突破价, PROFIT_LOSS止盈止损) | string
source | data | 来源(WEB,H5,APP,API) | string
date | data | 生效时间 | date
passive | data | 是否强平(true:启用,false禁用) | boolean
createdDate | data | 创建时间 | date
updatedDate | data | 修改时间 | date
pushed | data | 是否推送(true:启用,false禁用) | boolean
roleCode | data | 角色编码 | string
marginDiscount | data | 保证金折扣 | float
tradeCount | data | 交易次数 | long
currentVolume | data | 当前数量 | float
dealVolume | data | 成交数量 | float
dealAmount | data | 成交金额 | float
dealPrice | data | 平均成交价 | float

### 获取所有的交易数据

**请求路径: /open/contractDeal/findPage**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
pageSize=20&page=1&sort=1&scene=REAL&board=STD&symbol=btcusdt
&orderId=CT202009281739095F71AF3D50F35B256BD7F7A1&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
pageSize | 每页数量(默认值20) | 否
page | 当前页(默认值1) | 否
sort | 排序方式(默认值1,0升序,1降序) | 否
scene | 场景(REAL实际，VIRTUAL虚拟) | 否
board | 合约板块编码 | 否
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
    		"board": "STAND",
    		"coin": "USDT",
    		"contractOrderId": "CT202009291324185F72C50250F35B256BDC53F3",
    		"contractTradeId": "20200929135358TC5F72CBF690484F3D280467A2",
    		"createdDate": "2020-09-29T05:53:58.000+0000",
    		"dealNo": "5F72CBF60BDD2737CB647A62",
    		"fee": null,
    		"feeRate": null,
    		"id": "20200929135358DC5F72CBF60BDD2737CB647A62",
    		"margin": null,
    		"memberId": 100094,
    		"multiplier": 50,
    		"orderNo": "5F72C50250F35B256BDC53F3",
    		"orderPrice": 10678.3,
    		"positionId": null,
    		"positionNo": null,
    		"positionPrice": null,
    		"positionSide": "ENTRY",
    		"price": 10678.3,
    		"scene": "REAL",
    		"side": "BUY",
    		"success": null,
    		"symbol": "btcusdt",
    		"tradeNo": "5F72CBF690484F3D280467A2",
    		"type": "LIMIT",
    		"updatedDate": "2020-09-29T05:53:58.000+0000",
    		"volume": 0.04
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
board | rows | 合约板块编码 | string
coin | rows | 结算货币 | string
contractOrderId | rows | 订单ID | string
contractTradeId | rows | 交易ID | string
createdDate | rows | 创建时间 | date
dealNo | rows | 截取后的dealID | string
fee | rows | 实际手续费率 | float
feeRate | rows | 手续费率 | string
id | rows | id | string
margin | rows | 释放保证金 | float
memberId | rows | 用户ID | integer
multiplier | rows | 杠杆倍数 | integer
orderNo | rows | 截取后的orderId | string
orderPrice | rows | 订单价格 | float
positionId | rows | 仓位ID | string
positionNo | rows | 截取后的仓位ID | string
positionPrice | rows | 开仓均价 | float
positionSide | rows | 仓位方向(ENTRY开仓, EXIT平仓) | string
price | rows | 成交价格 | float
scene | rows | 场景(REAL实际，VIRTUAL虚拟) | string
side | rows | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
success | rows | 是否完成(true:是,false否) | boolean
symbol | rows | 币对 | string
tradeNo | rows | 截取后的交易ID | float
type | rows | 订单类型(LIMIT限价, MARKET市价, STOP突破价, PROFIT_LOSS止盈止损) | string
updatedDate | rows | 修改时间 | date
volume | rows | 成交数量 | float

### 获取用户所有的仓位信息

**请求路径: /open/position/getCurrentPage**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
page=1&size=1&scene=REAL&board=STD&symbol=btcusdt&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
page | 当前页(默认值1) | 否
size | 每页数量(默认值10) | 否
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
board | 合约板块编码 | 是
symbol | 币对名称 | 是
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
board | rows | 合约板块编码 | string
coin | rows | 结算货币 | string
createdDate | rows | 创建时间 | date
currentId   | rows | 仓位记录ID | string
entryAmount | rows | 开仓金额 | float
entryFee | rows | 开仓手续费 | float
entryMargin | rows | 开仓保证金 | float
entryPrice | rows | 开仓均价 | float
entryVolume | rows | 开仓数量 | float
exitAmount | rows | 平仓金额 | float
exitFee | rows | 平仓手续费 | float
exitMargin | rows | 平仓保证金 | float
exitPrice | rows | 平仓均价 | float
exitReferencePrice | rows | 总平均指数价格(平仓) | float
exitVolume | rows | 平仓数量 | float
fee | rows | 持仓占用手续费 | float
id | rows | 仓位ID | string
margin | rows | 保证金 | float
memberId | rows | 用户ID | integer
multiplier | rows | 杠杆倍数 | integer
orderVolume | rows | 委托数量 | float
passive | rows | 是否强平(true:是,false否) | boolean
price | rows | 当前开仓均价 | float
profit | rows | 盈亏 | float
referenceSymbol | rows | 引用指数代号 | string
roleCode  | data | 角色编码 | string
scene | rows | 场景(REAL实际，VIRTUAL虚拟) | string
side | rows | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
symbol | rows | 币对 | string
updatedDate | rows | 修改时间 | date
volume | rows | 成交数量 | float

### 根据ID获取仓位信息

**请求路径: /open/position/getCurrentById**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
positionId=CT202009281739095F71AF3D50F35B256BD7F7A1&symbol=btcusdt&board=STD&scene=REAL&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
positionId | 仓位ID | 否
symbol | 币对名称 | 否
board | 合约板块编码 | 否
scene | 场景(REAL实际，VIRTUAL虚拟) | 否
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例:**

```js
{
  "type": "SUCCESS",
  "data":{
        "board": "STAND",
        "coin": "USDT",
        "createdDate": "2020-09-29T05:53:58.000+0000",
        "entryAmount": 427.132,
        "entryFee": null,
        "entryMargin": 42.7132,
        "entryPrice": 10678.3,
        "entryVolume": 0.04,
        "exitAmount": 0,
        "exitFee": 0,
        "exitMargin": 0,
        "exitPrice": 0,
        "exitReferencePrice": null,
        "exitVolume": 0,
        "fee": null,
        "id": "CT202009291353585F72CBF650F35B256BDC561C",
        "margin": 42.7132,
        "memberId": 100094,
        "multiplier": 10,
        "orderVolume": 0.04,
        "passive": null,
        "positionNo": "5F72CBF650F35B256BDC561C",
        "price": 10678.3,
        "referenceSymbol": null,
        "scene": "REAL",
        "side": "SELL",
        "symbol": "btcusdt",
        "updatedDate": "2020-09-29T05:53:58.000+0000",
        "volume": 0.04
  },
  "arguments": null,
  "success": true
}
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
board | data | 合约板块编码 | string
coin | data | 结算货币 | string
createdDate | data | 创建时间 | date
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
positionNo | data | 截取后的仓位ID | string
price | data | 当前开仓均价 | float
referenceSymbol | data | 引用指数代号 | string
scene | data | 场景(REAL实际，VIRTUAL虚拟) | string
side | data | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
symbol | data | 币对 | string
updatedDate | data | 修改时间 | date
volume | data | 成交数量 | float


## Websocket

### 简介

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

### 合约深度订阅

**示例:**

```js
{ subscribe: "contractDepth", data: { symbol: "ltcusdt", scene: "REAL", type: 0, size: 1000 } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
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
n | data | 场景(REAL实际，VIRTUAL虚拟) | string
s | data | 币对名称 | string
send | 无 | 订阅主题名称 | string


### 合约最新成交订阅

**示例:**

```js
{ subscribe: "contractNewTrade", data: { symbol: "ltcusdt", scene: "REAL" } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
scene | 场景(REAL实际，VIRTUAL虚拟) | 是

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
n | data | 场景(REAL实际，VIRTUAL虚拟) | string
s | data | 币对名称 | string
send | 无 | 订阅主题名称 | string

### 24小时行情订阅

**示例:**

```js
{subscribe: "contractTicker", data: {scene: "REAL"}}
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
scene | 场景(REAL实际，VIRTUAL虚拟) | 是

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
n | data | 场景(REAL实际，VIRTUAL虚拟) | string
o | data | 开盘价 | float
p | data | 当前价 | float
r | data | 引用指数代号 | string
s | data | 币对 | string
t | data | 日期 | date
v | data | 成交量 | float
send | 无 | 订阅主题名称 | string

### 合约单个币对行情订阅

**示例:**

```js
{subscribe: "contractSymbolTicker", data: {symbol: "btcusdt", scene: "REAL"}}
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
scene | 场景(REAL实际，VIRTUAL虚拟) | 是

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
n | data | 场景(REAL实际，VIRTUAL虚拟) | string
o | data | 开盘价 | float
p | data | 当前价 | float
r | data | 引用指数代号 | string
s | data | 币对 | string
t | data | 日期 | date
v | data | 成交量 | float
send | 无 | 订阅主题名称 | string


### 合约价 K 线订阅

**示例:**

```js
{ subscribe: "contractScale", data: {symbol: "btcusdt", type: "MIN_1", scene: "REAL"} }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
type | K线类型(MIN_1一分钟,MIN_5五钟,MIN_15十五分钟,MIN_30三十分钟,HOUR_1一小时,HOUR_4四小时,DAY_1一天,WEEK_1一周,MONTH_1一个月) | 是
scene | 场景(REAL实际，VIRTUAL虚拟) | 是

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
n | data | 场景(REAL实际，VIRTUAL虚拟) | String
o | data | 开盘价 | float
s | data | 币对名称 | String
t | data | K 线类型 | String
v | data | 交易量 | float
send | 无 | 订阅主题名称 | string

### 指数价 K 线订阅

**示例:**

```js
{ subscribe: "indexScale", data: {symbol: "btcusdt", type: "MIN_1"} }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
type | K线类型(MIN_1一分钟,MIN_5五钟,MIN_15十五分钟,MIN_30三十分钟,HOUR_1一小时,HOUR_4四小时,DAY_1一天,WEEK_1一周,MONTH_1一个月) | 是

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

### 标记价 K 线订阅

**示例:**

```js
{ subscribe: "markScale", data: {symbol: "btcusdt", type: "MIN_1", scene: "REAL"} }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
type | K线类型(MIN_1一分钟,MIN_5五钟,MIN_15十五分钟,MIN_30三十分钟,HOUR_1一小时,HOUR_4四小时,DAY_1一天,WEEK_1一周,MONTH_1一个月) | 是
scene | 场景(REAL实际，VIRTUAL虚拟) | 是

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
n | data | 场景(REAL实际，VIRTUAL虚拟) | String
o | data | 开盘价 | float
s | data | 币对名称 | String
t | data | K 线类型 | String
send | 无 | 订阅主题名称 | string

### 保证金账户订阅

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
n | data | 场景(REAL实际，VIRTUAL虚拟) | String
c | data | 币种 | String
a | data | 可用保证金+仓位价值 | float
o | data | 委托（冻结）保证金 | float
p | data | 仓位（占用）保证金 | float
r | data | 保证金率 | float
i | data | 盈亏 | float
f | data | 手续费 | float
send | 无 | 订阅主题名称 | string

### 合约订单订阅

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
passive | data | 是否强平(true:启用,false禁用) | boolean
positionSide | data | 仓位方向(ENTRY开仓, EXIT平仓)  | string
positionId | data | 仓位ID | string
price | data | 价格 | float
profitPrice | data | 止盈价 | float
pushed | data | 是否推送(true:启用,false禁用) | boolean
quantity | data | 手数 | float
referenceSymbol | data | 引用指数代号 | string
referencePrice | data | 指数价 | float
roleCode | data | 角色编码 | string
scene | data | 场景(REAL实际，VIRTUAL虚拟)	 | string
side | data | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
size | data | 合约面值 | float
source | data | 来源(WEB,H5,APP,API) | string
symbol | data | 币对 | string
takerFeeRate | data | 吃单方手续费率 | float
tradeCount | data | 交易次数 | long
type | data | 订单类型(LIMIT限价, MARKET市价, STOP突破价, PROFIT_LOSS止盈止损) | string
updatedDate | data | 修改时间 | date
volume | data | 数量 | float

### 仓位信息订阅

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
scene | data | 场景(REAL实际，VIRTUAL虚拟) | string
side | data | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
symbol | data | 币对 | string
updatedDate | data | 修改时间 | date
volume | data | 成交数量 | float
