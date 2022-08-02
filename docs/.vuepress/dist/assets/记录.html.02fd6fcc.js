import{_ as e,o as i,c as n,d as l}from"./app.73a0ea12.js";const s={},d=l(`<p>\u200B \u7B97\u6CD51\uFF1A\u6570\u7EC4\u53BB\u6389\u6307\u5B9A\u51E0\u4E2A\u503C</p><p>\u200B \u7B97\u6CD52\uFF1A\u4EA4\u53C9\u94FE\u8868o(n2)\u4EE5\u4E0Bleetcode 160</p><p>\u200B es6\uFF0C set\uFF0Cmap\uFF0C\u89E3\u6790\u5668\uFF1F</p><p>\u200B React hooks\u539F\u7406\uFF0C\u5B58\u50A8\u7ED3\u6784</p><p>\u200B target\u4E3A6\u7684\u5143\u7D20\u4E0B\u6807</p><p>\u200B promise.all\u5B9E\u73B0</p><p>\u200B webpack dll\u7B49\u5176\u4ED6\u914D\u7F6E</p><p>\u5982\u4F55\u63D0\u9AD8\u6027\u80FD\u6307\u6807</p><p>\u200B \u5B9E\u73B0\uFF1A</p><p>\u200B arr.findLastIndex((item,index) =&gt; {</p><p>\u200B item == &quot;a&quot;</p><p>\u200B },ctx)</p><p>\u200B CSR,SSR</p><p>\u200B n*n\u77E9\u9635\u87BA\u884C\u904D\u5386</p><p>\u200B 1 2 3</p><p>\u200B 4 5 6</p><p>\u200B 7 8 9</p><p>\u200B flex\u5B9E\u73B0\u5438\u9876</p><p>\u200B fixed\u5438\u9876\u4E0B\u9762\u600E\u4E48\u6491\u5F00</p><p>\u200B DNS\u89E3\u6790</p><p>\u200B \u7F13\u5B58\uFF1A\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u670D\u52A1\u7AEF\u7F13\u5B58\uFF0Cetag\uFF0C\u6587\u4EF6\u76EE\u5F55\u4FEE\u6539</p><p>\u200B 1px\u89E3\u51B3</p><p>\u200B this\u6307\u5411\uFF0C\u590D\u5236\u51FA\u6765\u4E4B\u540E\u7684\u6307\u5411\u6539\u53D8\uFF0Cfunction\u91CC\u9762\u7684\u590D\u5236\u51FA\u6765\u6307\u5411</p><p>\u200B \u6DF1\u62F7\u8D1D\u6D45\u62F7\u8D1D\u5B9E\u73B0</p><p>\u200B setTimieout 100\u662F\u4E0D\u662F\u771F\u7684100\uFF0C setTimeout \u4E00\u5B9A\u4F1A\u6267\u884C\u5417</p><p>\u200B ajax\u5F02\u6B65\u548Ctimeout\u5F02\u6B65\u673A\u5236</p><p>local,session,cookie\u3002httponly \u53C2\u6570\u6709\u54EA\u4E9B\u3002</p><p>\u6570\u7EC4\uFF0C\u4F2A\u6570\u7EC4</p><p>\u6570\u7EC4\u64CD\u4F5C\uFF1A\u5E38\u7528\u7684\u6709\u54EA\u4E9B\uFF0C\u662F\u5426\u6539\u53D8\u539F\u6570\u7EC4</p><p>\u8F93\u51FA\u9898\u76EE\uFF1A1\u4E2A \u3002\u8F93\u51FA\u4EC0\u4E48\uFF0C\u6267\u884C\u5B8C\u6210\u9700\u8981\u591A\u5C11\u79D2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for (var i = 0; i &lt; 6; i++) {
  setTimeOut(() =&gt; {
    console.log(new Date(),i)
  },1000)
}
console.log(new Date(),i)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u7A0B\u9898\u4E24\u4E2A\uFF1AArray\u5BF9\u8C61\u5206\u7C7B\u539F\u578B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>items = [{
  key: &quot;color&quot;,
  val: &quot;c1&quot;
},{
  key: &quot;color&quot;,
  val: &quot;c2&quot;
},{
  key: &quot;animal&quot;,
  val: &quot;a1&quot;
},{
  key: &quot;animal&quot;,
  val: &quot;a2&quot;
}]
items.groupBy((item,index,arr) =&gt; item.key)
\u8F93\u51FA\uFF1A
{
  &quot;color&quot;: [
    {
      key: &quot;color&quot;,
      val: &quot;c1&quot;
    },{
      key: &quot;color&quot;,
      val: &quot;c2&quot;
    }
  ],
  &quot;animal&quot;: [
    {
      key: &quot;animal&quot;,
      val: &quot;a1&quot;
    },{
      key: &quot;animal&quot;,
      val: &quot;a2&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81EA\u5B9A\u4E49request hooks\u5B9E\u73B0</p><p>require import \u6267\u884C\u65F6\u673A \u4E3A\u4EC0\u4E48node\u76F4\u63A5\u80FD\u7528require</p><p>CDN\u9884\u70ED</p><p>fiber\u539F\u7406\uFF0C\u7ED3\u6784\uFF0Cdiff\u6BD4\u5BF9</p><p>reRender\u7684\u6761\u4EF6</p><p>ts\u9700\u8981\u914D\u7F6E\u54EA\u4E9B\u4E1C\u897F</p><p>hooks\u539F\u7406</p><p>webpack\u5DE5\u7A0B\u5316\u76F8\u5173\u5DE5\u4F5C</p><p>es6+</p><p>\u7B97\u6CD5\uFF1A&quot;1+2-3+12-15&quot; \u8BA1\u7B97\uFF0C\u53EA\u6709\u52A0\u51CF\uFF0C\u6CA1\u6709\u62EC\u53F7</p>`,43),a=[d];function t(u,v){return i(),n("div",null,a)}var p=e(s,[["render",t],["__file","\u8BB0\u5F55.html.vue"]]);export{p as default};
