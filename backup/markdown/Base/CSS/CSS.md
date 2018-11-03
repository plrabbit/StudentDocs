# CSS

### 简介

> 众所周知，HTML标签是网页的主体内容，是功能的骨干。但给用户的体验不好，在于它们没有好看的外表和动人的布局。<br>


## CSS引入方式

### 行内引用
> 1. 在元素中添加一个style属性，在style属性内写样式。<br>
> 2. 注意每个CSS属性后，加分号。

	<span style="font-size: 36px;">嘤嘤怪</span>

### 页内引用
> 1. 在head标签内，加上一个```<style>```，在style标签内写样式。<br>
> 2. 注意页内引用的写法比行内引用多了一个选择器。

#### 栗子：页面里所有的span标签，设置骚粉色与“微软雅黑”字体。

	<head>
		<meta charset="UTF-8">
		<title>网页标题</title>

		<style>
			span {
				color: crimson;
				font-family: 'Microsoft Yahei';
			}
		</style>
	</head>

### 外部引用（重点）
> 1. 企业内常用的引入方式。在html文件以外，新建一个css文件，在css文件里面写样式。<br>
> 2. 在html的head标签内，加上一个link标签，在href属性里填入css文件的地址。
> 3. link标签里面的rel属性是必须写的：```rel="stylesheet"```

css文件：<br>

	span {
		margin-left: 40px;
		font-weight: bold;
	}

html文件：<br>

	<head>
		<meta charset="UTF-8">
		<title>网页标题</title>

		<link rel="stylesheet" type="text/css" href="css/index.css">
	</head>
	
### 引用优先级问题

> 行内 > 页内 = 外部 （看选择器精确度）

> 若选择器精确度一样，没有可比性，后写会赋予样式。

#### 无敌（!important）
> 1. 给样式设置“无敌”，这个样式的优先级会被置顶。
> 2. !important写在样式的属性值后，分号之前。

	input {
		color: greenyellow !important;
	}

### 注释
> CSS语法里面也有注释这一概念，可以帮助自己或者队友清晰代码结构。

	input {
		/* 设置字体颜色为秦始黄 */
		color: greenyellow !important;
	}

## CSS选择器
> 当我们写页内或外部样式的时候，问题来了，样式该赋予给谁呢？
> 所以页内引入或外部引入，不能直接写样式，必须加上选择器。

### 通配选择符（*）
> 所有的元素都会匹配上，但是优先级很低，可以作为清除样式，字体样式的设置。
	
	* {
		margin: 0;
		padding: 0;
		font-family: 'Microsoft Yahei';
	}

### 元素选择符
> 页面内的所有特定的（被选择的）元素，都会赋予样式。<br>
> 读作：页面内的所有XX元素，都会赋予......样式。

	section {
		background-color: lightblue;
	}

### 群组选择符（,）
> 1. 若需要两个或以上的元素/选择器，赋予相同的样式。可以在选择器后加一个逗号（,）表示，这一组选择器赋予相同的样式。
> 2. 逗号后，选择器要重新写。

	h1, h2, p {
		color: yellowgreen;
	}

### 关系选择符

#### 包含选择符（空格）
> 元素里有的成分，都称为包含关系。<br>
> 读作：XX里面的所有OO元素会赋予样式，如：```section li```。

html代码：<br>

	<section>
		<input type="text" name="" style="color: crimson;">
		<div>
			<ul>
				<li>NO.1</li>
				<li>NO.2</li>
				<li>NO.3</li>
				<li>NO.4</li>
				<li>NO.5</li>
			</ul>
		</div>
		
	</section>

css代码：<br>

	section li {
		text-shadow: 2px 2px 3px #000;
	}

#### 子选择符（selector1 > selector2）
> 选择器之间只有一层包含关系的，称为父子关系。<br>
> 读作：作为selector1儿子的selector2会赋予样式。


html代码：<br>

	<section>
		<input type="text" name="" style="color: crimson;">
		<div>
			<div style="background-color: lightblue;">123</div>
			<ul>
				<li>NO.1</li>
				<li>NO.2</li>
				<li>NO.3</li>
				<li>NO.4</li>
				<li>NO.5</li>
			</ul>
		</div>
		
	</section>

css代码：<br>

	section > div {
		background-color: yellowgreen !important;
	}

> 说明：本来CSS样式里，加了“无敌”(important)，应该所有的div都会设置背景色为yellowgreen，但效果并没有。原因是，子选择符只会给儿子赋予样式。

#### 相邻选择符（selector1 + selector2）
> 在selector1之后的，并且在它旁边（下一个）的selector2，表示相邻关系 。<br>
> 读作：在selector1后面的，并与之相邻的selector2。

html代码：<br>

	<ul>
		<li>NO.1</li>
		<li>NO.2</li>
		<li>NO.3</li>
		<li>NO.4</li>
		<li>NO.5</li>
	</ul>

css代码：<br>
	
	li + li {
		background-color: yellowgreen;
	}

> 说明：第一个li没有样式，因为读取到第一个li的时候，只有一个li，它前面并没有li与之相邻。第二个之后有样式是因为，它们之前都有一个作为相邻关系的li。
	
#### 兄弟选择符（selector1 ~ selector2）
> 在selector1之后，作为同辈元素的selector2，有兄弟关系。<br>
> 读作：selector1后面的，作为兄弟的selector2，赋予样式。

html代码：<br>

	<p>I m p upwards!</p>
	<div>This is a div!</div>
	<p>This is a p!</p>
	<ul>
		<li>NO.1</li>
		<li>NO.2</li>
		<li>NO.3</li>
		<li>NO.4</li>
		<li>NO.5</li>
	</ul>

css代码：<br>

	p ~ * {
		background-color: lightsalmon;
	}

