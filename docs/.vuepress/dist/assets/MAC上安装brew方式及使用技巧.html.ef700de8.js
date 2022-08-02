import{_ as e,o as s,c as a,d as n}from"./app.73a0ea12.js";const r={},i=n(`<h1 id="mac\u4E0A\u5B89\u88C5brew\u65B9\u5F0F\u53CA\u4F7F\u7528\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#mac\u4E0A\u5B89\u88C5brew\u65B9\u5F0F\u53CA\u4F7F\u7528\u6280\u5DE7" aria-hidden="true">#</a> MAC\u4E0A\u5B89\u88C5brew\u65B9\u5F0F\u53CA\u4F7F\u7528\u6280\u5DE7</h1><p><strong>brew</strong>\u662F<strong>Mac</strong>\u4E0B\u7684\u4E00\u4E2A\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u53EF\u4EE5\u7B80\u5316<strong>MacOS</strong>\u7CFB\u7EDF\u4E0A\u8F6F\u4EF6\u7684\u5B89\u88C5\uFF0C\u4F5C\u7528\u7C7B\u662F<strong>centos</strong>\u4E0B\u7684<strong>yum</strong>\u3002</p><p><strong>brew</strong>\u65E2\u53EF\u4EE5\u5B89\u88C5\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u8FD8\u53EF\u4EE5\u5B89\u88C5\u8F6F\u4EF6\uFF0C\u6211\u7684<strong>vs Code</strong>\u5C31\u662F<strong>brew</strong>\u5B89\u88C5\u7684\u5566</p><h4 id="_1-\u4F7F\u7528ruby\u5B89\u88C5brew" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528ruby\u5B89\u88C5brew" aria-hidden="true">#</a> 1. \u4F7F\u7528ruby\u5B89\u88C5brew</h4><p><strong>brew</strong>\u662F<strong>ruby</strong>\u5F00\u53D1\u7684\uFF0C\u9700\u8981\u786E\u8BA4<strong>ruby</strong>\u662F\u5426\u5DF2\u5B89\u88C5\uFF0C\u9ED8\u8BA4\u5728<strong>MacOS</strong>\u4E0B\u662F\u5DF2\u7ECF\u5B89\u88C5\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ whick ruby
$ ruby --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img width="565" alt="image-20210526091550956" src="https://tva1.sinaimg.cn/large/e6c9d24ely1h45cncatw8j20ve04gjrq.jpg"><h4 id="_2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a> 2. \u5B89\u88C5</h4><p>\u6267\u884C\u547D\u4EE4\uFF08\u7F51\u4E0A\u597D\u591A\u65B9\u5F0F\u90FD\u5361\u4F4F\uFF0C\u627E\u4E86\u4E00\u4E2Agitee\u6E90\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ /bin/zsh -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u8FC7\u7A0B\u9700\u8981\u8F93\u5165\u4E00\u6B21\u5BC6\u7801\uFF0C\u6839\u636E\u547D\u4EE4\u4E00\u76F4\u8FDB\u884C\u4E0B\u53BB(\u4E0D\u8981\u7740\u6025)</p><h4 id="_3-\u786E\u8BA4" tabindex="-1"><a class="header-anchor" href="#_3-\u786E\u8BA4" aria-hidden="true">#</a> 3. \u786E\u8BA4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew --version    // \u6D4B\u8BD5\u662F\u5426\u5DF2\u5B89\u88C5\u6210\u529F
$ <span class="token function">which</span> brew    // \u5B89\u88C5\u6210\u529F\u5219\u663E\u793A\u8DEF\u5F84
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img width="600" alt="image-20210526092134873" src="https://tva1.sinaimg.cn/large/e6c9d24ely1h45cnel52dj20xc07amy0.jpg"><h4 id="_4-brew\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-brew\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> 4. brew\u57FA\u672C\u7528\u6CD5</h4><blockquote><p>brew\u4F5C\u4E3A\u4F7F\u7528mac\u7535\u8111\u7684\u7A0B\u5E8F\u5458\u7684\u5FC5\u5907\u5DE5\u5177\uFF0C\u57FA\u672C\u7528\u6CD5\u4E5F\u5F88\u7B80\u5355, \u57FA\u7840\u7684git\uFF0Cnodejs\u90FD\u4EA4\u7ED9brew\u5427</p></blockquote><h5 id="\u5B89\u88C5\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8F6F\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u8F6F\u4EF6</h5><p>brew\u7684\u5B89\u88C5\u76EE\u5F55\u5728 <code>/usr/local/Cellar</code>\uFF0C\u6211\u4EEC\u4EE5\u5B89\u88C5<code>nodejs</code>\u4E3A\u4F8B\u5B50\uFF0C\u53EA\u9700\u8981\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew <span class="token function">install</span> nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u7B49\u5F85\u5B89\u88C5\u5C31\u884C\u4E86\uFF0C\u5B89\u88C5\u6210\u529F\u4E4B\u540E\u8F93\u5165\u547D\u4EE4\u67E5\u770B\uFF0Cnodejs\u7684\u6700\u65B0\u7248\u672C\u5C31\u88AB\u5B89\u88C5\u6210\u529F\u5566</p><img width="165" alt="image-20210526092536599" src="https://tva1.sinaimg.cn/large/e6c9d24ely1h45cnggyryj2096026wec.jpg"><blockquote><p>\u5F53\u7136\u6211\u8FD9\u91CC\u4E60\u60EF\u5148\u5B89\u88C5nvm\u7BA1\u7406node\uFF0Cbrew\u5148\u5B89\u88C5nvm\uFF0C\u7528nvm\u6765\u8FDB\u884C\u5B89\u88C5\u548C\u7BA1\u7406node\u7248\u672C</p></blockquote><p><strong>brew</strong>\u8FD8\u53EF\u4EE5\u5B89\u88C5\u8F6F\u4EF6\u5230\u4F60\u7684<strong>MacOs</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew cask <span class="token function">install</span> visual-studio-code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4ED6\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew upgrade nodejs             <span class="token comment"># \u66F4\u65B0\u8F6F\u4EF6</span>
$ brew remove nodejs              <span class="token comment"># \u5378\u8F7D\u8F6F\u4EF6</span>
$ brew list                       <span class="token comment"># \u5217\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u8F6F\u4EF6 </span>
$ brew search nodejs              <span class="token comment"># \u67E5\u8BE2\u4E0E nodejs \u76F8\u5173\u7684\u53EF\u7528\u8F6F\u4EF6(\u4EE5nodejs\u4E3E\u4F8B)</span>
$ brew info nodejs                <span class="token comment"># \u67E5\u8BE2 nodejs \u7684\u5B89\u88C5\u4FE1\u606F(\u4EE5nodejs\u4E3E\u4F8B)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="brew-services" tabindex="-1"><a class="header-anchor" href="#brew-services" aria-hidden="true">#</a> brew services</h3><p>brew services \u662F\u4E00\u4E2A\u975E\u5E38\u5F3A\u5927\u7684\u5DE5\u5177\uFF0C\u53EF\u4EE5\u7BA1\u7406\u8F6F\u4EF6\uFF0C\u8FDB\u884C\u505C\u6B62\u3001\u91CD\u542F\u7B49</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> elasticsearch          <span class="token comment"># \u5B89\u88C5 elasticsearch</span>
brew services start elasticsearch   <span class="token comment"># \u542F\u52A8 elasticsearch</span>
brew services stop elasticsearch    <span class="token comment"># \u505C\u6B62 elasticsearch</span>
brew services restart elasticsearch <span class="token comment"># \u91CD\u542F elasticsearch</span>
brew services list                  <span class="token comment"># \u5217\u51FA\u5F53\u524D\u7684\u72B6\u6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u59CB\u4F60\u7684brew\u4E4B\u65C5\u5427\uFF01</p>`,30),c=[i];function d(t,l){return s(),a("div",null,c)}var b=e(r,[["render",d],["__file","MAC\u4E0A\u5B89\u88C5brew\u65B9\u5F0F\u53CA\u4F7F\u7528\u6280\u5DE7.html.vue"]]);export{b as default};
