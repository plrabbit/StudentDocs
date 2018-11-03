# 延伸

## HTML

### 标签嵌套
> 如需结合两标签的功能，可以使用标签嵌套。

	<a href="http://baidu.com">
		<h1>百度两下</h1>
	</a>

### index.html
> 任何域名后，只要不接.html后缀的文件，默认加载index.html。

### 关于相对目录
> 一般来说，图片及其他静态资源不会与html文件散落地放在一起，资源会分文件夹放好。但放进文件夹后，目录会有所改变，因此需用到“相对目录”。

> 当前目录文件夹：直接写文件夹名字 + /

	<img src="img/study.png">
	<img src="img/first/study.png">

> 上一层目录：../

	<img src="../study.png">

### EMMET语法

1. tr > td{$} 					内容语法，$表示循环的计数
2. dl > (dt + dd) 				并列语法，+表示两个元素并列
3. tr > td[bgcolor=black]		属性语法，[]表示该元素的属性 

### 国际象棋棋盘（table + EMMET）

	<table width="400" height="400" cellspacing="0">
		((tr>(td[bgcolor=black]+td[bgcolor=white])*4)+(tr>(td[bgcolor=white]+td[bgcolor=black])*4))*4
	</table>

### input类型拓展（HTML5）

	<input type="color" name="theme">
	<!-- 拾色器 -->
	<input type="email" required>
	<!-- 邮箱地址 -->
	<input type="search">
	<!-- 搜索框，输入文字后，会在其后有清除的X -->

### 图文标题（figure>img + figcaption）
> HTML5 新标签，规定figure包含着img与figcaption，img是图片，figcaption是文字。

	<figure>
		<img src="...">
		<figcaption>Faker</figcaption>
	</figure>

### 写一个简单的菜单（:hover）

html代码：<br>

	<nav>
		<ul>
			<li><a href="">NO.1</a></li>
			<li><a href="">NO.2</a></li>
			<li><a href="">NO.3</a></li>
			<li><a href="">NO.4</a></li>
			<li><a href="">NO.5</a></li>
		</ul>
		<!-- ul>(li>a{NO.$})*5 -->
	</nav>

css代码：<br>

	nav a {
		background-color: aqua;
		display: block;
	}

	nav a:hover {
		color: #fff;
		background-color: lightgreen;
	}

> 说明：一般菜单的hover效果需要占满一行，并且能够在空白位置点击。所以应该给a加hover效果，先保证功能，然后让a变成块级元素（display: block;）

---

> 除此以外，hover还可以这样玩：

	nav li:hover a {
		/* 当鼠标悬停在li上，li里面的a状态 */
		color: #fff;
	}

### 千层糕样式（:nth-child(n)）

html代码：

	<ul class="dim">
			<li>NO.1</li>
			<li>NO.2</li>
			<li>NO.3</li>
			......此处省略45个
			<li>NO.49</li>
			<li>NO.50</li>
		</ul>

css代码：<br>

奇数行：（odd）

	.dim :nth-child(odd) {
		background-color: #ccc;
	}

偶数行：（even）

	.dim :nth-child(even) {
		background-color: #ccc;
	}

拓展：有些客户，喜欢隔2行、隔3行……处理这种情况，可以填通项公式。

> 隔y行，通项公式就是：(y+1)n+1


### 中英文字体混合（font-family）
> 先写英文字体，再写中文字体，即可实现中英文字体混合。

	* {
		margin: 0;
		padding: 0;
		font-family: 'IMPACT', 'Heiti SC';
		/* 英文字体使用IMPACT渲染，中文使用heiti SC */
	}