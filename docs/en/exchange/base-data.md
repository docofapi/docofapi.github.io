# Basic data

## Get all coins

**Request path: /coin/findAll**

**Request Protocol: GET**

**API signature: No**

**Request parameters: None**

**Examples of response values:**

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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
name | data | coin pair name | string
baseCoin | data | owned coin | string
enabled | data | enable(true:enable,false:disable) | boolean
weight | data | weights | integer
iconUrl | data | coin picture path | string
mainAddress | data | primary address | string
confirmCount | data | minimum arrival confirmation | integer
enabledDeposit | data | enable deposit(true:enable,false:disable) | boolean
enabledWithdraw | data | enable withdrawal(true:enable,false:disable) | boolean
enabledPayment | data | enable payment(true:enable,false:disable) | boolean
enabledWithdrawAddressVaild | data | enable withdrawal address verification | boolean
minDeposit | data | minimum deposit amount | float
minWithdraw | data | minimum withdrawal amount | float
maxWithdraw | data | maximum withdrawal amount | float
dayMemberMaxWithdraw | data | maximum withdrawal amount per person per day | float
dayMaxWithdraw | data | maximum daily withdrawal amount of the platform | float
withdrawFee | data | withdrawal fee | float
withdrawFeeRate | data | withdrawFeeRate | float
precision | data | precision | integer
withdrawPrecision | data | withdrawal accuracy | integer
minHideVolume | data | minimum hidden amount | float
addressType | data | address type (NORMAL: main address, CHILDREN: sub address) | string
enabledChildrenAddress | data | open sub address addition | boolean
addressRegex | data | address regular | string
addressRegexMessage | data | address regular rule description | string
otcEnabled | data | Enable otc | boolean
otcPrecision  | data | otc precision | integer
otcWeight  | data | otc weight | integer
otcMinDeposit | data | otc merchant minimum deposit amount | float
otcMaxCancelCount | data | otc maximum number of cancellations | integer
otcEndMinutes | data | otc order valid minutes | integer
otcMinAmount | data | otc minimum amount | float
otcMaxAmount | data | otc maximum amount | float
otcMinPrice | data | otc lowest price | float
otcMaxPrice | data | otc highest price | float
otcDayMaxSell | data | Maximum daily sales volume on otc platform | float
otcDayMemberMaxSell | data | otc maximum daily sales per person | float
releaseDate | data | issue date | date
releaseQuantity | data | issue number | float
liquidity | data | quantity in circulation | float
whitePaperUrl | data | white paper | string
contentUrl | data | introduction to coin | string
webUrl | data | official website address | string
chainUrl | data | blockchain address | string
contractType | contractList | contract type | string
baseCoin | contractList | owned coin | string
withdrawFee | contractList | withdrawal fee | float
withdrawFeeRate | contractList | withdrawal fee ratio | float

## Get all coin pairs

**Request path: /product/findAll**

**Request Protocol: GET**

**API signature: No**

**Request parameters: None**

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data":[{
    "symbol": "btcusdt",
    "category": "MAIN",
    "categoryName": "motherboard",
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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
symbol | data |  coin pair name | string
category | data | classification code | string
categoryName | data | category Name | string
iconUrl | data | category icon path | string
baseCoin | data | base coin, the first half of the symbol | string
quoteCoin | data | the denomination currency, the second half of the symbol | string
openPrice | data | opening price | float
feeRate | data | commission rate | float
takerFeeRate | data | taker rate | float
makerFeeRate | data | maker rate | float
pricePrecision | data | price precision | integer
volumePrecision | data | quantity precision | integer
depthPrecisionList | data | depth precision (comma separated)|string
minPrice | data | lowest price | float
minVolume | data | minimum quantity | float
minAmount | data | minimum amount | float
buyMaxVolume | data | maximum purchase quantity | float
sellMaxVolume | data | maximum sell quantity | float
special | data | Special coin: display ST | boolean
fresh | data | New listing pair: show NEW | boolean
hide | data | currency pair hiding | boolean
weight | data | weights | integer
enabledMarket | data | market switch | boolean
enabledLimit | data | limit switch | boolean
openDate | data | opening time | date
