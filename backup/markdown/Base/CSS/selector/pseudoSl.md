# 伪类选择器（:）
> 1. 特定条件下的元素样式，或者必须触发某种事件，才会有的样式。
> 2. 写伪类样式之前，必须先写好该元素通常情况下的样式，除非你需要原来的样式

### 鼠标悬停（:hover）

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

### 浏览过的链接（a:visited）
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

### 激活状态（:active）
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

### 聚焦（:focus）
> 文本框获取焦点时候的样式。

html代码：<br>

	<input type="text">

css代码: <br>

	input:focus {
		/* 当文本框获取焦点的时候触发 */
		background-color: pink;
	}

### 否定（:not）

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


### 第一个儿子（:first-child）

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


### 最后一个儿子（:last-child）
> 与“:first-child”大同小异，只是变成最后一个儿子。。。

### 独生子（:only-child）
> 理解方法同上，一个元素里，只有一个儿子，这个儿子被称为“独生子”。

### 第N个儿子（:nth-child(n)）

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

### 倒数第N个儿子（:nth-last-child(n)）
> 理解方法与“nth-child”一样，只不过是倒数。
