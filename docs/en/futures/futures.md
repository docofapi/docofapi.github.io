# 合约交易

## Query current order

**Request path: /open/contractOrder/getCurrentPage**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
size=10&page=1&scene=REAL&board=STD&symbol=btcusdt&positionId=CT202009221345165F698F6C50F35B256BD76B0B
&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
size | number of pages(default 10) | No
page | current page(default 1) | No
scene | 场景(REAL:实际，VIRTUAL:虚拟) | Yes
board | 合约板块编码 | Yes
symbol | coin pair name | Yes
positionId | 仓位ID | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
footers | data | footer | array
rows | data | datasheets | array
total | data | total | long
id | rows | 订单id | string
memberId | rows | user ID | integer
symbol | rows | 币对 | string
scene | rows | 场景(REAL:实际，VIRTUAL:虚拟)	 | string
board | rows | 合约板块编码 | string
coin | rows | 结算币种 | string
price | rows | price | float
profitPrice | rows | 止盈价 | float
lossPrice | rows | 止损价 | float
volume | rows | quantity | float
multiplier | rows | 杠杆倍数 | integer
size | rows | 合约面值 | float
quantity | rows | 手数 | float
referenceSymbol | rows | 引用指数代号 | string
referencePrice | rows | 指数价 | float
margin | rows | 保证金 | float
takerFeeRate | rows | taker rate | float
makerFeeRate | rows | maker rate | float
side | rows | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
positionSide | rows | 仓位方向(ENTRY开仓, EXIT平仓)  | string
positionId | rows | 仓位ID | string
type | rows | 订单类型(LIMIT限价, MARKET市价, STOP突破价, PROFIT_LOSS止盈止损) | string
source | rows | source(WEB,H5,APP,API) | string
date | rows | effective time | date
passive | rows | 是否强平(true:enable,false:disable) | boolean
createdDate | rows | creation time | date
updatedDate | rows | update time | date
pushed | rows | whether to push(true:enable,false:disable) | boolean
roleCode | rows | 角色编码 | string
marginDiscount | rows | 保证金折扣 | float
tradeCount | rows | 交易次数 | long
currentVolume | rows | current quantity | float
dealVolume | rows | number of transactions | float
dealAmount | rows | turnover | float
dealPrice | rows | average transaction price | float

## 开仓下单

**Request path: /open/contractOrder/createEntry**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
scene=REAL&type=LIMIT&side=SELL&board=STD&symbol=btcusdt&price=7374.06&quantity=4&multiplier=10&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
scene | 场景(REAL:实际，VIRTUAL:虚拟) | Yes
type | 订单类型(LIMIT限价，MARKET市价，STOP突破价，PROFIT_LOSS止盈止损) | Yes
side | 订单方向(BUY开多, SELL开空) | Yes
board | 合约板块编码 | Yes
symbol | coin pair name | Yes
price | Commission price | Yes
quantity | 手数 | Yes
multiplier | 杠杆倍数 | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
    "type": "SUCCESS,
    "data": "CT202009291022415F729A7150F35B256BDB7523",
    "arguments": null,
    "success": true

}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | None | order id | string


## 平仓下单

**Request path: /open/contractOrder/createExit**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
scene=REAL&symbol=btcusdt&board=STD&type=LIMIT&positionId=CT202008111343545F32301A29517D008E0A089C
&price=7374.06&quantity=4&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
scene | 场景(REAL:实际，VIRTUAL:虚拟) | Yes
symbol | coin pair name | Yes
board | 合约板块编码 | Yes
type | 订单类型(LIMIT限价，MARKET市价，STOP突破价，PROFIT_LOSS止盈止损) | Yes
positionId | 仓位ID | Yes
price | Commission price | Yes
quantity | 手数 | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
    "type": "SUCCESS,
    "data": "CT202009291102025F72A3AA50F35B256BDBAC8B",
    "arguments": null,
    "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | None | order id | string


## Cancel order

**Request path: /open/contractOrder/cancel**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
orderId=CT202009291022415F729A7150F35B256BDB7523&symbol=btcusdt
&board=STD&scene=REAL&token=Token&sign=signature&nonce=123123&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
orderId | order ID | Yes
symbol | 交易对 | Yes
board | 合约板块编码 | Yes
scene | 场景(REAL:实际，VIRTUAL:虚拟) | Yes
token | token | Yes
sign | signature | Yes
nonce | random number | Yes
time | timestamp | Yes
symbol | coin pair name | No

**Examples of response values:**

