import{d as s}from"./app.d8cb38ab.js";const n={},a=s('<p><strong>复杂度和稳定性</strong></p><table><thead><tr><th>排序算法</th><th>平均时间复杂度</th><th>最好</th><th>最坏</th><th>空间复杂度</th><th>稳定性</th></tr></thead><tbody><tr><td>冒泡排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>稳定</td></tr><tr><td>选择排序</td><td>O(n^2)</td><td>O(n^2)</td><td>O(n^2)</td><td>O(1)</td><td>不稳定</td></tr><tr><td>堆排序</td><td>O(n logn)</td><td>O(n logn)</td><td>O(n logn)</td><td>O(1)</td><td>不稳定</td></tr><tr><td>插入排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>稳定</td></tr><tr><td>希尔排序</td><td>O(n logn)</td><td>O(n log^2 n)</td><td>O(n log^2 n)</td><td>O(1)</td><td>不稳定</td></tr><tr><td>快速排序</td><td>O(n logn)</td><td>O(n logn)</td><td>O(n^2)</td><td>O(logn)</td><td>不稳定</td></tr><tr><td>归并排序</td><td>O(n logn)</td><td>O(n logn)</td><td>O(n logn)</td><td>O(n)</td><td>稳定</td></tr><tr><td>计数排序</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n+k)</td><td>O(k)</td><td>稳定</td></tr><tr><td>桶排序</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n^2)</td><td>O(n+k)</td><td>稳定</td></tr><tr><td>基数排序</td><td>O(n*k)</td><td>O(n*k)</td><td>O(n*k)</td><td>O(n+k)</td><td>稳定</td></tr></tbody></table><h2 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h2><div class="custom-container tip"><p class="custom-container-title">大致流程：</p><ol><li>从第一个元素开始，比较每两个相邻元素，如果前者大，就交换位置</li><li>每次遍历结束，能够找到该次遍历过的元素中的最大值</li><li>如果还有没排序过的元素，继续1</li></ol></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/3/29/169c901fbe75639b~tplv-t2oaga2asx-watermark.awebp" alt=""></p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">/**</span></span>\n<span class="line"><span style="color:#88846F;"> * 冒泡排序</span></span>\n<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#88846F;"> </span><span style="color:#A6E22E;text-decoration:underline;">{*}</span><span style="color:#88846F;"> </span><span style="color:#F8F8F2;">arr</span><span style="color:#88846F;"> 排序的数组</span></span>\n<span class="line"><span style="color:#88846F;"> * 冒泡排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。</span></span>\n<span class="line"><span style="color:#88846F;"> */</span></span>\n<span class="line"><span style="color:#F92672;">export</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">bubbleSort</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">arr</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 控制遍历次数</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr.length; i </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; i</span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// 每次遍历后 缩小遍历范围</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; j </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> i; j</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(arr[j] </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> arr[j </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">]) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> temp </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr[j]</span></span>\n<span class="line"><span style="color:#F8F8F2;">        arr[j] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr[j </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">]</span></span>\n<span class="line"><span style="color:#F8F8F2;">        arr[j </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> temp</span></span>\n<span class="line"><span style="color:#F8F8F2;">      }</span></span>\n<span class="line"><span style="color:#F8F8F2;">    }</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> arr</span></span>\n<span class="line"><span style="color:#F8F8F2;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h2><div class="custom-container tip"><p class="custom-container-title">大致流程：</p><ol><li>取未排序部分的第一个元素。第一次遍历时，将第一个元素作为已排序元素，从第二个元素开始取</li><li>遍历前面的已排序元素，并与这个未排序元素比较大小，找到合适的位置插入</li><li>继续执行1</li></ol></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/3/29/169c90490e012c32~tplv-t2oaga2asx-watermark.awebp" alt=""></p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">/**</span></span>\n<span class="line"><span style="color:#88846F;"> * 插入排序</span></span>\n<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#88846F;"> </span><span style="color:#A6E22E;text-decoration:underline;">{Array}</span><span style="color:#88846F;"> </span><span style="color:#F8F8F2;">arr</span></span>\n<span class="line"><span style="color:#88846F;"> * 插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。</span></span>\n<span class="line"><span style="color:#88846F;"> * 接着，它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确排序</span></span>\n<span class="line"><span style="color:#88846F;"> * 接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推。</span></span>\n<span class="line"><span style="color:#88846F;"> */</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F92672;">export</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">insertionSort</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">arr</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> temp;</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, len </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> len; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> i;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    temp </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr[i];</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (j </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> temp </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> arr[j </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">]) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      arr[j] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr[j </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">];</span></span>\n<span class="line"><span style="color:#F8F8F2;">      j</span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    }</span></span>\n<span class="line"><span style="color:#F8F8F2;">    arr[j] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> temp;</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> arr;</span></span>\n<span class="line"><span style="color:#F8F8F2;">};</span></span>\n<span class="line"></span></code></pre></div><h2 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h2><div class="custom-container tip"><p class="custom-container-title">大致流程：</p><ol><li>取出未排序部分的第一个元素，遍历该元素之后的部分并比较大小。对于第一次遍历，就是取出第一个元素</li><li>如果有更小的，与该元素交换位置</li><li>每次遍历都能找出剩余元素中的最小值并放在已排序部分的最后</li></ol></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/3/29/169c903684fff481~tplv-t2oaga2asx-watermark.awebp" alt=""></p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">/**</span></span>\n<span class="line"><span style="color:#88846F;"> * 选择排序</span></span>\n<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#88846F;"> </span><span style="color:#A6E22E;text-decoration:underline;">{*}</span><span style="color:#88846F;"> </span><span style="color:#F8F8F2;">arr</span></span>\n<span class="line"><span style="color:#88846F;"> * 选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并</span></span>\n<span class="line"><span style="color:#88846F;"> * 将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。</span></span>\n<span class="line"><span style="color:#88846F;"> */</span></span>\n<span class="line"><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">export</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">selectionSort</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">arr</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> indexMin;</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, len </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr.length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> len; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    indexMin </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> i;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> i; j </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> arr.length; j</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (arr[j] </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> arr[indexMin]) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">        indexMin </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> j;</span></span>\n<span class="line"><span style="color:#F8F8F2;">      }</span></span>\n<span class="line"><span style="color:#F8F8F2;">    }</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (indexMin </span><span style="color:#F92672;">!==</span><span style="color:#F8F8F2;"> i) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> temp </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr[indexMin];</span></span>\n<span class="line"><span style="color:#F8F8F2;">      arr[indexMin] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr[i];</span></span>\n<span class="line"><span style="color:#F8F8F2;">      arr[i] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> temp;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    }</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> arr;</span></span>\n<span class="line"><span style="color:#F8F8F2;">};</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><h2 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h2><div class="custom-container tip"><p class="custom-container-title">大致流程：</p><ol><li>选择一个基准元素 <code>pivot</code>，比如第一个元素（当然可以选其他元素，但是最后会递归至只剩一个元素，所以还是选第一个元素比较靠谱）</li><li>遍历数组，比 <code>pivot</code> 更小的元素创建一个数组，更大的创建一个数组，相等的也创建一个数组</li><li>递归大小两个数组，继续执行1，直到数组只剩1个元素；递归的同时把这三部分连接起来</li></ol></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/3/29/169c905b1f546876~tplv-t2oaga2asx-watermark.awebp" alt=""></p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">/**</span></span>\n<span class="line"><span style="color:#88846F;"> * 快速排序</span></span>\n<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#88846F;"> </span><span style="color:#A6E22E;text-decoration:underline;">{*}</span><span style="color:#88846F;"> </span><span style="color:#F8F8F2;">arr</span></span>\n<span class="line"><span style="color:#88846F;"> * </span></span>\n<span class="line"><span style="color:#88846F;"> * http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html</span></span>\n<span class="line"><span style="color:#88846F;"> */</span></span>\n<span class="line"><span style="color:#F92672;">export</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">quickSort</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">arr</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (arr.length </span><span style="color:#F92672;">&lt;=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> arr;</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> pivot </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr.</span><span style="color:#A6E22E;">splice</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;">Math</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;">floor</span><span style="color:#F8F8F2;">(arr.length </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">), </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">)[</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">]</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> []</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> []</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> arr.length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(arr[i] </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> pivot) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      left.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(arr[i])</span></span>\n<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      right.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(arr[i])</span></span>\n<span class="line"><span style="color:#F8F8F2;">    }</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">...</span><span style="color:#A6E22E;">quickSort</span><span style="color:#F8F8F2;">(left), pivot, </span><span style="color:#F92672;">...</span><span style="color:#A6E22E;">quickSort</span><span style="color:#F8F8F2;">(right)];</span></span>\n<span class="line"><span style="color:#F8F8F2;">};</span></span>\n<span class="line"></span></code></pre></div><h2 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h2><div class="custom-container tip"><p class="custom-container-title">大致流程：</p><ol><li>递归地把数组分割成前后两个子数组，<strong>直到数组中只有1个元素</strong></li><li>同时，递归地从两个数组中挨个取元素，比较大小并合并</li></ol></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/3/29/169c9064a8f19b76~tplv-t2oaga2asx-watermark.awebp" alt=""></p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">/**</span></span>\n<span class="line"><span style="color:#88846F;"> * 归并排序</span></span>\n<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#88846F;"> </span><span style="color:#A6E22E;text-decoration:underline;">{*}</span><span style="color:#88846F;"> </span><span style="color:#F8F8F2;">arr</span></span>\n<span class="line"><span style="color:#88846F;"> * 归并排序是一种【分而治之】算法。其思想是将原始数组切分成较小的数组，直到每个小数组只</span></span>\n<span class="line"><span style="color:#88846F;"> * 有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。</span></span>\n<span class="line"><span style="color:#88846F;"> */</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88846F;">// 合操作</span></span>\n<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">merge</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">left</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">right</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> result </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [];</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (left.length </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> right.length) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (left[</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">] </span><span style="color:#F92672;">&lt;=</span><span style="color:#F8F8F2;"> right[</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">]) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// 左边第一个小 将左边第一个推出 然后push进result</span></span>\n<span class="line"><span style="color:#F8F8F2;">      result.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(left.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">());</span></span>\n<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// 右边第一个小 将右边第一个推出 然后push进result</span></span>\n<span class="line"><span style="color:#F8F8F2;">      result.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(right.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">());</span></span>\n<span class="line"><span style="color:#F8F8F2;">    }</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 若循环完 left 或 right 还有其中一个不为空</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (left.length) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    result.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(left.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">());</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (right.length) {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    result.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(right.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">());</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> result;</span></span>\n<span class="line"><span style="color:#F8F8F2;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F92672;">export</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">mergeSort</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">arr</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (arr.length </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> arr;</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> len </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr.length;</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">Math</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;">floor</span><span style="color:#F8F8F2;">(len </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">);</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">mergeSort</span><span style="color:#F8F8F2;">(arr.</span><span style="color:#A6E22E;">slice</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, mid));</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">mergeSort</span><span style="color:#F8F8F2;">(arr.</span><span style="color:#A6E22E;">slice</span><span style="color:#F8F8F2;">(mid, len));</span></span>\n<span class="line"><span style="color:#F8F8F2;">  arr </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">merge</span><span style="color:#F8F8F2;">(left, right)</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> arr;</span></span>\n<span class="line"><span style="color:#F8F8F2;">};</span></span>\n<span class="line"></span></code></pre></div>',22);n.render=function(s,n){return a};export default n;
