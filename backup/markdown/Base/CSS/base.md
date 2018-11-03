# CSS基础

### 简述
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