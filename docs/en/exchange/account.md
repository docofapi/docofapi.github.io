# Account related

## Asset balance

**Request path: /open/user/account**

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
    "balance": 15886.35586,
    "coin": "USDT",
    "locked": 12.3,
    "memberId": 3
  }],
  "arguments": null,
  "success": true
}
```

**The response data is described as follows:**

Node name(keyword) | Parent node | Description | Type
-- | -- | -- | -- |
balance | data | normal funds | float
coin | data | coin | string
locked | data | frozen funds | float
memberId | data | user ID | integer
