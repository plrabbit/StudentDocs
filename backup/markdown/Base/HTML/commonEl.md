# HTML 常用元素

### 换行符< br >
> HTML标签内，所有单纯的空格与回车都只有1个空格生效，如需真正的换行，必须使用换行符<br>

### 段落< p >
> 占满一行，并且拉大上下间隙的标签。主要用于分隔段落。

### 标题<h[x]> (1<=x<=6)
> 占满一行，加粗，只有h1 - 6，数字越小，字体越大。

### 文本格式化

	<b>bold 加粗</b>
	<i>italic 斜体</i>
	<u>underline 下划线</u>
	<del>V0.0.1 单词:delete</del>
	<p>2<sup>-2</sup>=1/4 上标字</p>
	<p>H<sub>2</sub>O 下标字</p>

### 超链接```<a>```
> 可以通过用户点击，跳转到某个页面，跳转地址在href内，切记加上协议（http://）

	<a href="http://baidu.com" title="baidu.com" target="_blank">百度一下，你就知道。</a>

> title属性：鼠标停留在链接上提示的小标签
> target属性：配置跳转的链接的方式（_blank新标签页打开，_self在本页面跳转，默认是_self）

### 锚点 ```#```
> 定义一个锚点，可以使超链接跳转到当前页面内某个位置。（返回顶部，书籍目录浏览）

	<a name="锚点名"></a>
	......
	<a href="#锚点名">返回顶部</a>
	<!-- 点击此链接可弹到锚点所在的位置 -->

> 注释（内容不会被编译，供开发者查看）：```<!-- 注释内容 -->```

### 图像```<img>```

	<img src="goddess.jpg" alt="女神..." width="100" height="100">

#### 属性：
1. src		源文件所在位置
2. alt		图片加载失败时所显示的文字
3. width		图片宽度
4. height	图片高度

> 注意：宽高一般用CSS处理，因为便于维护。

# 注意！目录名，文件名应使用英文命名！

### 音频 ```<audio>```

	<audio src="assets/medium/Always.mp3" autoplay controls loop preload>
		<!-- 如不兼容audio标签，会加载里面的source标签 -->
		<source src="assets/medium/Always.mp3" type="audio/mpeg">
		你的浏览器不支持Audio标签
	</audio>

#### 属性：

1. autoplay：自动播放
2. controls：播放控件（如：播放暂停按钮）
3. loop：循环播放
4. preload：预加载（如关心流量问题，则不要加上）

> 如浏览器不支持audio标签，则会加载audio标签内的source标签。

### 视频```<video>```

	<video src="assets/medium/video.mp4" width="100%" height="100px" autoplay controls loop muted preload>
		<source src="assets/medium/video.mp4" type="video/mp4">
	</video>

#### 属性：

1. autoplay：自动播放
2. controls：播放控件（如：播放暂停按钮）
3. loop：循环播放
4. muted：静音播放
5. preload：预加载（如关心流量问题，则不要加上）

> source标签内的type，指的是文件类型的MIME

### 实体字符
> 有时候我们需要用到大于号（>）或小于号（<），当写在内容里的时候，会出现以下尴尬的情况：

	<h1><h1></h1>

> 大于号在这里有可能会被解析成语法，故需使用到实体字符，告诉浏览器，这是个真正的字符，而不是语法。

	<h1>&lt;h1&gt;</h1>
	<h1>&copy; 2017 - 2018</h1>

#### 常用的实体字符

1. ```&gt;```	大于号
2. ```&lt;```	小于号
3. ```&copy;```	版权C
4. ```&nbsp;```	空格

### 无序列表
> 每一个列表项占满一行。规定语法为ul，ul里面包含N个li。

	<ul>
		<li>红烧牛肉面</li>
		<li>黑白配</li>
		<li>老坛酸菜牛肉面</li>
	</ul>

> ul通常被用作导航栏的主体编写。

> EMMET语法：ul>li*N (N可以为任何>0的数)

### 有序列表
> 与无序列表(ul)大同小异，只不过是每一个列表项多了个序号。

	<ol>
		<li>红烧牛肉面</li>
		<li>泡椒牛肉面</li>
		<li>绿帽子牛肉面</li>
	</ol>

### 定义列表

	<dl>
		<dt>日用品</dt>
		<dd>牙膏</dd>

		<dt>食品</dt>
		<dd>辣条</dd>
		<dd>酸溜梅</dd>

		<dt>数码产品</dt>
		<dd>笔记本</dd>
	</dl>

> EMMET语法：dl>(dt+dd)*3

### 表格```<table>```

> EMMET语法：table>tr * 行数 > td * 列数 

#### 属性：

1. border		表格边框	[number]
2. width			宽度		[number],[%]
3. height		高度		[number],[%]
4. cellspacing	单元格间隔	[number]

#### 合并单元格
> 每次写表格前，建议先把结构写好，再填内容。<br>
> 可利用EMMET语法：tr > td{$} * N (N>0) <br>
> 无论是“行合并“还是“列合并”都是给td标签加属性的。

1. rowspan 行合并	[number >=2]
> 行合并后，要在下一行把对应序号的td标签去掉。（如：第一行的第二个td行合并，则第二行的第二个td要删掉）

2. colspan 列合并	[number >=2]
> 列合并后，要把后面多出来的元素去掉。

	<table border="1" width="100%" height="200" cellspacing="0">
		<tr>
			<td align="center">1</td>
			<td rowspan="3">2</td>
			<td>3</td>
			<td>4</td>
		</tr>
		<tr>
			<td valign="top">1</td>
			<td colspan="2">3</td>
		</tr>
		<tr>
			<td>1</td>
			<td>3</td>
			<td>4</td>
		</tr>
	</table>

### 内嵌框架< iframe >
> 在当前网页内嵌入另外一个网页，另一个网页url（地址）在src属性内填写。

	<a href="http://sohu.com" target="yellow">搜狐</a>
	<a href="http://baidu.com" target="yellow">百度两下</a>
	<a href="http://www.hnjtgc.com" target="yellow">鸡窝山大学</a>

	<iframe src="http://baidu.com" width="300" height="300" scrolling="no" name="yellow"></iframe>

> 以上代码可以使a链接在iframe内跳转。