# 基础数据

## 获取所有币种

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

## 获取所有币对

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
