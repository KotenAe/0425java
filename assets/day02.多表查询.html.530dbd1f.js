import{_ as n,o as s,c as e,a}from"./app.a3ab45a4.js";const i={},l=a(`<h1 id="day02-\u591A\u8868\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#day02-\u591A\u8868\u67E5\u8BE2" aria-hidden="true">#</a> day02-\u591A\u8868\u67E5\u8BE2</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u8BFE\u524D\u56DE\u987E<span class="token operator">:</span>
  <span class="token number">1.</span>\u6570\u636E\u5E93\u7684\u64CD\u4F5C<span class="token operator">:</span>
    a<span class="token punctuation">.</span>\u521B\u5EFA\u6570\u636E\u5E93<span class="token operator">:</span> create database \u6570\u636E\u5E93\u540D\u5B57 charset utf8<span class="token punctuation">;</span>
    b<span class="token punctuation">.</span>\u5220\u9664\u6570\u636E\u5E93<span class="token operator">:</span> drop database \u6570\u636E\u5E93\u540D\u5B57
    c<span class="token punctuation">.</span>\u5207\u5E93<span class="token operator">:</span>use \u6570\u636E\u5E93\u540D\u5B57
  <span class="token number">2.</span>\u8868\u7684\u64CD\u4F5C<span class="token operator">:</span>
    a<span class="token punctuation">.</span>\u521B\u5EFA\u8868<span class="token operator">:</span>
      create table \u8868\u540D<span class="token punctuation">(</span>
        \u5217\u540D \u6570\u636E\u7C7B\u578B <span class="token punctuation">[</span>\u7EA6\u675F<span class="token punctuation">]</span><span class="token punctuation">,</span>
        \u5217\u540D \u6570\u636E\u7C7B\u578B <span class="token punctuation">[</span>\u7EA6\u675F<span class="token punctuation">]</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    b<span class="token punctuation">.</span>\u5220\u9664\u8868<span class="token operator">:</span> drop table \u8868\u540D
    c<span class="token punctuation">.</span>\u4FEE\u6539\u8868\u7ED3\u6784<span class="token operator">:</span> alter table \u8868\u540D add<span class="token operator">/</span>modify
    d<span class="token punctuation">.</span>\u6CE8\u610F<span class="token operator">:</span>\u4E0D\u7BA1\u662F\u5217\u540D<span class="token punctuation">,</span>\u8868\u540D<span class="token punctuation">,</span>\u5E93\u540D<span class="token punctuation">,</span>\u5982\u679C\u540D\u5B57\u548C\u5173\u952E\u5B57\u51B2\u7A81<span class="token punctuation">,</span>\u52A0\u4E0A\`\`
  <span class="token number">3.</span>\u6570\u636E\u64CD\u4F5C<span class="token operator">:</span>
    a<span class="token punctuation">.</span>\u6DFB\u52A0\u6570\u636E<span class="token operator">:</span>
      insert into \u8868\u540D<span class="token punctuation">(</span>\u5217\u540D<span class="token punctuation">,</span>\u5217\u540D<span class="token punctuation">)</span> values <span class="token punctuation">(</span>\u503C<span class="token punctuation">,</span>\u503C<span class="token punctuation">)</span>
      insert into \u8868\u540D values <span class="token punctuation">(</span>\u503C<span class="token punctuation">,</span>\u503C<span class="token punctuation">)</span>
      insert into \u8868\u540D<span class="token punctuation">(</span>\u5217\u540D<span class="token punctuation">,</span>\u5217\u540D<span class="token punctuation">)</span> values <span class="token punctuation">(</span>\u503C<span class="token punctuation">,</span>\u503C<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>\u503C<span class="token punctuation">,</span>\u503C<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>\u503C<span class="token punctuation">,</span>\u503C<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>\u503C<span class="token punctuation">,</span>\u503C<span class="token punctuation">)</span><span class="token operator">-&gt;</span> \u6279\u91CF\u6DFB\u52A0
      \u5982\u679C\u4E3B\u952E\u662F\u81EA\u589E\u957F\u7684\u8BDD<span class="token punctuation">,</span>\u6DFB\u52A0\u7684\u65F6\u5019\u5C31\u4E0D\u7528\u5E26\u4E3B\u952E\u4E86
    b<span class="token punctuation">.</span>\u5220\u9664\u6570\u636E<span class="token operator">:</span>
      delete from \u8868\u540D<span class="token punctuation">[</span>where \u6761\u4EF6<span class="token punctuation">]</span>
    c<span class="token punctuation">.</span>\u4FEE\u6539\u6570\u636E<span class="token operator">:</span>
      update \u8868\u540D set \u5217\u540D <span class="token operator">=</span> \u65B0\u503C <span class="token punctuation">[</span>where \u6761\u4EF6<span class="token punctuation">]</span>
    d<span class="token punctuation">.</span>\u67E5\u8BE2\u6570\u636E
      select <span class="token operator">*</span> from \u8868\u540D <span class="token punctuation">[</span>where \u6761\u4EF6<span class="token punctuation">]</span> <span class="token operator">-&gt;</span> \u67E5\u8BE2\u6240\u6709<span class="token punctuation">,</span>\u7ED3\u679C\u5C55\u793A\u6240\u6709\u5217
      select \u5217\u540D from \u8868\u540D <span class="token punctuation">[</span>where \u6761\u4EF6<span class="token punctuation">]</span><span class="token operator">-&gt;</span> \u67E5\u8BE2<span class="token punctuation">,</span>\u7ED3\u679C\u5C55\u793A\u6307\u5B9A\u7684\u5217
   <span class="token number">4.</span>\u7EA6\u675F<span class="token operator">:</span>
     a<span class="token punctuation">.</span>\u4E3B\u952E\u7EA6\u675F<span class="token operator">:</span>primary key \u6BCF\u4E2A\u8868\u90FD\u5E94\u8BE5\u6709\u4E00\u4E2A\u4E3B\u952E\u5217
     b<span class="token punctuation">.</span>\u81EA\u589E\u957F<span class="token operator">:</span>auto_increment \u90FD\u662F\u548C\u4E3B\u952E\u8054\u5408\u4F7F\u7528
     c<span class="token punctuation">.</span>\u975E\u7A7A\u7EA6\u675F<span class="token operator">:</span>NOT NULL \u4E0D\u80FD\u4E3A<span class="token keyword">null</span>
     d<span class="token punctuation">.</span>\u552F\u4E00\u7EA6\u675F<span class="token operator">:</span>UNIQUE \u6B64\u5217\u4E2D\u7684\u6570\u636E\u4E0D\u80FD\u91CD\u590D
   
   <span class="token number">5.</span>truncate \u548C delete\u533A\u522B
     truncate \u8868\u540D <span class="token operator">-&gt;</span> \u6467\u6BC1\u8868\u7ED3\u6784<span class="token punctuation">,</span>\u81EA\u589E\u957F\u5217\u7684\u6570\u636E\u4ECE\u5934\u5F00\u59CB\u7F16\u53F7
     delete<span class="token operator">-&gt;</span>\u5220\u9664\u4E4B\u540E\u81EA\u589E\u957F\u5217\u7684\u6570\u636E\u4E0D\u4F1A\u4ECE\u5934\u5F00\u59CB\u7F16\u53F7
           
\u4ECA\u65E5\u91CD\u70B9<span class="token operator">:</span>         
   <span class="token number">1.</span>\u6240\u6709\u67E5\u8BE2<span class="token punctuation">(</span>\u5355\u8868<span class="token punctuation">,</span>\u591A\u8868<span class="token punctuation">)</span>
   <span class="token number">2.</span>\u4F1A\u6570\u636E\u5E93\u7684\u5907\u4EFD\u548C\u8FD8\u539F
   <span class="token number">3.</span>\u77E5\u9053\u8868\u548C\u8868\u4E4B\u95F4\u7684\u5173\u7CFB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7B2C\u4E00\u7AE0-\u5355\u8868\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u7AE0-\u5355\u8868\u67E5\u8BE2" aria-hidden="true">#</a> \u7B2C\u4E00\u7AE0.\u5355\u8868\u67E5\u8BE2</h1><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">#\u521B\u5EFA\u5546\u54C1\u8868\uFF1A</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> product<span class="token punctuation">(</span>
	pid <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
	pname <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	price <span class="token keyword">double</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;\u8054\u60F3&#39;</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;\u6D77\u5C14&#39;</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;\u96F7\u795E&#39;</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;JACK JONES&#39;</span><span class="token punctuation">,</span><span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;\u771F\u7EF4\u65AF&#39;</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">&#39;\u82B1\u82B1\u516C\u5B50&#39;</span><span class="token punctuation">,</span><span class="token number">440</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">&#39;\u52B2\u9738&#39;</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token string">&#39;\u9999\u5948\u513F&#39;</span><span class="token punctuation">,</span><span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token string">&#39;\u76F8\u5B9C\u672C\u8349&#39;</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&#39;\u9762\u9738&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token string">&#39;\u597D\u60F3\u4F60\u67A3&#39;</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token string">&#39;\u9999\u98D8\u98D8\u5976\u8336&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product<span class="token punctuation">(</span>pid<span class="token punctuation">,</span>pname<span class="token punctuation">,</span>price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token string">&#39;\u679C9&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-\u805A\u5408\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_1-\u805A\u5408\u67E5\u8BE2" aria-hidden="true">#</a> 1.\u805A\u5408\u67E5\u8BE2</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u4F5C\u7528:\u7EB5\u5411\u64CD\u4F5C\u6570\u636E
2.\u805A\u5408\u51FD\u6570:
  count(\u5217\u540D):\u7EDF\u8BA1\u8868\u4E2D\u6709\u591A\u5C11\u6761\u6570\u636E
  sum(\u5217\u540D):\u9488\u5BF9\u6307\u5B9A\u5217\u8FDB\u884C\u6C42\u548C
  avg(\u5217\u540D):\u9488\u5BF9\u6307\u5B9A\u5217\u6C42\u5E73\u5747\u503C
  max(\u5217\u540D):\u6C42\u6307\u5B9A\u5217\u7684\u6700\u5927\u503C
  min(\u5217\u540D):\u6C42\u6307\u5B9A\u5217\u7684\u6700\u5C0F\u503C
3.\u683C\u5F0F:
  select \u805A\u5408\u51FD\u6570(\u5217\u540D) from \u8868\u540D where \u6761\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u67E5\u8BE2product\u7684\u603B\u6761\u6570
SELECT COUNT(*) FROM product;
SELECT COUNT(pid) FROM product;

-- \u67E5\u8BE2\u6240\u6709\u5546\u54C1\u7684\u4EF7\u683C\u603B\u548C
SELECT SUM(price) FROM product;

-- \u67E5\u8BE2pid\u4E3A1,3,7 \u5546\u54C1\u7684\u4EF7\u683C\u5E73\u5747\u503C
SELECT AVG(price) FROM product WHERE pid IN(1,3,7);

-- \u67E5\u8BE2\u5546\u54C1\u7684\u6700\u9AD8\u4EF7\u683C\u4EE5\u53CA\u6700\u4F4E\u4EF7\u683C
SELECT MAX(price),MIN(price) FROM product;

-- \u521B\u5EFA\u4E00\u4E2A\u65B0\u8868
CREATE TABLE student(
  sid INT,
  sname VARCHAR(10)
);

SELECT COUNT(*) FROM student;-- \u5305\u542Bnull
SELECT COUNT(1) FROM student;-- \u5305\u542Bnull
SELECT COUNT(0) FROM student;-- \u5305\u542Bnull

SELECT COUNT(sid) FROM student;-- \u4E0D\u5305\u542Bnull

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5206\u7EC4\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-\u5206\u7EC4\u67E5\u8BE2" aria-hidden="true">#</a> 2.\u5206\u7EC4\u67E5\u8BE2</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:group by \u5217\u540D  -&gt; \u6839\u636E\u54EA\u4E00\u5217\u8FDB\u884C\u5206\u7EC4
2.\u8BED\u6CD5:
  select \u5217\u540D,\u5217\u540D... from \u8868\u540D group by \u5206\u7EC4\u5B57\u6BB5 having \u5206\u7EC4\u6761\u4EF6
3.\u5206\u7EC4\u6309\u7167\u54EA\u4E2A\u5B57\u6BB5\u53BB\u5206,\u5C0F\u7A8D\u95E8:
  \u76F8\u540C\u5B57\u6BB5\u540D\u4E3A\u4E00\u7EC4,\u4E0D\u540C\u5B57\u6BB5\u540D\u7684\u5355\u72EC\u4E3A\u4E00\u7EC4\u5C55\u793A,\u6211\u4EEC\u5C31\u53EF\u4EE5\u7528\u8BE5\u5B57\u6BB5\u8FDB\u884C\u5206\u7EC4
4.\u5173\u952E\u5B57:\u5728\u5206\u7EC4\u4E4B\u540E\u8FDB\u884C\u6761\u4EF6\u7B5B\u9009
  having \u6761\u4EF6
5.having\u548Cwhere\u7684\u533A\u522B:
  having:\u662F\u5728\u5206\u7EC4\u4E4B\u540E\u67E5\u8BE2
  where:\u5728\u5206\u7EC4\u4E4B\u524D\u67E5\u8BE2
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u67E5\u8BE2\u76F8\u540C\u5546\u54C1\u7684\u4EF7\u683C\u603B\u548C</span>
<span class="token keyword">SELECT</span> pname<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>

<span class="token comment">-- \u67E5\u8BE2\u76F8\u540C\u5546\u54C1\u7684\u4EF7\u683C\u603B\u548C-&gt;\u7528\u5206\u7EC4\u8FDB\u884C\u6B63\u786E\u67E5\u8BE2</span>
<span class="token keyword">SELECT</span> pname<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> pname<span class="token punctuation">;</span>

<span class="token comment">-- \u67E5\u8BE2\u76F8\u540C\u5546\u54C1\u7684\u4EF7\u683C\u603B\u548C\u5E76\u6392\u5E8F</span>

<span class="token comment">/*
  1.\u95EE\u9898:
    \u5982\u679C\u6392\u5E8F\u65F6\u7528\u7684\u5B57\u6BB5\u662Fprice,\u6392\u5E8F\u5931\u8D25\u4E86
  2.\u539F\u56E0:
    \u6392\u5E8F,\u662F\u5BF9\u67E5\u8BE2\u4E4B\u540E\u7684\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F
    \u90A3\u4E48\u67E5\u8BE2\u4E4B\u540E\u7684\u7ED3\u679C\u4E2D\u4EF7\u683C\u5217\u7684\u5217\u540D\u53EB SUM(price),\u6240\u4EE5\u6211\u4EEC\u5E94\u8BE5\u6309\u7167SUM(price)\u8FDB\u884C\u6392\u5E8F
*/</span>
<span class="token comment">-- SELECT pname,SUM(price) FROM product GROUP BY pname order by price desc;</span>
<span class="token keyword">SELECT</span> pname<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> pname <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">DESC</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> pname<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token string">&#39;newprice&#39;</span> <span class="token keyword">FROM</span> product <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> pname <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> newprice <span class="token keyword">DESC</span><span class="token punctuation">;</span>


<span class="token comment">-- \u67E5\u8BE2\u76F8\u540C\u5546\u54C1\u7684\u4EF7\u683C\u603B\u548C,\u518D\u5C55\u793A\u51FA\u4EF7\u683C\u603B\u548C\u5927\u4E8E\u7B49\u4E8E2000\u7684\u5546\u54C1</span>
<span class="token comment">/*
  \u4E0B\u9762\u7684sql\u6709\u9519\u8BEF,\u56E0\u4E3A\u8981\u5199\u5148where,\u518D\u5199group by ,\u4E0B\u9762\u7684\u9519\u8BEF\u5C5E\u4E8E\u5173\u952E\u5B57\u4E66\u5199\u987A\u5E8F\u95EE\u9898
*/</span>
<span class="token keyword">SELECT</span> pname<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token string">&#39;newprice&#39;</span> <span class="token keyword">FROM</span> product <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> pname <span class="token keyword">WHERE</span> newprice<span class="token operator">&gt;=</span><span class="token number">2000</span><span class="token punctuation">;</span>


<span class="token comment">/*
   \u4E0B\u9762\u7684sql\u6709\u9519\u8BEF,\u56E0\u4E3A\u5148\u6267\u884Cwhere,\u518D\u6267\u884Cselect,\u6267\u884Cwhere\u7684\u65F6\u5019newprice\u8FD9\u4E2A\u522B\u540D\u8FD8\u6CA1\u51FA\u73B0
*/</span>
<span class="token keyword">SELECT</span> pname<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token string">&#39;newprice&#39;</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> newprice<span class="token operator">&gt;=</span><span class="token number">2000</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> pname<span class="token punctuation">;</span>


<span class="token comment">/*
  \u4E0B\u9762\u7684sql\u67E5\u8BE2\u7ED3\u679C\u4E0D\u5BF9
   \u56E0\u4E3Awhere\u662F\u5728\u5206\u7EC4\u4E4B\u524D\u6267\u884C,\u4E5F\u5C31\u662F\u8BF4\u6761\u4EF6\u662F\u5728\u5206\u7EC4\u4E4B\u524D\u7528\u539F\u6765\u7684
   price\u8FDB\u884C\u7684\u7B5B\u9009,\u76F4\u63A5\u5C06\u5206\u7EC4\u6C42\u548C\u4E4B\u524D\u7684\u679C9\u7B5B\u6389\u4E86
*/</span>
<span class="token keyword">SELECT</span> pname<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token string">&#39;newprice&#39;</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> price<span class="token operator">&gt;=</span><span class="token number">2000</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> pname<span class="token punctuation">;</span>


<span class="token comment">/*
  \u4E0B\u9762\u7684sql\u662F\u6B63\u786E\u7684
  having\u662F\u5728\u5206\u7EC4\u4E4B\u540E\u8FDB\u884C\u6761\u4EF6\u7B5B\u9009
*/</span>
<span class="token keyword">SELECT</span> pname<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token string">&#39;newprice&#39;</span> <span class="token keyword">FROM</span> product <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> pname <span class="token keyword">HAVING</span> newprice<span class="token operator">&gt;=</span><span class="token number">2000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031647378.png" alt="image-20220406094521705" style="zoom:80%;"><h2 id="_3-\u5206\u9875\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a> 3.\u5206\u9875\u67E5\u8BE2</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u8BED\u6CD5
  select * from \u8868\u540D limit m,n
    m:\u4EE3\u8868\u6BCF\u9875\u7684\u8D77\u59CB\u4F4D\u7F6E -&gt; \u4ECE0\u5F00\u59CB
    n:\u9875\u9762\u663E\u793A\u7684\u6761\u6570
    
2.\u6BCF\u4E00\u9875\u7684\u8D77\u59CB\u4F4D\u7F6E\u7B97\u6CD5:
   (\u5F53\u524D\u9875-1)*\u6BCF\u9875\u663E\u793A\u6761\u6570

-- \u540E\u53F0\u8BA1\u7B97\u51FA\u9875\u7801\u3001\u9875\u6570(\u9875\u5927\u5C0F)
-- \u5206\u9875\u9700\u8981\u7684\u76F8\u5173\u6570\u636E\u7ED3\u679C\u5206\u6790\u5982\u4E0B,
-- \u6CE8\u610F:\u4E0B\u9762\u662F\u4F2A\u4EE3\u7801\u4E0D\u7528\u4E8E\u6267\u884C
int curPage = 2; -- \u5F53\u524D\u9875\u6570
int pageSize = 5; -- \u6BCF\u9875\u663E\u793A\u6570\u91CF
int startRow = (curPage - 1) * pageSize; -- \u5F53\u524D\u9875, \u8BB0\u5F55\u5F00\u59CB\u7684\u4F4D\u7F6E(\u884C\u6570)\u8BA1\u7B97
int totalSize = select count(*) from products; -- \u8BB0\u5F55\u603B\u6570\u91CF
int totalPage = Math.ceil(totalSize * 1.0 / pageSize); -- \u603B\u9875\u6570
                \u603B\u9875\u6570 = (\u603B\u8BB0\u5F55\u6570/\u6BCF\u9875\u663E\u793A\u6761\u6570)\u5411\u4E0A\u53D6\u6574
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
  select * from \u8868\u540D limit m,n
    m:\u4EE3\u8868\u6BCF\u9875\u7684\u8D77\u59CB\u4F4D\u7F6E -&gt; \u4ECE0\u5F00\u59CB
    n:\u9875\u9762\u663E\u793A\u7684\u6761\u6570
*/
SELECT * FROM product LIMIT 0,5; -- \u7B2C\u4E00\u9875

SELECT * FROM product LIMIT 5,5; -- \u7B2C\u4E8C\u9875

SELECT * FROM product LIMIT 10,5; -- \u7B2C\u4E09\u9875

SELECT * FROM product LIMIT 15,5; -- \u7B2C\u56DB\u9875
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031647379.png" alt="image-20220406095211785" style="zoom:80%;"><h1 id="\u7B2C\u4E8C\u7AE0-\u6570\u636E\u5E93\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u7AE0-\u6570\u636E\u5E93\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F" aria-hidden="true">#</a> \u7B2C\u4E8C\u7AE0.\u6570\u636E\u5E93\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F</h1><h2 id="_1-\u7528\u547D\u4EE4\u53BB\u64CD\u4F5C\u6570\u636E\u5E93\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F" tabindex="-1"><a class="header-anchor" href="#_1-\u7528\u547D\u4EE4\u53BB\u64CD\u4F5C\u6570\u636E\u5E93\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F" aria-hidden="true">#</a> 1.\u7528\u547D\u4EE4\u53BB\u64CD\u4F5C\u6570\u636E\u5E93\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F</h2><h3 id="_1-1-\u547D\u4EE4\u64CD\u4F5C\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#_1-1-\u547D\u4EE4\u64CD\u4F5C\u5907\u4EFD" aria-hidden="true">#</a> 1.1.\u547D\u4EE4\u64CD\u4F5C\u5907\u4EFD</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysqldump  -u\u7528\u6237\u540D -p\u5BC6\u7801 \u6570\u636E\u5E93\u540D&gt;\u751F\u6210\u7684\u811A\u672C\u6587\u4EF6\u8DEF\u5F84

\u751F\u6210\u7684\u811A\u672C\u6587\u4EF6\u8DEF\u5F84:\u6307\u5B9A\u5907\u4EFD\u7684\u8DEF\u5F84,\u5199\u8DEF\u5F84\u65F6\u6700\u540E\u8981\u6307\u660E\u5907\u4EFD\u7684sql\u6587\u4EF6\u540D,\u547D\u4EE4\u540E\u4E0D\u8981\u52A0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u547D\u4EE4\u64CD\u4F5C\u8FD8\u539F" tabindex="-1"><a class="header-anchor" href="#_1-2-\u547D\u4EE4\u64CD\u4F5C\u8FD8\u539F" aria-hidden="true">#</a> 1.2.\u547D\u4EE4\u64CD\u4F5C\u8FD8\u539F</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql  -uroot  -p\u5BC6\u7801 \u6570\u636E\u5E93\u540D &lt; \u6587\u4EF6\u8DEF\u5F84

\u6CE8\u610F:\u6211\u4EEC\u5229\u7528\u547D\u4EE4\u5907\u4EFD\u51FA\u6765\u7684sql\u6587\u4EF6\u4E2D\u6CA1\u6709\u5355\u72EC\u521B\u5EFA\u6570\u636E\u5E93\u7684\u8BED\u53E5,\u6240\u4EE5\u5982\u679C\u5229\u7528\u547D\u4EE4\u53BB\u8FD8\u539F\u7684\u8BDD,\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u624B\u52A8\u5148\u521B\u5EFA\u5BF9\u5E94\u7684\u5E93
    \u547D\u4EE4\u540E\u4E0D\u8981\u52A0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5229\u7528\u70B9\u51FB\u53BB\u64CD\u4F5C\u6570\u636E\u5E93\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F" tabindex="-1"><a class="header-anchor" href="#_2-\u5229\u7528\u70B9\u51FB\u53BB\u64CD\u4F5C\u6570\u636E\u5E93\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F" aria-hidden="true">#</a> 2.\u5229\u7528\u70B9\u51FB\u53BB\u64CD\u4F5C\u6570\u636E\u5E93\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F</h2><h3 id="_2-1-\u5229\u7528\u70B9\u51FB\u53BB\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5229\u7528\u70B9\u51FB\u53BB\u5907\u4EFD" aria-hidden="true">#</a> 2.1.\u5229\u7528\u70B9\u51FB\u53BB\u5907\u4EFD</h3><p><img src="https://photo.sneoo.com/spring5/202207031647380.png" alt="1606698676769"></p><h3 id="_2-2-\u5229\u7528\u70B9\u51FB\u53BB\u8FD8\u539F" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5229\u7528\u70B9\u51FB\u53BB\u8FD8\u539F" aria-hidden="true">#</a> 2.2.\u5229\u7528\u70B9\u51FB\u53BB\u8FD8\u539F</h3><p><img src="https://photo.sneoo.com/spring5/202207031647381.png" alt="1606698901671"></p><h1 id="\u7B2C\u4E09\u7AE0-\u6570\u636E\u5E93\u4E09\u8303\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u7AE0-\u6570\u636E\u5E93\u4E09\u8303\u5F0F" aria-hidden="true">#</a> \u7B2C\u4E09\u7AE0.\u6570\u636E\u5E93\u4E09\u8303\u5F0F</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u597D\u7684\u6570\u636E\u5E93\u8BBE\u8BA1\u5BF9\u6570\u636E\u7684\u5B58\u50A8\u6027\u80FD\u548C\u540E\u671F\u7684\u7A0B\u5E8F\u5F00\u53D1\uFF0C\u90FD\u4F1A\u4EA7\u751F\u91CD\u8981\u7684\u5F71\u54CD\u3002\u5EFA\u7ACB\u79D1\u5B66\u7684\uFF0C\u89C4\u8303\u7684\u6570\u636E\u5E93\u5C31\u9700\u8981\u6EE1\u8DB3\u4E00\u4E9B\u89C4\u5219\u6765\u4F18\u5316\u6570\u636E\u7684\u8BBE\u8BA1\u548C\u5B58\u50A8\uFF0C\u8FD9\u4E9B\u89C4\u5219\u5C31\u79F0\u4E3A\u8303\u5F0F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1\u7B2C\u4E00\u8303\u5F0F-\u786E\u4FDD\u6BCF\u5217\u4FDD\u6301\u539F\u5B50\u6027" tabindex="-1"><a class="header-anchor" href="#_1\u7B2C\u4E00\u8303\u5F0F-\u786E\u4FDD\u6BCF\u5217\u4FDD\u6301\u539F\u5B50\u6027" aria-hidden="true">#</a> 1\u7B2C\u4E00\u8303\u5F0F: <strong>\u786E\u4FDD\u6BCF\u5217\u4FDD\u6301\u539F\u5B50\u6027</strong></h2><p>\u7B2C\u4E00\u8303\uFF081NF\uFF09\u5F0F\u662F\u6700\u57FA\u672C\u7684\u8303\u5F0F\u3002\u5982\u679C\u6570\u636E\u5E93\u8868\u4E2D\u7684\u6240\u6709\u5B57\u6BB5\u503C\u90FD\u662F\u4E0D\u53EF\u5206\u89E3\u7684\u539F\u5B50\u503C\uFF0C\u5C31\u8BF4\u660E\u8BE5\u6570\u636E\u5E93\u8868\u6EE1\u8DB3\u4E86\u7B2C\u4E00\u8303\u5F0F\u3002</p><p>\u7B2C\u4E00\u8303\u5F0F\u7684\u5408\u7406\u9075\u5FAA\u9700\u8981\u6839\u636E\u7CFB\u7EDF\u7684\u5B9E\u9645\u9700\u6C42\u6765\u5B9A\u3002\u6BD4\u5982\u67D0\u4E9B\u6570\u636E\u5E93\u7CFB\u7EDF\u4E2D\u9700\u8981\u7528\u5230\u201C\u5730\u5740\u201D\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u672C\u6765\u76F4\u63A5\u5C06\u201C\u5730\u5740\u201D\u5C5E\u6027\u8BBE\u8BA1\u6210\u4E00\u4E2A\u6570\u636E\u5E93\u8868\u7684\u5B57\u6BB5\u5C31\u884C\u3002\u4F46\u662F\u5982\u679C\u7CFB\u7EDF\u7ECF\u5E38\u4F1A\u8BBF\u95EE\u201C\u5730\u5740\u201D\u5C5E\u6027\u4E2D\u7684\u201C\u57CE\u5E02\u201D\u90E8\u5206\uFF0C\u90A3\u4E48\u5C31\u975E\u8981\u5C06\u201C\u5730\u5740\u201D\u8FD9\u4E2A\u5C5E\u6027\u91CD\u65B0\u62C6\u5206\u4E3A\u7701\u4EFD\u3001\u57CE\u5E02\u3001\u8BE6\u7EC6\u5730\u5740\u7B49\u591A\u4E2A\u90E8\u5206\u8FDB\u884C\u5B58\u50A8\uFF0C\u8FD9\u6837\u5728\u5BF9\u5730\u5740\u4E2D\u67D0\u4E00\u90E8\u5206\u64CD\u4F5C\u7684\u65F6\u5019\u5C06\u975E\u5E38\u65B9\u4FBF\u3002\u8FD9\u6837\u8BBE\u8BA1\u624D\u7B97\u6EE1\u8DB3\u4E86\u6570\u636E\u5E93\u7684\u7B2C\u4E00\u8303\u5F0F\uFF0C\u5982\u4E0B\u8868\u6240\u793A\u3002</p><p><img src="https://photo.sneoo.com/spring5/202207031647382.png" alt=""></p><p>\u5982\u679C\u4E0D\u9075\u5B88\u7B2C\u4E00\u8303\u5F0F\uFF0C\u67E5\u8BE2\u51FA\u6570\u636E\u8FD8\u9700\u8981\u8FDB\u4E00\u6B65\u5904\u7406\uFF08\u67E5\u8BE2\u4E0D\u65B9\u4FBF\uFF09\u3002\u9075\u5B88\u7B2C\u4E00\u8303\u5F0F\uFF0C\u9700\u8981\u4EC0\u4E48\u5B57\u6BB5\u7684\u6570\u636E\u5C31\u67E5\u8BE2\u4EC0\u4E48\u6570\u636E\uFF08\u65B9\u4FBF\u67E5\u8BE2\uFF09</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u5217\u540D<span class="token operator">:</span>\u8BE6\u7EC6\u5730\u5740\u624B\u673A\u53F7
    
    \u5317\u4EAC\u5E02\u660C\u5E73\u533A\u5317\u4E03\u5BB6\u9547\u5B8F\u798F\u82D1\u5C0F\u533A<span class="token number">19</span>\u53F7\u697C<span class="token number">1501087</span>xxxx  <span class="token operator">-&gt;</span> \u4E0D\u884C<span class="token punctuation">,</span>\u56E0\u4E3A\u6570\u636E\u53EF\u4EE5\u62C6\u5206<span class="token punctuation">,</span>\u4E0D\u7B26\u5408\u7B2C\u4E00\u8303\u5F0F\u539F\u5B50\u6027
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u7B2C\u4E8C\u8303\u5F0F-\u786E\u4FDD\u8868\u4E2D\u7684\u6BCF\u884C\u90FD\u80FD\u552F\u4E00\u533A\u5206" tabindex="-1"><a class="header-anchor" href="#_2-\u7B2C\u4E8C\u8303\u5F0F-\u786E\u4FDD\u8868\u4E2D\u7684\u6BCF\u884C\u90FD\u80FD\u552F\u4E00\u533A\u5206" aria-hidden="true">#</a> 2 \u7B2C\u4E8C\u8303\u5F0F: <strong>\u786E\u4FDD\u8868\u4E2D\u7684\u6BCF\u884C\u90FD\u80FD\u552F\u4E00\u533A\u5206</strong></h2><p>\u7B2C\u4E8C\u8303\u5F0F\uFF082NF)\u7B2C\u4E8C\u8303\u5F0F\uFF082NF\uFF09\u662F\u5728\u7B2C\u4E00\u8303\u5F0F\uFF081NF\uFF09\u7684\u57FA\u7840\u4E0A\u5EFA\u7ACB\u8D77\u6765\u7684\uFF0C\u5373\u6EE1\u8DB3\u7B2C\u4E8C\u8303\u5F0F\uFF082NF\uFF09\u5FC5\u987B\u5148\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\uFF081NF\uFF09\u3002\u7B2C\u4E8C\u8303\u5F0F\uFF082NF\uFF09\u8981\u6C42\u6570\u636E\u5E93\u8868\u4E2D\u7684\u6BCF\u4E2A\u5B9E\u4F8B\u6216\u884C\u5FC5\u987B\u53EF\u4EE5\u88AB\u60DF\u4E00\u7684\u533A\u5206\u3002\u4E3A\u5B9E\u73B0\u533A\u5206\u901A\u5E38\u9700\u8981\u4E3A\u8868\u52A0\u4E0A\u4E00\u4E2A\u5217\uFF0C\u4EE5\u5B58\u50A8\u5404\u4E2A\u5B9E\u4F8B\u7684\u60DF\u4E00\u6807\u8BC6\u3002</p><h2 id="_3-\u7B2C\u4E09\u8303\u5F0F-3nf-\u975E\u4E3B\u952E\u5B57\u6BB5\u4E0D\u80FD\u76F8\u4E92\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_3-\u7B2C\u4E09\u8303\u5F0F-3nf-\u975E\u4E3B\u952E\u5B57\u6BB5\u4E0D\u80FD\u76F8\u4E92\u4F9D\u8D56" aria-hidden="true">#</a> 3 \u7B2C\u4E09\u8303\u5F0F: <strong>3NF:\u975E\u4E3B\u952E\u5B57\u6BB5\u4E0D\u80FD\u76F8\u4E92\u4F9D\u8D56</strong></h2><p>\u6BD4\u5982student\u8868\uFF0C\u73ED\u7EA7\u7F16\u53F7\u53D7\u4EBA\u5458\u7F16\u53F7\u7684\u5F71\u54CD\uFF0C\u5982\u679C\u5728\u8FD9\u4E2A\u8868\u4E2D\u518D\u63D2\u5165\u73ED\u7EA7\u7684\u73ED\u4E3B\u4EFB\u3001\u6570\u5B66\u8001\u5E08\u7B49\u4FE1\u606F\uFF0C\u4F60\u4EEC\u89C9\u5F97\u8FD9\u6837\u5408\u9002\u5417\uFF1F\u80AF\u5B9A\u4E0D\u5408\u9002\uFF0C\u56E0\u4E3A\u5B66\u751F\u6709\u591A\u4E2A\uFF0C\u8FD9\u6837\u5C31\u4F1A\u9020\u6210\u73ED\u7EA7\u6709\u591A\u4E2A\uFF0C\u90A3\u4E48\u6BCF\u4E2A\u73ED\u7EA7\u7684\u73ED\u4E3B\u4EFB\u3001\u6570\u5B66\u8001\u5E08\u90FD\u4F1A\u51FA\u73B0\u591A\u6761\u6570\u636E\uFF0C\u800C\u6211\u4EEC\u7406\u60F3\u4E2D\u7684\u6548\u679C\u5E94\u8BE5\u662F\u4E00\u6761\u73ED\u7EA7\u4FE1\u606F\u5BF9\u5E94\u4E00\u4E2A\u73ED\u4E3B\u4EFB\u548C\u6570\u5B66\u8001\u5E08\uFF0C\u8FD9\u6837\u66F4\u6613\u4E8E\u6211\u4EEC\u7406\u89E3\uFF0C</p><h1 id="\u7B2C\u56DB\u7AE0-\u591A\u8868\u4E4B\u95F4\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u7AE0-\u591A\u8868\u4E4B\u95F4\u7684\u5173\u7CFB" aria-hidden="true">#</a> \u7B2C\u56DB\u7AE0.\u591A\u8868\u4E4B\u95F4\u7684\u5173\u7CFB</h1><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u4E00\u5BF9\u591A\u5173\u7CFB
  \u4ECE\u4E3B\u8868\u770B:\u4E00\u5BF9\u591A
  \u4ECE\u4ECE\u8868\u770B:\u591A\u5BF9\u4E00
  
  \u7ED3\u679C:\u4E00\u5BF9\u591A
  
  a.\u4E3E\u4F8B:\u5B66\u751F\u8868\u548C\u6210\u7EE9\u8868
  b.\u5982\u4F55\u5224\u65AD\u8C01\u662F\u4E3B\u8868,\u8C01\u662F\u4ECE\u8868-&gt;\u5C31\u770B\u54EA\u4E2A\u8868\u7684\u6570\u636E\u7EA6\u675F\u54EA\u4E2A\u8868\u7684\u6570\u636E,\u88AB\u7EA6\u675F\u7684\u5C31\u662F\u4ECE\u8868
    \u5B66\u751F\u8868-&gt;\u4E3B\u8868
    \u6210\u7EE9\u8868-&gt;\u4ECE\u8868
  c.\u5206\u6790\u5173\u7CFB:
    \u4ECE\u4E3B\u8868\u770B(\u5B66\u751F\u8868):1\u4E2A\u5B66\u751F\u53EF\u4EE5\u6709\u591A\u4E2A\u6210\u7EE9  -&gt; 1\u5BF9\u591A
    \u4ECE\u4ECE\u8868\u770B(\u6210\u7EE9\u8868):\u591A\u4E2A\u6210\u7EE9\u53EF\u4EE5\u662F1\u4E2A\u4EBA\u8003\u51FA\u6765 -&gt; \u591A\u5BF9\u4E00
    \u7ED3\u679C:\u5B66\u751F\u8868\u548C\u6210\u7EE9\u8868-&gt;  \u4E00\u5BF9\u591A\u5173\u7CFB
    
2.\u591A\u5BF9\u591A\u5173\u7CFB:
  \u4ECE\u4E3B\u8868\u770B\u8FD8\u662F\u4ECE\u4ECE\u8868\u770B\u90FD\u662F\u4E00\u5BF9\u591A
  \u7ED3\u679C:\u591A\u5BF9\u591A
  
  a.\u4E3E\u4F8B:\u5546\u54C1\u8868\u548C\u8BA2\u5355\u8868:
  b.\u5206\u6790\u5173\u7CFB:
    \u4ECE\u5546\u54C1\u8868\u770B:\u4E00\u4E2A\u5546\u54C1\u53EF\u4EE5\u5728\u591A\u4E2A\u8BA2\u5355\u4E2D-&gt; \u4E00\u5BF9\u591A 
    \u4ECE\u8BA2\u5355\u8868\u770B:\u4E00\u4E2A\u8BA2\u5355\u53EF\u4EE5\u6709\u591A\u4E2A\u5546\u54C1-&gt;\u4E00\u5BF9\u591A
    \u7ED3\u679C:\u591A\u5BF9\u591A

3.\u4E00\u5BF9\u4E00\u5173\u7CFB:
  \u600E\u4E48\u770B\u90FD\u662F\u4E00\u5BF9\u4E00
  a.\u4E3E\u4F8B:\u4EBA\u548C\u8EAB\u4EFD\u8BC1
  b.\u5173\u7CFB:\u4E00\u4E2A\u4EBA\u5BF9\u5E94\u4E00\u4E2A\u8EAB\u4EFD\u8BC1;\u4E00\u4E2A\u8EAB\u4EFD\u8BC1\u5BF9\u5E94\u4E00\u4E2A\u4EBA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7B2C\u4E94\u7AE0-\u521B\u5EFA\u5916\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E94\u7AE0-\u521B\u5EFA\u5916\u952E\u7EA6\u675F" aria-hidden="true">#</a> \u7B2C\u4E94\u7AE0.\u521B\u5EFA\u5916\u952E\u7EA6\u675F</h1><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u683C\u5F0F:alter table \u4ECE\u8868 add [constraint \u5916\u952E\u540D\u79F0(\u81EA\u5B9A\u4E49)] foreign key \u4ECE\u8868(\u5916\u952E\u5217\u540D) references \u4E3B\u8868(\u4E3B\u952E\u5217\u540D)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-\u4E00\u5BF9\u591A\u7684\u8868\u521B\u5EFA\u5916\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_1-\u4E00\u5BF9\u591A\u7684\u8868\u521B\u5EFA\u5916\u952E\u7EA6\u675F" aria-hidden="true">#</a> 1.\u4E00\u5BF9\u591A\u7684\u8868\u521B\u5EFA\u5916\u952E\u7EA6\u675F</h2><img src="https://photo.sneoo.com/spring5/202207031647383.png" alt="image-20220406113317001" style="zoom:80%;"><img src="https://photo.sneoo.com/spring5/202207031647384.png" alt="image-20220406113819847" style="zoom:80%;"><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>    # \u5206\u7C7B\u8868-&gt;\u4E3B\u8868
    CREATE TABLE category (
      cid VARCHAR(32) PRIMARY KEY ,
      cname VARCHAR(50)
    );

    #\u5546\u54C1\u8868-&gt;\u4ECE\u8868
    CREATE TABLE products(
      pid VARCHAR(32) PRIMARY KEY ,
      pname VARCHAR(50),
      price DOUBLE,
      category_id VARCHAR(32)-- \u5916\u952E  \u5B58\u50A8\u7684\u662F\u4E3B\u8868\u7684\u4E3B\u952E\u5185\u5BB9
    );
    
        /*
     \u683C\u5F0F:alter table \u4ECE\u8868 add [constraint \u5916\u952E\u540D\u79F0(\u81EA\u5B9A\u4E49)] foreign key \u4ECE\u8868(\u5916\u952E\u5217\u540D) references \u4E3B\u8868(\u4E3B\u952E\u5217\u540D)    
    */
    
    ALTER TABLE products ADD CONSTRAINT cp1 FOREIGN KEY products(category_id) REFERENCES category(cid);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031647385.png" alt="image-20220406114927249" style="zoom:80%;"><h2 id="_2-\u591A\u5BF9\u591A\u7684\u8868\u521B\u5EFA\u5916\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_2-\u591A\u5BF9\u591A\u7684\u8868\u521B\u5EFA\u5916\u952E\u7EA6\u675F" aria-hidden="true">#</a> 2.\u591A\u5BF9\u591A\u7684\u8868\u521B\u5EFA\u5916\u952E\u7EA6\u675F</h2><img src="https://photo.sneoo.com/spring5/202207031647386.png" alt="image-20220406115332209" style="zoom:80%;"><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE DATABASE 210906_java3 CHARSET utf8;    
    #\u5546\u54C1\u8868
    CREATE TABLE products(
      pid VARCHAR(32) PRIMARY KEY ,
      pname VARCHAR(50),
      price DOUBLE
    );
    
   
   # \u8BA2\u5355\u8868 
  CREATE TABLE \`orders\`(
  \`oid\` VARCHAR(32) PRIMARY KEY ,
  \`totalprice\` DOUBLE 	#\u603B\u8BA1
  );
   
  #\u8BA2\u5355\u9879\u8868-&gt;\u4E2D\u95F4\u8868
CREATE TABLE orderitem(
  pid VARCHAR(50),-- \u5546\u54C1id-&gt;\u5916\u952E
  oid VARCHAR(50)-- \u8BA2\u5355id -&gt;\u5916\u952E
);

/*
  \u5546\u54C1\u8868:\u4E3B\u8868
  \u8BA2\u5355\u9879\u8868:\u4ECE\u8868
*/

    /*
     \u683C\u5F0F:alter table \u4ECE\u8868 add [constraint \u5916\u952E\u540D\u79F0(\u81EA\u5B9A\u4E49)] foreign key \u4ECE\u8868(\u5916\u952E\u5217\u540D) references \u4E3B\u8868(\u4E3B\u952E\u5217\u540D)    
    */
    
ALTER TABLE orderitem ADD CONSTRAINT cp1 FOREIGN KEY orderitem(pid) REFERENCES products(pid);


/*
  \u4E3B\u8868:\u8BA2\u5355\u8868
  \u4ECE\u8868:\u8BA2\u5355\u9879\u8868

*/
ALTER TABLE orderitem ADD CONSTRAINT cp2 FOREIGN KEY orderitem(oid) REFERENCES orders(oid);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031647387.png" alt="image-20220406120124208" style="zoom:80%;"><h1 id="\u7B2C\u516D\u7AE0-\u591A\u8868\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u516D\u7AE0-\u591A\u8868\u67E5\u8BE2" aria-hidden="true">#</a> \u7B2C\u516D\u7AE0.\u591A\u8868\u67E5\u8BE2</h1><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>    # \u5206\u7C7B\u8868
    CREATE TABLE category (
      cid VARCHAR(32) PRIMARY KEY ,
      cname VARCHAR(50)
    );

    #\u5546\u54C1\u8868
    CREATE TABLE products(
      pid VARCHAR(32) PRIMARY KEY ,
      pname VARCHAR(50),
      price DOUBLE,
      flag VARCHAR(2), #\u662F\u5426\u4E0A\u67B6\u6807\u8BB0\u4E3A\uFF1A1\u8868\u793A\u4E0A\u67B6\u30010\u8868\u793A\u4E0B\u67B6
      category_id VARCHAR(32), -- \u5916\u952E
      CONSTRAINT products_fk FOREIGN KEY (category_id) REFERENCES category (cid)
    );
    #\u5206\u7C7B
INSERT INTO category(cid,cname) VALUES(&#39;c001&#39;,&#39;\u5BB6\u7535&#39;);
INSERT INTO category(cid,cname) VALUES(&#39;c002&#39;,&#39;\u670D\u9970&#39;);
INSERT INTO category(cid,cname) VALUES(&#39;c003&#39;,&#39;\u5316\u5986\u54C1&#39;);
#\u5546\u54C1
INSERT INTO products(pid, pname,price,flag,category_id) VALUES(&#39;p001&#39;,&#39;\u8054\u60F3&#39;,5000,&#39;1&#39;,&#39;c001&#39;);
INSERT INTO products(pid, pname,price,flag,category_id) VALUES(&#39;p002&#39;,&#39;\u6D77\u5C14&#39;,3000,&#39;1&#39;,&#39;c001&#39;);
INSERT INTO products(pid, pname,price,flag,category_id) VALUES(&#39;p003&#39;,&#39;\u96F7\u795E&#39;,5000,&#39;1&#39;,&#39;c001&#39;);

INSERT INTO products (pid, pname,price,flag,category_id) VALUES(&#39;p004&#39;,&#39;JACK JONES&#39;,800,&#39;1&#39;,&#39;c002&#39;);
INSERT INTO products (pid, pname,price,flag,category_id) VALUES(&#39;p005&#39;,&#39;\u771F\u7EF4\u65AF&#39;,200,&#39;1&#39;,&#39;c002&#39;);
INSERT INTO products (pid, pname,price,flag,category_id) VALUES(&#39;p006&#39;,&#39;\u82B1\u82B1\u516C\u5B50&#39;,440,&#39;1&#39;,&#39;c002&#39;);
INSERT INTO products (pid, pname,price,flag,category_id) VALUES(&#39;p007&#39;,&#39;\u52B2\u9738&#39;,2000,&#39;1&#39;,&#39;c002&#39;);

INSERT INTO products (pid, pname,price,flag,category_id) VALUES(&#39;p008&#39;,&#39;\u9999\u5948\u513F&#39;,800,&#39;1&#39;,&#39;c003&#39;);
INSERT INTO products (pid, pname,price,flag,category_id) VALUES(&#39;p009&#39;,&#39;\u76F8\u5B9C\u672C\u8349&#39;,200,&#39;1&#39;,&#39;c003&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-\u4EA4\u53C9\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_1-\u4EA4\u53C9\u67E5\u8BE2" aria-hidden="true">#</a> 1.\u4EA4\u53C9\u67E5\u8BE2</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u683C\u5F0F:
  select \u5217\u540D from \u8868A,\u8868B;
2.\u6CE8\u610F:
  \u4EA4\u53C9\u67E5\u8BE2\u4F1A\u51FA\u73B0&quot;\u7B1B\u5361\u5C14\u4E58\u79EF&quot;(\u6240\u6709\u7684\u60C5\u51B5\u90FD\u7EC4\u5408\u4E00\u904D)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u67E5\u8BE2\u5546\u54C1\u7684\u8BE6\u7EC6\u4FE1\u606F,\u51FA\u73B0\u4E86\u7B1B\u5361\u5C14\u4E58\u79EF,\u67E5\u8BE2\u7ED3\u679C\u9519\u8BEF
SELECT * FROM category,products;


SELECT * FROM category,products WHERE category.cid = products.category_id;

-- \u7ED9\u8868\u8D77\u522B\u540D

SELECT * FROM category c,products p WHERE c.cid = p.category_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031647388.png" alt="image-20220406141729883" style="zoom:80%;"><img src="https://photo.sneoo.com/spring5/202207031647389.png" alt="image-20220406141918836" style="zoom:80%;"><h2 id="_2-\u5185\u8FDE\u63A5\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-\u5185\u8FDE\u63A5\u67E5\u8BE2" aria-hidden="true">#</a> 2.\u5185\u8FDE\u63A5\u67E5\u8BE2</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:inner join -&gt; inner \u53EF\u4EE5\u5E72\u6389
2.\u5206\u7C7B:
  \u663E\u793A\u5185\u8FDE\u63A5:select \u5217\u540D from \u8868A inner join \u8868B on \u6761\u4EF6
  \u9690\u5F0F\u5185\u8FDE\u63A5:select \u5217\u540D from \u8868A,\u8868B where \u6761\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u67E5\u8BE2\u5177\u4F53\u7684\u5546\u54C1\u4FE1\u606F-&gt;\u9690\u5F0F\u5185\u8FDE\u63A5
SELECT * FROM category c,products p WHERE c.cid = p.category_id;

-- \u67E5\u8BE2\u5177\u4F53\u7684\u5546\u54C1\u4FE1\u606F-&gt;\u663E\u793A\u5185\u8FDE\u63A5
SELECT * FROM category c INNER JOIN products p ON c.\`cid\` = p.\`category_id\`;

-- \u7528\u663E\u793A\u5185\u8FDE\u63A5\u7684\u65B9\u5F0F\u67E5\u8BE2&quot;\u5316\u5986\u54C1&quot;\u7684\u5546\u54C1\u4FE1\u606F

/*
   on...\u6761\u4EF61...and...\u6761\u4EF62 -&gt; \u8BA4\u4E3A\u6761\u4EF61\u548C\u6761\u4EF62\u662F\u4E00\u4E2A\u6574\u4F53,\u662F\u4E00\u4E2A\u5927\u7684\u6761\u4EF6,\u8981\u540C\u65F6\u6EE1\u8DB3
   
   on...\u6761\u4EF61...where...\u6761\u4EF62-&gt; \u5148\u6839\u636Eon\u67E5\u8BE2\u51FA\u4E00\u4E2A\u7ED3\u679C,\u67E5\u8BE2\u4E4B\u540E\u7528where\u8FDB\u884C\u7B5B\u9009
*/
SELECT * FROM category c INNER JOIN products p ON c.\`cid\` = p.\`category_id\` AND cname = &#39;\u5316\u5986\u54C1&#39;;

SELECT * FROM category c INNER JOIN products p ON c.\`cid\` = p.\`category_id\` WHERE cname = &#39;\u5316\u5986\u54C1&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u5916\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_3-\u5916\u8FDE\u63A5" aria-hidden="true">#</a> 3.\u5916\u8FDE\u63A5</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u5173\u952E\u5B57:outer join -&gt; outer \u53EF\u7701\u7565
2.\u8BED\u6CD5:
  a.\u5DE6\u5916\u8FDE\u63A5:select \u5217\u540D from \u8868A left outer join \u8868B on \u6761\u4EF6
  b.\u53F3\u5916\u8FDE\u63A5:select \u5217\u540D from \u8868A right outer join \u8868B on \u6761\u4EF6
3.\u5982\u4F55\u533A\u5206\u8C01\u662F\u5DE6\u8868,\u8C01\u662F\u53F3\u8868
  \u770Bjoin\u8FD9\u4E2A\u5355\u8BCD
  
  \u5728join\u5DE6\u8FB9\u7684\u5C31\u662F\u5DE6\u8868
  \u5728join\u53F3\u8FB9\u7684\u5C31\u662F\u53F3\u8868
  
4.\u5DE6\u5916\u8FDE\u63A5,\u53F3\u5916\u8FDE\u63A5,\u5185\u8FDE\u63A5

  a.\u5DE6\u5916\u8FDE\u63A5:\u67E5\u8BE2\u7684\u662F\u548C\u53F3\u8868\u7684\u4EA4\u96C6,\u4EE5\u53CA\u5DE6\u8868\u7684\u5168\u90E8(\u548C\u53F3\u8868\u7684\u4EA4\u96C6,\u4EE5\u53CA\u9664\u4EA4\u96C6\u4E4B\u5916\u7684\u5176\u4ED6\u5DE6\u8868\u6570\u636E)
  b.\u53F3\u5916\u8FDE\u63A5:\u67E5\u8BE2\u7684\u662F\u548C\u5DE6\u8868\u7684\u4EA4\u96C6,\u4EE5\u53CA\u53F3\u8868\u7684\u5168\u90E8(\u548C\u5DE6\u8868\u7684\u4EA4\u96C6,\u4EE5\u53CA\u9664\u4EA4\u96C6\u4E4B\u5916\u7684\u5176\u4ED6\u53F3\u8868\u6570\u636E)
  c.\u5185\u8FDE\u63A5:\u67E5\u8BE2\u7684\u662F\u4E24\u4E2A\u8868\u7684\u4EA4\u96C6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u67E5\u8BE2\u6240\u6709\u7684\u5546\u54C1\u4FE1\u606F-&gt;\u5DE6\u5916\u8FDE\u63A5
/*
   \u5DE6\u8868:category
   \u53F3\u8868:products
*/
SELECT * FROM category c LEFT OUTER JOIN products p ON c.\`cid\` = p.\`category_id\`;

-- \u7701\u7565outer
SELECT * FROM category c LEFT JOIN products p ON c.\`cid\` = p.\`category_id\`;

-- \u67E5\u8BE2\u6240\u6709\u7684\u5546\u54C1\u4FE1\u606F-&gt;\u53F3\u5916\u8FDE\u63A5

/*
   \u5DE6\u8868:category
   \u53F3\u8868:products
*/
SELECT * FROM category c RIGHT JOIN products p ON c.\`cid\` = p.\`category_id\`;


-- \u5185\u8FDE\u63A5

SELECT * FROM category c,products p WHERE c.\`cid\` = p.\`category_id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031647390.png" alt="image-20220406150004173" style="zoom:80%;"><img src="https://photo.sneoo.com/spring5/202207031647391.png" alt="image-20220406150051140" style="zoom:80%;"><img src="https://photo.sneoo.com/spring5/202207031647392.png" alt="image-20220406150114080" style="zoom:80%;"><h2 id="_4-union\u8054\u5408\u67E5\u8BE2\u5B9E\u73B0\u5168\u5916\u8FDE\u63A5\u67E5\u8BE2-\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#_4-union\u8054\u5408\u67E5\u8BE2\u5B9E\u73B0\u5168\u5916\u8FDE\u63A5\u67E5\u8BE2-\u4E86\u89E3" aria-hidden="true">#</a> 4.union\u8054\u5408\u67E5\u8BE2\u5B9E\u73B0\u5168\u5916\u8FDE\u63A5\u67E5\u8BE2\uFF08\u4E86\u89E3\uFF09</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u9996\u5148\u8981\u660E\u786E\uFF0C\u8054\u5408\u67E5\u8BE2\u4E0D\u662F\u591A\u8868\u8FDE\u63A5\u67E5\u8BE2\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u8054\u5408\u67E5\u8BE2\u662F\u5C06\u591A\u6761\u67E5\u8BE2\u8BED\u53E5\u7684\u67E5\u8BE2\u7ED3\u679C\u5408\u5E76\u6210\u4E00\u4E2A\u7ED3\u679C\u5E76\u53BB\u6389\u91CD\u590D\u6570\u636E\u3002
\u5168\u5916\u8FDE\u63A5\u67E5\u8BE2\u7684\u610F\u601D\u5C31\u662F\u5C06\u5DE6\u8868\u548C\u53F3\u8868\u7684\u6570\u636E\u90FD\u67E5\u8BE2\u51FA\u6765\uFF0C\u7136\u540E\u6309\u7167\u8FDE\u63A5\u6761\u4EF6\u8FDE\u63A5
    
\u53EA\u8981\u5C06\u4E24\u4E2A\u7ED3\u679C\u4E00\u8FDE\u63A5<span class="token punctuation">,</span>\u5DE6\u8868\u548C\u53F3\u8868\u6CA1\u6709\u4EA4\u53C9\u7684\u90E8\u5206\u4E5F\u5C31\u591A\u67E5\u51FA\u6765\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span>union\u7684\u8BED\u6CD5<span class="token operator">:</span>
  \u67E5\u8BE2\u8BED\u53E5<span class="token number">1</span> union \u67E5\u8BE2\u8BED\u53E5<span class="token number">2</span> union \u67E5\u8BE2\u8BED\u53E5<span class="token number">3</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT * FROM category c LEFT JOIN products p ON c.\`cid\` = p.\`category_id\`

UNION

SELECT * FROM category c RIGHT JOIN products p ON c.\`cid\` = p.\`category_id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031647393.png" alt="image-20220406152323721" style="zoom:80%;"><h2 id="_5-\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_5-\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> 5.\u5B50\u67E5\u8BE2</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u6982\u8FF0:\u4E00\u6761\u67E5\u8BE2\u8BED\u53E5\u4F5C\u4E3A\u53E6\u5916\u4E00\u6761\u67E5\u8BE2\u8BED\u53E5\u7684\u6761\u4EF6\u4F7F\u7528
2.\u8BED\u6CD5:
  select \u5217\u540D from \u8868\u540D where (select \u5217\u540D from \u8868\u540D)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u67E5\u8BE2products\u8868\u4E2D&#39;\u5316\u5986\u54C1&#39;\u7684\u5546\u54C1\u4FE1\u606F
SELECT * FROM products WHERE category_id = &#39;c003&#39;;
/*
  1.\u5982\u679C\u76F4\u63A5\u7528category_id = &#39;c003&#39;\u67E5\u8BE2\u5316\u5986\u54C1\u662F\u4E0D\u597D\u7684
  2.\u56E0\u4E3A:\u6211\u4EEC\u5355\u7EAF\u7684\u770Bproducts\u8868,\u6211\u4EEC\u5176\u5B9E\u4E0D\u80FD\u65AD\u5B9Ac003\u5C31\u4E00\u5B9A\u662F\u5316\u5986\u54C1
         \u56E0\u4E3Aproducts\u8868\u4E2D\u7684c003\u662F\u6839\u636Ecategory\u8868\u6765\u7684
  3.\u601D\u8003:products\u8868\u4E2D\u7684category_id\u5217\u4E2D\u6570\u636E\u90FD\u662F\u6839\u636Ecategory\u8868\u6765\u7684
         \u867D\u7136\u5206\u7C7B\u7684\u7F16\u53F7\u4E0D\u786E\u5B9A\u5230\u5E95\u4EE3\u8868\u5565,\u4F46\u662F\u5206\u7C7B\u7684\u540D\u79F0,&quot;\u5316\u5986\u54C1&quot;\u8FD9\u4E09\u4E2A\u5B57\u662F\u786E\u5B9A\u7684\u5427
  4.\u6240\u4EE5:\u6211\u4EEC\u7684\u601D\u8DEF\u5E94\u8BE5\u662F\u5148\u6839\u636E\u786E\u5B9A\u7684&quot;\u5316\u5986\u54C1&quot;\u8FD9\u4E09\u4E2A\u5B57\u67E5\u8BE2\u51FA\u5BF9\u5E94\u7684\u7F16\u53F7(cid)
         \u7136\u540E\u4F5C\u4E3A\u6211\u4EEC\u6700\u7EC8\u7684\u67E5\u8BE2\u6761\u4EF6\u4F7F\u7528
*/

-- \u5148\u6839\u636E&quot;\u5316\u5986\u54C1&quot;\u8FD9\u4E09\u4E2A\u5B57\u67E5\u8BE2\u5BF9\u5E94\u7684id
SELECT cid FROM category WHERE cname = &#39;\u5316\u5986\u54C1&#39;;

SELECT * FROM products WHERE category_id = (SELECT cid FROM category WHERE cname = &#39;\u5316\u5986\u54C1&#39;);


-- \u67E5\u8BE2products\u8868\u4E2D\u5316\u5986\u54C1\u548C\u5BB6\u7535\u7684\u5546\u54C1\u4FE1\u606F
SELECT * FROM products WHERE category_id = &#39;c001&#39; OR category_id = &#39;c003&#39;;
SELECT * FROM products WHERE category_id IN (&#39;c001&#39;,&#39;c003&#39;);

/*
  products\u8868\u4E2D\u7684category_id\u5217\u4E2D\u6570\u636E\u662F\u6839\u636Ecategory\u8868\u6765\u7684
  \u6240\u4EE5\u6211\u4EEC\u4E5F\u4E0D\u786E\u5B9Aproducts\u8868\u4E2D\u7684c001\u548Cc003\u5230\u5E95\u4EE3\u8868\u5565\u5206\u7C7B
  
  \u6240\u4EE5,\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u786E\u5B9A\u7684&quot;\u5BB6\u7535&quot;\u548C&quot;\u5316\u5986\u54C1&quot;\u8FD9\u51E0\u4E2A\u5B57\u6765\u5C06\u5BF9\u5E94\u7684cid\u67E5\u8BE2\u51FA\u6765
  
  \u5728\u5C06\u67E5\u8BE2\u51FA\u6765\u7684\u7ED3\u679C\u4F5C\u4E3A\u6761\u4EF6\u4F7F\u7528
*/

SELECT cid FROM category WHERE cname IN(&#39;\u5BB6\u7535&#39;,&#39;\u5316\u5986\u54C1&#39;);

SELECT * FROM products WHERE category_id IN (SELECT cid FROM category WHERE cname IN(&#39;\u5BB6\u7535&#39;,&#39;\u5316\u5986\u54C1&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u5B50\u67E5\u8BE2\u4F5C\u4E3A\u4F2A\u8868\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_6-\u5B50\u67E5\u8BE2\u4F5C\u4E3A\u4F2A\u8868\u4F7F\u7528" aria-hidden="true">#</a> 6.\u5B50\u67E5\u8BE2\u4F5C\u4E3A\u4F2A\u8868\u4F7F\u7528</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>1.\u67E5\u8BE2\u51FA\u6765\u7684\u7ED3\u679C\u662F\u4EE5\u8868\u7684\u5F62\u5F0F\u5448\u73B0,\u8FD9\u4E2A\u8868\u662F\u53EA\u8BFB\u6743\u9650,\u8FD9\u4E2A\u67E5\u8BE2\u51FA\u6765\u7684\u8868\u5C31\u662F\u4E00\u5F20\u4F2A\u8868
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u67E5\u8BE2\u5316\u5986\u54C1\u7684\u6240\u6709\u5546\u54C1\u4FE1\u606F
SELECT * FROM category c,products p WHERE c.\`cid\` = p.\`category_id\` AND c.\`cname\` = &#39;\u5316\u5986\u54C1&#39;;

-- \u5148\u4ECEcategory\u8868\u4E2D\u5C06&quot;\u5316\u5986\u54C1&quot;\u67E5\u51FA\u6765,\u4F5C\u4E3A\u4F2A\u8868
SELECT * FROM category WHERE cname = &#39;\u5316\u5986\u54C1&#39;;

-- \u5C06\u4E0A\u9762\u7684\u4F2A\u8868\u548Cproducts\u505A\u67E5\u8BE2
SELECT * FROM (SELECT * FROM category WHERE cname = &#39;\u5316\u5986\u54C1&#39;) c,products p WHERE c.\`cid\` = p.\`category_id\`

-- \u67E5\u8BE2\u6240\u6709\u5316\u5986\u54C1\u548C\u5BB6\u7535\u7684\u5546\u54C1\u4FE1\u606F
SELECT * FROM category c,products p WHERE c.\`cid\` = p.\`category_id\` AND c.\`cname\` IN (&#39;\u5316\u5986\u54C1&#39;,&#39;\u5BB6\u7535&#39;);

-- \u5148\u67E5\u8BE2category\u8868\u4E2D\u7684\u5BB6\u7535\u548C\u5316\u5986\u54C1
SELECT * FROM category WHERE cname IN (&#39;\u5316\u5986\u54C1&#39;,&#39;\u5BB6\u7535&#39;);
-- \u5C06\u4E0A\u9762\u67E5\u8BE2\u7ED3\u679C\u4F5C\u4E3A\u4F2A\u8868\u4F7F\u7528

SELECT * FROM (SELECT * FROM category WHERE cname IN (&#39;\u5316\u5986\u54C1&#39;,&#39;\u5BB6\u7535&#39;)) c,products p WHERE c.\`cid\` = p.\`category_id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://photo.sneoo.com/spring5/202207031647394.png" alt="image-20220406155712779" style="zoom:80%;"><img src="https://photo.sneoo.com/spring5/202207031647395.png" alt="image-20220406155836800" style="zoom:80%;"><h1 id="\u7B2C\u4E03\u7AE0-mysql\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E03\u7AE0-mysql\u51FD\u6570" aria-hidden="true">#</a> \u7B2C\u4E03\u7AE0.mysql\u51FD\u6570</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>mysql\u4E2D\u7684\u51FD\u6570\u90FD\u662F\u9488\u5BF9\u6307\u5B9A\u5217\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u64CD\u4F5C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-\u5B57\u7B26\u4E32\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u5B57\u7B26\u4E32\u51FD\u6570" aria-hidden="true">#</a> 1.\u5B57\u7B26\u4E32\u51FD\u6570</h2><h3 id="_1-1-1-\u5B57\u7B26\u4E32\u51FD\u6570\u5217\u8868\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u5B57\u7B26\u4E32\u51FD\u6570\u5217\u8868\u6982\u89C8" aria-hidden="true">#</a> 1.1.1 \u5B57\u7B26\u4E32\u51FD\u6570\u5217\u8868\u6982\u89C8</h3><table><thead><tr><th>\u51FD\u6570</th><th>\u7528\u6CD5</th></tr></thead><tbody><tr><td>CONCAT(S1,S2,......,Sn)</td><td>\u8FDE\u63A5S1,S2,......,Sn\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32</td></tr><tr><td>CONCAT_WS(separator, S1,S2,......,Sn)</td><td>\u8FDE\u63A5S1\u4E00\u76F4\u5230Sn\uFF0C\u5E76\u4E14\u4E2D\u95F4\u4EE5separator\u4F5C\u4E3A\u5206\u9694\u7B26</td></tr><tr><td>UPPER(s) \u6216 UCASE(s)</td><td>\u5C06\u5B57\u7B26\u4E32s\u7684\u6240\u6709\u5B57\u6BCD\u8F6C\u6210\u5927\u5199\u5B57\u6BCD</td></tr><tr><td>LOWER(s) \u6216LCASE(s)</td><td>\u5C06\u5B57\u7B26\u4E32s\u7684\u6240\u6709\u5B57\u6BCD\u8F6C\u6210\u5C0F\u5199\u5B57\u6BCD</td></tr><tr><td>TRIM(s)</td><td>\u53BB\u6389\u5B57\u7B26\u4E32s\u5F00\u59CB\u4E0E\u7ED3\u5C3E\u7684\u7A7A\u683C</td></tr><tr><td>SUBSTRING(s,index,len)</td><td>\u8FD4\u56DE\u4ECE\u5B57\u7B26\u4E32s\u7684index\u4F4D\u7F6E\u5176len\u4E2A\u5B57\u7B26</td></tr></tbody></table><h3 id="_1-1-2-\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> 1.1.2 \u73AF\u5883\u51C6\u5907</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u7528\u6237\u8868
CREATE TABLE t_user (
  id int(11) NOT NULL AUTO_INCREMENT,
  uname varchar(40) DEFAULT NULL,
  age int(11) DEFAULT NULL,
  sex int(11) DEFAULT NULL,
  PRIMARY KEY (id)
);

insert  into t_user values (null,&#39;zs&#39;,18,1);
insert  into t_user values (null,&#39;ls&#39;,20,0);
insert  into t_user values (null,&#39;ww&#39;,23,1);
insert  into t_user values (null,&#39;zl&#39;,24,1);
insert  into t_user values (null,&#39;lq&#39;,15,0);
insert  into t_user values (null,&#39;hh&#39;,12,0);
insert  into t_user values (null,&#39;wzx&#39;,60,null);
insert  into t_user values (null,&#39;lb&#39;,null,null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-\u5B57\u7B26\u4E32\u8FDE\u63A5\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u5B57\u7B26\u4E32\u8FDE\u63A5\u51FD\u6570" aria-hidden="true">#</a> 1.1.3 \u5B57\u7B26\u4E32\u8FDE\u63A5\u51FD\u6570</h3><p>\u5B57\u7B26\u4E32\u8FDE\u63A5\u51FD\u6570\u4E3B\u8981\u67092\u4E2A\uFF1A</p><table><thead><tr><th>\u51FD\u6570\u6216\u64CD\u4F5C\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>concat(str1, str2, ...)</td><td>\u5B57\u7B26\u4E32\u8FDE\u63A5\u51FD\u6570\uFF0C\u53EF\u4EE5\u5C06\u591A\u4E2A\u5B57\u7B26\u4E32\u8FDB\u884C\u8FDE\u63A5</td></tr><tr><td>concat_ws(separator, str1, str2, ...)</td><td>\u53EF\u4EE5\u6307\u5B9A\u95F4\u9694\u7B26\u5C06\u591A\u4E2A\u5B57\u7B26\u4E32\u8FDB\u884C\u8FDE\u63A5\uFF1B</td></tr></tbody></table><p>\u7EC3\u4E601\uFF1A\u4F7F\u7528concat\u51FD\u6570\u663E\u793A\u51FA \u4F60\u597Duname \u7684\u7ED3\u679C</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
   concat(str1, str2, ...)
   \u5B57\u7B26\u4E32\u8FDE\u63A5\u51FD\u6570\uFF0C\u53EF\u4EE5\u5C06\u591A\u4E2A\u5B57\u7B26\u4E32\u8FDB\u884C\u8FDE\u63A5
*/
SELECT CONCAT(&#39;a&#39;,&#39;b&#39;);


-- \u7EC3\u4E601\uFF1A\u4F7F\u7528concat\u51FD\u6570\u663E\u793A\u51FA \u4F60\u597Duname \u7684\u7ED3\u679C
SELECT CONCAT(&#39;\u4F60\u597D&#39;,uname),age FROM t_user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC3\u4E602\uFF1A\u4F7F\u7528concat_ws\u51FD\u6570\u663E\u793A\u51FA \u4F60\u597D,uname \u7684\u7ED3\u679C</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
  concat_ws(separator, str1, str2, ...)
  \u53EF\u4EE5\u6307\u5B9A\u95F4\u9694\u7B26\u5C06\u591A\u4E2A\u5B57\u7B26\u4E32\u8FDB\u884C\u8FDE\u63A5\uFF1B
*/

SELECT CONCAT_WS(&#39;,&#39;,&#39;\u4F60\u597D&#39;,uname),age FROM t_user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-\u5B57\u7B26\u4E32\u5927\u5C0F\u5199\u5904\u7406\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-4-\u5B57\u7B26\u4E32\u5927\u5C0F\u5199\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a> 1.1.4 \u5B57\u7B26\u4E32\u5927\u5C0F\u5199\u5904\u7406\u51FD\u6570</h3><p>\u5B57\u7B26\u4E32\u5927\u5C0F\u5199\u5904\u7406\u51FD\u6570\u4E3B\u8981\u67092\u4E2A\uFF1A</p><table><thead><tr><th>\u51FD\u6570\u6216\u64CD\u4F5C\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>upper(str)</td><td>\u5F97\u5230str\u7684\u5927\u5199\u5F62\u5F0F</td></tr><tr><td>lower(str)</td><td>\u5F97\u5230str\u7684\u5C0F\u5199\u5F62\u5F0F</td></tr></tbody></table><p>\u7EC3\u4E601\uFF1A \u5C06\u5B57\u7B26\u4E32 hello \u8F6C\u6362\u4E3A\u5927\u5199\u663E\u793A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
  upper(str)\u5F97\u5230str\u7684\u5927\u5199\u5F62\u5F0F
*/
-- \u7EC3\u4E601\uFF1A \u5C06\u5B57\u7B26\u4E32 hello \u8F6C\u6362\u4E3A\u5927\u5199\u663E\u793A
SELECT UPPER(&#39;hello&#39;) ;
-- \u67E5\u8BE2t_user\u7684uname\u548Cage\u5217,\u663E\u793A\u7ED3\u679C\u5C06uname\u4E2D\u7684\u5B57\u7B26\u53D8\u6210\u5927\u5199
SELECT UPPER(uname),age FROM t_user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC3\u4E602\uFF1A\u5C06\u5B57\u7B26\u4E32 heLLo \u8F6C\u6362\u4E3A\u5C0F\u5199\u663E\u793A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
lower(str)\u5F97\u5230str\u7684\u5C0F\u5199\u5F62\u5F0F
*/

-- \u7EC3\u4E602\uFF1A\u5C06\u5B57\u7B26\u4E32 heLLo \u8F6C\u6362\u4E3A\u5C0F\u5199\u663E\u793A
SELECT LOWER(&#39;HELLO&#39;) ;

-- \u67E5\u8BE2t_user\u7684uname\u548Cage\u5217,\u663E\u793A\u7ED3\u679C\u5C06uname\u4E2D\u7684\u5B57\u7B26\u53D8\u6210\u5C0F\u5199
SELECT LOWER(uname),age FROM t_user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-5-\u79FB\u9664\u7A7A\u683C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-5-\u79FB\u9664\u7A7A\u683C\u51FD\u6570" aria-hidden="true">#</a> 1.1.5 \u79FB\u9664\u7A7A\u683C\u51FD\u6570</h3><p>\u53EF\u4EE5\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u6309\u957F\u5EA6\u586B\u5145\u6EE1\u3001\u4E5F\u53EF\u4EE5\u79FB\u9664\u7A7A\u683C\u7B26</p><table><thead><tr><th>\u51FD\u6570\u6216\u64CD\u4F5C\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>trim(str)</td><td>\u5C06str\u4E24\u8FB9\u7684\u7A7A\u767D\u7B26\u79FB\u9664</td></tr></tbody></table><p>\u7EC3\u4E601\uFF1A \u5C06\u7528\u6237id\u4E3A8\u7684\u7528\u6237\u7684\u59D3\u540D\u7684\u4E24\u8FB9\u7A7A\u767D\u7B26\u79FB\u9664</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
  trim(str)\u5C06str\u4E24\u8FB9\u7684\u7A7A\u767D\u7B26\u79FB\u9664
*/
-- \u5C06\u7528\u6237id\u4E3A8\u7684\u7528\u6237\u7684\u59D3\u540D\u7684\u4E24\u8FB9\u7A7A\u767D\u7B26\u79FB\u9664

SELECT TRIM(uname),age FROM t_user WHERE id = 8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-6-\u5B50\u4E32\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-6-\u5B50\u4E32\u51FD\u6570" aria-hidden="true">#</a> 1.1.6 \u5B50\u4E32\u51FD\u6570</h3><p>\u5B57\u7B26\u4E32\u4E5F\u53EF\u4EE5\u6309\u6761\u4EF6\u8FDB\u884C\u622A\u53D6\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u53EF\u4EE5\u622A\u53D6\u5B50\u4E32\u7684\u51FD\u6570;</p><table><thead><tr><th>\u51FD\u6570\u6216\u64CD\u4F5C\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>substr()\u3001substring()</td><td>\u83B7\u53D6\u5B50\u4E32\uFF1A 1\uFF1Asubstr(str, pos) \u3001substring(str, pos)\uFF1B 2\uFF1Asubstr(str, pos, len)\u3001substring(str, pos, len)</td></tr></tbody></table><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/*
  1\uFF1Asubstr(str, pos)-&gt; \u4ECEpos\u5F00\u59CB,\u4E14\u5230\u6700\u540E
     substring(str, pos)-&gt; \u4ECEpos\u5F00\u59CB,\u4E14\u5230\u6700\u540E
     
     \u4EE5\u4E0A\u4E24\u4E2A\u51FD\u6570\u529F\u80FD\u4E00\u6837
     
  2.substr(str, pos, len)
    substring(str, pos, len)
    
    \u53C2\u6570\u8BF4\u660E:
       str:\u8981\u622A\u53D6\u7684\u5B57\u7B26\u4E32
       pos:\u4ECE\u7B2C\u51E0\u4E2A\u5B57\u7B26\u5F00\u59CB\u5207(\u4E0D\u662F\u5B57\u7B26\u4E32\u7D22\u5F15)
       len:\u5207\u591A\u5C11\u4E2A\u5B57\u7B26
*/
SELECT SUBSTR(&#39;abcdefg&#39;,3);

SELECT SUBSTR(&#39;abcdefg&#39;,3,3);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC3\u4E601\uFF1A\u83B7\u53D6 hello,world \u4ECE\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u5F00\u59CB\u7684\u5B8C\u6574\u5B50\u4E32</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u7EC3\u4E601\uFF1A\u83B7\u53D6 hello,world \u4ECE\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u5F00\u59CB\u7684\u5B8C\u6574\u5B50\u4E32
SELECT SUBSTR(&#39;hello,world&#39;,2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC3\u4E602\uFF1A\u83B7\u53D6 hello,world \u4ECE\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u5F00\u59CB\u4F46\u662F\u957F\u5EA6\u4E3A4\u7684\u5B50\u4E32</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u7EC3\u4E602\uFF1A\u83B7\u53D6 hello,world \u4ECE\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u5F00\u59CB\u4F46\u662F\u957F\u5EA6\u4E3A4\u7684\u5B50\u4E32
SELECT SUBSTR(&#39;hello,world&#39;,2,4);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7B2C\u516B\u7AE0-sql\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u516B\u7AE0-sql\u7EC3\u4E60" aria-hidden="true">#</a> \u7B2C\u516B\u7AE0.sql\u7EC3\u4E60</h1><h2 id="_1-\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a> 1.\u521B\u5EFA\u6570\u636E\u5E93</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE DATABASE mytest01;
USE mytest01;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u521B\u5EFA\u8868\u4EE5\u53CA\u6DFB\u52A0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u8868\u4EE5\u53CA\u6DFB\u52A0\u6570\u636E" aria-hidden="true">#</a> 2.\u521B\u5EFA\u8868\u4EE5\u53CA\u6DFB\u52A0\u6570\u636E</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u521B\u5EFA\u90E8\u95E8\u8868dept  \u90E8\u95E8\u8868\u4E2D\u5305\u542B \u90E8\u95E8id \u90E8\u95E8\u540D\u79F0  
CREATE TABLE dept(
  id INT PRIMARY KEY AUTO_INCREMENT,
  NAME VARCHAR(20)
)

INSERT INTO dept (NAME) VALUES (&#39;\u5F00\u53D1\u90E8&#39;),(&#39;\u5E02\u573A\u90E8&#39;),(&#39;\u8D22\u52A1\u90E8&#39;);  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u521B\u5EFA\u5458\u5DE5\u8868
CREATE TABLE emp (
  id INT PRIMARY KEY AUTO_INCREMENT,
  NAME VARCHAR(10),
  gender CHAR(1),   -- \u6027\u522B
  salary DOUBLE,   -- \u5DE5\u8D44
  join_date DATE,  -- \u5165\u804C\u65E5\u671F
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES dept(id) -- \u5916\u952E\uFF0C\u5173\u8054\u90E8\u95E8\u8868(\u90E8\u95E8\u8868\u7684\u4E3B\u952E)
)  

INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;\u5C0F\u677E\u677E&#39;,&#39;\u7537&#39;,7200,&#39;2013-02-24&#39;,1);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;\u9C7C\u5C0F\u9C7C&#39;,&#39;\u5973&#39;,3600,&#39;2015-12-02&#39;,2);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;\u5C0F\u9708\u9708&#39;,&#39;\u7537&#39;,8000,&#39;2013-12-02&#39;,3);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;\u4EAE\u4ED4&#39;,&#39;\u7537&#39;,5000,&#39;2017-11-11&#39;,2);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;\u5764\u4ED4&#39;,&#39;\u7537&#39;,8000,&#39;2012-02-02&#39;,1);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;\u798F\u59D0&#39;,&#39;\u5973&#39;,6500,&#39;2011-09-12&#39;,3);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;\u718A\u59D0&#39;,&#39;\u5973&#39;,10500,&#39;2018-12-02&#39;,3);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;\u731B\u54E5&#39;,&#39;\u7537&#39;,9500,&#39;2016-07-08&#39;,2);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;\u680B\u680B&#39;,&#39;\u7537&#39;,8500,&#39;2018-06-28&#39;,2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_3-\u7EC3\u4E60" aria-hidden="true">#</a> 3.\u7EC3\u4E60</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 1.\u67E5\u8BE2\u5458\u5DE5\u548C\u90E8\u95E8\u7684\u540D\u5B57
SELECT emp.\`name\`, dept.\`name\` FROM emp,dept WHERE emp.\`dept_id\` = dept.\`id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 2.\u67E5\u8BE2\u9C7C\u5C0F\u9C7C\u7684\u4FE1\u606F\uFF0C\u663E\u793A\u5458\u5DE5id\uFF0C\u59D3\u540D\uFF0C\u6027\u522B\uFF0C\u5DE5\u8D44\u548C\u6240\u5728\u7684\u90E8\u95E8\u540D\u79F0(\u4F7F\u7528\u663E\u5F0F\u5185\u8FDE\u63A5)
SELECT * FROM emp e INNER JOIN dept d ON e.\`dept_id\` = d.\`id\` WHERE e.\`name\`=&#39;\u9C7C\u5C0F\u9C7C&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 3.\u5C06\u4E0A\u9762\u67E5\u5230\u7684\u5185\u5BB9 \u8868\u5934\u4F7F\u7528\u522B\u540D\u7684\u5F62\u5F0F\u5C55\u793A \u6BD4\u5982\u663E\u793Aid\u4E3A\u5458\u5DE5id  name\u4E3A\u59D3\u540D \u7B49
SELECT e.id \u7F16\u53F7,e.name \u59D3\u540D,e.gender \u6027\u522B,e.salary \u5DE5\u8D44,d.name \u90E8\u95E8\u540D\u5B57 FROM emp e INNER JOIN dept d ON e.dept_id = d.id WHERE e.name=&#39;\u9C7C\u5C0F\u9C7C&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 4.\u5728\u90E8\u95E8\u8868\u4E2D\u589E\u52A0\u4E00\u4E2A\u9500\u552E\u90E8 
INSERT INTO dept (NAME) VALUES (&#39;\u9500\u552E\u90E8&#39;);
SELECT * FROM dept;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 5.\u67E5\u8BE2\u6240\u6709\u7684\u90E8\u95E8\u4FE1\u606F\u5173\u8054\u67E5\u8BE2\u51FA\u8BE5\u90E8\u95E8\u4E2D\u7684\u6240\u6709\u5458\u5DE5\u4FE1\u606F 
SELECT * FROM dept d LEFT JOIN emp e ON d.\`id\` = e.\`dept_id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 6.\u67E5\u8BE2\u6240\u6709\u7684\u90E8\u95E8\u4FE1\u606F\u5173\u8054\u67E5\u8BE2\u51FA\u8BE5\u90E8\u95E8\u4E2D\u7684\u6240\u6709\u5458\u5DE5\u7684\u540D\u5B57  \u90E8\u95E8 \u4EE5\u53CA \u5DE5\u8D44 
SELECT e.name \u59D3\u540D,d.name \u90E8\u95E8, e.salary \u5DE5\u8D44 FROM dept d LEFT JOIN emp e ON d.id = e.dept_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 7.\u7EDF\u8BA1\u51FA \u6BCF\u4E2A\u90E8\u95E8\u7684\u5458\u5DE5\u4EBA\u6570   \u67E5\u8BE2\u663E\u793A \u90E8\u95E8\u540D\u79F0 \u4EBA\u6570 
SELECT d.name \u90E8\u95E8,COUNT(e.name) \u4EBA\u6570 FROM dept d LEFT JOIN emp e ON d.id = e.dept_id GROUP BY d.name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 8.\u7EDF\u8BA1\u51FA \u6BCF\u4E2A\u90E8\u95E8\u5458\u5DE5 \u5E73\u5747\u85AA\u8D44 \u6309\u7167 \u85AA\u8D44\u6392\u5E8F \u67E5\u8BE2\u663E\u793A \u90E8\u95E8\u540D\u79F0 \u5E73\u5747\u85AA\u8D44 
SELECT d.name \u90E8\u95E8,AVG(e.salary) \u4EBA\u6570 FROM dept d LEFT JOIN emp e ON d.id = e.dept_id GROUP BY d.name ORDER BY salary;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 9.\u7EDF\u8BA1\u51FA\uFF0C\u6BCF\u4E2A\u90E8\u95E8\u7684\u5E73\u5747\u85AA\u8D44 \u6309\u7167\u85AA\u8D44\u6392\u5E8F \u5E76\u4E14\u7B5B\u9009\u51FA\u5E73\u5747\u85AA\u8D44&gt;7000\u7684\u90E8\u95E8
SELECT d.name \u90E8\u95E8,AVG(e.salary) \u4EBA\u6570 FROM dept d LEFT JOIN emp e ON d.id = e.dept_id 
GROUP BY d.name HAVING AVG(e.salary)&gt;7000 ORDER BY salary;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 10.\u67E5\u8BE2\u6700\u9AD8\u5DE5\u8D44\u662F\u591A\u5C11
SELECT MAX(salary) FROM emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 11.\u6839\u636E\u6700\u9AD8\u5DE5\u8D44\u5230\u5458\u5DE5\u8868\u67E5\u8BE2\u5230\u5BF9\u5E94\u7684\u5458\u5DE5\u4FE1\u606F
SELECT * FROM emp WHERE salary=(SELECT MAX(salary) FROM emp)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 12.\u67E5\u8BE2\u5DE5\u8D44\u5C0F\u4E8E\u5E73\u5747\u5DE5\u8D44\u7684\u5458\u5DE5\u6709\u54EA\u4E9B
SELECT * FROM emp WHERE salary &lt; (SELECT AVG(salary) FROM emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 13.\u67E5\u8BE2\u5DE5\u8D44\u5927\u4E8E5000\u7684\u5458\u5DE5\uFF0C\u6765\u81EA\u4E8E\u54EA\u4E9B\u90E8\u95E8\u7684\u540D\u5B57  
 SELECT dept.name FROM dept WHERE dept.id IN (SELECT dept_id FROM emp WHERE salary &gt; 5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 14.\u67E5\u8BE2\u5F00\u53D1\u90E8\u4E0E\u8D22\u52A1\u90E8\u6240\u6709\u7684\u5458\u5DE5\u4FE1\u606F
SELECT * FROM emp WHERE dept_id IN (SELECT id FROM dept WHERE NAME IN(&#39;\u5F00\u53D1\u90E8&#39;,&#39;\u8D22\u52A1\u90E8&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 15.\u67E5\u8BE2\u51FA2011\u5E74\u4EE5\u540E\u5165\u804C\u7684\u5458\u5DE5\u4FE1\u606F\uFF0C\u5305\u62EC\u90E8\u95E8\u540D\u79F0
SELECT * FROM dept d, (SELECT * FROM emp WHERE join_date &gt; &#39;2011-1-1&#39;) e WHERE e.dept_id = d.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,137),d=[l];function c(r,t){return s(),e("div",null,d)}var u=n(i,[["render",c],["__file","day02.\u591A\u8868\u67E5\u8BE2.html.vue"]]);export{u as default};
