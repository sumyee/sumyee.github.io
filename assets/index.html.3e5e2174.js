import{d as s}from"./app.d8cb38ab.js";const n={},l=s('<div class="language-javascript ext-js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// 网页可见区域宽：</span></span>\n<span class="line"><span style="color:#F8F8F2;">document.body.clientWidth </span></span>\n<span class="line"><span style="color:#88846F;">// 网页可见区域高：</span></span>\n<span class="line"><span style="color:#F8F8F2;">document.body.clientHeight </span></span>\n<span class="line"><span style="color:#88846F;">// 网页可见区域宽：</span></span>\n<span class="line"><span style="color:#F8F8F2;">document.body.offsetWidth </span><span style="color:#88846F;">// (包括边线的宽) </span></span>\n<span class="line"><span style="color:#88846F;">// 网页可见区域高：</span></span>\n<span class="line"><span style="color:#F8F8F2;">document.body.offsetHeight </span><span style="color:#88846F;">// (包括边线的宽) </span></span>\n<span class="line"><span style="color:#88846F;">// 网页正文全文宽：</span></span>\n<span class="line"><span style="color:#F8F8F2;">document.body.scrollWidth </span></span>\n<span class="line"><span style="color:#88846F;">// 网页正文全文高：</span></span>\n<span class="line"><span style="color:#F8F8F2;">document.body.scrollHeight </span></span>\n<span class="line"><span style="color:#88846F;">// 网页被卷去的高：</span></span>\n<span class="line"><span style="color:#F8F8F2;">document.body.scrollTop </span></span>\n<span class="line"><span style="color:#88846F;">// 网页被卷去的左：</span></span>\n<span class="line"><span style="color:#F8F8F2;">document.body.scrollLeft </span></span>\n<span class="line"><span style="color:#88846F;">// 网页正文部分上：</span></span>\n<span class="line"><span style="color:#F8F8F2;">window.screenTop </span></span>\n<span class="line"><span style="color:#88846F;">// 网页正文部分左：</span></span>\n<span class="line"><span style="color:#F8F8F2;">window.screenLeft </span></span>\n<span class="line"><span style="color:#88846F;">// 屏幕分辨率的高：</span></span>\n<span class="line"><span style="color:#F8F8F2;">window.screen.height </span></span>\n<span class="line"><span style="color:#88846F;">// 屏幕分辨率的宽：</span></span>\n<span class="line"><span style="color:#F8F8F2;">window.screen.width </span></span>\n<span class="line"><span style="color:#88846F;">// 屏幕可用工作区高度：</span></span>\n<span class="line"><span style="color:#F8F8F2;">window.screen.availHeight </span></span>\n<span class="line"><span style="color:#88846F;">// 屏幕可用工作区宽度：</span></span>\n<span class="line"><span style="color:#F8F8F2;">window.screen.availWidth </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88846F;">// HTML精确定位:scrollLeft,scrollWidth,clientWidth,offsetWidth </span></span>\n<span class="line"><span style="color:#F8F8F2;">scrollHeight </span><span style="color:#88846F;">// 获取对象的滚动高度。 </span></span>\n<span class="line"><span style="color:#F8F8F2;">scrollLeft </span><span style="color:#88846F;">// 设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离 </span></span>\n<span class="line"><span style="color:#F8F8F2;">scrollTop </span><span style="color:#88846F;">// 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 </span></span>\n<span class="line"><span style="color:#F8F8F2;">scrollWidth </span><span style="color:#88846F;">// 获取对象的滚动宽度 </span></span>\n<span class="line"><span style="color:#F8F8F2;">offsetHeight </span><span style="color:#88846F;">// 获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度 </span></span>\n<span class="line"><span style="color:#F8F8F2;">offsetLeft </span><span style="color:#88846F;">// 获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置 </span></span>\n<span class="line"><span style="color:#F8F8F2;">offsetTop </span><span style="color:#88846F;">// 获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 </span></span>\n<span class="line"><span style="color:#F8F8F2;">event.clientX </span><span style="color:#88846F;">// 相对文档的水平座标 </span></span>\n<span class="line"><span style="color:#F8F8F2;">event.clientY </span><span style="color:#88846F;">// 相对文档的垂直座标 </span></span>\n<span class="line"><span style="color:#F8F8F2;">event.offsetX </span><span style="color:#88846F;">// 相对容器的水平坐标 </span></span>\n<span class="line"><span style="color:#F8F8F2;">event.offsetY </span><span style="color:#88846F;">// 相对容器的垂直坐标 </span></span>\n<span class="line"><span style="color:#F8F8F2;">document.documentElement.scrollTop </span><span style="color:#88846F;">// 垂直方向滚动的值 </span></span>\n<span class="line"><span style="color:#88846F;">// 相对文档的水平座标+垂直方向滚动的量 </span></span>\n<span class="line"><span style="color:#F8F8F2;">event.clientX </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> document.documentElement.scrollTop</span></span>\n<span class="line"></span></code></pre></div><h2 id="屏幕" tabindex="-1"><a class="header-anchor" href="#屏幕" aria-hidden="true">#</a> 屏幕</h2><h3 id="屏幕尺寸" tabindex="-1"><a class="header-anchor" href="#屏幕尺寸" aria-hidden="true">#</a> 屏幕尺寸</h3><blockquote><p>屏幕尺寸是屏幕的宽度和高度：显示器或移动屏幕。<code>window.screen</code>是保存屏幕尺寸信息的对象。</p></blockquote><ul><li><strong>screen.width</strong>：屏幕的宽。</li><li><strong>screen.height</strong>：屏幕的高。</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1107d8d8506d47cd9f0dcc2c07f1a0d9~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><h3 id="可用屏幕尺寸" tabindex="-1"><a class="header-anchor" href="#可用屏幕尺寸" aria-hidden="true">#</a> 可用屏幕尺寸</h3><blockquote><p>可用的屏幕大小由活动屏幕的宽度和高度组成，没有操作系统工具栏。</p></blockquote><ul><li><strong>screen.availWidth</strong>：可利用的宽，等于屏幕的宽。</li><li><strong>screen.availHeight</strong>：可利用的高，等于屏幕的高减去 mac 顶部栏或 windows 底部栏。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2923c1ce69248f1ab6a02b5ad0c02d0~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><h3 id="屏幕距离" tabindex="-1"><a class="header-anchor" href="#屏幕距离" aria-hidden="true">#</a> 屏幕距离</h3><ul><li><strong>screenTop</strong>：浏览器窗口左上角到屏幕上边缘的距离。</li><li><strong>screenLeft</strong>：浏览器窗口左上角到屏幕左边缘的距离。</li></ul><p><code>Firefox</code> 浏览器不支持上述属性，但是可以使用👇:</p><ul><li><strong>screenX</strong>：等于 screenLeft。</li><li><strong>screenY</strong>：等于 screenTop。</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/651192c54f874591bd8864cc5c62dd2a~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><h3 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h3><ol><li><strong>chrome/Opera</strong>:保存的是浏览器窗口左上角相对于屏幕的距离</li></ol><ul><li>全屏时<code>四个值</code>均为0</li></ul><ol><li><strong>Firefox/Safari</strong>:保存的是浏览器窗口左上角相对于屏幕的距离</li></ol><ul><li>当浏览器窗口全屏化时指的是整个浏览器与屏幕左上角的距离，因为在全屏化的时候浏览器边缘8px的边框不显示，所以<code>screenX</code>和<code>screenY</code>为-8</li></ul><ol><li><strong>IE</strong>:保存的是<code>浏览器窗口文档显示区域</code>的左上角相对于屏幕左上角的位置。</li></ol><ul><li>网页顶部到屏幕顶部的距离：window.screenTop（浏览器全屏为工具栏的高度）</li><li>网页左边到屏幕左边的距离：window.screenLeft（浏览器全屏为0）</li></ul><ol><li><strong>ie9+</strong></li></ol><ul><li>浏览器窗口全屏化时<code>screenX</code>和<code>screenY</code>为-8</li></ul><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> leftPos </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">typeof</span><span style="color:#F8F8F2;"> window.screenLeft </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;number&#39;</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> window.screenLeft </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> window.screenX;</span></span>\n<span class="line"></span></code></pre></div><h2 id="window窗口" tabindex="-1"><a class="header-anchor" href="#window窗口" aria-hidden="true">#</a> window窗口</h2><h3 id="窗口外部尺寸" tabindex="-1"><a class="header-anchor" href="#窗口外部尺寸" aria-hidden="true">#</a> 窗口外部尺寸</h3><blockquote><p>窗口的外部大小由整个浏览器窗口的宽度和高度组成，包含地址栏，选项卡栏和其他浏览器面板。</p></blockquote><ul><li>window.outerWidth：浏览器窗口的宽。</li><li>window.outerHeight：浏览器窗口的高。</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63dcd2ec483344b6b4658939538c44c5~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><blockquote><ol><li><p>在Chrome和Opera中，当浏览器窗口全屏化时，<code>outerWidth</code>和<code>outerHeight</code>指的是可以看到的<code>浏览器部分</code>所占据的空间。</p></li><li><p>在FireFox、Safari、IE9和IE10中，当浏览器窗口全屏化时，<code>outerWidth</code>和<code>outerHeight</code>指的不仅是可以看到的浏览器所占据的空间，还包括其未显示部分。当浏览器窗口退出全屏化时，其四周会有8px的<code>边框</code>。而当浏览器窗口全屏化时，边框虽然未被显示，但仍然是计算在<code>outerWidth</code>和<code>outerHeight</code>内。</p></li><li><p>IE7、8不支持。</p></li></ol></blockquote><h3 id="窗口内部尺寸" tabindex="-1"><a class="header-anchor" href="#窗口内部尺寸" aria-hidden="true">#</a> 窗口内部尺寸</h3><blockquote><p>窗口的内部大小（也称为视口大小）由显示网页的视口的宽度和高度组成，包含滚动条。</p></blockquote><ul><li><strong>window.innerWidth</strong>：视口的宽。</li><li><strong>window.innerHeight</strong>：视口的高。</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/537ec6617dc24480869890c70c03a2a9~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><h2 id="客户区" tabindex="-1"><a class="header-anchor" href="#客户区" aria-hidden="true">#</a> 客户区</h2><blockquote><p>元素的客户区大小（client dimension），指的是元素内容及其内边距所占据的空间大小</p></blockquote><ul><li><strong>clientWidth</strong>：内容可视区的宽度。</li><li><strong>clientHeight</strong>：内容可视区的高度。</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0e68083ce3d4a0cb3749ff590641fbf~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><blockquote><ol><li><p>如果有滚动条clientWidth = 元素宽 + padding（左右） - 滚动条</p></li><li><p>如果没有滚动条clientWidth = 元素宽 + padding（左右）</p></li><li><p>获取页面大小:let pageWidth = document.documentElement.clientWidth || document.body.clientWidth（ie7之前的版本）;</p></li></ol></blockquote><h2 id="网页大小" tabindex="-1"><a class="header-anchor" href="#网页大小" aria-hidden="true">#</a> 网页大小</h2><blockquote><p>网页大小由呈现的页面内容的宽度和高度组成。</p></blockquote><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c40700cd4554305ad2ffdc6ecc76ad6~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><ul><li><strong>scrollWidth</strong>：实际内容的宽度。没有垂直滚动条时与clientWidth相同。否则是等于实际内容的宽度 + padding。scrollWidth也包括 ::before 和 ::after这样的伪元素。</li><li><strong>scrollHeight</strong>：实际内容的高度。没有垂直滚动条时与clientHeight相同。否则是等于实际内容的高度 + padding。scrollHeight也包括 ::before 和 ::after这样的伪元素。</li></ul><h3 id="滚动距离" tabindex="-1"><a class="header-anchor" href="#滚动距离" aria-hidden="true">#</a> 滚动距离</h3><ul><li><strong>scrollLeft</strong>：元素最左端和窗口中可见内容的最左端之间的距离。即当前左滚的距离</li><li><strong>scrollTop</strong>：元素最顶端和窗口中可见内容的最顶端之间的距离。即当前上滚的距离</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/445b27b77fc440478e72b5f51cdbaeb3~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><blockquote><ol><li>如果有滚动条scrollLeft = 隐藏内容宽度 + border</li><li>如果没有滚动条scrollLeft = 0</li></ol></blockquote><h3 id="附录-1" tabindex="-1"><a class="header-anchor" href="#附录-1" aria-hidden="true">#</a> 附录</h3><p>关于scrollX, pageXOffset, scrollLeft，一般使用如下：</p><ol><li>window.scrollX;</li><li>window.pageXOffset;</li><li>document.documenetElement.scrollLeft</li></ol><p>如果你想获取文档距离左边滚动的像素大小，你可以采用以下方法：</p><ul><li>window对象的pageXOffset属性总是可以返回滚动的长度，不管doctype是什么类型的，所有浏览器都支持这个属性，除了IE8及其更低版本的IE浏览器。</li><li>window对象的scrollX属性总是可以返回滚动的长度，不管doctype是什么类型，Firefox, Chrome和Safari都支持该属性。</li><li>如果文档中没有指明文档类型，在IE, Firefox, Opera, Chrome和Safari中，通过body的scrollLeft可以获取滚动的数值。</li><li>如果有指明文档类型，那么在IE, Firefox和Opera中，可以通过html的scrollLeft属性获取滚动的数值，但是在Chrome和Safari中的值总是为0.</li><li>如果没有指明文档类型，那么html的scrollLeft属性总是返回0.</li></ul><p>综合以上的信息，我们可以得出获取滚动条滚动数值的方法如下：</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> scrollLeft </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">  window.scrollX </span><span style="color:#F92672;">!=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">undefined</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> window.scrollX </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> window.pageXOffset;</span></span>\n<span class="line"><span style="color:#F8F8F2;">scrollLeft </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> scrollLeft </span><span style="color:#F92672;">!=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">undefined</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> scrollLeft </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> (document.documentElement </span><span style="color:#F92672;">||</span><span style="color:#F8F8F2;"> document.body).scrollLeft;</span></span>\n<span class="line"></span></code></pre></div><h2 id="偏移量" tabindex="-1"><a class="header-anchor" href="#偏移量" aria-hidden="true">#</a> 偏移量</h2><blockquote><p>偏移量包括元素在屏幕上占用的所有可见的空间。元素的可见大小由其高度、宽度决定，包括所有内边距、滚动条和边框大小（注意，不包括外边距）。</p></blockquote><ul><li><strong>offsetHeight</strong>：元素在垂直方向上占用的空间大小，包括元素的高度、（可见的）</li></ul><p>水平滚动条的高度、上边框高度和下边框高度。</p><ul><li><strong>offsetWidth</strong>：元素在水平方向上占用的空间大小。包括元素的宽度、（可见的）垂</li></ul><p>直滚动条的宽度、左边框宽度和右边框宽度。</p><ul><li><strong>offsetLeft</strong>：当前元素内容区域（包括border）左边缘到 offsetParent 内容区域（不包括border）左边缘的距离。</li><li><strong>offsetTop</strong>：当前元素内容区域（包括border）顶部到 offsetParent 内容区域（不包括border）顶部的距离。</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7bf95016785c43b5896fece6a22032cd~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><blockquote><p>offsetWidth = 元素宽 + padding（左右）+ border（左右）+ 滚动条宽度</p></blockquote><h2 id="关于offsetparent" tabindex="-1"><a class="header-anchor" href="#关于offsetparent" aria-hidden="true">#</a> 关于offsetParent</h2><blockquote><p><code>HTMLElement.offsetParent</code>是一个只读属性，返回一个指向最近的（closest，指包含层级上的最近）包含该元素的定位元素。如果没有定位的元素，则<code>offsetParent</code>为最近的<code>table</code>,<code>table cell</code>或根元素（标准模式下为<code>html</code>；quirks模式下为<code>body</code>）。当元素的<code>style.display</code>设置为&quot;none&quot;时，<code>offsetParent</code>返回<code>null</code>。<code>offsetParent</code>很有用，因为<code>offsetTop</code>和<code>offsetLeft</code>都是相对于其内边距边界的</p></blockquote><p>下面来探究几种可能的情况：</p><ol><li>元素自身有fixed定位，父元素不存在定位，则offsetParent的结果为null（firefox中为：body，其他浏览器返回为null）</li><li>元素自身无fixed定位，且父元素也不存在定位，offsetParent为元素</li><li>元素自身无fixed定位，且父元素存在定位，offsetParent为离自身最近且经过定位的父元素</li><li>当元素的 style.display 设置为 &quot;none&quot; 时，offsetParent 返回 null。</li><li>元素的offsetParent是null</li></ol><blockquote><p>下面是在chrome中的测试结果，编号与上述对应</p></blockquote><div class="language-html ext-html"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">&lt;!</span><span style="color:#F92672;">DOCTYPE</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">html</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;en&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    &lt;</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;test1&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;position: fixed&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;test2&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;div0&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;position: absolute&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">            &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;div1&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;position: absolute&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">                &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;test3&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">            &lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        &lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;test4&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;display: none&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">            console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(document.</span><span style="color:#A6E22E;">getElementById</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;test1&#39;</span><span style="color:#F8F8F2;">).offsetParent); </span><span style="color:#88846F;">//【1】:null</span></span>\n<span class="line"><span style="color:#F8F8F2;">            console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(document.</span><span style="color:#A6E22E;">getElementById</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;test2&#39;</span><span style="color:#F8F8F2;">).offsetParent); </span><span style="color:#88846F;">// 【2】:&lt;body&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">            console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(document.</span><span style="color:#A6E22E;">getElementById</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;test3&#39;</span><span style="color:#F8F8F2;">).offsetParent); </span><span style="color:#88846F;">// 【3】:&lt;div id=&quot;div1&quot;&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">            console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(document.</span><span style="color:#A6E22E;">getElementById</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;test4&#39;</span><span style="color:#F8F8F2;">).offsetParent); </span><span style="color:#88846F;">// 【4】null</span></span>\n<span class="line"><span style="color:#F8F8F2;">            console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(document.body.offsetParent); </span><span style="color:#88846F;">// 【5】null</span></span>\n<span class="line"><span style="color:#F8F8F2;">        &lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    &lt;/</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>简单🌰：</p><div class="language-html ext-html"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">main</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;position: relative&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;main&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    &lt;</span><span style="color:#F92672;">article</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;example&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;position: absolute; left: 180px; top: 180px&quot;</span><span style="color:#F8F8F2;">&gt;...&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    &lt;/</span><span style="color:#F92672;">article</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">main</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">alert</span><span style="color:#F8F8F2;">(example.offsetParent.id); </span><span style="color:#88846F;">// main</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">alert</span><span style="color:#F8F8F2;">(example.offsetLeft); </span><span style="color:#88846F;">// 180</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">alert</span><span style="color:#F8F8F2;">(example.offsetTop); </span><span style="color:#88846F;">// 180</span></span>\n<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7a544fb8f62464eaf3574294c42b68c~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2><p>举一个🌰作为演示</p><div class="language-html ext-html"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;example&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    ...Text...</span></span>\n<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">#example</span><span style="color:#F8F8F2;"> {</span></span>\n<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#66D9EF;font-style:italic;">width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">300</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#66D9EF;font-style:italic;">height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">200</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#66D9EF;font-style:italic;">border</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">25</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">solid</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">#E8C48F</span><span style="color:#F8F8F2;">;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#66D9EF;font-style:italic;">padding</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">20</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>\n<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#66D9EF;font-style:italic;">overflow</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;">;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    }</span></span>\n<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>这里的div元素，具有border, padding和滚动条（margin不属于元素的部分，这里不给），该元素如下所示👇： <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13d0062a622d46a28a7515ed53ca46d3~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><blockquote><p>如果没有滚动条内容宽度为300,但是如果滚动条为16px宽（设备和浏览器之间的宽度可能有所不同），则仅保留300 - 16 = 284px宽度，因此我们应将其考虑在内。</p></blockquote><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b804bf0cb9b94ec289e353299f5b21ad~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><p>关于元素大小和偏移的详细标注如下： <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b884fab0d6fb4b6c9c0613c1f8502379~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><h3 id="偏移量-1" tabindex="-1"><a class="header-anchor" href="#偏移量-1" aria-hidden="true">#</a> 偏移量</h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89cc6c4f72c64c1cb35d5dfefb825e2a~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><ul><li><code>offsetWidth = 390</code>:内部CSS宽度（300px）+ padding（2 * 20px）+ border（2 * 25px）。</li><li><code>offsetHeight = 290</code>:外部高度。</li></ul><h3 id="客户区-1" tabindex="-1"><a class="header-anchor" href="#客户区-1" aria-hidden="true">#</a> 客户区</h3><p>在这个示例中我们可以用<code>clientTop</code>和<code>clientLeft</code>来测量元素border： <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06386ddecfc240a0975cb691b32d0540~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><ul><li><code>clientLeft = 25</code>：左边框宽度</li><li><code>clientTop = 25</code>：顶部边框宽度</li></ul><blockquote><p>文档从右到左（操作系统为阿拉伯语或希伯来语）时。滚动条不在右侧，而是在左侧，这个时候clientLeft还包括滚动条宽度。（这种情况比较少见，可以忽略）</p></blockquote><p>前面说到clientWidth/Height提供内容可视区的大小，包括内容宽度和border，但没有滚动条： <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c80111d512da43889447249fe1f73296~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><ul><li><code>clientHeight = 240</code>:没有水平滚动条，因此它恰好是边框内部内容的总和：<code>CSS高度200px + 顶部和底部padding（2 * 20px）</code>。或者<code>offsetHeight290 - border（2 * 25px）</code></li><li><code>clientWidth = 324</code>:内容高度为284px + 左右padding 40px。或者<code>offsetWidth390px - border（2 * 25px）- 滚动条宽度16</code></li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e8e2edc80b946889db22d77efae8ce9~tplv-k3u1fbpfcp-watermark.awebp" alt="img"> 当没有<code>padding</code>时，我们可以<code>clientWidth/clientHeight</code>用来获取内容区域的大小。</p><h3 id="滚动" tabindex="-1"><a class="header-anchor" href="#滚动" aria-hidden="true">#</a> 滚动</h3><p><code>scrollWidth/Height</code>属性类似于<code>clientWidth/clientHeight</code>，但是它们还包括滚动（隐藏）的部分： <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7bceb12bdae47fca535db11762d2af0~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><ul><li><code>scrollHeight = 723</code>:是内容区域的整个内部高度，包括滚动部分。</li><li><code>scrollWidth = 324</code>:是整个内部宽度，这里我们没有水平滚动，所以等于<code>clientWidth</code>。</li></ul>',93);n.render=function(s,n){return l};export default n;
