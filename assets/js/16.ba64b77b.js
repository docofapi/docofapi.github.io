(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{383:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"market-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#market-data"}},[t._v("#")]),t._v(" Market data")]),t._v(" "),a("h2",{attrs:{id:"get-the-latest-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-latest-transactions"}},[t._v("#")]),t._v(" Get the latest transactions")]),t._v(" "),a("p",[a("strong",[t._v("Request path: /market/getNewTrade")])]),t._v(" "),a("p",[a("strong",[t._v("Request Protocol: POST")])]),t._v(" "),a("p",[a("strong",[t._v("API signature: No")])]),t._v(" "),a("p",[a("strong",[t._v("Example request parameters:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("symbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("btcusdt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),a("p",[a("strong",[t._v("The requested data is described as follows:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("coin pair name")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("size")]),t._v(" "),a("td",[t._v("quantity(The minimum is 1, the maximum is 100)")]),t._v(" "),a("td",[t._v("Yes")])])])]),t._v(" "),a("p",[a("strong",[t._v("Examples of response values:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SUCCESS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createdDate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-04-07T02:25:17.537+0000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20200407102517TD5E8BE48D146BF11155C241BCF68D524AD6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7320.01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"side"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcusdt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.000957")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arguments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("The response data is described as follows:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Parent node")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("createdDate")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("time")]),t._v(" "),a("td",[t._v("date")])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("id")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("price")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("side")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("direction: BUY: buy, SELL: sell")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("coin pair name")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("quantity")]),t._v(" "),a("td",[t._v("float")])])])]),t._v(" "),a("h2",{attrs:{id:"get-k-line-according-to-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-k-line-according-to-time"}},[t._v("#")]),t._v(" Get K line according to time")]),t._v(" "),a("p",[a("strong",[t._v("Request path: /market/getScaleByDate")])]),t._v(" "),a("p",[a("strong",[t._v("Request Protocol: POST")])]),t._v(" "),a("p",[a("strong",[t._v("API signature: No")])]),t._v(" "),a("p",[a("strong",[t._v("Example request parameters:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("symbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("btcusdt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MIN_1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1585866600")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1586046600")]),t._v("\n")])])]),a("p",[a("strong",[t._v("The requested data is described as follows:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("coin pair name")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("k line type (MIN_1: one minute, MIN_5: five minutes, MIN_15: fifteen minutes, MIN_30: thirty minutes, HOUR_1: one hour, HOUR_4: four hours, DAY_1: one day, WEEK_1: one week, MONTH_1: one month)")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("from")]),t._v(" "),a("td",[t._v("starting time(timestamp)")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("to")]),t._v(" "),a("td",[t._v("end Time(timestamp)")]),t._v(" "),a("td",[t._v("Yes")])])])]),t._v(" "),a("p",[a("strong",[t._v("Examples of response values:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SUCCESS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300.81443324")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7307.97")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-04-07 08:00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"high"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7331.17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1586217600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"low"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7307.44")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"open"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7328.76")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcusdt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIN_1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.041112")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arguments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("The response data is described as follows:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Parent node")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("amount")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("transaction amount")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("close")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("closing price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("date")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("date")]),t._v(" "),a("td",[t._v("date")])]),t._v(" "),a("tr",[a("td",[t._v("high")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("highest price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("id")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("low")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("lowest price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("open")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("opening price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("coin pair name")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("k line type")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("trading volume")]),t._v(" "),a("td",[t._v("float")])])])]),t._v(" "),a("h2",{attrs:{id:"get-depth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-depth"}},[t._v("#")]),t._v(" Get depth")]),t._v(" "),a("p",[a("strong",[t._v("Request path: /market/getDepth")])]),t._v(" "),a("p",[a("strong",[t._v("Request Protocol: POST")])]),t._v(" "),a("p",[a("strong",[t._v("API signature: No")])]),t._v(" "),a("p",[a("strong",[t._v("Example request parameters:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("symbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("btcusdt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),a("p",[a("strong",[t._v("The requested data is described as follows:：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("coin pair name")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("depth gear (default: 0)")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("size")]),t._v(" "),a("td",[t._v("quantity")]),t._v(" "),a("td",[t._v("No")])])])]),t._v(" "),a("p",[a("strong",[t._v("Examples of response values:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SUCCESS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"buyList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7289.64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.000789")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7286.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.000187")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sellList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7291.22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00025")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7291.45")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.000142")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcusdt"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arguments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("The response data is described as follows:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Parent node")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("buyList")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("buying:price, quantity, total")]),t._v(" "),a("td",[t._v("array")])]),t._v(" "),a("tr",[a("td",[t._v("sellList")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("sell:price, quantity, total")]),t._v(" "),a("td",[t._v("array")])]),t._v(" "),a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("coin pair name")]),t._v(" "),a("td",[t._v("string")])])])]),t._v(" "),a("h2",{attrs:{id:"get-24-hour-quotes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-24-hour-quotes"}},[t._v("#")]),t._v(" Get 24-hour quotes")]),t._v(" "),a("p",[a("strong",[t._v("Request path: /market/getBySymbol")])]),t._v(" "),a("p",[a("strong",[t._v("Request Protocol: GET")])]),t._v(" "),a("p",[a("strong",[t._v("API signature: No")])]),t._v(" "),a("p",[a("strong",[t._v("Example request parameters:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("symbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("btcusdt\n")])])]),a("p",[a("strong",[t._v("The requested data is described as follows:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("coin pair name")]),t._v(" "),a("td",[t._v("Yes")])])])]),t._v(" "),a("p",[a("strong",[t._v("Examples of response values:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SUCCESS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("167734.38085126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-04-06T16:00:00.000+0000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"high"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7445.93")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"low"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7084.95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"open"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7141.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7272.41")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcusdt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.077366")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arguments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("The response data is described as follows:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Parent node")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("amount")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("turnover")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("date")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("date")]),t._v(" "),a("td",[t._v("date")])]),t._v(" "),a("tr",[a("td",[t._v("high")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("highest price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("low")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("lowest price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("open")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("opening price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("price")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("current price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("coin pair name")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("float")])])])]),t._v(" "),a("h2",{attrs:{id:"get-a-24-hour-market-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-a-24-hour-market-list"}},[t._v("#")]),t._v(" Get a 24-hour market list")]),t._v(" "),a("p",[a("strong",[t._v("Request path: /market/findAll")])]),t._v(" "),a("p",[a("strong",[t._v("Request Protocol: GET")])]),t._v(" "),a("p",[a("strong",[t._v("API signature: No")])]),t._v(" "),a("p",[a("strong",[t._v("Request parameters: None")])]),t._v(" "),a("p",[a("strong",[t._v("Examples of response values:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SUCCESS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("167734.38085126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-04-06T16:00:00.000+0000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"high"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7445.93")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"low"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7084.95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"open"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7141.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7272.41")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcusdt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.077366")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arguments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("The response data is described as follows:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Parent node")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("amount")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("turnover")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("date")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("date")]),t._v(" "),a("td",[t._v("date")])]),t._v(" "),a("tr",[a("td",[t._v("high")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("highest price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("low")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("lowest price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("open")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("opening price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("price")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("current price")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("coin pair name")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("float")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);