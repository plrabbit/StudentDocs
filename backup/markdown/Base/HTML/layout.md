# 布局基础

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