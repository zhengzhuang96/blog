import{_ as a,o as n,c as s,d as e}from"./app.73a0ea12.js";const i={},t=e(`<h1 id="html5\u7684\u79BB\u7EBF\u50A8\u5B58-\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#html5\u7684\u79BB\u7EBF\u50A8\u5B58-\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> HTML5\u7684\u79BB\u7EBF\u50A8\u5B58\uFF0C\u5DE5\u4F5C\u539F\u7406</h1><p>\u79BB\u7EBF\u5B58\u50A8\u6307\u7684\u662F\uFF1A\u5728\u7528\u6237\u6CA1\u6709\u4E0E\u56E0\u7279\u7F51\u8FDE\u63A5\u65F6\uFF0C\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u7AD9\u70B9\u6216\u5E94\u7528\uFF0C\u5728\u7528\u6237\u4E0E\u56E0\u7279\u7F51\u8FDE\u63A5\u65F6\uFF0C\u66F4\u65B0\u7528\u6237\u673A\u5668\u4E0A\u7684\u7F13\u5B58\u6587\u4EF6\u3002</p><p><code>HTML5</code>\u7684\u79BB\u7EBF\u5B58\u50A8\u662F\u57FA\u4E8E\u4E00\u4E2A\u65B0\u5EFA\u7684 <code>.appcache</code> \u6587\u4EF6\u7684\u7F13\u5B58\u673A\u5236(\u4E0D\u662F\u5B58\u50A8\u6280\u672F)\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u6587\u4EF6\u4E0A\u7684\u89E3\u6790\u6E05\u5355\u79BB\u7EBF\u5B58\u50A8\u8D44\u6E90\uFF0C\u8FD9\u4E9B\u8D44\u6E90\u5C31\u4F1A\u50CF<code>cookie</code>\u4E00\u6837\u88AB\u5B58\u50A8\u4E86\u4E0B\u6765\u3002\u4E4B\u540E\u5F53\u7F51\u7EDC\u5728\u5904\u4E8E\u79BB\u7EBF\u72B6\u6001\u4E0B\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u901A\u8FC7\u88AB\u79BB\u7EBF\u5B58\u50A8\u7684\u6570\u636E\u8FDB\u884C\u9875\u9762\u5C55\u793A\u3002</p><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> <strong>\u4F7F\u7528\u65B9\u6CD5\uFF1A</strong></h3><h3 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406\uFF1A</h3><ol><li>\u521B\u5EFA\u4E00\u4E2A\u548C html \u540C\u540D\u7684 manifest \u6587\u4EF6\uFF0C\u7136\u540E\u5728\u9875\u9762\u5934\u90E8\u52A0\u5165 manifest \u5C5E\u6027\uFF1A</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token attr-name">manifest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.manifest<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u5728\xA0**<code>cache.manifest</code>**\u6587\u4EF6\u4E2D\u7F16\u5199\u9700\u8981\u79BB\u7EBF\u5B58\u50A8\u7684\u8D44\u6E90\uFF1A</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>CACHE MANIFEST
    #v0.11
    <span class="token property">CACHE</span><span class="token punctuation">:</span>
    js/app.js
    css/style.css
    <span class="token property">NETWORK</span><span class="token punctuation">:</span>
    resourse/logo.png
    <span class="token property">FALLBACK</span><span class="token punctuation">:</span>
    / /offline.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CACHE: \u8868\u793A\u9700\u8981\u79BB\u7EBF\u5B58\u50A8\u7684\u8D44\u6E90\u5217\u8868\uFF0C\u7531\u4E8E\u5305\u542B<code>manifest</code>\u6587\u4EF6\u7684\u9875\u9762\u5C06\u88AB\u81EA\u52A8\u79BB\u7EBF\u5B58\u50A8\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u628A\u9875\u9762\u81EA\u8EAB\u4E5F\u5217\u51FA\u6765\u3002</li><li>NETWORK: \u8868\u793A\u5728\u5B83\u4E0B\u9762\u5217\u51FA\u6765\u7684\u8D44\u6E90\u53EA\u6709\u5728\u5728\u7EBF\u7684\u60C5\u51B5\u4E0B\u624D\u80FD\u8BBF\u95EE\uFF0C\u4ED6\u4EEC\u4E0D\u4F1A\u88AB\u79BB\u7EBF\u5B58\u50A8\uFF0C\u6240\u4EE5\u5728\u79BB\u7EBF\u60C5\u51B5\u4E0B\u65E0\u6CD5\u4F7F\u7528\u8FD9\u4E9B\u8D44\u6E90\u3002\u4E0D\u8FC7\uFF0C\u5982\u679C\u5728 <code>CACHE</code>\u548C <code>NETWORK</code>\u4E2D\u6709\u4E00\u4E2A\u76F8\u540C\u7684\u8D44\u6E90\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8D44\u6E90\u8FD8\u662F\u4F1A\u88AB\u79BB\u7EBF\u5B58\u50A8\uFF0C\u4E5F\u5C31\u662F\u8BF4 <code>CACHE</code>\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002</li><li><code>FALLBACK</code>: \u8868\u793A\u5982\u679C\u8BBF\u95EE\u7B2C\u4E00\u4E2A\u8D44\u6E90\u5931\u8D25\uFF0C\u90A3\u4E48\u5C31\u4F7F\u7528\u7B2C\u4E8C\u4E2A\u8D44\u6E90\u6765\u66FF\u6362\u4ED6\uFF0C\u6BD4\u5982\u4E0A\u9762\u8FD9\u4E2A\u6587\u4EF6\u8868\u793A\u7684\u5C31\u662F\u5982\u679C\u8BBF\u95EE\u6839\u76EE\u5F55\u4E0B\u4EFB\u4F55\u4E00\u4E2A\u8D44\u6E90\u5931\u8D25\u4E86\uFF0C\u90A3\u4E48\u5C31\u53BB\u8BBF\u95EE <code>offline.html</code> \u3002</li></ul><ol start="3"><li>\u5728\u79BB\u7EBF\u72B6\u6001\u65F6\uFF0C\u64CD\u4F5C<code>window.applicationCache</code>\u8FDB\u884C\u79BB\u7EBF\u7F13\u5B58\u7684\u64CD\u4F5C\u3002</li></ol><h3 id="\u5982\u4F55\u66F4\u65B0\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u66F4\u65B0\u7F13\u5B58" aria-hidden="true">#</a> <strong>\u5982\u4F55\u66F4\u65B0\u7F13\u5B58\uFF1A</strong></h3><ol><li>\u66F4\u65B0 manifest \u6587\u4EF6</li><li>\u901A\u8FC7 javascript \u64CD\u4F5C</li><li>\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58</li></ol><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> <strong>\u6CE8\u610F\u4E8B\u9879\uFF1A</strong></h3><ol><li>\u6D4F\u89C8\u5668\u5BF9\u7F13\u5B58\u6570\u636E\u7684\u5BB9\u91CF\u9650\u5236\u53EF\u80FD\u4E0D\u592A\u4E00\u6837\uFF08\u67D0\u4E9B\u6D4F\u89C8\u5668\u8BBE\u7F6E\u7684\u9650\u5236\u662F\u6BCF\u4E2A\u7AD9\u70B9 5MB\uFF09\u3002</li><li>\u5982\u679C manifest \u6587\u4EF6\uFF0C\u6216\u8005\u5185\u90E8\u5217\u4E3E\u7684\u67D0\u4E00\u4E2A\u6587\u4EF6\u4E0D\u80FD\u6B63\u5E38\u4E0B\u8F7D\uFF0C\u6574\u4E2A\u66F4\u65B0\u8FC7\u7A0B\u90FD\u5C06\u5931\u8D25\uFF0C\u6D4F\u89C8\u5668\u7EE7\u7EED\u5168\u90E8\u4F7F\u7528\u8001\u7684\u7F13\u5B58\u3002</li><li>\u5F15\u7528 manifest \u7684 html \u5FC5\u987B\u4E0E manifest \u6587\u4EF6\u540C\u6E90\uFF0C\u5728\u540C\u4E00\u4E2A\u57DF\u4E0B\u3002</li><li>FALLBACK \u4E2D\u7684\u8D44\u6E90\u5FC5\u987B\u548C manifest \u6587\u4EF6\u540C\u6E90\u3002</li><li>\u5F53\u4E00\u4E2A\u8D44\u6E90\u88AB\u7F13\u5B58\u540E\uFF0C\u8BE5\u6D4F\u89C8\u5668\u76F4\u63A5\u8BF7\u6C42\u8FD9\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\u4E5F\u4F1A\u8BBF\u95EE\u7F13\u5B58\u4E2D\u7684\u8D44\u6E90\u3002</li><li>\u7AD9\u70B9\u4E2D\u7684\u5176\u4ED6\u9875\u9762\u5373\u4F7F\u6CA1\u6709\u8BBE\u7F6E manifest \u5C5E\u6027\uFF0C\u8BF7\u6C42\u7684\u8D44\u6E90\u5982\u679C\u5728\u7F13\u5B58\u4E2D\u4E5F\u4ECE\u7F13\u5B58\u4E2D\u8BBF\u95EE\u3002</li><li>\u5F53 manifest \u6587\u4EF6\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u8D44\u6E90\u8BF7\u6C42\u672C\u8EAB\u4E5F\u4F1A\u89E6\u53D1\u66F4\u65B0\u3002</li></ol>`,15),l=[t];function c(o,d){return n(),s("div",null,l)}var p=a(i,[["render",c],["__file","HTML5\u7684\u79BB\u7EBF\u50A8\u5B58\uFF0C\u5DE5\u4F5C\u539F\u7406.html.vue"]]);export{p as default};
