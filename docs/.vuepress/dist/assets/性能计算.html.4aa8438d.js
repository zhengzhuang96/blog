import{_ as n,o as a,c as s,d as t}from"./app.73a0ea12.js";const p={},e=t(`<p>https://juejin.cn/post/6916527678807867400</p><p>\u5173\u952E\u6307\u6807 \u767D\u5C4F\u65F6\u95F4\uFF1A\u4ECE\u6D4F\u89C8\u5668\u8F93\u5165\u5730\u5740\u5E76\u56DE\u8F66\u540E\u5230\u9875\u9762\u5F00\u59CB\u6709\u5185\u5BB9\u7684\u65F6\u95F4\uFF1B \u9996\u5C4F\u65F6\u95F4\uFF1A\u4ECE\u6D4F\u89C8\u5668\u8F93\u5165\u5730\u5740\u5E76\u56DE\u8F66\u540E\u5230\u9996\u5C4F\u5185\u5BB9\u6E32\u67D3\u5B8C\u6BD5\u7684\u65F6\u95F4\uFF1B \u7528\u6237\u53EF\u64CD\u4F5C\u65F6\u95F4\u8282\u70B9\uFF1Adomready\u89E6\u53D1\u8282\u70B9\uFF0C\u70B9\u51FB\u4E8B\u4EF6\u6709\u53CD\u5E94\uFF1B \u603B\u4E0B\u8F7D\u65F6\u95F4\uFF1Awindow.onload\u7684\u89E6\u53D1\u8282\u70B9\u3002</p><p>\u767D\u5C4F\u5E55\u65F6\u95F4\u8BA1\u7B97\uFF1Achrome.loadingTimes() \u6211\u4EEC\u53EF\u4EE5\u770B\u5230 firstPaintTime \u8FD9\u4E2A\u65F6\u95F4\u70B9\uFF0C\u662F\u4F60\u7684\u9875\u9762\u51FA\u73B0\u5185\u5BB9\u540E\u7684\u65F6\u95F4\u70B9..\u5982\u679C\u9875\u9762\u4E00\u76F4\u767D\u5C4F\u7684\u8BDD\uFF0CfirstPaintTime\u7684\u503C\u662F0\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>\u767D\u5C4F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// \u4E0D\u517C\u5BB9performance.timing \u7684\u6D4F\u89C8\u5668\uFF0C\u5982IE8</span>
    window<span class="token punctuation">.</span>pageStartTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u9875\u9762 CSS \u8D44\u6E90 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>common.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// \u767D\u5C4F\u65F6\u95F4\b\u7ED3\u675F\u70B9</span>
    window<span class="token punctuation">.</span>firstPaint <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u9875\u9762\u5185\u5BB9 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u767D\u5C4F\u65F6\u95F4 = \u9875\u9762\u5F00\u59CB\u5C55\u793A\u7684\u65F6\u95F4\u70B9 - \u5F00\u59CB\u8BF7\u6C42\u7684\u65F6\u95F4\u70B9</p><p>\u53EF\u4F7F\u7528 Performance API \u65F6 \u767D\u5C4F\u65F6\u95F4 = firstPaint - performance.timing.navigationStart; \u5229\u7528 performance \u767D\u5C4F\u65F6\u95F4\uFF1AresponseStart - navigationStart</p><p>\u9996\u5C4F\u65F6\u95F4(First Contentful Paint)\uFF1A\u662F\u6307\u6D4F\u89C8\u5668\u4ECE\u54CD\u5E94\u7528\u6237\u8F93\u5165\u7F51\u7EDC\u5730\u5740\uFF0C\u5230\u9996\u5C4F\u5185\u5BB9\u6E32\u67D3\u5B8C\u6210\u7684\u65F6\u95F4\u3002</p><p>\u9996\u5C4F\u65F6\u95F4 = \u9996\u5C4F\u5185\u5BB9\u6E32\u67D3\u7ED3\u675F\u65F6\u95F4\u70B9 - \u5F00\u59CB\u8BF7\u6C42\u7684\u65F6\u95F4\u70B9</p><p>\u9996\u5C4F\u65F6\u95F4\uFF1Aperformance.getEntriesByName(&quot;first-contentful-paint&quot;)[0].startTime - navigationStart</p><p>\u9996\u5C4F\u65F6\u95F4\u662F\u6307\u7528\u6237\u6253\u5F00\u7F51\u7AD9\u5F00\u59CB\uFF0C\u5230\u6D4F\u89C8\u5668\u9996\u5C4F\u5185\u5BB9\u6E32\u67D3\u5B8C\u6210\u7684\u65F6\u95F4\u3002\u5BF9\u4E8E\u7528\u6237\u4F53\u9A8C\u6765\u8BF4\uFF0C\u9996\u5C4F\u65F6\u95F4\u662F\u7528\u6237\u5BF9\u4E00\u4E2A\u7F51\u7AD9\u7684\u91CD\u8981\u4F53\u9A8C\u56E0\u7D20\u3002\u901A\u5E38\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u5982\u679C\u9996\u5C4F\u65F6\u95F4\u57285\u79D2\u4EE5\u5185\u662F\u6BD4\u8F83\u4F18\u79C0\u7684\uFF0C10\u79D2\u4EE5\u5185\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\uFF0C10\u79D2\u4EE5\u4E0A\u5C31\u4E0D\u53EF\u5BB9\u5FCD\u4E86\u3002\u8D85\u8FC710\u79D2\u7684\u9996\u5C4F\u65F6\u95F4\u7528\u6237\u4F1A\u9009\u62E9\u5237\u65B0\u9875\u9762\u6216\u7ACB\u523B\u79BB\u5F00\u3002</p><p>DOM ready\u65F6\u95F4\uFF1AdomContentLoadedEventEnd - navigationStart</p><p>\u767D\u5C4F\u548C\u9996\u5C4F\u7684\u4F18\u5316 \u76EE\u524D\u767D\u5C4F\u5E38\u89C1\u7684\u4F18\u5316\u65B9\u6848\u6709\uFF1A</p><p>SSR \u9884\u6E32\u67D3 \u9AA8\u67B6\u5C4F</p><p>\u4F18\u5316\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4\u7684\u65B9\u6CD5\uFF1A CDN\u5206\u53D1\uFF08\u51CF\u5C11\u4F20\u8F93\u8DDD\u79BB\uFF09 \u540E\u7AEF\u5728\u4E1A\u52A1\u5C42\u7684\u7F13\u5B58 \u9759\u6001\u6587\u4EF6\u7F13\u5B58\u65B9\u6848 \u524D\u7AEF\u7684\u8D44\u6E90\u52A8\u6001\u52A0\u8F7D \u51CF\u5C11\u8BF7\u6C42\u7684\u6570\u91CF \u5229\u7528\u597DHTTP\u538B\u7F29</p>`,14),o=[e];function c(l,u){return a(),s("div",null,o)}var k=n(p,[["render",c],["__file","\u6027\u80FD\u8BA1\u7B97.html.vue"]]);export{k as default};
