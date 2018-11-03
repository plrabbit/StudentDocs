# HTML简述

Talk is cheap, show me the code. - Linux 之父

### HyperText Markup Language （超文本标记语言）
> 超文本？其实就是文本、图片、视频、音频、链接等等。这些功能都可以通过一个简单的文本标签实现，故称超文本。

### HTML5新特性
> HTML5设计目的是为了移动设备上支持多媒体。

1. 一个HTML5文档到另一个文档间的拖放功能
2. 离线存储（localStorage）
3. 多媒体功能实现（video, audio, canvas）

### 关于支持HTML5的内核

	chrome, safari	-webkit-内核
	FireFox			-moz-内核
	IE				-ms-内核

国内的浏览器，除UC外，都是chromium（谷歌工程版）内核

## 第一个HTML页面

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