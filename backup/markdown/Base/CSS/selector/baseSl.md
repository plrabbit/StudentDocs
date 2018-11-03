# CSS基础选择器
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