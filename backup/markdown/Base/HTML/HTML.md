# HTML

# 什么是HTML？

**HTML(HyperText Markup Language)，超文本标记语言。是一种文本类，解释执行的语言。它是Internet（互联网）上用于编写网页的主要语言。**

我们试着拆分HTML的词组来看看：

- **超文本（HyperText）**，我们常看到的网页上面的功能，并不只有文字信息，还有多媒体信息（音频与视频）。再来，在上面提到了html是一种文本类语言，换句话说，**我们看到的多媒体信息是通过一些文本来实现，远远超过了文本自身的功能，故称为“超文本”**。

- **标记语言（Markup Language）**，我们可以看看一些知名网站的首页源代码（可以通过网页点击鼠标右键 - 审查元素来查看，这里推荐谷歌浏览器，后面会有所提及），不难发现是一个个类似"\<xxx>\</xxx>"组成的，这些我们习惯称为标记、标签，或是元素，故称“标记语言”。

![](.)

### 新特性

1. 拖放功能
2. 离线存储（localStorage）
3. 多媒体功能实现（video, audio, canvas）

### Audio栗子

	<audio src=""></audio>

### 关于内核问题

	chrome, safari	-webkit-内核
	FireFox			-moz-内核
	IE				-ms-内核

国内的浏览器，除UC外，都是chromium（谷歌工程版）内核

## 第一个HTML页面

Talk is cheap, show me the code. - Linux 之父

### HTML标签内有两部分：头(head) 身体(body)

头：配置当前html页面的信息，如：字符集编码，描述，关键字...
身体：放html标记的，主要的页面内容。

### HTML基本结构

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>第一个HTML页面</title>
	</head>
	<body>
		Hello World!
	</body>
	</html>

### 关键字与描述
> 如希望网站可以被搜索引擎识别，则可以加上关键字与描述的meta配置。

	<meta name="keywords" content="hello,world">
	<meta name="description" content="This is my first Webpage.">

### HTML标签属性

1. 所有的属性都写在开始标签内。
2. 属性的语法：

		[属性名]="[属性值]"

3. 属性与属性之间用空格隔开。 

## HTML 常用元素

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

### 表单```<form>```
> 这个东西异常的重要！它是前后端交接的媒介之一。<br>
> 主要用于用户信息的输入。

#### 例子 （登录功能）

> 后端文档： 

1. 请求地址：http://plrabbit.com/Test/api.php
2. 请求方式：post
3. 请求参数：(1) username [string] (2) password [string]

> 前端代码：

	<form action="http://plrabbit.com/Test/api.php" method="post" target="green">
		<input type="text" name="username">
		<input type="password" name="password">
		<button type="submit">提交</button>
	</form>

	<iframe src="http://baidu.com" name="green" frameborder="0"></iframe>

#### 属性

1. action	请求地址
2. method	请求方式（get, post）

### 输入框```<input>```
> 提供给用户输入信息的元素。

#### 属性：

1. type		输入框的类型
2. name		暗号（请求参数）	
3. value		值，代表请求的参数值
4. placeholder	提示文字
5. maxlength	最大字符输入长度（一般建议设置32 - 50，防止黑客利用代码注入）

---

#### 非填值属性：

1. readonly	只读（没有样式变化）
2. disabled	禁用输入框（会把功能也一起禁用，输入框的值不会被上传）
3. autofocus	自动聚焦（把光标移动到当前输入框）
4. required	要求用户必须填写的

---

	<input type="text" name="username" value="guest" placeholder="请输入你的用户名...">
	<input type="password" name="password" value="123456">

##### name, value属性是发送到服务器进行处理的，非常的重要。name属性代表参数名，必须与后端设置的参数一致。value属性代表上传到服务器的参数值，可以通过输入框人为改变。加上value属性可以让输入框默认添加几个字符。

##### 当你按下提交按钮的时候，表单会自动帮我们打包数据，上传至服务器。

---

### 几个常用的input

#### 单选框（input:radio）
> 有多少个选项，就写多少个input。<br>
> 注意name属性要保持一致。<br>
> checked属性可以默认选中。

		<input type="radio" name="sex" checked>男
		<input type="radio" name="sex">女
		<input type="radio" name="sex">保密

#### 多选框（input:checkbox）
> 用法与radio基本一致。

		<input type="checkbox" name="hobby" value="swim">游泳
		<input type="checkbox" name="hobby" value="run">跑步
		<input type="checkbox" name="hobby" value="sleep">睡觉

### 按钮```<button>```
> 按钮常用的有3种，submit(提交), reset(重置), button(普通按钮)

		<button type="submit">提交</button>
		<button type="reset">重置</button>
		<button type="button" onclick="location.href = 'http://baidu.com';">我是一个普通按钮</button>	

### 多行文本框```<textarea>```

	<textarea rows="5" cols="50"></textarea>

#### 属性：
1. rows	行数/高度
2. cols	列数/宽度

### 下拉框```<select>```

	<select name="city">
		<optgroup label="中国">
			<option value="gz">广州</option>
			<option value="hy" selected>衡阳</option>
			<option value="cs">长沙</option>
		</optgroup>
		<optgroup label="其他">
			<option value="ny">纽约</option>
			<option value="hsd">华盛顿</option>
		</optgroup>
	</select>

#### 用法

1. 规定select在最外面
2. 如有需要，加上optgroup，组别名。组别名写在label属性中。
3. 在select里，或者optgroup里，加上option标签，表示下拉框选项。	

### 标签```<label>```
> 一般表单里面给用户看的文本，不会直接裸露在外面。所以会有label标签接收，与一个input元素绑定，使其点击的时候，可以改变input的状态。<br>
> 绑定方法：给input加id属性，label加for属性，俩属性保持一致。

	<input type="radio" name="sex" value="0" checked id="male"><label for="male">男</label>
	
## 布局

### 块级元素（block）
> 默认占满一行的元素。
> 比如：

	div, h1-6, p , table , form , ul , ol , dl ...

### 行内元素（inline）
> 只要窗口足够宽，一行内可以有无数个的元素。
> 比如：

	span, b, i , u, del , sup, sub...

#### 无论是block还是inline，都可以通过CSS改变，无需太在意。

### HTML5 布局新标签
> 在H4标准里面，所有的布局容器div+id，代码会略繁琐。<br>
> 在H5标准内，每一部分的布局容器都有自己的标签。

	<header>	头部
	<nav>		导航栏
	<section>	内容（区块）
	<aside>		边栏
	<article>	文章
	<footer> 	脚部（版权）

> 一般body下面的标签，都建议用HTML5的标签。

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Test</title>
	</head>
	<body>
		<nav>
			<!-- 导航栏 -->
		</nav>
	
		<section>
			<!-- 内容 -->
		</section>
	</body>
	</html>