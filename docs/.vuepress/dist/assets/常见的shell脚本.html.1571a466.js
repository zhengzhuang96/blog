import{_ as e,o as i,c as n,d}from"./app.73a0ea12.js";const l={},s=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6267\u884C\u6253\u5305
jdp p pro
cd build
# \u6253\u5305\u7ED3\u675F\u540E\u5220\u9664PLUS\u4E1A\u52A1\u4E13\u7528\u7684vconsole\u6CE8\u5165
sed &#39;s|#parse(&quot;/WEB-INF/vm/debugjs.xml&quot;)||&#39; index.html &gt; index.html.tmp
mv index.html.tmp index.html
cd ../
# \u538B\u7F29build\u6587\u4EF6\u5939\u4EE5\u65B9\u4FBF\u901A\u5929\u5854\u90E8\u7F72
zip -r build.zip build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[s];function c(a,r){return i(),n("div",null,t)}var m=e(l,[["render",c],["__file","\u5E38\u89C1\u7684shell\u811A\u672C.html.vue"]]);export{m as default};
