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