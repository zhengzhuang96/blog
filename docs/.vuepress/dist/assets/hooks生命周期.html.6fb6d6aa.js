import{_ as t,o as n,c as o,a as e}from"./app.73a0ea12.js";const c={},f=e("p",null,"useState \u53EA\u5728\u521D\u59CB\u5316\u65F6\u6267\u884C\u4E00\u6B21\uFF0C\u540E\u9762\u4E0D\u518D\u6267\u884C\uFF1B",-1),s=e("p",null,"useEffect \u76F8\u5F53\u4E8E\u662F componentDidMount\uFF0CcomponentDidUpdate \u548C componentWillUnmount \u8FD9\u4E09\u4E2A\u51FD\u6570\u7684\u7EC4\u5408\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F20\u53C2\u53CA\u5176\u4ED6\u903B\u8F91\uFF0C\u5206\u522B\u6A21\u62DF\u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570",-1),_=e("p",null,"useEffect \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C \u5982\u679C\u6570\u7EC4\u4E3A\u7A7A\u65F6\uFF0C\u5219\u53EA\u6267\u884C\u4E00\u6B21\uFF08\u76F8\u5F53\u4E8EcomponentDidMount\uFF09\uFF1B \u5982\u679C\u6570\u7EC4\u4E2D\u6709\u503C\u65F6\uFF0CcomponentDidMount + \u503C\u66F4\u65B0\u65F6\uFF0CuseEffect \u4E2D\u7684\u51FD\u6570\u624D\u4F1A\u6267\u884C \u5982\u679C\u6CA1\u6709\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u6BCF\u6B21render\u65F6\uFF0CuseEffect \u4E2D\u7684\u51FD\u6570\u90FD\u4F1A\u6267\u884C\uFF1B",-1),r=e("p",null,"effect \u7684\u6E05\u9664\u9636\u6BB5\uFF08\u8FD4\u56DE\u51FD\u6570\uFF09\u5728\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u65F6\u90FD\u4F1A\u6267\u884C\uFF0C\u800C\u4E0D\u662F\u53EA\u5728\u5378\u8F7D\u7EC4\u4EF6\u7684\u65F6\u5019\u6267\u884C\u4E00\u6B21\u3002\u5B83\u4F1A\u5728\u8C03\u7528\u4E00\u4E2A\u65B0\u7684 effect \u4E4B\u524D\u5BF9\u524D\u4E00\u4E2A effect \u8FDB\u884C\u6E05\u7406\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u6211\u4EEC\u624B\u52A8\u53BB\u5904\u7406\u4E00\u4E9B\u903B\u8F91 \u3002\u4E3A\u4E86\u8BF4\u660E\u8FD9\u4E00\u70B9\uFF0C\u4E0B\u9762\u6309\u65F6\u95F4\u5217\u51FA\u4E00\u4E2A\u53EF\u80FD\u4F1A\u4EA7\u751F\u7684\u8BA2\u9605\u548C\u53D6\u6D88\u8BA2\u9605\u64CD\u4F5C\u8C03\u7528\u5E8F\u5217",-1),d=e("p",null,"effect \u4F1A\u5728\u6BCF\u4E2Arender \u4E2D\u6267\u884C\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u4E00\u6B21\u3002\u8FD9\u662F\u4E3A\u4EC0\u4E48React\u8FD8\u53EF\u4EE5\u5728\u4E0B\u6B21\u6267\u884Ceffect \u4E4B\u524D\u6E05\u9664\u524D\u4E00\u4E2Arender \u7684effect \u7684\u539F\u56E0",-1),l=e("p",null,"\u6BCF\u6B21render \u540E\u90FD\u4F1A\u6267\u884C useEffect \u5417\uFF1F\u662F\u7684\uFF01\u9884\u8BBE\u60C5\u51B5\u4E0B\uFF0C\u5B83\u5728\u7B2C\u4E00\u4E2Arender\u548C\u968F\u540E\u6BCF\u4E00\u4E2A\u66F4\u65B0\u4E4B\u540E\u6267\u884C\u3002\u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\u628Aeffect \u60F3\u6210\u53D1\u751F\u5728\u300Crender \u4E4B\u540E\u300D\u66F4\u4E3A\u5BB9\u6613\uFF0C\u800C\u4E0D\u662F\u8003\u8651\u300Cmount\u300D\u548C\u300C\u66F4\u65B0\u300D\u3002React \u4FDD\u8BC1DOM \u5728\u6267\u884Ceffect \u65F6\u5DF2\u88AB\u66F4\u65B0\u3002",-1),u=e("p",null,"\u6267\u884C\u987A\u8BAF\uFF1A\u5148render => \u6267\u884CuseEffetct => \u5148\u6E05\u9664\u524D\u4E00\u4E2Arender\u7684 effect\uFF0C\u7136\u540E\u5728\u6267\u884C\u65B0\u7684effect",-1),i=[f,s,_,r,d,l,u];function a(p,h){return n(),o("div",null,i)}var E=t(c,[["render",a],["__file","hooks\u751F\u547D\u5468\u671F.html.vue"]]);export{E as default};
