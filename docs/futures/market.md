# 行情数据

## 根据时间获取合约价格 K 线

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
type | K线类型(MIN_1:一分钟,MIN_5:五分钟,MIN_15:十五分钟,MIN_30:三十分钟,HOUR_1:一小时,HOUR_4:四小时,DAY_1:一天,WEEK_1:一周,MONTH_1:一个月) | 是
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

## 根据时间获取指数价格 K 线

**请求路径: /contract/market/index/getIndexScaleByDate**

**请求协议: POST**

**接口签名: 无**

**请求参数示例:**

```js
symbol=btcusdt&type=MIN_1&from=1601246645&to=1601258645
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
symbol | 币对名称 | 是
type | K线类型(MIN_1:一分钟,MIN_5:五分钟,MIN_15:十五分钟,MIN_30:三十分钟,HOUR_1:一小时,HOUR_4:四小时,DAY_1:一天,WEEK_1:一周,MONTH_1:一个月) | 是
from | 开始时间(时间戳) | 是
to | 结束时间(时间戳) | 是

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
close | data | 收盘价 | float
date | data | 日期 | date
high | data | 最高价 | float
id | data | id | string
low | data | 最低价 | float
open | data | 开盘价 | float
scene | data | 场景(REAL真实，VIRTUAL虚拟) | string
symbol | data | 币对名称 | string
type | data | K线类型 | string

## 根据时间获取标记价格 K 线

**请求路径: /contract/market/mark/getScaleByDate**

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
type | K线类型(MIN_1:一分钟,MIN_5:五分钟,MIN_15:十五分钟,MIN_30:三十分钟,HOUR_1:一小时,HOUR_4:四小时,DAY_1:一天,WEEK_1:一周,MONTH_1:一个月) | 是
from | 开始时间(时间戳) | 是
to | 结束时间(时间戳) | 是

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
close | data | 收盘价 | float
date | data | 日期 | date
high | data | 最高价 | float
id | data | id | string
low | data | 最低价 | float
open | data | 开盘价 | float
scene | data | 场景(REAL真实，VIRTUAL虚拟) | string
symbol | data | 币对名称 | string
type | data | K线类型 | string

## 获取合约深度

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

## 获取合约 24 小时行情

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

## 获取合约 24 小时行情列表

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
