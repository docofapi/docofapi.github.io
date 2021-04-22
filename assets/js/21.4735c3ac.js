(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{389:function(t,s,a){"use strict";a.r(s);var e=a(45),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"common"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[t._v("#")]),t._v(" Common")]),t._v(" "),a("h2",{attrs:{id:"rest-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[t._v("#")]),t._v(" REST API")]),t._v(" "),a("p",[a("strong",[t._v("REST API: "),a("code",[t._v("https://www.xyt.com/api")])])]),t._v(" "),a("p",[a("strong",[t._v("Request header: "),a("code",[t._v("Content-Type: application/json")])])]),t._v(" "),a("h2",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),a("p",[a("strong",[t._v("The signature generation rules are as follows:")])]),t._v(" "),a("p",[t._v("The fields participating in the signature include valid token (Token, please refer to the help center for details), time (current timestamp generated by the developer), nonce (random number), for all parameters to be signed according to the ASCII code of the field name as small as possible After the large sort (lexicographic order), use the key-value pair format (ie key1value1key2value2...) to splice into a string str. Note: If the value in the request parameter is NULL, the signature character will not be counted when splicing the string String, the parameter names are all lowercase characters, and then the str + KEY (key) is encrypted with `MD5, the field name and field value are both the original value, and str is not escaped. That is, sign=Md5(str + KEY).")]),t._v(" "),a("p",[a("strong",[t._v("The parameters are as follows:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scene"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REAL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"board"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcusdt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20200120"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1585885434629")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nonce"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r4er3r423vfr342543f.53uhj4g34g"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oi678k78km5j675i766"')]),t._v("\n")])])]),a("p",[a("strong",[t._v("After the splicing is completed:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("String1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id20200120nonce123123sceneREALboardSTDsymbolbtcusdttime1585885434629tokenr4er3r423vfr342543f.53uhj4g34goi678k78km5j675i766"')]),t._v("\nsign "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"F5DB0F896659467AC527BD01C07EE692"')]),t._v("\n")])])]),a("h2",{attrs:{id:"common-response-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-response-value"}},[t._v("#")]),t._v(" Common response value")]),t._v(" "),a("p",[a("strong",[t._v("Examples of response values:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SUCCESS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"response data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arguments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"suc"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("The response data is described as follows:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node name(keyword)")]),t._v(" "),a("th",[t._v("Parent node")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("Response code")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("Response data")]),t._v(" "),a("td",[t._v("Any type")])]),t._v(" "),a("tr",[a("td",[t._v("arguments")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("Internationalization parameters (return null on success)")]),t._v(" "),a("td",[t._v("array")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("true / false")]),t._v(" "),a("td",[t._v("boolean")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("Get a list of type: https://www.xyt.com/api/common/findLocale/{language}")]),t._v(" "),a("p",[t._v("language: de_DE、en_US、fr_FR、ja_JP、ko_KR、ru_RU、th_TH、zh_CN、zh_TW")])])])}),[],!1,null,null,null);s.default=r.exports}}]);