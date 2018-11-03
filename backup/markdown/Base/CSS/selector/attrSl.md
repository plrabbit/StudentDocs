# 属性选择符（[]）

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