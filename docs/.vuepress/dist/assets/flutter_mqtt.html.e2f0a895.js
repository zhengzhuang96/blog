import{_ as n,o as s,c as a,d as t}from"./app.73a0ea12.js";const p={},e=t(`<h3 id="mqtt-\u5728-flutter-\u4E2D\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#mqtt-\u5728-flutter-\u4E2D\u7684\u4F7F\u7528" aria-hidden="true">#</a> MQTT \u5728 flutter \u4E2D\u7684\u4F7F\u7528</h3><h4 id="\u5B89\u88C5-mqtt" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-mqtt" aria-hidden="true">#</a> \u5B89\u88C5 mqtt</h4><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>mqtt_client<span class="token punctuation">:</span> <span class="token operator">^</span><span class="token number">6.0</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u521D\u59CB\u5316-mqtt" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316-mqtt" aria-hidden="true">#</a> \u521D\u59CB\u5316 mqtt</h4><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>int res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">MqttUtils</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;\u5BA2\u6237\u6807\u7B7EClients&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;mqtt init res = </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">res</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u5316\u6210\u529F</span>
  <span class="token comment">// runApp(MyApp());</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BBE\u7F6E\u8BA2\u9605-topics-\u76D1\u542C\u67D0\u4E2A\u8BA2\u9605-topics-\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u8BA2\u9605-topics-\u76D1\u542C\u67D0\u4E2A\u8BA2\u9605-topics-\u4FE1\u606F" aria-hidden="true">#</a> \u8BBE\u7F6E\u8BA2\u9605 Topics, \u76D1\u542C\u67D0\u4E2A\u8BA2\u9605 Topics \u4FE1\u606F</h4><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token comment">// testtopic1  ==&gt; \u8BA2\u9605\u540D\u79F0</span>
<span class="token class-name">MqttUtils</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;testtopic1&#39;</span></span><span class="token punctuation">,</span> callBack<span class="token punctuation">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53D1\u9001\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u6D88\u606F" aria-hidden="true">#</a> \u53D1\u9001\u6D88\u606F</h4><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token comment">// testtopic2 ==&gt; \u5411\u67D0\u4E2A\u8BA2\u9605Topics\u53D1\u9001\u6D88\u606F</span>
<span class="token class-name">MqttUtils</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">publishMessage</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;testtopic2&#39;</span></span><span class="token punctuation">,</span> massageData<span class="token punctuation">,</span> callBack<span class="token punctuation">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA-mqttutils-\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-mqttutils-\u7C7B" aria-hidden="true">#</a> \u521B\u5EFA MqttUtils \u7C7B</h4><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:mqtt_client/mqtt_client.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:mqtt_client/mqtt_server_client.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">final</span> _client <span class="token operator">=</span> <span class="token class-name">MqttServerClient</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;192.168.100.119&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MqttUtils</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token class-name">MqttUtils</span> _instance<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token class-name">MqttUtils</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      _instance <span class="token operator">=</span> <span class="token class-name">MqttUtils</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> _instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/// \u521D\u59CB\u5316\u914D\u7F6Emqtt</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token comment">/// \u65E5\u5FD7</span>
    _client<span class="token punctuation">.</span><span class="token function">logging</span><span class="token punctuation">(</span><span class="token keyword">on</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/// \u8D85\u65F6\u65F6\u95F4s  \u9ED8\u8BA4\u4E3A60s</span>
    _client<span class="token punctuation">.</span>keepAlivePeriod <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token comment">/// \u8FDE\u63A5\u6210\u529F\u56DE\u8C03</span>
    _client<span class="token punctuation">.</span>onConnected <span class="token operator">=</span> onConnected<span class="token punctuation">;</span>

    <span class="token comment">/// \u8FDE\u63A5\u65AD\u5F00\u56DE\u8C03</span>
    _client<span class="token punctuation">.</span>onDisconnected <span class="token operator">=</span> onDisconnected<span class="token punctuation">;</span>

    <span class="token comment">/// \u8BA2\u9605\u6210\u529F\u56DE\u8C03</span>
    _client<span class="token punctuation">.</span>onSubscribed <span class="token operator">=</span> onSubscribed<span class="token punctuation">;</span>

    _client<span class="token punctuation">.</span>pongCallback <span class="token operator">=</span> ping<span class="token punctuation">;</span>

    <span class="token keyword">final</span> connMess <span class="token operator">=</span> <span class="token class-name">MqttConnectMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">withClientIdentifier</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">userId</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">keepAliveFor</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">// Must agree with the keep alive set above or not set</span>
        <span class="token punctuation">.</span><span class="token function">withWillTopic</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;willtopic&#39;</span></span><span class="token punctuation">)</span> <span class="token comment">// If you set this you must set a will message</span>
        <span class="token punctuation">.</span><span class="token function">withWillMessage</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;My Will message&#39;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">startClean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Non persistent session for testing</span>
        <span class="token punctuation">.</span><span class="token function">withWillQos</span><span class="token punctuation">(</span><span class="token class-name">MqttQos</span><span class="token punctuation">.</span>atLeastOnce<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;EXAMPLE::Mosquitto client connecting....&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _client<span class="token punctuation">.</span>connectionMessage <span class="token operator">=</span> connMess<span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> _client<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">on</span> <span class="token class-name">Exception</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;MqttUtils::client exception - </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">e</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      _client<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/// \u68C0\u67E5\u8FDE\u63A5\u72B6\u6001</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_client<span class="token punctuation">.</span>connectionStatus<span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token class-name">MqttConnectionState</span><span class="token punctuation">.</span>connected<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;EXAMPLE::\u5DF2\u8FDE\u63A5Mosquito\u5BA2\u6237\u7AEF&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;EXAMPLE::\u9519\u8BEFmosquito\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5931\u8D25-\u6B63\u5728\u65AD\u5F00\u8FDE\u63A5\uFF0C\u72B6\u6001\u4E3A </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">_client<span class="token punctuation">.</span>connectionStatus<span class="token punctuation">.</span>state</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      _client<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/// \u8BA2\u9605\u6D88\u606F</span>
  bool <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token class-name">String</span> topic<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token class-name">MqttQos</span> qosLevel <span class="token operator">=</span> <span class="token class-name">MqttQos</span><span class="token punctuation">.</span>atMostOnce<span class="token punctuation">,</span> <span class="token class-name">Function</span> callBack<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BA2\u9605</span>
    _client<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span> qosLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u76D1\u542C\u8BA2\u9605\u6D88\u606F\u7684\u54CD\u5E94</span>
    _client<span class="token punctuation">.</span>updates<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">dynamic</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token class-name">MqttPublishMessage</span> recMess <span class="token operator">=</span> c<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>payload<span class="token punctuation">;</span>
      <span class="token keyword">final</span> pt <span class="token operator">=</span> <span class="token class-name">MqttPublishPayload</span><span class="token punctuation">.</span><span class="token function">bytesToStringAsString</span><span class="token punctuation">(</span>recMess<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;EXAMPLE::Change notification:: topic is &lt;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">c<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>topic</span><span class="token punctuation">}</span></span><span class="token string">&gt;, payload is &lt;-- </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">pt</span></span><span class="token string"> --&gt;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>callBack <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callBack</span><span class="token punctuation">(</span>pt<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    _client<span class="token punctuation">.</span>published<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">MqttPublishMessage</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;MqttUtils::Published notification:: topic is </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">message<span class="token punctuation">.</span>variableHeader<span class="token punctuation">.</span>topicName</span><span class="token punctuation">}</span></span><span class="token string">, with Qos </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">message<span class="token punctuation">.</span>header<span class="token punctuation">.</span>qos</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/// \u53D6\u6D88\u8BA2\u9605</span>
  bool <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token class-name">String</span> topic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;MqttUtils::Unsubscribing&#39;</span></span> <span class="token operator">+</span> topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _client<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/// \u4E2D\u65AD\u8FDE\u63A5</span>
  <span class="token keyword">void</span> <span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;MqttUtils::Disconnecting&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _client<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _client<span class="token punctuation">.</span>securityContext <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  bool <span class="token function">isConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// return _connected;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/// \u53D1\u9001\u6D88\u606F  qualityOfService\uFF1A\u5BF9\u5E94\u63A5\u53E3\u6587\u6863\u7684 qos \u53C2\u6570</span>
  <span class="token keyword">void</span> <span class="token function">publishMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> topic<span class="token punctuation">,</span> <span class="token class-name">String</span> jsonString<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token class-name">Function</span> callBack <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> builder1 <span class="token operator">=</span> <span class="token class-name">MqttClientPayloadBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    builder1<span class="token punctuation">.</span><span class="token function">addString</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;EXAMPLE:: &lt;&lt;&lt;&lt; PUBLISH 1 &gt;&gt;&gt;&gt;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _client<span class="token punctuation">.</span><span class="token function">publishMessage</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span> <span class="token class-name">MqttQos</span><span class="token punctuation">.</span>atLeastOnce<span class="token punctuation">,</span> builder1<span class="token punctuation">.</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">callBack</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/// \u8FDE\u63A5\u6210\u529F\u7684\u56DE\u8C03</span>
<span class="token keyword">void</span> <span class="token function">onConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;MqttUtils::OnConnected client callback - Client connection was sucessful&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">onSubscribed</span><span class="token punctuation">(</span><span class="token class-name">String</span> topic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;\u5DF2\u786E\u8BA4\u8BA2\u9605\u4E3B\u9898 </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">topic</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/// The unsolicited disconnect callback</span>
<span class="token keyword">void</span> <span class="token function">onDisconnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;-\u5BA2\u6237\u7AEF\u65AD\u5F00\u8FDE\u63A5&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;MqttUtils::OnDisconnected client callback - Client disconnection&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_client<span class="token punctuation">.</span>connectionStatus<span class="token punctuation">.</span>returnCode <span class="token operator">==</span> <span class="token class-name">MqttConnectReturnCode</span><span class="token punctuation">.</span>solicited<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;MqttUtils::OnDisconnected callback is solicited, this is correct&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;MqttUtils::Ping response client callback invoked&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[e];function o(i,l){return s(),a("div",null,c)}var k=n(p,[["render",o],["__file","flutter_mqtt.html.vue"]]);export{k as default};