```js
{
    "type": "SUCCESS",
    "data": null,
    "arguments": null,
    "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | None | None | string

## Batch cancellation

**Request path: /open/contractOrder/batchCancel**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
orderIds=CT202009291022415F729A7150F35B256BDB7523&symbol=btcusdt&scene=REAL&side=SELL
&minPrice=7390&maxPrice=7395&size=2&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
orderIds | order ID, separated by commas | No
symbol | coin pair name | Yes
scene | 场景(REAL:实际，VIRTUAL:虚拟) | Yes
size | number of cancelled orders | No
side | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | No
minPrice | lowest price | No
maxPrice | highest price | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

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

**The response data is described as follows:**
Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | None | order id | array


## Get current order details based on ID

**Request path: /open/contractOrder/getCurrentById**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
scene=REAL&id=EX202004071549271315E8C30878571E40EE1444A78&board=STD&symbol=btcusdt&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
scene | 场景(REAL:实际，VIRTUAL:虚拟) | Yes
orderId | order ID | Yes
board | 合约板块编码 | Yes
symbol | coin pair name | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
id | data | 订单id | string
memberId | data | user ID | integer
symbol | data | 币对 | string
scene | data | 场景(REAL:实际，VIRTUAL:虚拟)	 | string
board | data | 合约板块编码 | string
coin | data | 结算币种 | string
price | data | price | float
profitPrice | data | 止盈价 | float
lossPrice | data | 止损价 | float
volume | data | quantity | float
multiplier | data | 杠杆倍数 | integer
size | data | 合约面值 | float
quantity | data | 手数 | float
referenceSymbol | data | 引用指数代号 | string
referencePrice | data | 指数价 | float
margin | data | 保证金 | float
takerFeeRate | data | taker rate | float
makerFeeRate | data | maker rate | float
side | data | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
positionSide | data | 仓位方向(ENTRY开仓, EXIT平仓)  | string
positionId | data | 仓位ID | string
type | data | 订单类型(LIMIT限价, MARKET市价, STOP突破价, PROFIT_LOSS止盈止损) | string
source | data | source(WEB,H5,APP,API) | string
date | data | effective time | date
passive | data | 是否强平(true:enable,false:disable) | boolean
createdDate | data | creation time | date
updatedDate | data | update time | date
pushed | data | whether to push(true:enable,false:disable) | boolean
roleCode | data | 角色编码 | string
marginDiscount | data | 保证金折扣 | float
tradeCount | data | 交易次数 | long
currentVolume | data | current quantity | float
dealVolume | data | number of transactions | float
dealAmount | data | turnover | float
dealPrice | data | average transaction price | float

## Get all transaction data

**Request path: /open/contractDeal/findPage**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
pageSize=20&page=1&sort=1&scene=REAL&board=STD&symbol=btcusdt
&orderId=CT202009281739095F71AF3D50F35B256BD7F7A1&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
pageSize | number of pages(default 20) | No
page | current page(default 1) | No
sort | sorting method (default 1,0: ascending order, 1: descending order) | No
scene | 场景(REAL:实际，VIRTUAL:虚拟) | No
board | 合约板块编码 | No
symbol | coin pair name | No
orderId | order ID | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
footers | data | footer | array
rows | data | datasheets | array
total | data | total | long
board | rows | 合约板块编码 | string
coin | rows | 结算货币 | string
contractOrderId | rows | order ID | string
contractTradeId | rows | 交易ID | string
createdDate | rows | creation time | date
dealNo | rows | 截取后的dealID | string
fee | rows | 实际手续费率 | float
feeRate | rows | commission rate | string
id | rows | id | string
margin | rows | 释放保证金 | float
memberId | rows | user ID | integer
multiplier | rows | 杠杆倍数 | integer
orderNo | rows | 截取后的orderId | string
orderPrice | rows | order price | float
positionId | rows | 仓位ID | string
positionNo | rows | 截取后的仓位ID | string
positionPrice | rows | 开仓均价 | float
positionSide | rows | 仓位方向(ENTRY开仓, EXIT平仓) | string
price | rows | deal price | float
scene | rows | 场景(REAL:实际，VIRTUAL:虚拟) | string
side | rows | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
success | rows | 是否完成(true:Yes,false否) | boolean
symbol | rows | 币对 | string
tradeNo | rows | 截取后的交易ID | float
type | rows | 订单类型(LIMIT限价, MARKET市价, STOP突破价, PROFIT_LOSS止盈止损) | string
updatedDate | rows | update time | date
volume | rows | number of transactions | float

## 获取用户所有的仓位信息

**Request path: /open/position/getCurrentPage**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
page=1&size=1&scene=REAL&board=STD&symbol=btcusdt&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
page | current page(default 1) | No
size | number of pages(default 10) | No
scene | 场景(REAL:实际，VIRTUAL:虚拟) | Yes
board | 合约板块编码 | Yes
symbol | coin pair name | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
footers | data | footer | array
rows | data | datasheets | array
total | data | total | long
board | rows | 合约板块编码 | string
coin | rows | 结算货币 | string
createdDate | rows | creation time | date
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
memberId | rows | user ID | integer
multiplier | rows | 杠杆倍数 | integer
orderVolume | rows | 委托数量 | float
passive | rows | 是否强平(true:Yes,false否) | boolean
price | rows | 当前开仓均价 | float
profit | rows | 盈亏 | float
referenceSymbol | rows | 引用指数代号 | string
roleCode  | data | 角色编码 | string
scene | rows | 场景(REAL:实际，VIRTUAL:虚拟) | string
side | rows | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
symbol | rows | 币对 | string
updatedDate | rows | update time | date
volume | rows | number of transactions | float

## 根据ID获取仓位信息

**Request path: /open/position/getCurrentById**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
positionId=CT202009281739095F71AF3D50F35B256BD7F7A1&symbol=btcusdt&board=STD&scene=REAL&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
positionId | 仓位ID | No
symbol | coin pair name | No
board | 合约板块编码 | No
scene | 场景(REAL:实际，VIRTUAL:虚拟) | No
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
board | data | 合约板块编码 | string
coin | data | 结算货币 | string
createdDate | data | creation time | date
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
memberId | data | user ID | integer
multiplier | data | 杠杆倍数 | integer
orderVolume | data | 委托数量 | float
passive | data | 是否强平(true:Yes,false否) | boolean
positionNo | data | 截取后的仓位ID | string
price | data | 当前开仓均价 | float
referenceSymbol | data | 引用指数代号 | string
scene | data | 场景(REAL:实际，VIRTUAL:虚拟) | string
side | data | 交易方向(开仓:BUY开多, SELL开空; 平仓:BUY平空, SELL平多) | string
symbol | data | 币对 | string
updatedDate | data | update time | date
volume | data | number of transactions | float
