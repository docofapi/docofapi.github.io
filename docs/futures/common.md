#  公共

## 接口

**接口地址: ` https://www.xyt.com/api `**

## 签名

**签名生成规则如下:**

参与签名的字段包括有效的` token `（`Token `，其获取方式详见帮助中心）， ` time `（由开发者生成的当前时间戳），` nonce`（随机数），对所有待签名参数按照字段名的` ASCII `码从小到大排序（字典序）后，使用 键值对的格式（即` key1value1key2value2…`）拼接成字符串` str `,注意：如果请求参数中的` value `为` NULL `的情况，则在拼接字符串时不计入签名字符串，参数名均为小写字符,接下来对` str + KEY`(密钥) 作` MD5 `加密，字段名和字段值都采用原始值，不进行` str `转义。即` sign=Md5(str + KEY)`。

**参数如下:**

```js
{
  "scene": "REAL",
  "board": "STD",
  "symbol": "btcusdt",
  "id": "20200120",
  "time": 1585885434629,
  "nonce": "123123",
  "token": "r4er3r423vfr342543f.53uhj4g34g"
}
KEY:"oi678k78km5j675i766"
```

**拼接完成后:**

```js
String1 = "id20200120nonce123123sceneREALboardSTDsymbolbtcusdttime1585885434629tokenr4er3r423vfr342543f.53uhj4g34goi678k78km5j675i766"
sign = "F5DB0F896659467AC527BD01C07EE692"
```

## 公共响应值

**响应值示例:**

```js
{
  "type": "SUCCESS",
  "data": "响应数据",
  "arguments": null,
  "msg": "suc"
}
```

**响应数据描述如下:**

节点名称(关键字) | 父节点 | 描述 | 类型
-- | -- | -- | -- |
type | 无 | 响应码 | string
data | 无 | 响应数据 | 任意类型
arguments | 无 | 国际化参数(成功时返回null) | array
success | 无 | true / false | boolean

> 获取 type 列表： https://www.xyt.com/api/common/findLocale/{语言}
>
> 语言：de_DE、en_US、fr_FR、ja_JP、ko_KR、ru_RU、th_TH、zh_CN、zh_TW
