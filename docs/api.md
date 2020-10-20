# 币币交易

## 公共

### 接口

**接口地址: ` https://www.xyt.com/api `**

### 签名

**签名生成规则如下:**

参与签名的字段包括有效的` token `（`Token `，其获取方式详见帮助中心）， ` time `（由开发者生成的当前时间戳），` nonce`（随机数），对所有待签名参数按照字段名的` ASCII `码从小到大排序（字典序）后，使用 键值对的格式（即` key1value1key2value2…`）拼接成字符串` str `,注意：如果请求参数中的` value `为` NULL `的情况，则在拼接字符串时不计入签名字符串，参数名均为小写字符,接下来对` str + KEY`(密钥) 作` MD5 `加密，字段名和字段值都采用原始值，不进行` str `转义。即` sign=Md5(str + KEY)`。

**参数如下:**

```js
{
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
String1 = "id20200120nonce123123symbolbtcusdttime1585885434629tokenr4er3r423vfr342543f.53uhj4g34goi678k78km5j675i766"
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
> 语言：zh_CN、en_US

## 基础数据

### 获取所有币种

**请求路径: /coin/findAll**

**请求协议: GET**

**接口签名: 无**

**请求参数: 无**

**响应值示例:**

```js
{
  "type": "SUCCESS",
  "data": [{
    "name": "USDT",
    "baseCoin": "USDT",
    "enabled": true,
    "weight": 100,
    "iconUrl": "https://staticxyt.oss-cn-hongkong.aliyuncs.com/icon/usdt.png",
    "mainAddress": null,
    "confirmCount": null,
    "enabledDeposit": true,
    "enabledWithdraw": true,
    "enabledPayment": true,
    "enabledWithdrawAddressVaild": null,
    "minDeposit": 0.001,
    "minWithdraw": 0.01,
    "maxWithdraw": 0.5,
    "dayMemberMaxWithdraw": 30000,
    "dayMaxWithdraw": NULL,
    "withdrawFee": 1,
    "withdrawFeeRate": 0.0,
    "precision": 4,
    "withdrawPrecision": 0,
    "minHideVolume": 0,
    "addressType": "NORMAL",
    "enabledChildrenAddress": null,
    "addressRegex": "(1|3)[a-zA-Z0-9]{24,}",
    "addressRegexMessage": null,
    "otcEnabled": true,
    "otcPrecision": 4,
    "otcWeight": 0,
    "otcMinDeposit": null,
    "otcMaxCancelCount": null,
    "otcEndMinutes": 0,
    "otcMinAmount": null,
    "otcMaxAmount": null,
    "otcMinPrice": 1.0,
    "otcMaxPrice": null,
    "otcDayMaxSell": null,
    "otcDayMemberMaxSell": null,
    "releaseDate": null,
    "releaseQuantity": 21000000.00,
    "liquidity": 17901187.00,
    "whitePaperUrl": null,
    "contentUrl": "",
    "webUrl": null,
    "chainUrl": null,
    "contractList": [{
      "baseCoin": "BTC",
      "contractType": "OMNI",
      "withdrawFee": 5,
      "withdrawFeeRate": null,
    }]
  }],
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
name | data | 币对名称 | string
baseCoin | data | 所属币种 | string
enabled | data | 启用(true:启用,false:禁用) | boolean
weight | data | 权重 | integer
iconUrl | data | 币种图片途径 | string
mainAddress | data | 主地址 | string
confirmCount | data | 最小到账确认数 | integer
enabledDeposit | data | 启用充币(true:启用,false:禁用) | boolean
enabledWithdraw | data | 启用提币(true:启用,false:禁用) | boolean
enabledPayment | data | 启用付款(true:启用,false:禁用) | boolean
enabledWithdrawAddressVaild | data | 启用提币地址验证 | boolean
minDeposit | data | 最小充币数量 | float
minWithdraw | data | 最小提币数量 | float
maxWithdraw | data | 最大提币数量 | float
dayMemberMaxWithdraw | data | 每人每日最大提币量 | float
dayMaxWithdraw | data | 平台每日最大提币量 | float
withdrawFee | data | 提币手续费 | float
withdrawFeeRate | data | withdrawFeeRate | float
precision | data | 展示精度 | integer
withdrawPrecision | data | 提币精度 | integer
minHideVolume | data | 最小隐藏数量 | float
addressType | data | 地址类型(NORMAL:主地址，CHILDREN:子地址) | string
enabledChildrenAddress | data | 开启子地址添加 | boolean
addressRegex | data | 地址正则 | string
addressRegexMessage | data | 地址正则规则描述 | string
otcEnabled | data | otc启用 | boolean
otcPrecision  | data | otc精度 | integer
otcWeight  | data | otc权重 | integer
otcMinDeposit | data | otc商户最低保证金数量 | float
otcMaxCancelCount | data | otc最大取消次数 | integer
otcEndMinutes | data | otc结束分钟数 | integer
otcMinAmount | data | otc最小金额 | float
otcMaxAmount | data | otc最大金额 | float
otcMinPrice | data | otc最低价格 | float
otcMaxPrice | data | otc最高价格 | float
otcDayMaxSell | data | otc平台每日最大卖出数量 | float
otcDayMemberMaxSell | data | otc每人每日最大卖出数量 | float
releaseDate | data | 发行日期 | date
releaseQuantity | data | 发行数量 | float
liquidity | data | 流通数量 | float
whitePaperUrl | data | 白皮书 | string
contentUrl | data | 币种简介 | string
webUrl | data | 官网地址 | string
chainUrl | data | 区块链地址 | string
contractType | contractList | 合约类型 | string
baseCoin | contractList | 所属币种 | string
withdrawFee | contractList | 提币手续费 | float
withdrawFeeRate | contractList | 提币手续费比例 | float


### 获取所有币对

**请求路径: /product/findAll**

**请求协议: GET**

**接口签名: 无**

**请求参数: 无**

**响应值示例:**

```js
{
  "type": "SUCCESS",
  "data":[{
    "symbol": "btcusdt",
    "category": "MAIN",
    "categoryName": "主板",
    "iconUrl": null,
    "baseCoin": "BTC",
    "quoteCoin": "USDT",
    "openPrice": 165,
    "feeRate": null,
    "takerFeeRate": 0.002,
    "makerFeeRate": 0.002,
    "pricePrecision": 2,
    "volumePrecision": 4,
    "depthPrecisionList": "2,1,0",
    "minPrice": 0,
    "minVolume": 0.001,
    "minAmount": 1,
    "buyMaxVolume": 0,
    "sellMaxVolume": 0,
    "special": false,
    "fresh": true,
    "hide": null,
    "weight": 6,
    "enabledMarket": true,
    "enabledLimit": true,
    "openDate": "2020-01-02T16:00:00.000+0000"
  }],
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
symbol | data |  币对名称 | string
category | data | 分类编码 | string
categoryName | data | 分类名称 | string
iconUrl | data | 分类图标路径 | string
baseCoin | data | 基准货币，symbol的前半段 | string
quoteCoin | data | 计价货币，symbol的后半段 | string
openPrice | data | 开盘价 | float
feeRate | data | 手续费率 | float
takerFeeRate | data | 吃单方手续费率 | float
makerFeeRate | data | 挂单方手续费率 | float
pricePrecision | data | 价格精度 | integer
volumePrecision | data | 数量精度 | integer
depthPrecisionList | data | 深度精度(逗号分隔) |string
minPrice | data | 最低单价 | float
minVolume | data | 最小数量 | float
minAmount | data | 最低金额 | float
buyMaxVolume | data | 最大买入数量 | float
sellMaxVolume | data | 最大卖出数量 | float
special | data | 特殊币种:展示ST | boolean
fresh | data | 新上币对:展示NEW | boolean
hide | data | 币对隐藏 | boolean
weight | data | 权重 | integer
enabledMarket | data | 市价开关 | boolean
enabledLimit | data | 限价开关 | boolean
openDate | data | 开盘时间 | date

## 行情数据

### 获取最新交易

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

### 根据时间获取 K 线

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

### 获取深度

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

### 获取 24 小时行情

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


### 获取 24 小时行情列表

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

## 账户相关

### 资产余额

**请求路径: /open/user/account**

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
    "balance": 15886.35586,
    "coin": "USDT",
    "locked": 12.3,
    "memberId": 3
  }],
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
balance | data | 正常资金 | float
coin | data | 币种 | string
locked | data | 冻结资金 | float
memberId | data | 用户ID | integer

## 币币交易

### 查询当前委托

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
side | rows | 交易方向(BUY买入,SELL卖出) | string
source | rows | 来源(WEB,H5,APP,API) | string
symbol | rows | 币对名称 | string
takerFeeRate | rows | 吃单方手续费率 | float
tradeCount | rows | 交易次数 | long
type | rows | 订单类型(LIMIT限价，MARKET市价) | string
updatedDate | rows | 修改时间 | date
volume | rows | 数量 | float

### 下单

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
side | 买卖方向(BUY买入,SELL卖出) | 是
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


### 撤单

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

### 批量撤单

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
side | 买卖方向(BUY买入,SELL卖出) | 否
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


### 根据ID获取当前委托订单详情

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
side | data | 交易方向(BUY买入,SELL卖出) | string
source | data | 来源(WEB,H5,APP,API) | string
symbol | data | 币对名称 | string
takerFeeRate | data | 吃单方手续费率 | float
tradeCount | data | 交易次数 | long
type | data | 订单类型(LIMIT限价，MARKET市价) | string
updatedDate | data | 修改时间 | date
volume | data | 数量 | float

### 获取所有的交易数据

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
sort | 排序方式(默认值1,0升序,1降序) | 否
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
{ subscribe: "scale", data: { symbol: "btcusdt", type: "MIN_1" } }
```

响应值示例:

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

### 订阅深度

**示例:**

```js
{ subscribe: "depth", data: { symbol: "btcusdt", type: 0, size: 100 } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是
type | 深度档位(默认值:0) | 是
size | 数量默认值:100(10, 20, 50, 100, 200, 1000) | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
a | data | 卖出：价格,数量,条数 | array
b | data | 买入：价格,数量,条数 | array
s | data | 币对名称 | string
send | 无 | 订阅主题名称 | string


### 最新成交

**示例:**

```js
{ subscribe: "newTrade", data: { symbol: "btcusdt" } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
list | data | Id,价格,数量,方向,创建时间 | array
symbol | data | 币对名称 | string
send | 无 | 订阅主题名称 | string

### 24小时行情

**示例:**

```js
{ subscribe: "ticker" }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
a | data | 成交额 | float
h | data | 最高价 | float
l | data | 最低价 | float
o | data | 开盘价 | float
p | data | 当前价 | float
s | data | 币对名称 | float
t | data | 日期 | date
v | data | 成交量 | float
send | 无 | 订阅主题名称 | string

### 单个币对行情

**示例:**

```js
{ subscribe: "symbolTicker", data: { symbol: "btcusdt" } }
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
subscribe | 订阅的主题名称 | 是
symbol | 币对名称 | 是

**响应值示例:**

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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
a | data | 成交额 | float
h | data | 最高价 | float
l | data | 最低价 | float
o | data | 开盘价 | float
p | data | 当前价 | float
s | data | 币对名称 | float
t | data | 日期 | date
v | data | 成交量 | float
send | 无 | 订阅主题名称 | string


### K 线

**示例:**

```js
{ subscribe: "scale", data: { symbol: "btcusdt", type: "MIN_1" } }
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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
a | data | 成交额 | float
c | data | 收盘价 | float
h | data | 最高价 | float
i | data | id | float
l | data | 最低价 | float
o | data | 开盘价 | float
s | data | 币对名称 | float
t | data | K 线类型 | date
v | data | 交易量 | float
send | 无 | 订阅主题名称 | string

### 账户

**示例:**

```js
{ subscribe:"account", data: { "token": "Token", "memberId": 100028 } }
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
    "b": 41182.9218000000000000,
    "c": "USDT",
    "l": 73422.4000000000000000,
    "m": 100028
  },
  "send": "account"
}
```
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
b | data | 资金余额 | float
c | data | 币种 | float
l | data | 冻结金额 | float
m | data | 用户Id | integer
send | 无 | 订阅主题名称 | string

### 订单

**示例:**

```js
{ subscribe:"order", data: { "token": "Token", "memberId": 100028 } }
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
**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
id | data | id | string
memberId | data | 用户ID | integer
symbol | data | 币对名称 | string
baseCoin | data | 基准货币，symbol的前半段 | string
quoteCoin | data | 计价货币,symbol的后半段 | string
price | data | 价格 | float
volume | data | 数量 | float
takerFeeRate | data | 吃单方手续费率 | float
makerFeeRate | data | 挂单方手续费率 | float
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
