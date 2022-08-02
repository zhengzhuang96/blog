import{_ as n,o as t,c as e,a as o}from"./app.73a0ea12.js";const s={},i=o("p",null,"https://www.jianshu.com/p/5f8440535a2a",-1),l=o("p",null,"var o = { a: 10, b: { a: 12, fn: function(){ console.log(this.a); // \u8F93\u51FA\u7ED3\u679C\u662F 12 console.log(this); // \u8F93\u51FA\u7ED3\u679C\u662F b \u5BF9\u8C61 } } } //\u8C03\u7528 o.b.fn();",-1),c=o("p",null,"var o = { a: 10, b: { a: 12, fn: function(){ console.log(this.a); //undefined \u82E5\u5728\u5BF9\u8C61o\u5916\u5B9A\u4E49a\uFF0C\u5219\u8F93\u51FA\u7684\u5C31\u662F\u5176\u5728\u5916\u5B9A\u4E49\u7684\u503C(\u5168\u5C40\u53D8\u91CF) console.log(this); // window } } } var j = o.b.fn; //\u53EA\u662F\u5C06b\u5BF9\u8C61\u4E0B\u7684\u65B9\u6CD5\u8D4B\u503C\u7ED9j\uFF0C\u5E76\u6CA1\u6709\u8C03\u7528 j(); //\u8C03\u7528\uFF0C\u6B64\u65F6\u7ED1\u5B9A\u7684\u5BF9\u8C61\u662Fwindow,\u5E76\u975Eb\u5BF9\u8C61\u76F4\u63A5\u8C03\u7528",-1),_=o("p",null,"function someFun(x) { this.x = x; } someFun(5); //\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0Cthis\u7ED1\u5B9A\u7684\u662F\u5168\u5C40\u5BF9\u8C61 window,\u76F8\u5F53\u4E8E\u76F4\u63A5\u58F0\u660E\u4E86\u4E00\u4E2A\u5168\u5C40\u53D8\u91CFx\uFF0C\u5E76\u8D4B\u503C\u4E3A5 console.log(x); // x \u5DF2\u7ECF\u6210\u4E3A\u4E00\u4E2A\u503C\u4E3A 5 \u7684\u5168\u5C40\u9690\u5F0F\u53D8\u91CF",-1),a=o("p",null,"var point = { x : 0, y : 0, moveTo : function(x, y) { // \u5185\u90E8\u51FD\u6570 var moveX = function(x) { this.x = x; }; // \u5185\u90E8\u51FD\u6570 var moveY = function(y) { this.y = y; }; moveX(x); // \u8FD9\u91CC\u662F\u5168\u5C40\u8C03\u7528 moveY(y); }; }; point.moveTo(1, 1); console.log(point.x); // 0 console.log(point.y); // 0",-1),h=o("p",null,"var point = { x : 0, y : 0, moveTo : function(x, y) { this.x = x; console.log(this.x); // 1 console.log(this); // point\u5BF9\u8C61",-1),x=o("pre",null,[o("code",null,`         // \u5185\u90E8\u51FD\u6570
         var moveX = function(x) { 
            this.x = x;
         }; 
         // \u5185\u90E8\u51FD\u6570
         var moveY = function(y) { 
            this.y = y;
         } 
         moveX(x); // \u8FD9\u91CC\u662F\u5168\u5C40\u8C03\u7528
         moveY(y); 
     } 
}; 
point.moveTo(1, 1); 
console.log(point.x); // 1
console.log(point.y); // 0
console.log(x); // 1
console.log(y);// 1
`)],-1),u=[i,l,c,_,a,h,x];function v(r,f){return t(),e("div",null,u)}var m=n(s,[["render",v],["__file","this\u7684\u6307\u5411\u95EE\u9898.html.vue"]]);export{m as default};
