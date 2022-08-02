import{_ as n,o as s,c as a,d as t}from"./app.73a0ea12.js";const e={},p=t(`<h2 id="flutter-\u539F\u751F\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#flutter-\u539F\u751F\u8DEF\u7531" aria-hidden="true">#</a> Flutter \u539F\u751F\u8DEF\u7531</h2><h4 id="_1-\u521B\u5EFA\u8DEF\u7531\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u8DEF\u7531\u6587\u4EF6" aria-hidden="true">#</a> 1.\u521B\u5EFA\u8DEF\u7531\u6587\u4EF6</h4><p>\u65B0\u5EFA lib/router/Routes.dart \u6587\u4EF6</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:mqtt_flutter/pages/index.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:mqtt_flutter/pages/private_chat.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">final</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-literal"><span class="token string">&#39;/&#39;</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">&#39;/privateChat&#39;</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">PrivateChat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u4F60\u8981\u628A\u8DEF\u7531\u62BD\u79BB\u51FA\u53BB\uFF0C\u5FC5\u987B\u5199\u4E0B\u9762\u8FD9\u4E00\u5806\u7684\u4EE3\u7801\uFF0C\u4E0D\u7528\u7406\u89E3\u4EC0\u4E48\u610F\u601D</span>
<span class="token keyword">var</span> onGenerateRoute <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">RouteSettings</span> settings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7EDF\u4E00\u5904\u7406</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> name <span class="token operator">=</span> settings<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Function</span> pageContentBuilder <span class="token operator">=</span> routes<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pageContentBuilder <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>settings<span class="token punctuation">.</span>arguments <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token class-name">Route</span> route <span class="token operator">=</span> <span class="token class-name">MaterialPageRoute</span><span class="token punctuation">(</span>
        builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">pageContentBuilder</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> arguments<span class="token punctuation">:</span> settings<span class="token punctuation">.</span>arguments<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> route<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token class-name">Route</span> route <span class="token operator">=</span> <span class="token class-name">MaterialPageRoute</span><span class="token punctuation">(</span>builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">pageContentBuilder</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> route<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u5BFC\u5165-main-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u5BFC\u5165-main-\u6587\u4EF6" aria-hidden="true">#</a> 2.\u5BFC\u5165 main \u6587\u4EF6</h4><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:mqtt_flutter/router/Routes.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;service/mqtt_client.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
      title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Flutter Demo&#39;</span></span><span class="token punctuation">,</span>
      <span class="token comment">/// \u8DEF\u7531, \u8FD9\u91CC\u662F\u8DEF\u7531\u6A21\u5757\u7684\u56FA\u5B9A\u5199\u6CD5</span>
      initialRoute<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;/&#39;</span></span><span class="token punctuation">,</span> <span class="token comment">// \u914D\u7F6E\u9ED8\u8BA4\u8BBF\u95EE\u8DEF\u5F84</span>
      onGenerateRoute<span class="token punctuation">:</span> onGenerateRoute<span class="token punctuation">,</span> <span class="token comment">// \u8DEF\u7531\u56FA\u5B9A\u5199\u6CD5</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528" aria-hidden="true">#</a> 3.\u4F7F\u7528</h4><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token comment">/// \u8DEF\u7531\u8DF3\u8F6C</span>
<span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">pushNamed</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;/privateChat&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/// \u8DEF\u7531\u8FD4\u56DE</span>
<span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","Flutter-\u539F\u751F\u8DEF\u7531.html.vue"]]);export{r as default};
