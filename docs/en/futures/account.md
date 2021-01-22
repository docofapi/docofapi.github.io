# Account related

## Get user information

**Request path: /open/user/getInfo**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "arguments": [
    {}
  ],
  "data": {
    "agentLevel": 0,
    "ancestorId": 0,
    "birthday": "2020-12-15T06:32:26.867Z",
    "boardTypeList": [
      "string"
    ],
    "channelManage": true,
    "code": "string",
    "countryCode": "string",
    "createdDate": "2020-12-15T06:32:26.867Z",
    "email": "string",
    "enabled": true,
    "enabledAuth": true,
    "enabledCapital": true,
    "enabledGoogle": true,
    "enabledLogin": true,
    "enabledOtcBuy": true,
    "enabledOtcSell": true,
    "enabledPayment": true,
    "enabledTrade": true,
    "enabledWithdraw": true,
    "headerUrl": "string",
    "id": 0,
    "invitedCode": "string",
    "languageCode": "string",
    "lastLoginDate": "2020-12-15T06:32:26.867Z",
    "lastLoginIp": "string",
    "marginDiscount": 0,
    "merchant": true,
    "nickname": "string",
    "parentId": 0,
    "phone": "string",
    "realname": "string",
    "updatedDate": "2020-12-15T06:32:26.867Z"
  },
  "success": true,
  "type": "SUCCESS"
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
agentLevel | data | agency level | integer
ancestorId | data | ancestor id of memberId | integer
birthday | data | birthday | date
boardTypeList | data | sector list | array
channelManage | data | Whether it is a channel manager (true: yes, false: no) | boolean
code | data | ID number  |  string
countryCode | data | country code  |  string
createdDate | data |  creation time |  date
email | data |  mailbox | string
enabled | data | switch(true: on, false: off) | boolean
enabledAuth | data | Real-name authentication (true: yes, false: no) | boolean
enabledCapital | data | Whether to open the fund password (true: yes, false: no) | boolean
enabledGoogle | data | Whether to enable Google verification (true: yes, false: no) | boolean
enabledLogin | data | Whether to enable login (true: yes, false: no) | boolean
enabledOtcBuy | data | Whether to buy in OTC(true: yes, false: no) | boolean
enabledOtcSell | data | Whether to sell in OTC(true: yes, false: no) | boolean
enabledPayment | data | Whether to pay(true: yes, false: no) | boolean
enabledTrade | data | is it possible to trade | boolean
enabledWithdraw | data | is it possible to withdraw(true: yes, false: no) | boolean
headerUrl | data | avatar url | string
id | data | user ID | integer
invitedCode | data | invitation code | string
languageCode | data | language code | string
lastLoginDate | data | last login time | date
lastLoginIp | data | last login ip | string
marginDiscount | data | margin discount rate | float
merchant | data | Is it a merchant(true: yes, false: no) | boolean
nickname | data | nickname | string
parentId | data | user's parent id | integer
phone | data | mobile phone number | string
realname | data | real name | string
updatedDate | data | last modified | date

## Get margin according to the board

**Request path: /open/margin/getMarginByBoard**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
scene=REAL&board=STD&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
board | contract board code | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
availableBalance | data | available margin | float
board | data | contract board code | string
coin | data | coin | string
fee | data | fees | float
orderBalance | data | entrusted (frozen) margin | float
positionBalance | data | position (occupied) margin | float
profit | data | profit and loss | float
rate | data | margin rate | float
scene | data | scene(REAL:real, VIRTUAL:virtual) | string

## Get all the user deposit

**Request path: /open/margin/getMargin**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

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

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
availableBalance | data | available margin | float
board | data | contract board code | string
coin | data | coin | string
fee | data | fees | float
orderBalance | data | entrusted (frozen) margin | float
positionBalance | data | position (occupied) margin | float
profit | data | profit and loss | float
rate | data | margin rate | float
scene | data | scene(REAL:real, VIRTUAL:virtual) | string

## Deposit application

**Request path: /open/contract/marginDeposit/create**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
scene=REAL&board=STD&volume=100token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
board | contract board code | Yes
volume | recharge quantity | 是
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data": "20210122111032825600A4228F9C6A12E93E3ADDC",
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | none | Margin recharge ID | string


## Paging query of margin recharge records

**Request path: /open/contract/marginDeposit/findPage**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
size=20&page=1&sort=1&scene=REAL&board=STD&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
size | number of pages(default 20) | No
page | current page(default 1) | No
sort | sorting method (0: ascending order, 1: descending order) | No
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
board | contract board code | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data": {
    "total": 1,
    "rows": [
      {
        "scene": "REAL",
        "memberId": 100094,
        "coin": "USDT",
        "volume": 1000,
        "createdDate": "2021-01-22T03:10:33.000+0000",
        "remark": null
      }
    ],
    "footers": null
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
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
memberId | rows | member ID | integer
coin | rows | settlement coin | string
volume | rows | quantity | float
createdDate | rows | creation time | date
remark | rows | remark | string


## Margin withdrawal application

**Request path: /open/contract/marginWithdraw/create**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
scene=REAL&board=STD&volume=100token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
board | contract board code | Yes
volume | Number of withdrawals | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data": "202101221148-REAL-100094-STAND",
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
data | 无 | Margin withdrawal ID | string

## Paging query of margin withdrawal records

**Request path: /open/contract/marginWithdraw/findPage**

**Request Protocol: GET/POST**

**API signature: Yes**

**Example request parameters:**

```js
size=20&page=1&sort=1&scene=REAL&board=STD&token=Token&nonce=123123&sign=signature&time=1586239136316
```

**The requested data is described as follows:**

Node name(keyword) | Description | Required
-- | -- | -- | -- |
size | number of pages(default 20) | No
page | current page(default 1) | No
sort | sorting method (0: ascending order, 1: descending order) | No
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
board | contract board code | Yes
token | token | Yes
nonce | random number | Yes
sign | signature | Yes
time | timestamp | Yes

**Examples of response values:**

```js
{
  "type": "SUCCESS",
  "data": {
    "total": 1,
    "rows": [
      {
        "scene": "REAL",
        "memberId": 100094,
        "coin": "USDT",
        "volume": 1000,
        "createdDate": "2021-01-22T03:48:25.000+0000",
        "remark": null
      }
    ],
    "footers": null
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
scene | scene(REAL:real, VIRTUAL:virtual) | Yes
memberId | rows | member ID | integer
coin | rows | settlement coin | string
volume | rows | quantity | float
createdDate | rows | creation time | date
remark | rows | remark | string
