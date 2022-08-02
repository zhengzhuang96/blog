import{_ as e,o as t,c as r,d as n}from"./app.73a0ea12.js";const p={},a=n("<p>\u67EF\u91CC\u5316 https://cloud.tencent.com/developer/article/1851152 \u67EF\u91CC\u5316\uFF08currying\uFF09\u6307\u7684\u662F\u5C06\u4E00\u4E2A\u591A\u53C2\u6570\u7684\u51FD\u6570\u62C6\u5206\u6210\u4E00\u7CFB\u5217\u51FD\u6570\uFF0C\u6BCF\u4E2A\u62C6\u5206\u540E\u7684\u51FD\u6570\u90FD\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF08unary\uFF09\u3002\u57FA\u672C\u65B9\u6CD5\u662F\u4F7F\u7528\u4E00\u4E2A\u95ED\u5305\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u3002</p><p>function add (a, b) { return a + b; } add(1, 1) // 2</p><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570add\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570a\u548Cb\u3002 \u67EF\u91CC\u5316\u5C31\u662F\u5C06\u4E0A\u9762\u7684\u51FD\u6570\u62C6\u5206\u6210\u4E24\u4E2A\u51FD\u6570\uFF0C\u6BCF\u4E2A\u51FD\u6570\u90FD\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\u3002</p><p>function add (a) { return function (b) { return a + b; } }</p><p>// \u6216\u8005\u91C7\u7528\u7BAD\u5934\u51FD\u6570\u5199\u6CD5 const add = x =&gt; y =&gt; x + y; const f = add(1); f(1) // 2 \u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570add\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570a\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570f\u3002\u51FD\u6570f\u4E5F\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570b\u3002</p><p>\u67EF\u91CC\u5316\u7684\u5E94\u7528 \u67EF\u91CC\u5316\u6709 3 \u4E2A\u5E38\u89C1\u5E94\u7528\uFF1A</p><p>\u53C2\u6570\u590D\u7528 \u2013 \u5F53\u5728\u591A\u6B21\u8C03\u7528\u540C\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E14\u4F20\u9012\u7684\u53C2\u6570\u7EDD\u5927\u591A\u6570\u662F\u76F8\u540C\u7684\uFF0C\u90A3\u4E48\u8BE5\u51FD\u6570\u53EF\u80FD\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u67EF\u91CC\u5316\u5019\u9009 \u63D0\u524D\u8FD4\u56DE \u2013 \u591A\u6B21\u8C03\u7528\u591A\u6B21\u5185\u90E8\u5224\u65AD\uFF0C\u53EF\u4EE5\u76F4\u63A5\u628A\u7B2C\u4E00\u6B21\u5224\u65AD\u7684\u7ED3\u679C\u8FD4\u56DE\u5916\u90E8\u63A5\u6536 \u5EF6\u8FDF\u8BA1\u7B97/\u8FD0\u884C \u2013 \u907F\u514D\u91CD\u590D\u7684\u53BB\u6267\u884C\u7A0B\u5E8F\uFF0C\u7B49\u771F\u6B63\u9700\u8981\u7ED3\u679C\u7684\u65F6\u5019\u518D\u6267\u884C</p><p>\u7ECF\u5178\u9762\u8BD5\u9898 add(1)(2)(3) = 6; add(1, 2, 3)(4) = 10; add(1)(2)(3)(4)(5) = 15;</p><p>function add() { // \u5C06\u4F20\u5165\u7684\u4E0D\u5B9A\u53C2\u6570\u8F6C\u4E3A\u6570\u7EC4\u5BF9\u8C61 let args = Array.prototype.slice.call(arguments);</p><p>// \u9012\u5F52\uFF1A\u5185\u90E8\u51FD\u6570\u91CC\u9762\u8FDB\u884C\u81EA\u5DF1\u8C03\u7528\u81EA\u5DF1 // \u5F53 add \u51FD\u6570\u4E0D\u65AD\u8C03\u7528\u65F6\uFF0C\u628A\u7B2C N+1 \u4E2A\u62EC\u53F7\u7684\u53C2\u6570\u52A0\u5165\u5230\u7B2C N \u4E2A\u62EC\u53F7\u7684\u53C2\u6570\u91CC\u9762 let inner = function() { args.push(...arguments); return inner; }</p><p>inner.toString = function() { // args \u91CC\u7684\u503C\u4E0D\u65AD\u7D2F\u52A0 return args.reduce(function(prev, cur) { return prev + cur;<br> }); };</p><p>return inner; }</p><p>// \u6D4B\u8BD5\u4E00\u4E0B let result = add(1)(2)(3)(4); console.log(result);</p><p>\u4E0A\u8FF0\u5C01\u88C5\u56E0\u4E3A\u7ACB\u5373\u6267\u884C\u51FD\u6570\u7684\u539F\u56E0\uFF0C\u89E6\u53D1\u591A\u6B21\u4E8B\u4EF6\u4E5F\u4F9D\u65E7\u53EA\u4F1A\u89E6\u53D1\u4E00\u6B21 if \u6761\u4EF6\u5224\u65AD\u3002</p><p>\u8FD9\u91CC\u4F7F\u7528\u4E86\u51FD\u6570\u67EF\u91CC\u5316\u7684\u4E24\u4E2A\u7279\u70B9\uFF1A\u63D0\u524D\u8FD4\u56DE\u548C\u5EF6\u8FDF\u6267\u884C\u3002</p><p>\u8FD9\u4E2A\u4F8B\u5B50\u5199\u7684\u5F88\u68D2\uFF01\uFF01</p><p>https://cloud.tencent.com/developer/article/1851152</p>",17),c=[a];function d(o,u){return t(),r("div",null,c)}var i=e(p,[["render",d],["__file","\u51FD\u6570\u67EF\u91CC\u5316.html.vue"]]);export{i as default};
