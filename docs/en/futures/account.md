# 账户相关

## 根据板块获取保证金

**请求路径: /open/margin/getMarginByBoard**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
scene=REAL&board=STD&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
scene | 场景(REAL实际，VIRTUAL虚拟) | 是
board | 合约板块编码 | 是
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例：**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
availableBalance | data | 可用保证金 | float
board | data | 合约板块编码 | string
coin | data | 币种 | string
fee | data | 手续费 | float
orderBalance | data | 委托（冻结）保证金 | float
positionBalance | data | 仓位（占用）保证金 | float
profit | data | 盈亏 | float
rate | data | 保证金率 | float
scene | data | 场景(REAL实际，VIRTUAL虚拟) | string

## 获取用户所有保证金

**请求路径: /open/margin/getMargin**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
availableBalance | data | 可用保证金 | float
board | data | 合约板块编码 | string
coin | data | 币种 | string
fee | data | 手续费 | float
orderBalance | data | 委托（冻结）保证金 | float
positionBalance | data | 仓位（占用）保证金 | float
profit | data | 盈亏 | float
rate | data | 保证金率 | float
scene | data | 场景(REAL实际，VIRTUAL虚拟) | string
