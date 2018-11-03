# 表单```<form>```
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

#### name, value属性是发送到服务器进行处理的，非常的重要。name属性代表参数名，必须与后端设置的参数一致。value属性代表上传到服务器的参数值，可以通过输入框人为改变。加上value属性可以让输入框默认添加几个字符。

#### 当你按下提交按钮的时候，表单会自动帮我们打包数据，上传至服务器。

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