import{_ as n,o as s,c as a,d as e}from"./app.73a0ea12.js";const i={},t=e(`<h2 id="vue-cli4-x\u521B\u5EFA\u4F01\u4E1A\u7EA7\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#vue-cli4-x\u521B\u5EFA\u4F01\u4E1A\u7EA7\u9879\u76EE" aria-hidden="true">#</a> vue-cli4.x\u521B\u5EFA\u4F01\u4E1A\u7EA7\u9879\u76EE</h2><h4 id="\u5B89\u88C5\u811A\u624B\u67B6-vue-cli" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u811A\u624B\u67B6-vue-cli" aria-hidden="true">#</a> \u5B89\u88C5\u811A\u624B\u67B6\uFF08vue-cli\uFF09</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$ npm install @vue<span class="token operator">/</span>cli <span class="token operator">-</span>g <span class="token comment">//\u5168\u5C40\u5B89\u88C5\u6700\u65B0\u7684\u811A\u624B\u67B6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$ vue create vue<span class="token operator">-</span>demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u521B\u5EFA\u9879\u76EE\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  $ vue ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6765\u8FDB\u884C\u521B\u5EFA\uFF0C\u4E24\u79CD\u65B9\u5F0F\u5728\u521B\u5EFA\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u9009\u62E9\u4E0Arouter\u548Cvuex\uFF0C\u6765\u8FDB\u884C\u9879\u76EE\u521B\u5EFA</p><h4 id="\u79FB\u52A8\u7AEFvant" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEFvant" aria-hidden="true">#</a> \u79FB\u52A8\u7AEFVant</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u901A\u8FC7 npm \u5B89\u88C5
$ npm i vant -S

# \u901A\u8FC7 yarn \u5B89\u88C5
$ yarn add vant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u8FD9\u91CC\u90FD\u662F\u4F7F\u7528\u7684\u6309\u9700\u5F15\u5165\uFF0C\u7528\u4E86 babel-plugin-import \u662F\u4E00\u6B3E babel \u63D2\u4EF6\uFF0C\u5B83\u4F1A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u5C06 import \u7684\u5199\u6CD5\u81EA\u52A8\u8F6C\u6362\u4E3A\u6309\u9700\u5F15\u5165\u7684\u65B9\u5F0F</p><h3 id="\u5BFC\u5165\u6240\u6709\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u6240\u6709\u7EC4\u4EF6" aria-hidden="true">#</a> \u5BFC\u5165\u6240\u6709\u7EC4\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import Vue from &#39;vue&#39;;
import Vant from &#39;vant&#39;;
import &#39;vant/lib/index.css&#39;;

Vue.use(Vant);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B89\u88C5\u63D2\u4EF6\u6309\u9700\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a> \u5B89\u88C5\u63D2\u4EF6\u6309\u9700\u5F15\u5165</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i babel-plugin-import -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728.babelrc \u4E2D\u6DFB\u52A0\u914D\u7F6E</span>
<span class="token comment">// \u6CE8\u610F\uFF1Awebpack 1 \u65E0\u9700\u8BBE\u7F6E libraryDirectory</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vant&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;libraryDirectory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5BF9\u4E8E\u4F7F\u7528 babel7 \u7684\u7528\u6237\uFF0C\u53EF\u4EE5\u5728 babel.config.js \u4E2D\u914D\u7F6E</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">libraryDirectory</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u63A5\u7740\u4F60\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u76F4\u63A5\u5F15\u5165 Vant \u7EC4\u4EF6</span>
<span class="token comment">// \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5C06\u4EE3\u7801\u8F6C\u5316\u4E3A\u65B9\u5F0F\u4E8C\u4E2D\u7684\u6309\u9700\u5F15\u5165\u5F62\u5F0F</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rem-\u9002\u914D" tabindex="-1"><a class="header-anchor" href="#rem-\u9002\u914D" aria-hidden="true">#</a> Rem \u9002\u914D</h4><p>Rem \u9002\u914D Vant \u4E2D\u7684\u6837\u5F0F\u9ED8\u8BA4\u4F7F\u7528px\u4F5C\u4E3A\u5355\u4F4D\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528rem\u5355\u4F4D\uFF0C\u63A8\u8350\u4F7F\u7528\u4EE5\u4E0B\u4E24\u4E2A\u5DE5\u5177</p><p>postcss-pxtorem\u2003\u662F\u4E00\u6B3Epostcss\u63D2\u4EF6\uFF0C\u7528\u4E8E\u5C06\u5355\u4F4D\u8F6C\u5316\u4E3Arem lib-flexible\u2003 \u7528\u4E8E\u8BBE\u7F6Erem\u57FA\u51C6\u503C</p><h6 id="\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4" aria-hidden="true">#</a> \u6B65\u9AA4</h6><p>1.\u5B89\u88C5<code>px\u8F6Crem</code>\u63D2\u4EF6 \u5B89\u88C5postcss-px2rem-exclude lib-flexible</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install postcss-px2rem-exclude lib-flexible -s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.\u5728main.js\u4E2D\u5F15\u5165lib-flexible</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &#39;lib-flexible&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.\u5728\u6839\u76EE\u5F55\u65B0\u5EFApostcss.config.js\u6587\u4EF6\uFF0C\u5728\u6587\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;postcss-px2rem-exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">remUnit</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>
          <span class="token literal-property property">remPrecision</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules|folder_name</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
module.exports = <span class="token punctuation">{</span>
    plugins: <span class="token punctuation">{</span>
        &#39;autoprefixer&#39;: <span class="token punctuation">{</span>
            browsers: [&#39;Android &gt;= 4.0&#39;, &#39;iOS &gt;= 8&#39;]
        <span class="token punctuation">}</span>,
        &#39;postcss-pxtorem&#39;: <span class="token punctuation">{</span>
            rootValue: 75.0,
            propList: [&#39;*&#39;]
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module.exports = (<span class="token punctuation">{</span> file <span class="token punctuation">}</span>) =&gt; <span class="token punctuation">{</span>
    let isVant = file &amp;&amp; file.dirname &amp;&amp; file.dirname.indexOf(&quot;vant&quot;) &gt; -1;
    let rootValue = isVant ? 37.5 : 75; // \u5224\u65AD\u6761\u4EF6 \u8BF7\u81EA\u884C\u8C03\u6574
    return <span class="token punctuation">{</span>
        plugins: <span class="token punctuation">{</span>
            autoprefixer: <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            &quot;postcss-pxtorem&quot;: <span class="token punctuation">{</span>
                rootValue: rootValue,
                propList: [&quot;*&quot;] 
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue-cli3\u4E2D\u4F7F\u7528iconfont" tabindex="-1"><a class="header-anchor" href="#vue-cli3\u4E2D\u4F7F\u7528iconfont" aria-hidden="true">#</a> vue-cli3\u4E2D\u4F7F\u7528iconfont</h4><p>\u4E0B\u8F7Diconfont\u5230src/assets\u6587\u4EF6\u5939</p><p>\u5728main.js\u4E2D\u5F15\u7528iconfont/iconfont.css</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import &#39;./assets/Iconfont/iconfont.css&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u672C\u5730\u4F9D\u8D56\u4E2D\u662F\u5426\u6709sass-loader\uFF0C\u5982\u679C\u6CA1\u6709\u9700\u8981\u5B89\u88C5\u4E00\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$ npm install css<span class="token operator">-</span>loader <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6587\u4EF6\u4E2D\u4F7F\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconfont iconsearch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528sass" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528sass" aria-hidden="true">#</a> \u4F7F\u7528sass</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install sass<span class="token operator">-</span>loader <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u5173\u4E8Erouter" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Erouter" aria-hidden="true">#</a> \u5173\u4E8Erouter</h4><p>vue-router\u9ED8\u8BA4\u7684\u8DEF\u7531\u6A21\u5F0F\u662Fhash\uFF0C\u6211\u4EEC\u8981\u53BB\u6389url\u4E2D\u7684#\u9700\u8981\u5C06\u8DEF\u7531\u6A21\u5F0F\u5207\u6362\u4E3Ahistory</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const router = new VueRouter({
  mode: &#39;history&#39;,
  ...
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h4><p>\u6839\u6587\u4EF6\u5939\u65B0\u5EFAvue.config.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  lintOnSave: false,
  publicPath: &#39;./&#39;,
  // publicPath: &#39;/&#39;,
  productionSourceMap: false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),l=[t];function p(r,c){return s(),a("div",null,l)}var d=n(i,[["render",p],["__file","vue\u521B\u5EFA\u4F01\u4E1A\u7EA7\u9879\u76EE.html.vue"]]);export{d as default};
