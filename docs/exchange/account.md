# 账户相关

## 资产余额

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
