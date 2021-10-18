import{d as o}from"./app.d8cb38ab.js";const e={},c=o('<h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1><div class="custom-container tip"><p class="custom-container-title">常见的简写形式</p><p><strong><code>\\d</code></strong> 就是<code>[0-9]</code>。表示是一位数字。记忆方式：其英文是digit（数字）。</p><p><strong><code>\\D</code></strong> 就是<code>[^0-9]</code>。表示除数字外的任意字符。</p><p><strong><code>\\w</code></strong> 就是<code>[0-9a-zA-Z_]</code>。表示数字、大小写字母和下划线。记忆方式：w是word的简写，也称单词字符。</p><p><strong><code>\\W</code></strong> 是<code>[^0-9a-zA-Z_]</code>。非单词字符。</p><p><strong><code>\\s</code></strong> 是<code>[ \\t\\v\\n\\r\\f]</code>。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。记忆方式：s是space character的首字母。</p><p><strong><code>\\S</code></strong> 是<code>[^ \\t\\v\\n\\r\\f]</code>。 非空白符。</p><p><strong><code>.</code></strong> 就是<code>[^\\n\\r\\u2028\\u2029]</code>。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。记忆方式：想想省略号...中的每个点，都可以理解成占位符，表示任何类似的东西。</p></div><p>如果要匹配任意字符怎么办？可以使用<code>[\\d\\D]</code>、<code>[\\w\\W]</code>、<code>[\\s\\S]</code>和<code>[^]</code>中任何的一个。</p><div class="custom-container tip"><p class="custom-container-title">量词</p><p><strong><code>{m,}</code></strong> 表示至少出现m次。</p><p><strong><code>{m}</code></strong> 等价于<code>{m,m}</code>，表示出现m次。</p><p><strong><code>?</code></strong> 等价于<code>{0,1}</code>，表示出现或者不出现。记忆方式：问号的意思表示，有吗？</p><p><strong><code>+</code></strong> 等价于<code>{1,}</code>，表示出现至少一次。记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。</p><p><em><code>*</code></em> 等价于<code>{0,}</code>，表示出现任意次，有可能不出现。记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来。</p></div>',4);e.render=function(o,e){return c};export default e;
