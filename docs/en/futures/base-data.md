# Basic data

## Get all contract boards

**Request path: /boardType/findAll**

**Request Protocol: GET**

**API signature: None**

**Request parameters: None**

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
code | data | coding | string
coin | data | settlement coin | string
coinPrecision | data | settlement coin precision | integer
baseCoin | contractList | base coin | string
basisMaxSize | contractList | number of basis calculations | integer
contractBoardName | contractList | contract board name | string
depthPrecisionList | contractList | depth precision (comma separated) | string
enabledEntry | contractList | enable open position(true:enable,false:disable) | boolean
enabledExit | contractList | enable closing(true:enable,false:disable) | boolean
fresh | contractList | New coin pair(true:enable,false:disable) | boolean
fundingMultiplier | contractList | funding rate multiple | float
fundingPrecision | contractList | funding rate precision | integer
enabled | index | enable(true:enable,false:disable) | boolean
exchange | weightList | Exchange | string
weight | weightList | weights | float
indexSymbol | contractList | index code | string
interval | contractList | funding rate interval(h) | integer
makerFeeRate | contractList | maker rate | float
markInterval | contractList | mark price interval(ms) | integer
maxMultiplier | contractList | maximum leverage | integer
maxVolume | contractList | maximum quantity | float
minMultiplier | contractList | minimum leverage | integer
minVolume | contractList | minimum quantity | float
multiplierList | contractList | leverage multiple interval | string
openDate | contractList | opening time | date
openPrice | contractList | opening price | float
positionMaxSize | contractList | maximum number of positions | integer
pricePrecision | contractList | price precision | integer
priceRate | contractList | price fluctuation rate | float
quoteCoin | contractList | denomination coin | string
referenceSymbol | contractList | reference index code | string
size | contractList | contract price | float
symbol | contractList | coin pair | string
takerFeeRate | contractList | taker rate | float
volumePrecision  | contractList  | volume precision | integer
weight  | contractList | weights | integer
enabledEntry | data | enable open position(true:enable,false:disable) | boolean
enabledExit | data | enable closing(true:enable,false:disable) | boolean
enabledMarginDeposit | data | enable deposit(true:enable,false:disable) | boolean
enabledMarginWithdraw | data | enable withdrawal(true:enable,false:disable) | boolean
holdMarginRate | data | maintenance margin rate | float
iconUrl | data | icon path | string
localMap | data | international language map<String, String> | string
name | data | board name | string
visibled | data | Whether public(true:enable,false:disable) | boolean
weight | data | weights | integer
