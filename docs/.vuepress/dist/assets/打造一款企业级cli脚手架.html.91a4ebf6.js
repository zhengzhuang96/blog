import{_ as e,o as n,c as a,d as s}from"./app.73a0ea12.js";const i={},l=s(`<h4 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> ydy-cli <span class="token operator">&amp;</span> <span class="token builtin class-name">cd</span> ydy-cli <span class="token operator">&amp;</span> <span class="token function">npm</span> init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> \u6DFB\u52A0\u4F9D\u8D56</h4><p>\u4EE5\u4E0B\u4F9D\u8D56\u9879\u662F\u6211\u4EEC\u6784\u5EFA<code>rollup</code>+<code>ts</code>\u9700\u8981\u7684</p><ol><li><p>\u6DFB\u52A0\u4F9D\u8D56\u9879\u5230<code>devDependencies</code>\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @rollup/plugin-json @rollup/plugin-node-resolve @types/fs-extra @types/inquirer rollup rollup-plugin-terser rollup-plugin-typescript2 typescript -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6DFB\u52A0\u4F9D\u8D56\u9879\u5230<code>dependencies</code>\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> chalk commander fs-extra inquirer readline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,5),d=[l];function c(r,o){return n(),a("div",null,d)}var p=e(i,[["render",c],["__file","\u6253\u9020\u4E00\u6B3E\u4F01\u4E1A\u7EA7cli\u811A\u624B\u67B6.html.vue"]]);export{p as default};
