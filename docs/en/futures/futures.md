# Futures

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
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
board | contract board code | Yes
symbol | coin pair name | Yes
positionId | position ID | No
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
id | rows | order ID | string
memberId | rows | user ID | integer
symbol | rows | coin pair | string
scene | rows | scene(REAL: real, VIRTUAL: virtual) | string
board | rows | contract board code | string
coin | rows | settlement coin | string
price | rows | price | float
profitPrice | rows | take profit price | float
lossPrice | rows | stop price | float
volume | rows | quantity | float
multiplier | rows | leverage | integer
size | rows | contract price | float
quantity | rows | quantity | float
referenceSymbol | rows | reference index code | string
referencePrice | rows | index price | float
margin | rows | margin | float
takerFeeRate | rows | taker rate | float
makerFeeRate | rows | maker rate | float
side | rows | trading direction (open position: BUY (long), SELL (short); close position: BUY (short), SELL (long)) | string
positionSide | rows | position direction (ENTRY: open position, EXIT: close position)  | string
positionId | rows | position ID | string
type | rows | order type (LIMIT: limit price, MARKET: market price, STOP: breakthrough price, PROFIT_LOSS: stop profit and stop loss) | string
source | rows | source(WEB,H5,APP,API) | string
date | rows | effective time | date
passive | rows | whether to liquidate(true:enable,false:disable) | boolean
createdDate | rows | creation time | date
updatedDate | rows | update time | date
pushed | rows | whether to push(true:enable,false:disable) | boolean
roleCode | rows | role coding | string
marginDiscount | rows | margin discount | float
tradeCount | rows | transactions | long
currentVolume | rows | current quantity | float
dealVolume | rows | number of transactions | float
dealAmount | rows | turnover | float
dealPrice | rows | average transaction price | float

## Open an order

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
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
type | order type (LIMIT: limit price, MARKET: market price, STOP: breakthrough price, PROFIT_LOSS: stop profit and stop loss) | Yes
side | order direction (BUY: long, SELL: short) | Yes
board | contract board code | Yes
symbol | coin pair name | Yes
price | commission price | Yes
quantity | quantity | Yes
multiplier | leverage | Yes
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


## Close an order

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
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
symbol | coin pair name | Yes
board | contract board code | Yes
type | order type (LIMIT: limit price, MARKET: market price, STOP: breakthrough price, PROFIT_LOSS: stop profit and stop loss) | Yes
positionId | position ID | Yes
price | commission price | Yes
quantity | quantity | Yes
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
symbol | coin pair | Yes
board | contract board code | Yes
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
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
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
size | number of cancelled orders | No
side | trading direction (open position: BUY (open long), SELL (open short); close position: BUY (close short), SELL (close long)) | No
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
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
orderId | order ID | Yes
board | contract board code | Yes
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
id | data | order ID | string
memberId | data | user ID | integer
symbol | data | coin pair | string
scene | data | scene(REAL:real, VIRTUAL:virtual)	 | string
board | data | contract board code | string
coin | data | settlement coin | string
price | data | price | float
profitPrice | data | take Profit Price | float
lossPrice | data | stop price | float
volume | data | quantity | float
multiplier | data | leverage | integer
size | data | contract price | float
quantity | data | quantity | float
referenceSymbol | data | reference index code | string
referencePrice | data | index price | float
margin | data | margin | float
takerFeeRate | data | taker rate | float
makerFeeRate | data | maker rate | float
side | data | trading direction (open position: BUY (open long), SELL (open short); close position: BUY (close short), SELL (close long)) | string
positionSide | data | Position direction (ENTRY: open position, EXIT: close position)  | string
positionId | data | position ID | string
type | data | order type (LIMIT: limit price, MARKET: market price, STOP: breakthrough price, PROFIT_LOSS: stop profit and stop loss) | string
source | data | source(WEB,H5,APP,API) | string
date | data | effective time | date
passive | data | whether to liquidate(true:enable,false:disable) | boolean
createdDate | data | creation time | date
updatedDate | data | update time | date
pushed | data | whether to push(true:enable,false:disable) | boolean
roleCode | data | role coding | string
marginDiscount | data | margin discount | float
tradeCount | data | transactions | long
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
scene | scene(REAL:real, VIRTUAL:virtual) | No
board | contract board code | No
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
board | rows | contract board code | string
coin | rows | settlement coin | string
contractOrderId | rows | order ID | string
contractTradeId | rows | transaction ID | string
createdDate | rows | creation time | date
dealNo | rows | deal ID | string
fee | rows | actual fee rate | float
feeRate | rows | commission rate | string
id | rows | id | string
margin | rows | margin released | float
memberId | rows | user ID | integer
multiplier | rows | leverage | integer
orderNo | rows | order ID | string
orderPrice | rows | order price | float
positionId | rows | position ID | string
positionNo | rows | position ID | string
positionPrice | rows | average open price | float
positionSide | rows | position direction (ENTRY: open position, EXIT: close position) | string
price | rows | deal price | float
scene | rows | scene(REAL:real, VIRTUAL:virtual) | string
side | rows | Trading direction (open position: BUY (open long), SELL (open short); close position: BUY (close short), SELL (close long)) | string
success | rows | is it done(true:Yes,false: no) | boolean
symbol | rows | coin pair | string
tradeNo | rows | transaction ID | float
type | rows | order type (LIMIT: limit price, MARKET: market price, STOP: breakthrough price, PROFIT_LOSS: stop profit and stop loss) | string
updatedDate | rows | update time | date
volume | rows | number of transactions | float