> 说明：第一个p以外的，后面所有与之为兄弟的元素，都会赋予“亮西瓜红”背景色。

### id选择器（#）
> 1. 先在HTML里给将要赋予样式的元素写上id属性，然后在CSS里，写```#id名```，就可以赋予对应元素的样式了。<br>
> 2. id是唯一的，建议不要写多个id。

html代码：<br>

	<p id="container">1234567</p>
	<!-- EMMET: p#container{1234567} -->

css代码：<br>

	#container {
		background-color: aqua;
	}

### class选择器（.）
> 1. 与id选择器类似，class也需要先在HTML里面定义，然后再到CSS里面写样式。
> 2. class选择器可以写无数遍。

html代码：<br>

	<p class="para">1234567</p>
	<!-- EMMET: p.para{1234567} -->

css代码：<br>

	.para {
		background-color: brown;
	}

	
### 伪类选择器（:）
> 1. 特定条件下的元素样式，或者必须触发某种事件，才会有的样式。
> 2. 写伪类样式之前，必须先写好该元素通常情况下的样式，除非你需要原来的样式

#### 鼠标悬停（:hover）

html代码：<br>

	<ul>
		<li>NO.1</li>
		<li>NO.2</li>
		<li>NO.3</li>
		<li>NO.4</li>
		<li>NO.5</li>
	</ul>

css代码：<br>

	section li {
		text-shadow: 2px 2px 3px #000;
		/* 先写一个普通情况下的样式 */
	}
	
	section li:hover {
		background-color: brown;
	}

#### 浏览过的链接（a:visited）
> 链接浏览过的a标签，赋予样式。

html代码：<br>

	<a href="http://baidu.com">I am a link!</a>

css代码： <br>

	a {
		font-size: 36px;
		background-color: #333;
		display: block;
	}
	
	a:visited {
		color: white;
		background-color: crimson;
	}

#### 激活状态（:active）
> 鼠标在元素上，并且按下某个按键时触发。

html代码：<br>

	<a href="">Link A2!</a>

css代码：<br>

	a:visited {
		color: red;/* 两个伪类可以同时使用 */
	}
	
	a:active {
		background-color: yellow;
	}

> 说明：若需要两个伪类设置一样的样式，请使用群组选择符（,）

#### 聚焦（:focus）
> 文本框获取焦点时候的样式。

html代码：<br>

	<input type="text">

css代码: <br>

	input:focus {
		/* 当文本框获取焦点的时候触发 */
		background-color: pink;
	}

#### 否定（:not）

html代码：<br>

	<p class="a4">
		<p>This is a p! FROM a4</p>
		<h1>This is a h1! FROM a4</h1>
	</p>

css代码：<br>

	.a4:not(p) {
		/* class为a4，但不是p的元素 */
		background-color: lightblue;
	}

> 说明：这里的p.a4不会有样式。


#### 第一个儿子（:first-child）

html代码：<br>
	
	<div class="a4">
		<p>This is a p! FROM a4</p>
		<h1>This is a h1! FROM a4</h1>
		<div>
			<a href="">This is a inner A!</a>
		</div>
	</div>

css代码：<br>

	.a4 p:first-child {
		/* 能作为第一个儿子的p元素 */
		background-color: aqua;
	}

> 说明：.a4里面的能作为一个儿子的p，赋予样式。a标签虽然也是第一个儿子，但没样式。


#### 最后一个儿子（:last-child）
> 与“:first-child”大同小异，只是变成最后一个儿子。。。

#### 独生子（:only-child）
> 理解方法同上，一个元素里，只有一个儿子，这个儿子被称为“独生子”。

#### 第N个儿子（:nth-child(n)）

html代码：<br>

	<div class="a4">
		<p>This is a p! FROM a4</p>
		<h1>This is a h1! FROM a4</h1>
		<div>
			<a href="">This is a inner A!</a>
		</div>
		<del>I M DEL!</del>
	</div>

css代码：<br>

	.a4 :nth-child(3) {
		background-color: green;
	}

#### 倒数第N个儿子（:nth-last-child(n)）
> 理解方法与“nth-child”一样，只不过是倒数。

### 属性选择符（[]）

#### 拥有属性选择符（[属性名]）

html代码：

	<div class="a5">
		<input type="text" name="username">
		<input type="text">
	</div>

css代码：

	.a5 [name] {
		/* 拥有name属性的元素 */
		border-color: #f00;
	}

> 说明：只有第一个input会赋予样式。

#### 同等属性选择符（[属性名=属性值]）
> 拥有属性，并且等于某个值。

html代码：<br>

	<div class="a5">
		<input type="text" name="username">
		<input type="text">
		<input type="password" name="password">
	</div>

css代码：<br>

	.a5 [name=password] {
		/* 拥有name属性，并且属性等于username的元素 */
		border-color: #0f0;
	}

> 说明：只有密码框的边框变绿色。

#### 值包含选择符（[属性名*=部分属性值]）
> 拥有属性，并且属性值包含某个值。

html代码：

	<div class="a5">
		<input type="text" name="username">
		<input type="text">
		<input type="password" name="password">
	</div>

css代码：

	.a5 [name*=a] {
		/* 拥有name属性，并且属性值中包含a的元素 */
		border-color: #00f;
	}

> 说明： 第一和第三个input边框颜色变蓝。

## 字体样式

1. 默认字体大小，16px

### 字体大小（font-size）
> EMMET: fzN(N>=0)


值可以填：px，百分比（相对自身的字体大小）

### 字体粗细（font-weight）
> EMMET: fwb（加粗）

值可以填：normal（正常不加粗），bold（加粗），400（正常不加粗 ），800（加粗）

### 字体斜体（font-style）
> EMMET: fsi（斜体）

值可以填：normal（正常），italic（斜体）