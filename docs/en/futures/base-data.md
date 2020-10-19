# Basic data

## 获取所有合约板块

**Request path: /boardType/findAll**

**Request Protocol: GET**

**API signature: None**

**Request parameters: 无**

**Examples of response values:**

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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
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
