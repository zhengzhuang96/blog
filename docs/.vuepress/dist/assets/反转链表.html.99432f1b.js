import{_ as n,o as s,c as a,d as e}from"./app.73a0ea12.js";const p={},t=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">ReverseList</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pHead <span class="token operator">||</span> <span class="token operator">!</span>pHead<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pHead
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> pre <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">var</span> cur <span class="token operator">=</span> pHead
    <span class="token keyword">var</span> next
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre
        pre <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ReverseList</span> <span class="token operator">:</span> ReverseList
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function c(i,l){return s(),a("div",null,o)}var u=n(p,[["render",c],["__file","\u53CD\u8F6C\u94FE\u8868.html.vue"]]);export{u as default};
