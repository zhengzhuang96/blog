import{_ as n,o as s,c as a,d as p}from"./app.73a0ea12.js";const e={},t=p(`<p>DllPlugin DllPlugin\u662Fwebpack\u5185\u7F6E\u7684\u63D2\u4EF6\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5\uFF0C\u76F4\u63A5\u914D\u7F6Ewebpack.dll.config.js\u6587\u4EF6\uFF1A</p><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\uFF0C\u8FD9\u4E00\u6B65\u5230\u5E95\u505A\u4E86\u4EC0\u4E48\u3002\u6267\u884C\uFF1Awebpack --config webpack.dll.config\uFF0C\u7136\u540E\u5230\u6307\u5B9A\u7684\u8F93\u51FA\u6587\u4EF6\u5939\u67E5\u770B\u8F93\u51FA\uFF1A</p><p>react.dll\u6587\u4EF6\u91CC\u662F\u4F7F\u7528\u6570\u7EC4\u4FDD\u5B58\u7684\u6A21\u5757\uFF0C\u7D22\u5F15\u503C\u5C31\u4F5C\u4E3Aid\uFF1B react.manifest.json\u6587\u4EF6\u91CC\uFF0C\u662F\u7528\u6765\u63CF\u8FF0\u5BF9\u5E94\u7684dll\u6587\u4EF6\u91CC\u4FDD\u5B58\u7684\u6A21\u5757</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">=</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7B2C\u4E09\u65B9\u5E93</span>
    <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8F93\u51FA\u7684\u52A8\u6001\u94FE\u63A5\u5E93\u7684\u6587\u4EF6\u540D\u79F0\uFF0C[name] \u4EE3\u8868\u5F53\u524D\u52A8\u6001\u94FE\u63A5\u5E93\u7684\u540D\u79F0\uFF0C</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].dll.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/dll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// library\u5FC5\u987B\u548C\u540E\u9762dllplugin\u4E2D\u7684name\u4E00\u81F4 \u540E\u9762\u4F1A\u8BF4\u660E</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;[name]_dll_[hash]&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u63A5\u5165 DllPlugin</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u52A8\u6001\u94FE\u63A5\u5E93\u7684\u5168\u5C40\u53D8\u91CF\u540D\u79F0\uFF0C\u9700\u8981\u548C output.library \u4E2D\u4FDD\u6301\u4E00\u81F4</span>
      <span class="token comment">// \u8BE5\u5B57\u6BB5\u7684\u503C\u4E5F\u5C31\u662F\u8F93\u51FA\u7684 manifest.json \u6587\u4EF6 \u4E2D name \u5B57\u6BB5\u7684\u503C</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name]_dll_[hash]&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u63CF\u8FF0\u52A8\u6001\u94FE\u63A5\u5E93\u7684 manifest.json \u6587\u4EF6\u8F93\u51FA\u65F6\u7684\u6587\u4EF6\u540D\u79F0</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist/dll&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[name].manifest.json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528DLLPlugin\u6253\u5305\u9700\u8981\u5206\u79BB\u5230\u52A8\u6001\u5E93\u7684\u6A21\u5757 DllPlugin\u662Fwebpack\u5185\u7F6E\u7684\u63D2\u4EF6\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5\uFF0C\u76F4\u63A5\u914D\u7F6Ewebpack.dll.config.js\u6587\u4EF6\uFF1A</p><p>\u4EC0\u4E48\u662FDLL \u5B83\u4EEC\u88AB\u5206\u5272\u6210\u4E00\u4E9B\u76F8\u5BF9\u72EC\u7ACB\u7684\u52A8\u6001\u94FE\u63A5\u5E93\uFF0C\u5373DLL\u6587\u4EF6\uFF0C\u653E\u7F6E\u4E8E\u7CFB\u7EDF\u4E2D\u3002\u5F53\u6211\u4EEC\u6267\u884C\u67D0\u4E00\u4E2A\u7A0B\u5E8F\u65F6\uFF0C\u76F8\u5E94\u7684DLL\u6587\u4EF6\u5C31\u4F1A\u88AB\u8C03\u7528\u3002</p><p>\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528Dll \u901A\u5E38\u6765\u8BF4\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u90FD\u53EF\u4EE5\u81F3\u5C11\u7B80\u5355\u533A\u5206\u6210\u4E1A\u52A1\u4EE3\u7801\u548C\u7B2C\u4E09\u65B9\u5E93\u3002\u5982\u679C\u4E0D\u505A\u5904\u7406\uFF0C\u6BCF\u6B21\u6784\u5EFA\u65F6\u90FD\u9700\u8981\u628A\u6240\u6709\u7684\u4EE3\u7801\u91CD\u65B0\u6784\u5EFA\u4E00\u6B21\uFF0C\u8017\u8D39\u5927\u91CF\u7684\u65F6\u95F4\u3002\u7136\u540E\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u5F88\u591A\u7B2C\u4E09\u65B9\u5E93\u7684\u4EE3\u7801\u5E76\u4E0D\u4F1A\u53D1\u751F\u53D8\u66F4\uFF08\u9664\u975E\u662F\u7248\u672C\u5347\u7EA7\uFF09\uFF0C\u8FD9\u65F6\u5C31\u53EF\u4EE5\u7528\u5230dll\uFF1A\u628A\u590D\u7528\u6027\u8F83\u9AD8\u7684\u7B2C\u4E09\u65B9\u6A21\u5757\u6253\u5305\u5230\u52A8\u6001\u94FE\u63A5\u5E93\u4E2D\uFF0C\u5728\u4E0D\u5347\u7EA7\u8FD9\u4E9B\u5E93\u7684\u60C5\u51B5\u4E0B\uFF0C\u52A8\u6001\u5E93\u4E0D\u9700\u8981\u91CD\u65B0\u6253\u5305\uFF0C\u6BCF\u6B21\u6784\u5EFA\u53EA\u91CD\u65B0\u6253\u5305\u4E1A\u52A1\u4EE3\u7801</p><p>loader \u548C plugin \u7684\u533A\u522B 1.loader \u8F6C\u6362 \u4F8B\u5982 Css-loader\u7684\u4F5C\u7528\u4E3B\u8981\u662F\u89E3\u6790css\u6587\u4EF6\u4E2D\u7684@import\u548Curl\u8BED\u53E5\uFF0C\u5904\u7406css-modules\uFF0C\u5E76\u5C06\u7ED3\u679C\u4F5C\u4E3A\u4E00\u4E2Ajs\u6A21\u5757\u8FD4\u56DE\u3002 Less\u662FCSS\u9884\u5904\u7406\u8BED\u8A00\uFF0C\u6269\u5C55\u4E86CSS\u8BED\u8A00\uFF0C\u589E\u52A0\u4E86\u53D8\u91CF\u3001Mixin\u3001\u51FD\u6570\u7B49\u7279\u6027\uFF0CLess-loader\u7684\u4F5C\u7528\u5C31\u662F\u5C06less\u4EE3\u7801\u8F6C\u8BD1\u4E3A\u6D4F\u89C8\u5668\u53EF\u4EE5\u8BC6\u522B\u7684CSS\u4EE3\u7801\u3002</p><p>2 plugin \u662F\u6253\u5305\u529F\u80FD\u7684\u6269\u5C55</p>`,9),l=[t];function o(c,i){return s(),a("div",null,l)}var u=n(e,[["render",o],["__file","weebpack.html.vue"]]);export{u as default};
