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
id | data | 用户ID | integer
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
