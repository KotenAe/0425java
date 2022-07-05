import{_ as n,o as s,c as e,a}from"./app.a3ab45a4.js";const i={},l=a(`<h1 id="day01-\u6570\u636E\u5E93\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#day01-\u6570\u636E\u5E93\u57FA\u7840" aria-hidden="true">#</a> day01_\u6570\u636E\u5E93\u57FA\u7840</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u8BFE\u524D\u56DE\u987E<span class="token operator">:</span>
  <span class="token number">1.</span>Junit\u5355\u5143\u6D4B\u8BD5<span class="token punctuation">,</span>\u53EF\u4EE5\u5355\u72EC\u6267\u884C\u4E00\u4E2A\u65B9\u6CD5\u53BB\u6D4B\u8BD5
  <span class="token number">2.</span>@<span class="token class-name">Test</span> <span class="token annotation punctuation">@Before</span> <span class="token annotation punctuation">@After</span>
  <span class="token number">3.</span>\u7C7B\u52A0\u8F7D\u5668<span class="token operator">:</span>\u8D1F\u8D23\u5C06<span class="token keyword">class</span>\u6587\u4EF6\u52A0\u8F7D\u5230\u5185\u5B58
    <span class="token class-name">BootStrapClassLoader</span><span class="token operator">:</span>\u6838\u5FC3\u7C7B
    <span class="token class-name">ExtClassLoader</span><span class="token operator">:</span>\u6269\u5C55\u7C7B
    <span class="token class-name">AppClassLoader</span><span class="token operator">:</span>\u81EA\u5B9A\u4E49\u7C7B\u548C\u7B2C\u4E09\u65B9jar\u5305
  <span class="token number">4.</span>\u7C7B\u52A0\u8F7D\u5668\u673A\u5236<span class="token operator">:</span>\u53CC\u4EB2\u59D4\u6D3E  \u7F13\u5B58\u673A\u5236
    \u4E00\u4E2A\u7C7B\u53EA\u52A0\u8F7D\u4E00\u6B21
  <span class="token number">5.</span>\u7C7B\u7684\u52A0\u8F7D\u65F6\u673A<span class="token operator">:</span>
    a<span class="token punctuation">.</span><span class="token keyword">new</span>\u5BF9\u8C61 b<span class="token punctuation">.</span><span class="token keyword">new</span>\u5B50\u7C7B c<span class="token punctuation">.</span>\u6267\u884Cmain\u65B9\u6CD5  d<span class="token punctuation">.</span>\u8C03\u7528\u9759\u6001\u6210\u5458  e<span class="token punctuation">.</span>\u53CD\u5C04
  <span class="token number">6.</span>\u53CD\u5C04<span class="token operator">:</span>
    <span class="token class-name"><span class="token namespace">a<span class="token punctuation">.</span></span>Class</span>\u5BF9\u8C61<span class="token operator">:</span>jvm\u81EA\u52A8\u4E3A\u52A0\u8F7D\u5230\u5185\u5B58\u7684<span class="token keyword">class</span>\u6587\u4EF6\u5728\u5806\u4E2D\u521B\u5EFA\u7684\u5BF9\u8C61
    b<span class="token punctuation">.</span><span class="token keyword">class</span>\u7C7B<span class="token operator">:</span>\u63CF\u8FF0<span class="token class-name">Class</span>\u5BF9\u8C61\u7684\u7C7B\u5C31\u53EB\u505A<span class="token class-name">Class</span>\u7C7B
  <span class="token number">7.</span>\u4F7F\u7528<span class="token operator">:</span>
    a<span class="token punctuation">.</span>getConstructors<span class="token operator">:</span>\u83B7\u53D6\u6240\u6709<span class="token keyword">public</span>\u7684\u6784\u9020
    b<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span>\u53C2\u6570\u7C7B\u578B\u7684<span class="token keyword">class</span>\u5BF9\u8C61<span class="token punctuation">)</span><span class="token operator">:</span>\u83B7\u53D6\u6307\u5B9A\u7684<span class="token keyword">public</span>\u7684\u6784\u9020
    c<span class="token punctuation">.</span>newinstance<span class="token operator">:</span>\u521B\u5EFA\u5BF9\u8C61
    d<span class="token punctuation">.</span>getDeclaredConstructors<span class="token operator">:</span>\u83B7\u53D6\u6240\u6709\u7684\u6784\u9020\u5305\u62EC<span class="token keyword">private</span>
    e<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span>\u53C2\u6570\u7C7B\u578B\u7684<span class="token keyword">class</span>\u5BF9\u8C61<span class="token punctuation">)</span><span class="token operator">:</span>\u83B7\u53D6\u6307\u5B9A\u7684\u6784\u9020
    f<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token operator">:</span>\u89E3\u9664\u79C1\u6709\u6743\u9650
    g<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>\u83B7\u53D6\u6240\u6709<span class="token keyword">public</span>\u7684\u65B9\u6CD5
    h<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>\u65B9\u6CD5\u540D<span class="token punctuation">,</span>\u53C2\u6570<span class="token keyword">class</span>\u5BF9\u8C61<span class="token punctuation">)</span><span class="token operator">:</span>\u83B7\u53D6\u6307\u5B9A\u7684\u6210\u5458\u65B9\u6CD5
  <span class="token number">8.</span>\u6CE8\u610F<span class="token operator">:</span>
    \u5C06\u6765\u5F00\u53D1<span class="token punctuation">,</span>\u5C06\u914D\u7F6E\u6587\u4EF6\u653E\u5230resources\u76EE\u5F55\u4E0B
    \u7528\u7C7B\u52A0\u8F7D\u5668\u8BFB\u53D6<span class="token operator">:</span>  \u5F53\u524D\u7C7B<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getReourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6\u540D&quot;</span><span class="token punctuation">)</span>
  <span class="token number">9.</span>\u6CE8\u89E3<span class="token operator">:</span>
    a<span class="token punctuation">.</span>\u5B9A\u4E49<span class="token operator">:</span>
      <span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> \u6CE8\u89E3\u540D<span class="token punctuation">{</span>
          \u6570\u636E\u7C7B\u578B \u5C5E\u6027\u540D<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          \u6570\u636E\u7C7B\u578B \u5C5E\u6027\u540D<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> \u503C<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    b<span class="token punctuation">.</span>\u4F7F\u7528<span class="token operator">:</span>
      @\u6CE8\u89E3\u540D<span class="token punctuation">(</span>\u5C5E\u6027\u540D <span class="token operator">=</span> <span class="token string">&quot;\u5C5E\u6027\u503C&quot;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span>\u6CE8\u89E3\u89E3\u6790<span class="token operator">:</span>
      <span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span>\u6CE8\u89E3\u7684<span class="token keyword">class</span>\u5BF9\u8C61<span class="token punctuation">)</span><span class="token operator">-&gt;</span> \u5224\u65AD\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u662F\u5426\u6709\u6307\u5B9A\u7684\u6CE8\u89E3
      <span class="token function">getAnnotation</span><span class="token punctuation">(</span>\u6CE8\u89E3\u7684<span class="token keyword">class</span>\u5BF9\u8C61<span class="token punctuation">)</span><span class="token operator">:</span>\u83B7\u53D6\u6307\u5B9A\u7684\u6CE8\u89E3
  <span class="token number">10.</span>\u5143\u6CE8\u89E3<span class="token operator">:</span>\u7BA1\u7406\u6CE8\u89E3\u7684\u6CE8\u89E3
      <span class="token annotation punctuation">@Target</span><span class="token operator">:</span>\u63A7\u5236\u81EA\u5B9A\u4E49\u6CE8\u89E3\u80FD\u653E\u5230\u4EC0\u4E48\u4F4D\u7F6E\u4E0A
      <span class="token annotation punctuation">@Retention</span><span class="token operator">:</span>\u63A7\u5236\u81EA\u5B9A\u4E49\u6CE8\u89E3\u7684\u751F\u547D\u5468\u671F
 
 \u4ECA\u65E5\u91CD\u70B9<span class="token operator">:</span>
  <span class="token number">1.</span>\u4F1A\u5B89\u88C5mysql\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF
  <span class="token number">2.</span>\u4F1A\u4F7F\u7528sql\u8BED\u53E5\u521B\u5EFA\u6570\u636E\u5E93<span class="token punctuation">,</span>\u5220\u9664\u6570\u636E\u5E93
  <span class="token number">3.</span>\u4F1A\u4F7F\u7528sql\u8BED\u53E5\u521B\u5EFA\u8868<span class="token punctuation">,</span>\u5220\u9664\u8868
  <span class="token number">4.</span>\u4F1A\u4F7F\u7528sql\u8BED\u53E5\u5BF9\u8868\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u589E<span class="token punctuation">,</span>\u5220<span class="token punctuation">,</span>\u6539<span class="token punctuation">,</span>\u67E5
  <span class="token number">5.</span>\u4F1A\u5728\u521B\u5EFA\u8868\u7684\u65F6\u5019\u52A0\u7EA6\u675F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7B2C\u4E00\u7AE0-\u6570\u636E\u5E93\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u7AE0-\u6570\u636E\u5E93\u4ECB\u7ECD" aria-hidden="true">#</a> \u7B2C\u4E00\u7AE0.\u6570\u636E\u5E93\u4ECB\u7ECD</h1><h2 id="_1-\u6570\u636E\u5E93\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u5E93\u4ECB\u7ECD" aria-hidden="true">#</a> 1.\u6570\u636E\u5E93\u4ECB\u7ECD</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span>\u4EC0\u4E48\u662F\u6570\u636E\u5E93
  \u5B58\u50A8\u6570\u636E\u7684\u4ED3\u5E93
<span class="token number">2.</span>\u4F5C\u7528<span class="token operator">:</span>
  \u6C38\u4E45\u5B58\u6570\u636E<span class="token operator">-&gt;</span>\u4F1A\u5C06\u6570\u636E\u6309\u7167\u6307\u5B9A\u7684\u683C\u5F0F\u5B58\u50A8<span class="token punctuation">,</span>\u65B9\u4FBF\u6211\u4EEC\u7A0B\u5E8F\u5458\u76F4\u63A5\u5BF9\u6307\u5B9A\u7684\u6570\u636E\u8FDB\u884C\u589E\u5220\u6539\u67E5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF" aria-hidden="true">#</a> 2.\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u6307\u7684\u662F\u4E00\u79CD\u64CD\u4F5C\u548C\u7BA1\u7406\u6570\u636E\u5E93\u7684\u5927\u578B\u8F6F\u4EF6<span class="token punctuation">,</span>\u7528\u4E8E\u5EFA\u7ACB<span class="token punctuation">,</span>\u4F7F\u7528\u548C\u7EF4\u62A4\u6570\u636E\u5E93<span class="token punctuation">,</span>\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u7EDF\u4E00\u7684\u7BA1\u7406\u548C\u63A7\u5236<span class="token punctuation">,</span>\u4EE5\u4FDD\u8BC1\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u548C\u5B8C\u6574\u6027<span class="token punctuation">,</span>\u7528\u6237\u901A\u8FC7\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u8BBF\u95EE\u6570\u636E\u5E93\u7684\u6570\u636E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031646845.png" alt="image-20220402090359410" style="zoom:80%;"><h2 id="_3-\u6570\u636E\u5E93\u8868" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u5E93\u8868" aria-hidden="true">#</a> 3.\u6570\u636E\u5E93\u8868</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span>\u6570\u636E\u5E93\u4E2D\u8981\u521B\u5EFA\u5F88\u591A\u5F20\u8868<span class="token punctuation">,</span>\u800C\u8868\u624D\u662F\u6211\u4EEC\u771F\u6B63\u5B58\u50A8\u6570\u636E\u7684\u5730\u65B9
<span class="token number">2.</span>\u8868\u7684\u7EC4\u6210\u90E8\u5206<span class="token operator">:</span>
  a<span class="token punctuation">.</span>\u8868\u540D
  b<span class="token punctuation">.</span>\u5B57\u6BB5\u540D<span class="token operator">-&gt;</span>\u6BCF\u5217\u7684\u5B57\u6BB5\u53EB\u5565
  c<span class="token punctuation">.</span>\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u90FD\u6709\u5BF9\u5E94\u7684\u6570\u636E\u7C7B\u578B
<span class="token number">3.</span>\u8868\u548Cjava\u4E2D\u7684javabean\u5BF9\u5E94
  \u8868\u540D<span class="token operator">-&gt;</span>\u7C7B\u540D
  \u5B57\u6BB5<span class="token operator">-&gt;</span>\u5C5E\u6027
  \u8868\u4E2D\u7684\u6BCF\u4E00\u884C\u6570\u636E<span class="token operator">-&gt;</span>\u5BF9\u8C61
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u6570\u636E\u5E93\u8868\u548Cjava\u7C7B\u7684\u5BF9\u5E94\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_4-\u6570\u636E\u5E93\u8868\u548Cjava\u7C7B\u7684\u5BF9\u5E94\u5173\u7CFB" aria-hidden="true">#</a> 4.\u6570\u636E\u5E93\u8868\u548CJava\u7C7B\u7684\u5BF9\u5E94\u5173\u7CFB</h2><img src="https://photo.sneoo.com/spring5/202207031646846.png" alt="image-20220317095708111" style="zoom:80%;"><img src="https://photo.sneoo.com/spring5/202207031646847.png" alt="image-20220402091923836" style="zoom:80%;"><h1 id="\u7B2C\u4E8C\u7AE0-mysql8\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u7AE0-mysql8\u5B89\u88C5" aria-hidden="true">#</a> \u7B2C\u4E8C\u7AE0.mysql8\u5B89\u88C5</h1><h2 id="_1-mysql\u6570\u636E\u5E93\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-mysql\u6570\u636E\u5E93\u5B89\u88C5" aria-hidden="true">#</a> 1.MySQL\u6570\u636E\u5E93\u5B89\u88C5</h2><p><img src="https://photo.sneoo.com/spring5/202207031646848.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646849.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646850.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646851.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646852.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646853.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646854.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646855.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646856.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646857.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646858.png" alt=""></p><p><img src="https://photo.sneoo.com/spring5/202207031646859.png" alt=""></p><h2 id="_2-\u6570\u636E\u5E93\u670D\u52A1\u542F\u52A8\u548C\u505C\u6B62" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u636E\u5E93\u670D\u52A1\u542F\u52A8\u548C\u505C\u6B62" aria-hidden="true">#</a> 2.\u6570\u636E\u5E93\u670D\u52A1\u542F\u52A8\u548C\u505C\u6B62</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">MySQL</span>\u8F6F\u4EF6\u7684\u670D\u52A1\u5668\u7AEF\u5FC5\u987B\u5148\u542F\u52A8\uFF0C\u5BA2\u6237\u7AEF\u624D\u53EF\u4EE5\u8FDE\u63A5\u548C\u4F7F\u7528\u4F7F\u7528\u6570\u636E\u5E93\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-1-\u65B9\u5F0F1-\u56FE\u5F62\u5316\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u5F0F1-\u56FE\u5F62\u5316\u65B9\u5F0F" aria-hidden="true">#</a> 2.1.\u65B9\u5F0F1:\u56FE\u5F62\u5316\u65B9\u5F0F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">*</span> \u8BA1\u7B97\u673A\uFF08\u70B9\u51FB\u9F20\u6807\u53F3\u952E\uFF09<span class="token operator">==</span>\u300B\u7BA1\u7406\uFF08\u70B9\u51FB\uFF09<span class="token operator">==</span>\u300B\u670D\u52A1\u548C\u5E94\u7528\u7A0B\u5E8F\uFF08\u70B9\u51FB\uFF09<span class="token operator">==</span>\u300B\u670D\u52A1\uFF08\u70B9\u51FB\uFF09<span class="token operator">==</span>\u300B<span class="token class-name">MySQL57</span>\uFF08\u70B9\u51FB\u9F20\u6807\u53F3\u952E\uFF09<span class="token operator">==</span>\u300B\u542F\u52A8\u6216\u505C\u6B62\uFF08\u70B9\u51FB\uFF09
<span class="token operator">*</span> \u63A7\u5236\u9762\u677F\uFF08\u70B9\u51FB\uFF09<span class="token operator">==</span>\u300B\u7CFB\u7EDF\u548C\u5B89\u5168\uFF08\u70B9\u51FB\uFF09<span class="token operator">==</span>\u300B\u7BA1\u7406\u5DE5\u5177\uFF08\u70B9\u51FB\uFF09<span class="token operator">==</span>\u300B\u670D\u52A1\uFF08\u70B9\u51FB\uFF09<span class="token operator">==</span>\u300B<span class="token class-name">MySQL57</span>\uFF08\u70B9\u51FB\u9F20\u6807\u53F3\u952E\uFF09<span class="token operator">==</span>\u300B\u542F\u52A8\u6216\u505C\u6B62\uFF08\u70B9\u51FB\uFF09
<span class="token operator">*</span> \u4EFB\u52A1\u680F\uFF08\u70B9\u51FB\u9F20\u6807\u53F3\u952E\uFF09<span class="token operator">==</span>\u300B\u542F\u52A8\u4EFB\u52A1\u7BA1\u7406\u5668\uFF08\u70B9\u51FB\uFF09<span class="token operator">==</span>\u300B\u670D\u52A1\uFF08\u70B9\u51FB\uFF09<span class="token operator">==</span>\u300B<span class="token class-name">MySQL57</span>\uFF08\u70B9\u51FB\u9F20\u6807\u53F3\u952E\uFF09<span class="token operator">==</span>\u300B\u542F\u52A8\u6216\u505C\u6B62\uFF08\u70B9\u51FB\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u65B9\u5F0F2-\u547D\u4EE4\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u5F0F2-\u547D\u4EE4\u65B9\u5F0F" aria-hidden="true">#</a> 2.2.\u65B9\u5F0F2:\u547D\u4EE4\u65B9\u5F0F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u542F\u52A8 <span class="token class-name">MySQL</span> \u670D\u52A1\u547D\u4EE4\uFF1A
net start <span class="token class-name">MySQL80</span>

\u505C\u6B62 <span class="token class-name">MySQL</span> \u670D\u52A1\u547D\u4EE4\uFF1A
net stop <span class="token class-name">MySQL80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u914D\u7F6E\u6570\u636E\u5E93\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E\u6570\u636E\u5E93\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> 3.\u914D\u7F6E\u6570\u636E\u5E93\u73AF\u5883\u53D8\u91CF</h2><h3 id="_3-1-\u65B9\u5F0F1-\u4F7F\u7528mysql-home" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65B9\u5F0F1-\u4F7F\u7528mysql-home" aria-hidden="true">#</a> 3.1.\u65B9\u5F0F1:\u4F7F\u7528MYSQL_HOME</h3><table><thead><tr><th style="text-align:center;">\u73AF\u5883\u53D8\u91CF\u540D</th><th style="text-align:center;">\u64CD\u4F5C</th><th style="text-align:center;">\u73AF\u5883\u53D8\u91CF\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">MYSQL_HOME</td><td style="text-align:center;">\u65B0\u5EFA</td><td style="text-align:center;">D:\\ProgramFiles\\mysql\\MySQLServer5.7</td></tr><tr><td style="text-align:center;">path</td><td style="text-align:center;">\u7F16\u8F91</td><td style="text-align:center;">%MYSQL_HOME%\\bin</td></tr></tbody></table><h3 id="_3-2-\u65B9\u5F0F2-\u76F4\u63A5\u914D\u7F6Emysql\u7684bin\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_3-2-\u65B9\u5F0F2-\u76F4\u63A5\u914D\u7F6Emysql\u7684bin\u8DEF\u5F84" aria-hidden="true">#</a> 3.2.\u65B9\u5F0F2:\u76F4\u63A5\u914D\u7F6Emysql\u7684bin\u8DEF\u5F84</h3><table><thead><tr><th style="text-align:center;">\u73AF\u5883\u53D8\u91CF\u540D</th><th style="text-align:center;">\u64CD\u4F5C</th><th style="text-align:center;">\u73AF\u5883\u53D8\u91CF\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:center;">\u7F16\u8F91</td><td style="text-align:center;">D:\\ProgramFiles\\mysql\\MySQLServer5.7\\bin</td></tr></tbody></table><h2 id="_4-\u6570\u636E\u5E93\u670D\u52A1\u7AEF\u5B89\u88C5\u4E4B\u540E\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#_4-\u6570\u636E\u5E93\u670D\u52A1\u7AEF\u5B89\u88C5\u4E4B\u540E\u767B\u9646" aria-hidden="true">#</a> 4.\u6570\u636E\u5E93\u670D\u52A1\u7AEF\u5B89\u88C5\u4E4B\u540E\u767B\u9646</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span>win<span class="token operator">+</span><span class="token class-name">R</span><span class="token operator">--</span><span class="token operator">&gt;</span>\u8C03\u51FA\u9ED1\u7A97\u53E3
<span class="token number">2.</span>\u767B\u5F55\u547D\u4EE4<span class="token operator">:</span>
  a<span class="token punctuation">.</span>mysql <span class="token operator">-</span>u\u7528\u6237\u540D <span class="token operator">-</span>p\u5BC6\u7801<span class="token operator">-&gt;</span>\u56DE\u8F66   <span class="token operator">-&gt;</span> \u7F3A\u70B9<span class="token punctuation">,</span>\u5728\u767B\u5F55\u7684\u65F6\u5019\u5BC6\u7801\u663E\u793A\u51FA\u6765\u4E86
  b<span class="token punctuation">.</span>mysql <span class="token operator">-</span>u \u7528\u6237\u540D <span class="token operator">-</span>p   <span class="token operator">-&gt;</span>\u56DE\u8F66
    \u8F93\u5165\u5BC6\u7801<span class="token punctuation">(</span>\u5BC6\u7801\u5C06\u663E\u793A\u6210\u5C0F\u661F\u661F<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u95EE\u9898:\u8F93\u5165mysql\u547D\u4EE4\u51FA\u73B0&quot;\u4E0D\u662F\u5185\u90E8\u6216\u5916\u90E8\u547D\u4EE4&quot;
\u539F\u56E0:\u73AF\u5883\u53D8\u91CF\u6CA1\u914D\u7F6E
\u89E3\u51B3:\u5C06mysql\u5B89\u88C5\u8DEF\u5F84\u4E0B\u7684bin\u76EE\u5F55\u590D\u5236\u5230\u73AF\u5883\u53D8\u91CF\u4E0B\u7684path\u4E2D
    \u5982\u679Cpath\u4E0B\u6709,\u8FD8\u51FA\u73B0\u4E86&quot;\u4E0D\u662F\u5185\u90E8\u6216\u8005\u5916\u90E8\u547D\u4EE4&quot;,\u5E72\u6389\u91CD\u65B0\u914D\u7F6E\u4E00\u4E0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u95EE\u9898<span class="token operator">:</span><span class="token class-name">ERROR</span> <span class="token number">1045</span> <span class="token punctuation">(</span><span class="token number">28000</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Access</span> denied <span class="token keyword">for</span> user <span class="token char">&#39;root&#39;</span>@&#39;localhost&#39; <span class="token punctuation">(</span>using password<span class="token operator">:</span> YES<span class="token punctuation">)</span>
\u539F\u56E0<span class="token operator">:</span>\u8F93\u5165\u7684mysql\u7528\u6237\u540D\u6216\u8005\u5BC6\u7801\u6709\u95EE\u9898
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u95EE\u9898<span class="token operator">:</span><span class="token class-name">ERROR</span> <span class="token number">2003</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Can</span>&#39;t connect <span class="token keyword">to</span> <span class="token class-name">MySQL</span> server on &#39;localhost&#39; <span class="token punctuation">(</span><span class="token number">10061</span><span class="token punctuation">)</span>
\u539F\u56E0<span class="token operator">:</span>mysql\u670D\u52A1\u6CA1\u6709\u542F\u52A8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u9ED1\u7A97\u53E3\u4E71\u7801\u95EE\u9898-\u53EF\u4EE5\u5FFD\u7565" tabindex="-1"><a class="header-anchor" href="#_5-\u9ED1\u7A97\u53E3\u4E71\u7801\u95EE\u9898-\u53EF\u4EE5\u5FFD\u7565" aria-hidden="true">#</a> 5.\u9ED1\u7A97\u53E3\u4E71\u7801\u95EE\u9898(\u53EF\u4EE5\u5FFD\u7565)</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span>\u5728\u9ED1\u7A97\u53E3\u4E2D\u9ED8\u8BA4\u7F16\u7801\u4E3AGBK<span class="token punctuation">,</span>\u800C\u6211\u4EECmysql\u4E3AUTF<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span>\u6240\u4EE5\u5728\u9ED1\u7A97\u53E3\u4E2D\u64CD\u4F5C\u4E2D\u6587\u5C31\u4F1A\u4E71\u7801
<span class="token number">2.</span>\u89E3\u51B3<span class="token operator">:</span>
  a<span class="token punctuation">.</span>\u5728\u9ED1\u7A97\u53E3\u4E2D\u8F93\u5165<span class="token operator">:</span>set names gbk   <span class="token operator">-&gt;</span>\u4E34\u65F6\u5C06mysql\u7F16\u7801\u4FEE\u6539\u6210gbk
  b<span class="token punctuation">.</span>\u5728mysql\u5B89\u88C5\u8DEF\u5F84\u4E0B\u4FEE\u6539my<span class="token punctuation">.</span>ini\u6587\u4EF6\uFF0C\u5C06\u6D89\u53CA\u5230\u7F16\u7801\u7684\u5730\u65B9\u90FD\u4FEE\u6539\u4E86<span class="token punctuation">,</span>\u91CD\u542F\u670D\u52A1\u6240\u6709\u5730\u65B9\u751F\u6548\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u5728\u8DEF\u5F84\uFF1A<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">ProgramFiles</span>\\mysql\\<span class="token class-name">MySQLServer8</span>\\<span class="token class-name">Data</span> \u627E\u5230my<span class="token punctuation">.</span>ini\u6587\u4EF6

\u4FEE\u6539\u5185\u5BB9<span class="token number">1</span>\uFF1A
	\u627E\u5230<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>\u547D\u4EE4\uFF0C\u5927\u6982\u5728<span class="token number">63</span>\u884C\u5DE6\u53F3\uFF0C\u5728\u5176\u4E0B\u4E00\u884C\u6DFB\u52A0 
		<span class="token keyword">default</span><span class="token operator">-</span>character<span class="token operator">-</span>set<span class="token operator">=</span>utf8
\u4FEE\u6539\u5185\u5BB9<span class="token number">2</span><span class="token operator">:</span>
	\u627E\u5230<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>\u547D\u4EE4\uFF0C\u5927\u6982\u5728<span class="token number">76</span>\u884C\u5DE6\u53F3\uFF0C\u5728\u5176\u4E0B\u4E00\u884C\u6DFB\u52A0
		character<span class="token operator">-</span>set<span class="token operator">-</span>server<span class="token operator">=</span>utf8
		collation<span class="token operator">-</span>server<span class="token operator">=</span>utf8_general_ci

\u4FEE\u6539\u5B8C\u6BD5\u540E\uFF0C\u91CD\u542F<span class="token class-name">MySQL57</span>\u670D\u52A1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>show variables like &#39;character_<span class="token operator">%</span>&#39;<span class="token punctuation">;</span>
show variables like &#39;collation_<span class="token operator">%</span>&#39;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://photo.sneoo.com/spring5/202207031646860.png" alt="image-20210913231100322"></p><h2 id="_6-mysql\u5BA2\u6237\u7AEF-\u53EF\u89C6\u5316\u5DE5\u5177-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_6-mysql\u5BA2\u6237\u7AEF-\u53EF\u89C6\u5316\u5DE5\u5177-\u5B89\u88C5" aria-hidden="true">#</a> 6.mysql\u5BA2\u6237\u7AEF(\u53EF\u89C6\u5316\u5DE5\u5177)\u5B89\u88C5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u4F8B\u5982\uFF1A<span class="token class-name">Navicat</span> <span class="token class-name">Preminum</span>\uFF0C<span class="token class-name">SQLyog</span> \u7B49\u5DE5\u5177
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-1-sqlyog" tabindex="-1"><a class="header-anchor" href="#_6-1-sqlyog" aria-hidden="true">#</a> 6.1.SQLyog</h3><p><img src="https://photo.sneoo.com/spring5/202207031646861.png" alt="image-20210913231743884"></p><img src="https://photo.sneoo.com/spring5/202207031646862.png" alt="image-20220402094150194" style="zoom:80%;"><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u901A\u8FC7\u9ED1\u7A97\u53E3\u5148\u767B\u5F55\u6570\u636E\u5E93
\u5904\u7406\u65E0\u6CD5\u8FDE\u63A5\uFF1AALTER USER <span class="token char">&#39;root&#39;</span>@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY <span class="token char">&#39;\u4F60\u7684\u5BC6\u7801&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-navicat" tabindex="-1"><a class="header-anchor" href="#_6-2-navicat" aria-hidden="true">#</a> 6.2.Navicat</h3><p><img src="https://photo.sneoo.com/spring5/202207031646863.png" alt="image-20210913231808531"></p><h1 id="\u7B2C\u4E09\u7AE0-sql\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u7AE0-sql\u8BED\u53E5" aria-hidden="true">#</a> \u7B2C\u4E09\u7AE0.sql\u8BED\u53E5</h1><h2 id="_1-sql\u8BED\u8A00\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-sql\u8BED\u8A00\u4ECB\u7ECD" aria-hidden="true">#</a> 1.sql\u8BED\u8A00\u4ECB\u7ECD</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span>\u6982\u8FF0<span class="token operator">:</span>\u662F\u4E00\u79CD\u6570\u636E\u5E93\u8BA4\u8BC6\u7684\u8BED\u8A00<span class="token punctuation">,</span>\u662F\u6240\u6709\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u4E00\u4E2A\u6807\u51C6
<span class="token number">2.</span>\u6CE8\u610F<span class="token operator">:</span>\u5173\u7CFB\u578B\u6570\u636E\u5E93\u90FD\u8981\u9075\u5FAA\u8FD9\u4E2Asql\u8BED\u53E5\u89C4\u8303<span class="token punctuation">,</span>\u4F46\u662F\u6BCF\u4E00\u6B3E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u90FD\u8981\u81EA\u5DF1\u7684\u7279\u70B9
       \u8FD9\u79CD\u5177\u6709\u81EA\u5DF1\u7279\u6709\u7684sql\u8BED\u6CD5<span class="token punctuation">,</span>\u53EB\u505A\u6570\u636E\u5E93\u65B9\u8A00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031646864.png" alt="image-20220402102056578" style="zoom:80%;"><h2 id="_2-sql\u8BED\u8A00\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-sql\u8BED\u8A00\u5206\u7C7B" aria-hidden="true">#</a> 2.sql\u8BED\u8A00\u5206\u7C7B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">-</span> \u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF1A\u7B80\u79F0<span class="token function">DDL</span><span class="token punctuation">(</span><span class="token class-name">Data</span> <span class="token class-name">Definition</span> <span class="token class-name">Language</span><span class="token punctuation">)</span>\uFF0C\u7528\u6765\u5B9A\u4E49\u6570\u636E\u5E93\u5BF9\u8C61\uFF1A\u6570\u636E\u5E93\uFF0C\u8868\uFF0C\u5217\u7B49\u3002\u5173\u952E\u5B57\uFF1Acreate\uFF0Calter\uFF0Cdrop\u7B49 

<span class="token operator">-</span> \u6570\u636E\u64CD\u4F5C\u8BED\u8A00\uFF1A\u7B80\u79F0<span class="token function">DML</span><span class="token punctuation">(</span><span class="token class-name">Data</span> <span class="token class-name">Manipulation</span> <span class="token class-name">Language</span><span class="token punctuation">)</span>\uFF0C\u7528\u6765\u5BF9\u6570\u636E\u5E93\u4E2D\u8868\u7684\u8BB0\u5F55\u8FDB\u884C\u64CD\u4F5C\u3002\u5173\u952E\u5B57\uFF1Ainsert\uFF0Cdelete\uFF0Cupdate\u7B49

<span class="token operator">-</span> \u6570\u636E\u63A7\u5236\u8BED\u8A00\uFF1A\u7B80\u79F0<span class="token function">DCL</span><span class="token punctuation">(</span><span class="token class-name">Data</span> <span class="token class-name">Control</span> <span class="token class-name">Language</span><span class="token punctuation">)</span>\uFF0C\u7528\u6765\u5B9A\u4E49\u6570\u636E\u5E93\u7684\u8BBF\u95EE\u6743\u9650\u548C\u5B89\u5168\u7EA7\u522B\uFF0C\u53CA\u521B\u5EFA\u7528\u6237\u3002

<span class="token operator">-</span> \u6570\u636E\u67E5\u8BE2\u8BED\u8A00\uFF1A\u7B80\u79F0<span class="token function">DQL</span><span class="token punctuation">(</span><span class="token class-name">Data</span> <span class="token class-name">Query</span> <span class="token class-name">Language</span><span class="token punctuation">)</span>\uFF0C\u7528\u6765\u67E5\u8BE2\u6570\u636E\u5E93\u4E2D\u8868\u7684\u8BB0\u5F55\u3002\u5173\u952E\u5B57\uFF1Aselect\uFF0Cfrom\uFF0Cwhere\u7B49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-sql\u8BED\u53E5\u7684\u901A\u7528\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-sql\u8BED\u53E5\u7684\u901A\u7528\u8BED\u6CD5" aria-hidden="true">#</a> 3.sql\u8BED\u53E5\u7684\u901A\u7528\u8BED\u6CD5</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token number">1.</span><span class="token operator">-</span> <span class="token keyword">SQL</span>\u8BED\u53E5\u53EF\u4EE5\u5355\u884C\u6216\u591A\u884C\u4E66\u5199\uFF0C\u4EE5\u5206\u53F7\u7ED3\u5C3E
<span class="token number">2.</span><span class="token operator">-</span> \u53EF\u4F7F\u7528\u7A7A\u683C\u548C\u7F29\u8FDB\u6765\u589E\u5F3A\u8BED\u53E5\u7684\u53EF\u8BFB\u6027:\u57FA\u672C\u4E0A\u4E00\u4E2A\u5355\u8BCD\u5C31\u4E00\u4E2A\u7A7A\u683C
<span class="token number">3.</span><span class="token operator">-</span> MySQL\u6570\u636E\u5E93\u7684<span class="token keyword">SQL</span>\u8BED\u53E5\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u5173\u952E\u5B57\u5EFA\u8BAE\u4F7F\u7528\u5927\u5199
  <span class="token operator">-</span> \u4F8B\u5982\uFF1A<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span>\u3002
<span class="token number">4.</span><span class="token operator">-</span> \u540C\u6837\u53EF\u4EE5\u4F7F\u7528<span class="token comment">/**/</span>\u7684\u65B9\u5F0F\u5B8C\u6210\u6CE8\u91CA  <span class="token comment">#</span>
    <span class="token comment">/*
     \u6211\u662F\u4E00\u4E2A\u6CE8\u91CA
    */</span>
    <span class="token comment">#\u6211\u4E5F\u662F\u4E00\u4E2A\u6CE8\u91CA</span>
   <span class="token comment">-- \u6211\u4E5F\u662F\u4E00\u4E2A\u6CE8\u91CA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-sql\u4E2D\u7684\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_4-sql\u4E2D\u7684\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 4.sql\u4E2D\u7684\u6570\u636E\u7C7B\u578B</h2><table><thead><tr><th><strong>\u7C7B\u578B\u540D\u79F0</strong></th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>int\uFF08\u6574\u6570\u957F\u5EA6\uFF09</td><td>\u6574\u6570\u7C7B\u578B</td></tr><tr><td>double</td><td>\u5C0F\u6570\u7C7B\u578B</td></tr><tr><td>decimal\uFF08m,d\uFF09</td><td>\u6307\u5B9A\u6574\u6570\u4F4D\u4E0E\u5C0F\u6570\u4F4D\u957F\u5EA6\u7684\u5C0F\u6570\u7C7B\u578B</td></tr><tr><td>date</td><td>\u65E5\u671F\u7C7B\u578B\uFF0C\u683C\u5F0F\u4E3Ayyyy-MM-dd\uFF0C\u5305\u542B\u5E74\u6708\u65E5\uFF0C\u4E0D\u5305\u542B\u65F6\u5206\u79D2 2020-01-01</td></tr><tr><td>datetime</td><td>\u65E5\u671F\u7C7B\u578B\uFF0C\u683C\u5F0F\u4E3A YYYY-MM-DD HH:MM:SS\uFF0C\u5305\u542B\u5E74\u6708\u65E5\u65F6\u5206\u79D2 \u52309999\u5E74</td></tr><tr><td>timestamp</td><td>\u65E5\u671F\u7C7B\u578B\uFF0C\u65F6\u95F4\u6233 \u4ECE1970\u5E74\u52302038\u5E74</td></tr><tr><td>varchar\uFF08\u5B57\u7B26\u4E32\u957F\u5EA6\uFF09</td><td>\u6587\u672C\u7C7B\u578B\uFF0C M\u4E3A0~65535\u4E4B\u95F4\u7684\u6574\u6570</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u6211\u4EEC\u5148\u5B66  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u7B2C\u56DB\u7AE0-mysql\u4E2D\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u7AE0-mysql\u4E2D\u8BED\u53E5" aria-hidden="true">#</a> \u7B2C\u56DB\u7AE0.mysql\u4E2D\u8BED\u53E5</h1><h2 id="_1-ddl\u4E4B\u6570\u636E\u5E93\u64CD\u4F5C-database" tabindex="-1"><a class="header-anchor" href="#_1-ddl\u4E4B\u6570\u636E\u5E93\u64CD\u4F5C-database" aria-hidden="true">#</a> 1.DDL\u4E4B\u6570\u636E\u5E93\u64CD\u4F5C\uFF1Adatabase</h2><h3 id="_1-1-\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-1-\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a> 1.1 \u521B\u5EFA\u6570\u636E\u5E93</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:create database
2.\u8BED\u6CD5:
  create database \u6570\u636E\u5E93\u540D charset utf8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F:</p><p>1.mysql\u9ED8\u8BA4\u7F16\u7801,\u62C9\u4E01\u6587,latin-1,\u6240\u4EE5\u521B\u5EFA\u5E93\u7684\u65F6\u5019,\u6307\u5B9A\u4E00\u4E0BUTF8</p><p>2.\u5982\u679C\u521B\u5EFA\u6570\u636E\u5E93\u7684\u65F6\u5019\u5FD8\u8BB0\u52A0utf8\u4E86,\u53EF\u4EE5\u540E\u6539</p><img src="https://photo.sneoo.com/spring5/202207031646865.png" alt="image-20220402103741002" style="zoom:80%;"><p>3.\u5728\u5199sql\u8BED\u53E5\u7684\u65F6\u5019,\u5982\u679C\u5E93\u540D,\u8868\u540D,\u5217\u540D\u548Csql\u8BED\u53E5\u7684\u5173\u952E\u5B57\u51B2\u7A81\u4E86,\u53EF\u4EE5\u7528\`\`\u5305\u88F9</p><img src="https://photo.sneoo.com/spring5/202207031646866.png" alt="image-20220402104308457" style="zoom:80%;"></blockquote><h3 id="_1-2-\u67E5\u770B\u6570\u636E\u5E93-\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#_1-2-\u67E5\u770B\u6570\u636E\u5E93-\u4E86\u89E3" aria-hidden="true">#</a> 1.2 \u67E5\u770B\u6570\u636E\u5E93(\u4E86\u89E3)</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>#\u67E5\u770B\u6240\u6709\u6570\u636E\u5E93
show databases;

#\u67E5\u770B\u6307\u5B9A\u6570\u636E\u5E93\u7684\u5B9A\u4E49\u4FE1\u606F
show create database \u6570\u636E\u5E93\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">#\u67E5\u770B\u6240\u6709\u6570\u636E\u5E93</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>

<span class="token comment">#\u67E5\u770B\u6307\u5B9A\u6570\u636E\u5E93\u7684\u5B9A\u4E49\u4FE1\u606F</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token number">220227</span>_java1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-\u5220\u9664\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5220\u9664\u6570\u636E\u5E93" aria-hidden="true">#</a> 1.3 \u5220\u9664\u6570\u636E\u5E93</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:drop
2.\u8BED\u6CD5:
  drop database \u6570\u636E\u5E93\u540D\u5B57
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DROP DATABASE 220227_java1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-\u4F7F\u7528\u6570\u636E\u5E93-\u5207\u6362\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-4-\u4F7F\u7528\u6570\u636E\u5E93-\u5207\u6362\u6570\u636E\u5E93" aria-hidden="true">#</a> 1.4 \u4F7F\u7528\u6570\u636E\u5E93(\u5207\u6362\u6570\u636E\u5E93)</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>use \u6570\u636E\u5E93\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>USE 220227_java1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031646867.png" alt="image-20220402104818326" style="zoom:80%;"><h3 id="_1-5-\u9F20\u6807\u70B9\u51FB-\u521B\u5EFA\u6570\u636E\u5E93-\u5220\u9664\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-5-\u9F20\u6807\u70B9\u51FB-\u521B\u5EFA\u6570\u636E\u5E93-\u5220\u9664\u6570\u636E\u5E93" aria-hidden="true">#</a> 1.5 \u9F20\u6807\u70B9\u51FB:\u521B\u5EFA\u6570\u636E\u5E93_\u5220\u9664\u6570\u636E\u5E93</h3><img src="https://photo.sneoo.com/spring5/202207031646868.png" alt="image-20220402111823153" style="zoom:80%;"><img src="https://photo.sneoo.com/spring5/202207031646869.png" alt="image-20220402111848226" style="zoom:80%;"><h2 id="_2-ddl\u4E4B\u8868\u64CD\u4F5C-table" tabindex="-1"><a class="header-anchor" href="#_2-ddl\u4E4B\u8868\u64CD\u4F5C-table" aria-hidden="true">#</a> 2.DDL\u4E4B\u8868\u64CD\u4F5C-&gt;table</h2><h3 id="_2-1-\u521B\u5EFA\u8868" tabindex="-1"><a class="header-anchor" href="#_2-1-\u521B\u5EFA\u8868" aria-hidden="true">#</a> 2.1 \u521B\u5EFA\u8868</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:create table
2.\u8BED\u6CD5:
  create table \u8868\u540D(
    \u5217\u540D \u6570\u636E\u7C7B\u578B(\u957F\u5EA6) [\u7EA6\u675F],
    \u5217\u540D \u6570\u636E\u7C7B\u578B(\u957F\u5EA6) [\u7EA6\u675F],
    \u5217\u540D \u6570\u636E\u7C7B\u578B(\u957F\u5EA6) [\u7EA6\u675F]
  );
 
4.\u6CE8\u610F:
  a.\u5982\u679C\u5B9A\u4E49\u5B8C\u4E00\u4E2A\u5217\u4E4B\u540E,\u540E\u9762\u8FD8\u6709\u5176\u4ED6\u7684\u5217,\u9700\u8981\u52A0,
  b.\u5982\u679C\u5B9A\u4E49\u6700\u540E\u4E00\u4E2A\u5217\u4E86,\u5C31\u4E0D\u7528\u52A0,
  c.\u4E00\u5F20\u8868\u5E94\u8BE5\u6709\u4E00\u4E2A\u4E3B\u952E(\u7EA6\u675F),  primary key
    \u5F53\u4E00\u5217\u8BBE\u7F6E\u6210\u4E3B\u952E\u4E86,\u6B64\u5217\u4E2D\u7684\u6570\u636E\u552F\u4E00,\u4E0D\u80FD\u91CD\u590D
    \u4E00\u4E2A\u4E3B\u952E\u53EF\u4EE5\u4EE3\u8868\u4E00\u6761\u6570\u636E(\u597D\u6BD4\u662F\u8EAB\u4EFD\u8BC1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE category(
   cid INT PRIMARY KEY,
   cname VARCHAR(10)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031646870.png" alt="image-20220402112548495" style="zoom:80%;"><h3 id="_2-3-\u67E5\u770B\u8868-\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-3-\u67E5\u770B\u8868-\u4E86\u89E3" aria-hidden="true">#</a> 2.3 \u67E5\u770B\u8868(\u4E86\u89E3)</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>#\u67E5\u770B\u6240\u6709\u8868
show tables;

#\u67E5\u770B\u8868\u7ED3\u6784
desc \u8868\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>#\u67E5\u770B\u6240\u6709\u8868
SHOW TABLES;

#\u67E5\u770B\u8868\u7ED3\u6784
DESC category;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u5220\u9664\u8868" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5220\u9664\u8868" aria-hidden="true">#</a> 2.4 \u5220\u9664\u8868</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:drop table
2.\u8BED\u6CD5:
  drop table \u8868\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DROP TABLE category;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031646871.png" alt="image-20220402113500837" style="zoom:80%;"><img src="https://photo.sneoo.com/spring5/202207031646872.png" alt="image-20220402113646269" style="zoom:80%;"><h3 id="_2-5\u4FEE\u6539\u8868\u7ED3\u6784-\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-5\u4FEE\u6539\u8868\u7ED3\u6784-\u4E86\u89E3" aria-hidden="true">#</a> 2.5\u4FEE\u6539\u8868\u7ED3\u6784(\u4E86\u89E3)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>alter table \u8868\u540D add \u5217\u540D \u7C7B\u578B<span class="token punctuation">(</span>\u957F\u5EA6<span class="token punctuation">)</span> <span class="token punctuation">[</span>\u7EA6\u675F<span class="token punctuation">]</span><span class="token punctuation">;</span>
\u4F5C\u7528\uFF1A\u6DFB\u52A0\u5217<span class="token punctuation">.</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE category ADD \`desc\` VARCHAR(100);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>alter table \u8868\u540D modify \u5217\u540D \u7C7B\u578B(\u957F\u5EA6) [\u7EA6\u675F];
  \u4F5C\u7528\uFF1A\u4FEE\u6539\u5217\u7684\u7C7B\u578B,\u957F\u5EA6\u53CA\u7EA6\u675F.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE category MODIFY \`desc\` VARCHAR(10); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>  alter table \u8868\u540D change \u65E7\u5217\u540D \u65B0\u5217\u540D \u7C7B\u578B(\u957F\u5EA6) [\u7EA6\u675F]; 
  \u4F5C\u7528\uFF1A\u4FEE\u6539\u8868_\u4FEE\u6539\u5217\u540D.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE category CHANGE \`desc\` \`miaoshu\` VARCHAR(10);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>  alter table \u8868\u540D drop \u5217\u540D; 
  \u4F5C\u7528\uFF1A\u4FEE\u6539\u8868_\u5220\u9664\u5217.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE category DROP \`miaoshu\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code> rename table \u8868\u540D to \u65B0\u8868\u540D; 
 \u4F5C\u7528\uFF1A\u4FEE\u6539\u8868\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>RENAME TABLE category TO kind;

RENAME TABLE kind TO category;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-dml\u4E4B\u6570\u636E\u64CD\u4F5C\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#_3-dml\u4E4B\u6570\u636E\u64CD\u4F5C\u8BED\u8A00" aria-hidden="true">#</a> 3.DML\u4E4B\u6570\u636E\u64CD\u4F5C\u8BED\u8A00</h2><h3 id="_3-1-\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-1-\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> 3.1 \u63D2\u5165\u6570\u636E</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:insert into values
2.\u8BED\u6CD5:
  insert into \u8868\u540D(\u5217\u540D,\u5217\u540D) values (\u5177\u4F53\u7684\u503C,\u5177\u4F53\u7684\u503C)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
    insert into \u8868\u540D(\u5217\u540D,\u5217\u540D) values (\u5177\u4F53\u7684\u503C,\u5177\u4F53\u7684\u503C)
*/
INSERT INTO category (cid,cname) VALUES (1,&quot;\u852C\u83DC&quot;);

/*
   1.\u5982\u679C\u64CD\u4F5C\u8868\u4E2D\u7684\u6570\u636E,\u5BF9\u5E94\u7684\u7C7B\u4E3Avarchar\u7C7B\u578B,\u90A3\u4E48\u64CD\u4F5C\u6570\u636E\u65F6,\u4E0D\u5EFA\u8BAE\u7528\u53CC\u5F15\u53F7,\u63A8\u8350\u4F7F\u7528\u5355\u5F15\u53F7&#39;&#39;
   2.\u539F\u56E0:
     \u5C06\u6765\u6211\u4EEC\u80AF\u5B9A\u4E0D\u662F\u5728mysql\u4E2D\u76F4\u63A5\u5199sql\u8BED\u53E5,\u6211\u4EEC\u5199\u7684sql\u5E94\u8BE5\u653E\u5230java\u4E2D
     \u7136\u540E\u8C03\u7528java\u4E2D\u7684api\u53BB\u6267\u884C\u6211\u4EEC\u5199\u7684sql\u8BED\u53E5,\u4ECE\u800C\u64CD\u4F5Cmysql\u4E2D\u7684\u6570\u636E
     
   3.\u6240\u4EE5:\u5982\u679C\u5C06sql\u8BED\u53E5\u653E\u5230java\u8BED\u53E5\u4E2D\u600E\u4E48\u5199:\u5199\u5230String\u4E2D
     INSERT INTO category (cid,cname) VALUES (1,&quot;\u852C\u83DC&quot;);
     
     String sql = &quot;INSERT INTO category (cid,cname) VALUES (1,&quot;\u852C\u83DC&quot;);&quot;;
     
     \u4EE5\u4E0A\u4EE3\u7801\u8FD9\u6837\u5199\u4E0D\u884C
     
   4.\u5E94\u8BE5\u600E\u4E48\u5199?  \u5C06sql\u4E2D\u7684&quot;&quot;\u6539\u6210&#39;&#39;
     INSERT INTO category (cid,cname) VALUES (1,&#39;\u852C\u83DC&#39;);
     
     String sql = &quot;INSERT INTO category (cid,cname) VALUES (1,&#39;\u852C\u83DC&#39;);&quot;
   
*/

INSERT INTO category(cid,cname) VALUES (2,&#39;\u6C34\u679C&#39;);


/*
 \u5176\u4ED6insert\u65B9\u5F0F:\u4E0D\u7528\u76F4\u63A5\u6307\u5B9A\u5217\u540D,\u76F4\u63A5\u5199\u8981\u5B58\u7684\u6570\u636E
                 \u8981\u6C42\u5B58\u50A8\u7684\u6570\u636E\u8981\u5BF9\u5E94\u6240\u6709\u7684\u5217
 
*/

INSERT INTO category VALUES (3,&#39;\u73A9\u5177&#39;);


/*
  \u6279\u91CF\u6DFB\u52A0
  
  insert into \u8868\u540D(\u5217\u540D,\u5217\u540D) values (\u5177\u4F53\u503C,\u5177\u4F53\u503C),(\u5177\u4F53\u503C,\u5177\u4F53\u503C),(\u5177\u4F53\u503C,\u5177\u4F53\u503C),(\u5177\u4F53\u503C,\u5177\u4F53\u503C)
*/
INSERT INTO category VALUES (4,&#39;\u670D\u88C5&#39;),(5,&#39;\u7BB1\u5305&#39;),(6,&#39;\u7535\u8111&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> 3.2 \u5220\u9664\u6570\u636E</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:delete from
2.\u8BED\u6CD5:
  delete from \u8868\u540D-&gt; \u4E00\u6B21\u5168\u5220\u9664
  delete from \u8868\u540D where \u6761\u4EF6-&gt; \u6309\u7167\u6761\u4EF6\u5220\u9664
  
3.\u6761\u4EF6:java\u4E00\u6837

  java         mysql
   &gt;           &gt;
   &lt;           &lt;
   &gt;=          &gt;=
   &lt;=          &lt;=
   ==          =
   !=          !=  \u6216\u8005 &lt;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
  delete from \u8868\u540D-&gt; \u4E00\u6B21\u5168\u5220\u9664
*/
DELETE FROM category;

-- \u5220\u9664cid\u4E3A1\u7684\u8BB0\u5F55
DELETE FROM category WHERE cid = 1;

-- \u5220\u9664cid&gt;=5\u7684\u8BB0\u5F55
DELETE FROM category WHERE cid &gt;= 5;

-- \u5220\u9664cid\u4E0D\u7B49\u4E8E3\u7684\u8BB0\u5F55
DELETE FROM category WHERE cid != 3;

DELETE FROM category WHERE cid &lt;&gt; 3;

DELETE FROM category WHERE NOT(cid = 3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u4FEE\u6539\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-3-\u4FEE\u6539\u6570\u636E" aria-hidden="true">#</a> 3.3 \u4FEE\u6539\u6570\u636E</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:update set
2.\u8BED\u6CD5:
  update \u8868\u540D set \u5217\u540D = \u503C -&gt; \u662F\u5C06\u6307\u5B9A\u7684\u5217\u6240\u6709\u7684\u6570\u636E\u5168\u90E8\u4FEE\u6539
  update \u8868\u540D set \u5217\u540D = \u503C where \u6761\u4EF6 -&gt; \u6839\u636E\u6761\u4EF6\u4FEE\u6539\u6570\u636E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u4FEE\u6539\u6570\u636E
UPDATE category SET cname = &#39;\u5316\u5986\u54C1&#39;;

-- \u5C06\u8868\u4E2D\u7684\u852C\u83DC\u6539\u6210\u5BB6\u5177
UPDATE category SET cname = &#39;\u5BB6\u5177&#39; WHERE cname = &#39;\u852C\u83DC&#39;;

-- \u5C06cid\u4E3A6\u7684\u6570\u636E\u6539\u6210\u624B\u673A
UPDATE category SET cname = &#39;\u624B\u673A&#39; WHERE cid = 6;

-- \u5C06cid\u4E0D\u7B49\u4E8E1\u7684canme\u90FD\u6539\u6210\u5E73\u677F
UPDATE category SET cname = &#39;\u5E73\u677F&#39; WHERE cid&lt;&gt;1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7B2C\u4E94\u7AE0-\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E94\u7AE0-\u7EA6\u675F" aria-hidden="true">#</a> \u7B2C\u4E94\u7AE0.\u7EA6\u675F</h1><h2 id="_1-\u4E3B\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3B\u952E\u7EA6\u675F" aria-hidden="true">#</a> 1.\u4E3B\u952E\u7EA6\u675F</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u4E3B\u952E\u7EA6\u675F:primary key
2.\u4E3B\u952E\u5217\u4E2D\u7684\u6570\u636E\u6709\u4EC0\u4E48\u7279\u70B9:
  a.\u6570\u636E\u552F\u4E00,\u4E0D\u80FD\u91CD\u590D
  b.\u4E0D\u80FD\u4E3ANULL
  c.\u4E00\u4E2A\u4E3B\u952E\u76F8\u5F53\u4E8E\u4E00\u4E2A\u4EBA\u7684\u8EAB\u4EFD\u8BC1,\u4EE3\u8868\u4E00\u6574\u6761\u6570\u636E
3.\u6CE8\u610F:
  \u6BCF\u5F20\u8868\u4E2D\u90FD\u5E94\u8BE5\u6709\u4E00\u4E2A\u4E3B\u952E\u5217,\u4EE3\u8868\u4E00\u6761\u6570\u636E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-\u6DFB\u52A0\u65B9\u5F0F1-\u5728\u521B\u5EFA\u8868\u65F6-\u5728\u5B57\u6BB5\u540E\u9762\u76F4\u63A5\u6307\u5B9A-\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6DFB\u52A0\u65B9\u5F0F1-\u5728\u521B\u5EFA\u8868\u65F6-\u5728\u5B57\u6BB5\u540E\u9762\u76F4\u63A5\u6307\u5B9A-\u91CD\u70B9" aria-hidden="true">#</a> 1.1.\u6DFB\u52A0\u65B9\u5F0F1:\u5728\u521B\u5EFA\u8868\u65F6,\u5728\u5B57\u6BB5\u540E\u9762\u76F4\u63A5\u6307\u5B9A(\u91CD\u70B9)</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
  \u5728\u521B\u5EFA\u8868\u7684\u65F6\u5019\u76F4\u63A5\u6307\u5B9A\u4E3B\u952E\u7EA6\u675F
*/
CREATE TABLE category(
  cid INT PRIMARY KEY,
  cname VARCHAR(10)
);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u6DFB\u52A0\u65B9\u5F0F2-\u5728constraint\u7EA6\u675F\u533A\u57DF-\u53BB\u6307\u5B9A\u4E3B\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6DFB\u52A0\u65B9\u5F0F2-\u5728constraint\u7EA6\u675F\u533A\u57DF-\u53BB\u6307\u5B9A\u4E3B\u952E\u7EA6\u675F" aria-hidden="true">#</a> 1.2.\u6DFB\u52A0\u65B9\u5F0F2:\u5728constraint\u7EA6\u675F\u533A\u57DF,\u53BB\u6307\u5B9A\u4E3B\u952E\u7EA6\u675F</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u4EC0\u4E48\u662Fconstraint\u7EA6\u675F\u533A\u57DF:
  \u6700\u540E\u4E00\u5217\u540E\u9762\u548C\u53F3\u534A\u4E2A\u5C0F\u62EC\u53F7\u524D\u9762\u7684\u533A\u57DF
2.\u683C\u5F0F:
  [constraint \u540D\u5B57] primary key (\u5B57\u6BB5\u540D)
  
3.\u6CE8\u610F:[constraint \u540D\u5B57]:\u53EF\u5199\u53EF\u4E0D\u5199
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- [constraint \u540D\u5B57] primary key (\u5B57\u6BB5\u540D)

CREATE TABLE category(
  cid INT,
  cname VARCHAR(10),
  PRIMARY KEY (cid)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031646873.png" alt="image-20220402144239681" style="zoom:80%;"><h3 id="_1-3-\u6DFB\u52A0\u65B9\u5F0F3-\u901A\u8FC7\u4FEE\u6539\u8868\u7ED3\u6784\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6DFB\u52A0\u65B9\u5F0F3-\u901A\u8FC7\u4FEE\u6539\u8868\u7ED3\u6784\u7684\u65B9\u5F0F" aria-hidden="true">#</a> 1.3.\u6DFB\u52A0\u65B9\u5F0F3:\u901A\u8FC7\u4FEE\u6539\u8868\u7ED3\u6784\u7684\u65B9\u5F0F</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u683C\u5F0F:ALTER TABLE \u8868\u540D ADD [CONSTRAINT \u540D\u79F0] PRIMARY KEY (\u5B57\u6BB5\u5217\u8868)
2.\u6CE8\u610F:[CONSTRAINT \u540D\u79F0]\u53EF\u4EE5\u7701\u7565\u4E0D\u5199
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
  1.\u683C\u5F0F:ALTER TABLE \u8868\u540D ADD [CONSTRAINT \u540D\u79F0] PRIMARY KEY (\u5B57\u6BB5\u5217\u8868)
  2.\u6CE8\u610F:[CONSTRAINT \u540D\u79F0]\u53EF\u4EE5\u7701\u7565\u4E0D\u5199

*/

CREATE TABLE category(
  cid INT,
  cname VARCHAR(10)
);

ALTER TABLE category ADD PRIMARY KEY (cid);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>INSERT INTO category (cid,cname) VALUES (1,&#39;\u852C\u83DC&#39;);

INSERT INTO category (cid,cname) VALUES (1,&#39;\u6C34\u679C&#39;);-- \u9519\u8BEF,\u548C\u4E0A\u9762\u7684\u4E3B\u952E\u6570\u636E\u91CD\u590D

INSERT INTO category (cid,cname) VALUES (NULL,&#39;\u7BB1\u5305&#39;);-- \u9519\u8BEF,\u4E3B\u952E\u5217\u4E2D\u7684\u6570\u636E\u4E0D\u80FD\u662FNULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-\u8054\u5408\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#_1-4-\u8054\u5408\u4E3B\u952E" aria-hidden="true">#</a> 1.4.\u8054\u5408\u4E3B\u952E</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u4EC0\u4E48\u662F\u8054\u5408\u4E3B\u952E:
  \u591A\u4E2A\u5217\u7ED3\u5408\u79F0\u4E4B\u4E3A\u662F\u4E00\u4E2A\u4E3B\u952E
2.\u7279\u70B9:
  \u6570\u636E\u4E0D\u80FD\u5B8C\u5168\u4E00\u6837,\u4E0D\u80FD\u4E3ANULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE person(
  firstname VARCHAR(10), -- \u59D3
  lastname VARCHAR(10), -- \u540D
  address VARCHAR(10),-- \u5730\u5740
  city VARCHAR(10), -- \u57CE\u5E02
  
  PRIMARY KEY (firstname,lastname)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031646874.png" alt="image-20220402145642437" style="zoom:80%;"><h3 id="_1-5-\u5220\u9664\u4E3B\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_1-5-\u5220\u9664\u4E3B\u952E\u7EA6\u675F" aria-hidden="true">#</a> 1.5.\u5220\u9664\u4E3B\u952E\u7EA6\u675F</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE \u8868\u540D DROP PRIMARY KEY-&gt;\u5220\u9664\u4E3B\u952E\u7EA6\u675F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>#ALTER TABLE persons DROP PRIMARY KEY-&gt;\u5220\u9664\u4E3B\u952E\u7EA6\u675F
alter table persons drop primary key;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u81EA\u589E\u957F\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u589E\u957F\u7EA6\u675F" aria-hidden="true">#</a> 2.\u81EA\u589E\u957F\u7EA6\u675F</h2><h3 id="_2-1-\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-1-\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> 2.1.\u57FA\u672C\u64CD\u4F5C</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:
  auto_increment
2.\u4F7F\u7528:\u4E00\u822C\u548Cprimary key \u4E00\u8D77\u4F7F\u7528
3.\u6CE8\u610F:
  a.\u4E3B\u952E\u80FD\u4EE3\u8868\u4E00\u6761\u6570\u636E
  b.\u81EA\u589E\u957F\u5217,\u53EA\u80FD\u81EA\u52A8\u7EF4\u62A4\u6B64\u5217\u4E2D\u7684\u6570\u636E,\u53EF\u4EE5\u81EA\u52A8\u7F16\u53F7,\u4F46\u662F\u4E0D\u80FD\u4EE3\u8868\u4E00\u6761\u6570\u636E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE category(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(10)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE category(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(10)
);

-- \u7ED9\u81EA\u589E\u957F\u7684\u5217\u6DFB\u52A0\u6570\u636E
INSERT INTO category (cname) VALUES (&#39;\u624B\u673A&#39;);

-- \u4E3B\u952E\u81EA\u52A8\u7EF4\u62A4\u4E86,\u6240\u4EE5\u6211\u4EEC\u6DFB\u52A0\u6570\u636E\u65F6,\u4E0D\u7528\u7279\u610F\u6307\u5B9A\u4E3B\u952E\u5217\u4E86

INSERT INTO category (cname) VALUES (&#39;\u670D\u88C5&#39;),(&#39;\u7535\u8111&#39;);

-- \u5220\u9664cid\u4E3A6\u7684\u6570\u636E

DELETE FROM category WHERE cid = 6;


-- \u518D\u6B21\u6DFB\u52A0-&gt; \u4F1A\u4ECE\u88AB\u5220\u9664\u7684\u90A3\u4E2A\u7F16\u53F7\u5F00\u59CB,\u7EE7\u7EED\u5F80\u540E\u7F16\u53F7
INSERT INTO category (cname) VALUES (&#39;\u9F20\u6807&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>truncate table \u8868\u540D-&gt; \u6E05\u7A7A\u8868\u6570\u636E,\u6467\u6BC1\u8868\u7ED3\u6784
TRUNCATE TABLE category;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
\u81EA\u589E\u957F\u662F\u4E00\u4E2A\u7EA6\u675F,\u64CD\u4F5C\u8D77\u6765\u548C\u5176\u4ED6\u7EA6\u675F\u4E0D\u592A\u4E00\u6837

\u5982\u679C\u81EA\u589E\u957F\u7EA6\u675F\u548C\u4E3B\u952E\u7EA6\u675F\u5408\u8D77\u6765\u4F7F\u7528\u60F3\u5220\u9664

\u5148\u5220\u9664\u81EA\u589E\u957F\u7EA6\u675F
\u518D\u5220\u9664\u4E3B\u952E\u7EA6\u675F

*/

drop table category;
create table category(
cid int primary key auto_increment,
cname varchar(100)
);

alter table category modify cid int;

alter table category drop primary key;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-2-truncate\u548Cdelete\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-2-truncate\u548Cdelete\u533A\u522B" aria-hidden="true">#</a> 2.2.truncate\u548Cdelete\u533A\u522B</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5728\u81EA\u589E\u957F\u7684\u524D\u63D0\u4E0B:
  a.delete\u4E4B\u540E,\u91CD\u65B0\u6DFB\u52A0\u6570\u636E,\u81EA\u589E\u957F\u5217\u4E0D\u4F1A\u91CD\u65B0\u7F16\u53F7
  b.truncate\u4E4B\u540E,\u5C5E\u4E8EDDL,\u6467\u6BC1\u8868\u7ED3\u6784,\u5220\u9664\u8868\u8BB0\u5F55,\u91CD\u65B0\u6DFB\u52A0\u6570\u636E,\u81EA\u589E\u957F\u5217\u4F1A\u91CD\u65B0\u7F16\u53F7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u975E\u7A7A\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_3-\u975E\u7A7A\u7EA6\u675F" aria-hidden="true">#</a> 3.\u975E\u7A7A\u7EA6\u675F</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:  NOT NULL
2.\u7279\u70B9:
  \u6B64\u5217\u7684\u6570\u636E\u4E0D\u80FD\u4E3ANULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(10) NOT NULL
);

INSERT INTO product (pname) VALUES (&#39;Iphone13&#39;);


/*
   String s1 = null -&gt; \u4EE3\u8868s1\u4E3Anull,null\u4EE3\u8868\u6570\u636E\u4E0D\u5B58\u5728
   String s2 = &quot;null&quot; -&gt; s2\u662F\u6709\u6570\u636E\u7684,\u5B57\u7B26\u4E32\u5185\u5BB9\u4E3Anull
   String s3 = &quot;&quot;  -&gt; s3\u786E\u786E\u5B9E\u5B9E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32,\u53EA\u4E0D\u8FC7\u53CC\u5F15\u53F7\u4E2D\u6CA1\u5185\u5BB9
*/

INSERT INTO product (pname) VALUES (NULL); -- \u4E0D\u884C,pname\u7EA6\u675F\u4E3A\u975E\u7A7A\u7EA6\u675F,\u4E0D\u80FD\u662FNULL \u597D\u6BD4\u662FString s1 = null

INSERT INTO product (pname) VALUES (&#39;null&#39;);-- String s2 = &quot;null&quot;  \u53EF\u4EE5\u6DFB\u52A0

INSERT INTO product (pname) VALUES (&#39;&#39;);-- String s3 = &quot;&quot;  \u53EF\u4EE5\u6DFB\u52A0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u552F\u4E00\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_4-\u552F\u4E00\u7EA6\u675F" aria-hidden="true">#</a> 4.\u552F\u4E00\u7EA6\u675F</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:UNIQUE
2.\u7279\u70B9:
  UNIQUE\u4FEE\u9970\u7684\u5217\u4E2D\u7684\u6570\u636E\u4E0D\u80FD\u91CD\u590D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(20)UNIQUE
);

TRUNCATE TABLE product;

INSERT INTO product (pname) VALUES (&#39;\u82F9\u679C13&#39;);
INSERT INTO product (pname) VALUES (&#39;\u534E\u4E3A&#39;);
INSERT INTO product (pname) VALUES (&#39;\u82F9\u679C13&#39;);-- \u9519\u8BEF,\u56E0\u4E3Apname\u5217\u6709\u552F\u4E00\u7EA6\u675F,\u6570\u636E\u4E0D\u80FD\u4E00\u6837
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u552F\u4E00\u7EA6\u675F\u548C\u4E3B\u952E\u7EA6\u675F\u6709\u533A\u522B:
1.\u76F8\u540C\u70B9:
  \u6570\u636E\u90FD\u5E94\u8BE5\u662F\u552F\u4E00\u7684
2.\u4E0D\u540C\u70B9:
  a.\u4E3B\u952E\u7EA6\u675F:\u4E00\u4E2A\u8868\u4E2D\u53EA\u6709\u4E00\u4E2A\u4E3B\u952E
  b.\u552F\u4E00\u7EA6\u675F:\u4E00\u4E2A\u8868\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u5217\u4E3A\u552F\u4E00\u7EA6\u675F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5220\u9664\u552F\u4E00\u7EA6\u675F:
 ALTER TABLE persons DROP INDEX \u540D\u79F0   [\u540D\u79F0\u662FCONSTRAINT\u540E\u9762\u7684\u540D\u79F0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7B2C\u516D\u7AE0-\u7B80\u5355\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u516D\u7AE0-\u7B80\u5355\u67E5\u8BE2" aria-hidden="true">#</a> \u7B2C\u516D\u7AE0.\u7B80\u5355\u67E5\u8BE2</h1><h2 id="_1-\u6570\u636E\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u51C6\u5907" aria-hidden="true">#</a> 1.\u6570\u636E\u51C6\u5907</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>#\u521B\u5EFA\u5546\u54C1\u8868\uFF1A
create table product(
	pid int primary key,
	pname varchar(20),
	price double
);
INSERT INTO product(pid,pname,price) VALUES(1,&#39;\u8054\u60F3&#39;,5000);
INSERT INTO product(pid,pname,price) VALUES(2,&#39;\u6D77\u5C14&#39;,3000);
INSERT INTO product(pid,pname,price) VALUES(3,&#39;\u96F7\u795E&#39;,5000);
INSERT INTO product(pid,pname,price) VALUES(4,&#39;JACK JONES&#39;,800);
INSERT INTO product(pid,pname,price) VALUES(5,&#39;\u771F\u7EF4\u65AF&#39;,200);
INSERT INTO product(pid,pname,price) VALUES(6,&#39;\u82B1\u82B1\u516C\u5B50&#39;,440);
INSERT INTO product(pid,pname,price) VALUES(7,&#39;\u52B2\u9738&#39;,2000);
INSERT INTO product(pid,pname,price) VALUES(8,&#39;\u9999\u5948\u513F&#39;,800);
INSERT INTO product(pid,pname,price) VALUES(9,&#39;\u76F8\u5B9C\u672C\u8349&#39;,200);
INSERT INTO product(pid,pname,price) VALUES(10,&#39;\u9762\u9738&#39;,5);
INSERT INTO product(pid,pname,price) VALUES(11,&#39;\u597D\u60F3\u4F60\u67A3&#39;,56);
INSERT INTO product(pid,pname,price) VALUES(12,&#39;\u9999\u98D8\u98D8\u5976\u8336&#39;,1);
INSERT INTO product(pid,pname,price) VALUES(13,&#39;\u679C9&#39;,1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u7B80\u5355\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-\u7B80\u5355\u67E5\u8BE2" aria-hidden="true">#</a> 2.\u7B80\u5355\u67E5\u8BE2</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:select from where
2.\u8BED\u6CD5:
  select \u5217\u540D,\u5217\u540D from \u8868\u540D [where\u6761\u4EF6]
  
  select * from \u8868\u540D-&gt; \u67E5\u8BE2\u8868\u4E2D\u6240\u6709\u5217\u7684\u6570\u636E  * \u4EE3\u8868\u7684\u662F\u67E5\u8BE2\u7ED3\u679C\u5C55\u793A\u6240\u6709\u7684\u5217
  select \u5217\u540D from \u8868\u540D-&gt; \u67E5\u8BE2\u6307\u5B9A\u8FD9\u4E00\u5217\u7684\u6570\u636E   \u6700\u7EC8\u67E5\u8BE2\u7ED3\u679C\u53EA\u5C55\u793A\u6307\u5B9A\u7684\u4E00\u5217
  select \u5217\u540D from \u8868\u540D where \u6761\u4EF6-&gt; \u6309\u7167\u6307\u5B9A\u7684\u6761\u4EF6\u67E5\u8BE2\u6570\u636E
  
3.\u6CE8\u610F:
  a.select\u540E\u9762\u5199\u591A\u5C11\u5217,\u67E5\u8BE2\u7ED3\u679C\u5C31\u5C55\u793A\u591A\u5C11\u5217\u7684\u6570\u636E
    \u5199\u54EA\u4E9B\u5217,\u67E5\u8BE2\u7ED3\u679C\u5C31\u5C55\u793A\u54EA\u4E9B\u5217\u7684\u6570\u636E
  b.\u67E5\u8BE2\u51FA\u6765\u7684\u7ED3\u679C\u662F\u4E00\u5F20\u4F2A\u8868,\u8FD9\u4E2A\u8868\u7684\u6570\u636E\u662F\u53EA\u8BFB\u7684,\u4E0D\u80FD\u52A8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u67E5\u8BE2 product \u8868\u4E2D\u6240\u6709\u7684\u6570\u636E
SELECT * FROM product;

-- \u67E5\u8BE2\u5546\u54C1\u540D\u548C\u5546\u54C1\u4EF7\u683C
SELECT pname,price FROM product;

/*
  \u67E5\u8BE2\u7684\u8FC7\u7A0B\u4E2D,\u53EF\u4EE5\u7ED9\u8868\u8D77\u522B\u540D
  
  as \u522B\u540D
  
  \u6CE8\u610F: as\u53EF\u4EE5\u7701\u7565
  
  \u7ED9\u8868\u8D77\u522B\u540D,\u4E0D\u662F\u7528\u6765\u770B\u7684,\u800C\u662F\u540E\u9762\u7528\u6765\u8C03\u7528\u5B57\u6BB5\u7684
*/

SELECT * FROM product p;

/*
  \u7ED9\u5217\u8D77\u522B\u540D
  
  \u539F\u5217\u540D as \u522B\u540D -&gt; as\u53EF\u4EE5\u7701\u7565
*/

SELECT pname &#39;\u5546\u54C1\u540D&#39;, price &#39;\u4EF7\u683C&#39; FROM product;

/*
  \u53BB\u91CD\u590D\u503C
  
  \u5173\u952E\u5B57: distinct(\u5217\u540D)
*/

SELECT DISTINCT(price) FROM product;

/*

  \u67E5\u8BE2\u4E4B\u540E,\u53EF\u4EE5\u7ED9\u6307\u5B9A\u7684\u5217\u505A\u8BA1\u7B97
  
  \u5C06\u6240\u6709\u5546\u54C1\u7684\u4EF7\u683C+10\u540E\u5C55\u793A
*/

SELECT pname,price+10 &#39;newPrice&#39; FROM product;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6761\u4EF6\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_3-\u6761\u4EF6\u67E5\u8BE2" aria-hidden="true">#</a> 3.\u6761\u4EF6\u67E5\u8BE2</h2><table><thead><tr><th><strong>\u6BD4\u8F83\u8FD0\u7B97\u7B26</strong></th><th>&lt; &lt;= &gt;= = &lt;&gt;</th><th>\u5927\u4E8E\u3001\u5C0F\u4E8E\u3001\u5927\u4E8E(\u5C0F\u4E8E)\u7B49\u4E8E\u3001\u4E0D\u7B49\u4E8E</th></tr></thead><tbody><tr><td></td><td>BETWEEN ...AND...</td><td>\u663E\u793A\u5728\u67D0\u4E00\u533A\u95F4\u7684\u503C(\u542B\u5934\u542B\u5C3E)</td></tr><tr><td></td><td>\u5B57\u6BB5 IN(set)</td><td>\u663E\u793A\u5728in\u5217\u8868\u4E2D\u7684\u503C\uFF0C\u4F8B\uFF1Ain(100,200) \u67E5\u8BE2id\u4E3A1,3,7\u7684\u5546\u54C1: id in(1,3,7)</td></tr><tr><td></td><td>LIKE \u2018\u5F20pattern\u2019</td><td>\u6A21\u7CCA\u67E5\u8BE2\uFF0CLike\u8BED\u53E5\u4E2D\uFF0C% \u4EE3\u8868\u96F6\u4E2A\u6216\u591A\u4E2A\u4EFB\u610F\u5B57\u7B26\uFF0C_ \u4EE3\u8868\u4E00\u4E2A\u5B57\u7B26\uFF0C \u4F8B\u5982\uFF1A<code>first_name like &#39;_a%&#39;;</code> <br>\u6BD4\u5982:\u67E5\u8BE2\u59D3\u5F20\u7684\u4EBA:name like &#39;\u5F20%&#39;<br> \u67E5\u8BE2\u5546\u54C1\u540D\u4E2D\u5E26\u9999\u7684\u5546\u54C1: pname like &#39;%\u9999%&#39;<br>\u67E5\u8BE2\u7B2C\u4E8C\u4E2A\u5B57\u4E3A\u60F3\u7684\u5546\u54C1: like &#39;<em>\u60F3%&#39;<br>\u67E5\u8BE2\u5546\u54C1\u540D\u4E3A\u56DB\u4E2A\u5B57\u7684\u5546\u54C1:like &#39;</em>___&#39;</td></tr><tr><td></td><td>IS NULL</td><td>\u5224\u65AD\u662F\u5426\u4E3A\u7A7A</td></tr><tr><td><strong>\u903B\u8F91\u8FD0\u884C\u7B26</strong></td><td>and (\u4E0E)</td><td>\u591A\u4E2A\u6761\u4EF6\u540C\u65F6\u6210\u7ACB \u5168\u4E3Atrue,\u6574\u4F53\u624D\u4E3Atrue</td></tr><tr><td></td><td>or(\u6216)</td><td>\u591A\u4E2A\u6761\u4EF6\u4EFB\u4E00\u6210\u7ACB \u6709\u771F\u5219\u771F</td></tr><tr><td></td><td>not(\u975E)</td><td>\u4E0D\u6210\u7ACB\uFF0C\u4F8B\uFF1A<code>where not(salary&gt;100); </code></td></tr></tbody></table><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u67E5\u8BE2\u5546\u54C1\u540D\u4E3A&#39;\u82B1\u82B1\u516C\u5B50&#39;\u7684\u5546\u54C1\u6240\u6709\u4FE1\u606F
SELECT * FROM product WHERE pname = &#39;\u82B1\u82B1\u516C\u5B50&#39;;

-- \u67E5\u8BE2\u4EF7\u683C\u4E3A800\u7684\u5546\u54C1
SELECT pname,price FROM product WHERE price = 800;

-- \u67E5\u8BE2\u5546\u54C1\u4EF7\u683C\u5927\u4E8E60\u5143\u7684\u6240\u6709\u5546\u54C1\u4FE1\u606F
SELECT * FROM product WHERE price&gt;60;

-- \u67E5\u8BE2\u5546\u54C1\u4EF7\u683C\u5728200-1000\u4E4B\u95F4\u7684\u6240\u6709\u5546\u54C1\u4FE1\u606F
SELECT * FROM product WHERE price&gt;=200 AND price&lt;=1000;
SELECT * FROM product WHERE price BETWEEN 200 AND 1000;
SELECT * FROM product WHERE price BETWEEN 1000 AND 200; -- \u4E0D\u884C,\u5C0F\u7684\u653E\u524D\u9762,\u5927\u7684\u653E\u540E\u9762

-- \u67E5\u8BE2\u5546\u54C1\u4EF7\u683C\u662F200\u6216\u8005800\u7684\u5546\u54C1
SELECT * FROM product WHERE price = 200 OR price = 800;
SELECT * FROM product WHERE price IN (200,800);

-- \u67E5\u8BE2\u4EE5&#39;\u9999&#39;\u5F00\u5934\u7684\u5546\u54C1
SELECT pname,price FROM product WHERE pname LIKE &#39;\u9999%&#39;;

-- \u67E5\u8BE2\u542B\u6709&#39;\u9738&#39;\u7684\u5546\u54C1
SELECT pname,price FROM product WHERE pname LIKE &#39;%\u9738%&#39;;

-- \u67E5\u8BE2\u5546\u54C1\u540D\u4E3ANULL\u7684
SELECT * FROM product WHERE pname IS NULL;

-- \u67E5\u8BE2\u5546\u54C1\u540D\u4E0D\u4E3ANULL\u7684
SELECT * FROM product WHERE pname IS NOT NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u6392\u5E8F\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-\u6392\u5E8F\u67E5\u8BE2" aria-hidden="true">#</a> 4.\u6392\u5E8F\u67E5\u8BE2</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span>\u5173\u952E\u5B57<span class="token operator">:</span>order by  desc<span class="token operator">|</span>asc
<span class="token number">2.</span>\u8BED\u6CD5<span class="token operator">:</span>
  select \u5217\u540D from \u8868\u540D order by \u6392\u5E8F\u5B57\u6BB5 asc<span class="token operator">|</span>desc<span class="token operator">-&gt;</span> \u67E5\u8BE2\u4E4B\u540E\u8981\u6307\u660E\u5BF9\u54EA\u4E00\u5217\u8FDB\u884C\u6392\u5E8F
  
  asc<span class="token operator">:</span>\u5347\u5E8F<span class="token punctuation">(</span>\u9ED8\u8BA4<span class="token punctuation">)</span>
  desc<span class="token operator">:</span>\u964D\u5E8F
      
<span class="token number">3.</span>\u95EE\u9898<span class="token operator">:</span>\u5148\u67E5\u8BE2\u8FD8\u662F\u5148\u6392\u5E8F
      \u5148\u67E5\u8BE2<span class="token punctuation">,</span>\u540E\u6392\u5E8F
      \u800C\u4E14\u4E2D\u95F4\u4E0D\u7BA1\u52A0\u5565\u8BED\u6CD5<span class="token punctuation">,</span>\u90FD\u662F\u6700\u540E\u6392\u5E8F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4E66\u5199sql\u8BED\u53E5\u5173\u952E\u5B57\u7684\u987A\u5E8F
select 
from 
where 
group by 
having 
order by

\u6267\u884C\u987A\u5E8F:
from 
where 
group by 
having 
select 
order by

\u5148\u5B9A\u4F4D\u5230\u8981\u67E5\u8BE2\u54EA\u4E2A\u8868,\u7136\u540E\u6839\u636E\u4EC0\u4E48\u6761\u4EF6\u53BB\u67E5,\u8868\u786E\u5B9A\u597D\u4E86,\u6761\u4EF6\u4E5F\u786E\u5B9A\u597D\u4E86,\u5F00\u59CB\u5229\u7528select\u67E5\u8BE2
\u67E5\u8BE2\u5F97\u51FA\u4E00\u4E2A\u7ED3\u679C,\u5728\u9488\u5BF9\u8FD9\u4E2A\u7ED3\u679C\u8FDB\u884C\u4E00\u4E2A\u6392\u5E8F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u4F7F\u7528\u4EF7\u683C\u6392\u5E8F(\u964D\u5E8F)
SELECT * FROM product ORDER BY price DESC;

-- \u4F7F\u7528\u4EF7\u683C\u6392\u5E8F(\u5347\u5E8F)
SELECT * FROM product ORDER BY price ASC;
SELECT * FROM product ORDER BY price;

-- \u663E\u793A\u5546\u54C1\u7684\u4EF7\u683C(\u53BB\u91CD\u590D),\u5E76\u6392\u5E8F(\u964D\u5E8F)
SELECT DISTINCT(price) FROM product ORDER BY price DESC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,170),d=[l];function r(c,t){return s(),e("div",null,d)}var o=n(i,[["render",r],["__file","day01_\u6570\u636E\u5E93\u57FA\u7840.html.vue"]]);export{o as default};
