# 行情数据

## 获取最新交易

**请求路径: /market/getNewTrade**

**请求协议: POST**

**接口签名: 无**

**请求参数示例:**

```js
symbol=btcusdt&size=100
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
symbol | 币对名称 | 是
size | 数量(最小值为1，最大值为100) | 是

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
createdDate | data | 时间 | date
id | data | id | string
price | data | 价格 | float
side | data | 方向:BUY买入,SELL卖出 | string
symbol | data | 币对名称 | string
volume | data | 数量 | float

## 根据时间获取 K 线

**请求路径: /market/getScaleByDate**

**请求协议: POST**

**接口签名: 无**

**请求参数示例:**

```js
symbol=btcusdt&type=MIN_1&from=1585866600&to=1586046600
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
symbol | 币对名称 | 是
type | K线类型(MIN_1一分钟,MIN_5五钟,MIN_15十五分钟,MIN_30三十分钟,HOUR_1一小时,HOUR_4四小时,DAY_1一天,WEEK_1一周,MONTH_1一个月) | 是
from | 开始时间(时间戳) | 是
to | 结束时间(时间戳) | 是

**响应值示例:**

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
symbol | data | 币对名称 | string
type | data | K线类型 | string
volume | data |交易量  | float

## 获取深度

**请求路径: /market/getDepth**

**请求协议: POST**

**接口签名: 无**

**请求参数示例:**

```js
symbol=btcusdt&type=0&size=20
```

**请求数据描述如下：**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
symbol | 币对名称 | 是
type | 深度档位(默认值:0) | 是
size | 数量 | 否

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
buyList | data | 买入：单价、数量、个数 | array
sellList | data | 卖出：单价、数量、个数 | array
symbol | data | 币对名称 | string

## 获取 24 小时行情

**请求路径: /market/getBySymbol**

**请求协议: GET**

**接口签名: 无**

**请求参数示例:**

```js
symbol=btcusdt
```

**请求数据描述如下：**
节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
symbol | 币对名称 | 是

**响应值示例:**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
amount | data | 成交额 | float
date | data | 日期 | date
high | data | 最高价 | float
low | data | 最低价 | float
open | data | 开盘价 | float
price | data | 当前价 | float
symbol | data | 币对名称 | string
volume | data |当前价  | float


## 获取 24 小时行情列表

**请求路径: /market/findAll**

**请求协议: GET**

**接口签名: 无**

**请求参数: 无**

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
amount | data | 成交额 | float
date | data | 日期 | date
high | data | 最高价 | float
low | data | 最低价 | float
open | data | 开盘价 | float
price | data | 当前价 | float
symbol | data | 币对名称 | string
volume | data |当前价  | float
