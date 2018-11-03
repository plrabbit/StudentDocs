# 关系选择符

### 包含选择符（空格）
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

### 子选择符（selector1 > selector2）
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

### 相邻选择符（selector1 + selector2）
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
	
### 兄弟选择符（selector1 ~ selector2）
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