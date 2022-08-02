import{_ as n,o as s,c as a,d as t}from"./app.73a0ea12.js";const p={},e=t(`<p>\u968F\u7740\u524D\u7AEF\u4E1A\u52A1\u7684\u4E0D\u65AD\u6269\u5927,\u4E5F\u9020\u4E86\u4E00\u4E9B\u7684<em><strong>\u8F6E\u5B50</strong></em>\u6216\u8005\u9762\u5411\u4E1A\u52A1<em><strong>\u4E8C\u6B21\u5C01\u88C5\u7684\u4EE3\u7801</strong></em>\u7528\u5728\u5404\u4E2A\u9879\u76EE\u5F53\u4E2D,\u4E3A\u4E86\u63D0\u5347\u56E2\u961F\u5F00\u53D1\u6548\u7387,\u7A33\u5B9A\u5F00\u53D1\u8D28\u91CF,\u5F00\u62D3\u524D\u7AEF\u5DE5\u7A0B\u5316,\u4E00\u4E2A\u670D\u52A1\u4E8E\u4E1A\u52A1\u7684<em><strong>\u4E1A\u52A1\u7EC4\u4EF6\u5E93</strong></em>\u5FC5\u4E0D\u53EF\u5C11~</p><h2 id="_1-\u6280\u672F\u9009\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u6280\u672F\u9009\u578B" aria-hidden="true">#</a> 1.\u6280\u672F\u9009\u578B</h2><table><thead><tr><th>\u6280\u672F</th><th>\u7B80\u8FF0</th></tr></thead><tbody><tr><td>Vue3</td><td>~</td></tr><tr><td>Typescript</td><td>~</td></tr><tr><td>Rollup</td><td>\u4E00\u4E2A\u8F7B\u91CF\u7B80\u5355\u7684\u6253\u5305\u5DE5\u5177,Vue\u548Creact\u6E90\u7801\u5C31\u662F\u7528\u8FD9\u4E2A\u5DE5\u5177\u6253\u5305\u7684</td></tr></tbody></table><h2 id="_2-\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#_2-\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> 2.\u73AF\u5883\u642D\u5EFA</h2><ol><li><p>\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> @base/vue-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5728<em><strong>package.json</strong></em>\u4E2D\u76F4\u63A5\u5199\u5165</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
 <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@base/vue-ui&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhengzhuang&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.d.ts&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/@base/vue-ui.umd.js&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/@base/vue-ui.esm.js&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run clean &amp;&amp; npm run build:esm &amp;&amp; npm run build:umd&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run clean &amp;&amp; npm run dev:umd&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;build:esm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup  --config build/rollup.esm.config.js&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;build:umd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup --config build/rollup.umd.config.js&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;clean&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rimraf ./dist&quot;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.38.5&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;rollup-plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6.0.0-beta.6&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;rollup-plugin-typescript2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.29.0&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^11.1.1&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;@types/lodash-es&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.17.4&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;@vue/compiler-sfc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;postcss-import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^14.0.0&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;rimraf&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.2&quot;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;rollup-plugin-postcss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.0.0&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;rollup-plugin-commonjs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^10.1.0&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;tailwindcss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.9.0&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;postcss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.2.8&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;lodash-es&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.17.20&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~3.9.3&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u540E\u6267\u884C<code>npm install</code></p></li></ol><h2 id="_3-\u7F16\u5199rollup\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u7F16\u5199rollup\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 3.\u7F16\u5199Rollup\u7684\u914D\u7F6E\u6587\u4EF6</h2><p>\u4E0E<em><strong>package.json</strong></em>\u5E73\u7EA7\u521B\u5EFA\u4E00\u4E2A<em><strong>build</strong></em>\u6587\u4EF6\u5939,\u5206\u522B\u521B\u5EFA\u4E09\u4E2A\u6587\u4EF6</p><ol><li><p><em><strong>rollup.config.js</strong></em></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> vue from <span class="token string">&#39;rollup-plugin-vue&#39;</span>

<span class="token function">import</span> typescript from <span class="token string">&#39;rollup-plugin-typescript2&#39;</span>
<span class="token function">import</span> <span class="token punctuation">{</span>nodeResolve<span class="token punctuation">}</span> from <span class="token string">&#39;@rollup/plugin-node-resolve&#39;</span>
<span class="token function">import</span> postcss from <span class="token string">&#39;rollup-plugin-postcss&#39;</span>
<span class="token function">import</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span> from <span class="token string">&#39;../package.json&#39;</span>
<span class="token function">import</span> commonjs from <span class="token string">&#39;rollup-plugin-commonjs&#39;</span><span class="token punctuation">;</span>
<span class="token function">import</span> postcssImport from <span class="token string">&#39;postcss-import&#39;</span><span class="token punctuation">;</span>
// \u5904\u7406 apply \u4EE5\u53CA\u5185\u7F6E mixin
<span class="token function">import</span> tailwindcss from <span class="token string">&#39;tailwindcss&#39;</span>

const <span class="token function">file</span> <span class="token operator">=</span> <span class="token builtin class-name">type</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token variable"><span class="token variable">\`</span>dist/$<span class="token punctuation">{</span>name<span class="token punctuation">}</span>.$<span class="token punctuation">{</span>type<span class="token punctuation">}</span>.js<span class="token variable">\`</span></span>

const overrides <span class="token operator">=</span> <span class="token punctuation">{</span>
    compilerOptions: <span class="token punctuation">{</span>declaration: true<span class="token punctuation">}</span>,
    exclude: <span class="token punctuation">[</span><span class="token string">&quot;tests/**/*.ts&quot;</span>, <span class="token string">&quot;tests/**/*.tsx&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> <span class="token punctuation">{</span>name, file<span class="token punctuation">}</span>
<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
    input: <span class="token string">&#39;src/index.ts&#39;</span>,
    output: <span class="token punctuation">{</span>
        name,
        file: file<span class="token punctuation">(</span><span class="token string">&#39;esm&#39;</span><span class="token punctuation">)</span>,
        format: <span class="token string">&#39;es&#39;</span>
    <span class="token punctuation">}</span>,
    plugins: <span class="token punctuation">[</span>
        nodeResolve<span class="token punctuation">(</span><span class="token punctuation">)</span>,

        typescript<span class="token punctuation">(</span><span class="token punctuation">{</span>tsconfigOverride: overrides<span class="token punctuation">}</span><span class="token punctuation">)</span>,
        vue<span class="token punctuation">(</span><span class="token punctuation">)</span>,
        postcss<span class="token punctuation">(</span><span class="token punctuation">{</span>
            extensions: <span class="token punctuation">[</span><span class="token string">&quot;.css&quot;</span><span class="token punctuation">]</span>,
            extract: true,
            plugins: <span class="token punctuation">[</span>postcssImport<span class="token punctuation">(</span><span class="token punctuation">)</span>, tailwindcss<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>,
        commonjs<span class="token punctuation">(</span><span class="token punctuation">{</span>
            include: <span class="token punctuation">[</span>
                <span class="token string">&quot;node_modules/**&quot;</span>,
                <span class="token string">&quot;node_modules/**/*&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>,
    <span class="token punctuation">]</span>,
    external: <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span>, <span class="token string">&#39;echarts&#39;</span>, <span class="token string">&#39;lodash-es&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><em><strong>rollup.ems.config.js</strong></em></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> basicConfig, <span class="token punctuation">{</span> name, <span class="token function">file</span> <span class="token punctuation">}</span> from <span class="token string">&#39;./rollup.config&#39;</span>
<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.basicConfig,
  output: <span class="token punctuation">{</span>
    name,
    file: file<span class="token punctuation">(</span><span class="token string">&#39;esm&#39;</span><span class="token punctuation">)</span>,
    format: <span class="token string">&#39;es&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><em><strong>rollup.umd.config.js</strong></em></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> basicConfig, <span class="token punctuation">{</span> name, <span class="token function">file</span> <span class="token punctuation">}</span> from <span class="token string">&#39;./rollup.config&#39;</span>
<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.basicConfig,
  output: <span class="token punctuation">{</span>
    name: <span class="token string">&#39;well-bricks&#39;</span>,
    file: file<span class="token punctuation">(</span><span class="token string">&#39;umd&#39;</span><span class="token punctuation">)</span>,
    format: <span class="token string">&#39;umd&#39;</span>,
    globals: <span class="token punctuation">{</span>
      <span class="token string">&#39;vue&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;Vue&#39;</span>,
    <span class="token punctuation">}</span>,
    exports: <span class="token string">&#39;named&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>\u5230\u8FD9\u91CC\u6211\u4EEC\u5C31\u628ARollup\u6253\u5305\u5DE5\u5177\u7684\u914D\u7F6E\u5F04\u597D\u4E86</p><h2 id="_4-\u521B\u5EFA\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA\u7EC4\u4EF6" aria-hidden="true">#</a> 4.\u521B\u5EFA\u7EC4\u4EF6</h2><ol><li><p>\u521B\u5EFA<code>/packages/components/textButton</code>\u6587\u4EF6\u5939,\u5E76\u5728<em><strong>textButton</strong></em>\u6587\u4EF6\u5939\u4E0B\u9762\u521B\u5EFA<code>index.ts</code>\u3001<code>index.vue</code>\u4EE5\u53CA<code>index-group.vue</code></p></li><li><p>\u521B\u5EFA<code>/src/index.ts</code></p></li><li><p>\u521B\u5EFA<code>/packages/main.css</code></p></li></ol><p>\u6B64\u4E8B\u76EE\u5F55\u7ED3\u6784\u5E94\u4E3A\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h452tq7ipjj207307dq30.jpg" alt="image-20220713101133295"></p><h2 id="_5-\u5168\u5C40\u6CE8\u518C\u4E0E\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u5168\u5C40\u6CE8\u518C\u4E0E\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6" aria-hidden="true">#</a> 5.\u5168\u5C40\u6CE8\u518C\u4E0E\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6</h2><p>\u6B64\u65F6\u6211\u4EEC\u8981\u6E05\u695A\u5168\u5C40\u5F15\u5165\u548C\u5C40\u90E8\u5F15\u5165\u7684\u533A\u522B</p><ul><li>\u5168\u5C40\u5F15\u5165\u662F\u5229\u7528\u4E86vue\u7684install\u8BED\u6CD5,\u5FAA\u73AF\u7EC4\u4EF6\u90FD\u6302\u8F7D\u5230vue\u7684\u5B9E\u4F8B\u5BF9\u8C61\u4E0A</li><li>\u5C40\u90E8\u5F15\u5165\u662F\u5229\u7528\u4E86export\u7684\u7279\u6027</li></ul><p>\u5728<code>/src/index.ts</code> \u5199\u5165:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">/* eslint-disable */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>App<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">import</span> <span class="token string">&#39;./main.css&#39;</span>   <span class="token comment">// \u5F15\u5165\u6837\u5F0F</span>
<span class="token keyword">import</span> TextButton <span class="token keyword">from</span> <span class="token string">&#39;./components/textButton&#39;</span>

<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">[</span>
    TextButton
<span class="token punctuation">]</span>

<span class="token comment">// \u5168\u5C40\u6CE8\u518C</span>
<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    components<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>component <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span>name<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5C40\u90E8\u6CE8\u518C</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
    TextButton<span class="token punctuation">,</span>
    install
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    install
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ps: \u5230\u8FD9\u91CC\u5176\u5B9E\u4F60\u5C31\u5DF2\u7ECF\u6253\u9020\u597D\u4E86\u4E00\u4E2A\u7EC4\u4EF6\u5E93\u6846\u67B6,\u63A5\u4E0B\u6765\u6211\u4EEC\u5BF9\u5177\u4F53\u7684\u7EC4\u4EF6\u8FDB\u884C\u5F00\u53D1</p><h2 id="_6-\u7EC4\u4EF6\u5185\u5BB9\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#_6-\u7EC4\u4EF6\u5185\u5BB9\u5F00\u53D1" aria-hidden="true">#</a> 6.\u7EC4\u4EF6\u5185\u5BB9\u5F00\u53D1</h2><ol><li><p>\u5728<code> /src/components/textButton/index.vue</code>\u4E2D\u5199\u5165</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ol>`,21),o=[e];function i(l,c){return s(),a("div",null,o)}var r=n(p,[["render",i],["__file","\u6253\u9020vue3\u7EC4\u4EF6\u5E93.html.vue"]]);export{r as default};
