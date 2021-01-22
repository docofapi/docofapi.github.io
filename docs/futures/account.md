# 账户相关
## 获取用户信息

**请求路径: /open/user/getInfo**

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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
agentLevel | data | 代理级别 | integer
ancestorId | data | memberId的祖id | integer
birthday | data | 生日 | date
boardTypeList | data | 板块List | array
channelManage | data | 是否渠道经理(true:是,false:否) | boolean
code | data | 认证号码  |  string
countryCode | data | 国家码  |  string
createdDate | data |  创建时间 |  date
email | data |  邮箱 | string
enabled | data |开关(true:开,false:关) | boolean
enabledAuth | data | 是否实名认证(true:是,false:否) | boolean
enabledCapital | data | 是否开启资金密码(true:是,false:否) | boolean
enabledGoogle | data | 是否开启谷歌验证(true:是,false:否) | boolean
enabledLogin | data | 是否开启登录(true:是,false:否) | boolean
enabledOtcBuy | data | otc交易买入(true:是,false:否) | boolean
enabledOtcSell | data | otc交易卖出(true:是,false:否) | boolean
enabledPayment | data | 是否开启付款(true:是,false:否) | boolean
enabledTrade | data | 交易状态 | boolean
enabledWithdraw | data | 是否开启提现(true:是,false:否) | boolean
headerUrl | data | 头像url | string
id | data | memberId | integer
invitedCode | data | 邀请码| string
languageCode | data | 语言码 | string
lastLoginDate | data | 最后登录时间 | date
lastLoginIp | data | 最后登录ip | string
marginDiscount | data | 保证金折扣 | float
merchant | data | 是否是商户(true:是,false:否) | boolean
nickname | data | 昵称 | string
parentId | data | memberId的父id | integer
phone | data | 手机号码 | string
realname | data | 真实姓名 | string
updatedDate | data | 最后修改时间 | date
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
scene | 场景(REAL:实际，VIRTUAL:虚拟) | 是
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
scene | data | 场景(REAL:实际，VIRTUAL:虚拟) | string

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
scene | data | 场景(REAL:实际，VIRTUAL:虚拟) | string

## 保证金充值申请

**请求路径: /open/contract/marginDeposit/create**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
scene=REAL&board=STD&volume=100token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
scene | 场景：REAL实际，VIRTUAL虚拟 | 是
board | 合约板块编码 | 是
volume | 充值数量 | 是
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例：**

```js
{
  "type": "SUCCESS",
  "data": "20210122111032825600A4228F9C6A12E93E3ADDC",
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
data | 无 | 保证金充值ID | string


## 保证金充值记录分页查询

**请求路径: /open/contract/marginDeposit/findPage**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
size=20&page=1&sort=1&scene=REAL&board=STD&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
size | 每页数量(默认值20) | 否
page | 当前页(默认值1) | 否
sort | 排序方式，0升序，1降序 | 否
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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
footers | data | 页脚 | array
rows | data | 数据列表 | array
total | data | 总条数 | long
scene | rows | 场景(REAL实际，VIRTUAL虚拟)	 | string
memberId | rows | 用户id | integer
coin | rows | 结算币种 | string
volume | rows | 数量 | float
createdDate | rows | 创建时间 | date
remark | rows | 备注 | string


## 保证金提取申请

**请求路径: /open/contract/marginWithdraw/create**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
scene=REAL&board=STD&volume=100token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
scene | 场景：REAL实际，VIRTUAL虚拟 | 是
board | 合约板块编码 | 是
volume | 提取数量 | 是
token | token | 是
nonce | 随机数 | 是
sign | 签名 | 是
time | 时间戳 | 是

**响应值示例：**

```js
{
  "type": "SUCCESS",
  "data": "202101221148-REAL-100094-STAND",
  "arguments": null,
  "success": true
}
```

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
data | 无 | 保证金提取ID | string

## 保证金提取记录分页查询

**请求路径: /open/contract/marginWithdraw/findPage**

**请求协议: GET/POST**

**接口签名: 是**

**请求参数示例:**

```js
size=20&page=1&sort=1&scene=REAL&board=STD&token=Token&nonce=123123&sign=签名&time=1586239136316
```

**请求数据描述如下:**

节点名称(关键字) | 描述 | 必填
-- | -- | -- | -- |
size | 每页数量(默认值20) | 否
page | 当前页(默认值1) | 否
sort | 排序方式，0升序，1降序 | 否
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

**响应值描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
footers | data | 页脚 | array
rows | data | 数据列表 | array
total | data | 总条数 | long
scene | rows | 场景(REAL实际，VIRTUAL虚拟)	 | string
memberId | rows | 用户id | integer
coin | rows | 结算币种 | string
volume | rows | 提取数量 | float
createdDate | rows | 创建时间 | date
remark | rows | 备注 | string