## Get all position information of the user

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
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
board | contract board code | Yes
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
board | rows | contract board code | string
coin | rows | settlement coin | string
createdDate | rows | creation time | date
currentId   | rows | position ID | string
entryAmount | rows | opening amount | float
entryFee | rows | opening fee | float
entryMargin | rows | open margin | float
entryPrice | rows | average open price | float
entryVolume | rows | number of open positions | float
exitAmount | rows | liquidation amount | float
exitFee | rows | closing fee | float
exitMargin | rows | liquidation margin | float
exitPrice | rows | average closing price | float
exitReferencePrice | rows | total average index price (closed position) | float
exitVolume | rows | number of closed positions | float
fee | rows | fees for holding positions | float
id | rows | position ID | string
margin | rows | margin | float
memberId | rows | user ID | integer
multiplier | rows | leverage | integer
orderVolume | rows | entrust quantity | float
passive | rows | whether to liquidate(true:Yes,false:No) | boolean
price | rows | current average price | float
profit | rows | profit and loss | float
referenceSymbol | rows | reference index code | string
roleCode  | data | role coding | string
scene | rows | scene(REAL:real, VIRTUAL:virtual) | string
side | rows | Trading direction (open position: BUY (open long), SELL (open short); close position: BUY (close short), SELL (close long)) | string
symbol | rows | coin pair | string
updatedDate | rows | update time | date
volume | rows | number of transactions | float

## Get position information based on ID

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
positionId | position ID | No
symbol | coin pair name | No
board | contract board code | No
scene | scene(REAL:real, VIRTUAL:virtual) | No
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
board | data | contract board code | string
coin | data | settlement coin | string
createdDate | data | creation time | date
entryAmount | data | opening amount | float
entryFee | data | opening fee | float
entryMargin | data | open margin | float
entryPrice | data | average open price | float
entryVolume | data | number of open positions | float
exitAmount | data | liquidation amount | float
exitFee | data | closing fee | float
exitMargin | data | liquidation margin | float
exitPrice | data | average closing price | float
exitReferencePrice | data | total average index price (closed position) | float
exitVolume | data | number of closed positions | float
fee | data | fees for holding positions | float
id | data | position ID | string
margin | data | margin | float
memberId | data | user ID | integer
multiplier | data | leverage | integer
orderVolume | data | entrust quantity | float
passive | data | whether to liquidate(true:Yes,false: No) | boolean
positionNo | data | position ID | string
price | data | current average price | float
referenceSymbol | data | reference index code | string
scene | data | scene(REAL:real, VIRTUAL:virtual) | string
side | data | Trading direction (open position: BUY (open long), SELL (open short); close position: BUY (close short), SELL (close long)) | string
symbol | data | coin pair | string
updatedDate | data | update time | date
volume | data | number of transactions | float
