import{_ as n,o as s,c as a,d as e}from"./app.73a0ea12.js";const p={},t=e(`<h3 id="rollup\u6253\u5305\u8B66\u544A" tabindex="-1"><a class="header-anchor" href="#rollup\u6253\u5305\u8B66\u544A" aria-hidden="true">#</a> rollup\u6253\u5305\u8B66\u544A</h3><ol><li><p>(!) Unresolved dependencies</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">)</span> Unresolved dependencies
https://rollupjs.org/guide/en/<span class="token comment">#warning-treating-module-as-external-dependency</span>
path <span class="token punctuation">(</span>imported by lib/create.ts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u6211\u7684ts\u91CC\u9762\u6709\u4F9D\u8D56\u5176\u4ED6\u7684\u5305\uFF0C\u5982\u4E0B</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6240\u4EE5\u5F53\u6253\u5305\u6210umd\u683C\u5F0F\u65F6\u65E0\u6CD5\u627E\u5230\u5916\u90E8\u7684\u4F9D\u8D56\uFF0C\u5BFC\u81F4\u62A5\u9519\u3002</p><h5 id="\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u529E\u6CD5\uFF1A</h5><p>\u5B89\u88C5<code>@rollup/plugin-node-resolve</code>, \u5E76\u5F15\u5165<code>rollup.config.js</code>\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> nodeResolve <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">preferBuiltins</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6B21\uFF0C\u5F53\u4F60\u8FD0\u884C yarn build\uFF0C \u518D\u6CA1\u6709\u8B66\u544A\u8F93\u51FA-\u6253\u5305\u6587\u4EF6 bundle \u5305\u542B\u4E86\u5F15\u7528\u7684\u6A21\u5757\u3002</p></li></ol>`,2),o=[t];function l(i,c){return s(),a("div",null,o)}var d=n(p,[["render",l],["__file","rollup\u6253\u5305\u95EE\u9898.html.vue"]]);export{d as default};
