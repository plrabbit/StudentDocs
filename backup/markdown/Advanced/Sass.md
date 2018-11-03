# Sass

## 准备

SASS是一种CSS的开发工具，也称为"CSS预处理器"。

SASS是对CSS（层叠样式表）语法的一种扩充，它可以使用混入、继承等功能，可以更有效有弹性地写出Stylesheet。

说白了，SASS就是给CSS添加上一些编程语法，使其变得更容易维护。

### 比如说，更改网站的主题色。   
> 需求是背景、部分字体、HTML元素配色进行统一更改，但某些元素需保持原本的颜色。
   
用CSS原生语法会很难维护，解决这一问题，可以用到SASS的变量定义，只要更改变量，所有要改变的CSS样式就会一次性改变，非常方便。 

## 环境搭建

### 1. 安装Ruby环境。
> Sass依赖Ruby环境，需要提前安装。

[http://www.ruby-lang.org/en/downloads/](http://www.ruby-lang.org/en/downloads/)

### 2. gem install sass
> 利用Ruby环境的gem插件安装sass

### 3. sass - v
> 输入sass -v可以检查sass是否安装成功。

## 文件后缀

### 1. *.sass

> 一种不含大括号和分号编写sass的方法，不常用。因为跟原生CSS语法差太多。这种后缀名是SASS保留的一种个性语法。

### 2. *.scss

> 这种后缀名与我们之前写CSS的语法大同小异，不需要改变任何编写CSS的习惯，以前怎么写，现在就怎么写，只不过加上一些sass语法而已。

#### 通常我们使用scss后缀名。

## 自带的sass编译

> 浏览器不支持sass文件读取，必须经过编译成真正的css才可使用。

### 1. 单个文件编译
> 打开命令行至文件目录，执行：

	sass style.scss style.css 

### 2. 单个文件监听编译
> scss文件发生改变，就会自动编译成新的css文件。

	sass --watch style.scss:style.css

> 注意事项：监听的情况下，输入文件与输出文件之间是冒号！冒号！冒号！

### 3. 文件夹监听编译
> 监听整个文件夹的文件变动，自动编译至另外的文件夹。

	sass --watch TEST:TESTCSS

### style配置命令
> 控制输出css文件的压缩模式。

	sass --watch style.scss:bundle.min.css --style compressed

style参数|含义
---------|-----
compressed|最大化压缩
compact|单行选择器压缩
nested|展开，尾部的大括号与最后一条css属性同行
expanded|完全展开

## 软件编译（Koala）
> 通过可视化界面操作，自动添加新属性前缀等功能。

## Sass语法规则

### 导入 @import
> 导入主要有两种方式：导入scss，导入css文件。

导入scss：会把另外一个scss文件内容复制粘贴到当前文件内容里，再参与编译。原因是scss文件不能被浏览器读取，迫于无奈只能先复制过来。

	@import "./des.scss";

导入css：与导入scss不一样，css文件能直接被浏览器读取，所以编译后的css将会用原生css语法里面的@import代替代码的复制粘贴。

	@import "./des.css";

#### 主要用途
> 类似Bootstrap的UI框架，其实有很多没有用到的UI组件，上传至服务器将累积很多无用的代码，增加流量损耗。使用@import导入命令，可以单个UI组件样式导入，进一步优化代码。

### 注释

> Sass支持两种注释语法：双斜杠（//）、单斜杠星号（/* */）

值得注意的是，双斜杠的注释不会被保留至编译后的css文件里，因为css不支持。  
但是，单斜杠星号的方式是会保留的。

### 变量
> 变量的声明与php比较相似，使用$开头，拼接上变量名。赋值符号使用冒号（:）。

	$themeColor: yellowgreen;
	$themeFontSize: 12px;

	h1 {
		color: $themeColor;
	}

	h3 {
		font-size: $themeFontSize;
	}

### 特殊变量
> 一般我们定义变量都作用在属性值上，可以直接使用。但如果变量作用为属性名或选择器的时候，就必须使用#{$variable}拼接。这种变量我们叫特殊变量。

	$borderDirection: top;

	.border-#{$borderDirection} {
		border-#{$borderDirection}: 1px #333 solid;
	}

### 多值变量

#### list
> list数据可以通过空格，逗号或小括号分隔多个值，可用nth($list, $index)，注意$index从1开始。

	$linkColor:black blue red;

	a:active {
		color: nth($linkColor, 2);
	}

> list变量必须写在当前文件，否则会报错。

#### map
> map与list相似，只不过map可以自定义索引值。

	$heading:(h1:2em, h2:1.5em, h3:1.2em);
	
	h3 {
	     font-size: map-get($heading, h3);
	}

### 嵌套
> 嵌套分为两种：选择器嵌套，属性嵌套

#### 选择器嵌套

#### 注意事项：
1. 本元素的CSS属性应写在最上面。
2. 如果使用伪类，记得在嵌套之前加&关键字。

---

	.banner {
	    padding-top: 40px; // .banner的属性写在最上面
	    &:hover {
	        background: yellow;
	    }
	    .container {
	        height: 500px;
	        h1 {
	            font-size: 48px;
	        }
	    }
	}

以上代码等价于：

	.banner {
	  padding-top: 40px;
	}
	.banner:hover {
	  background: yellow;
	}
	.banner .container {
	  height: 500px;
	}
	.banner .container h1 {
	  font-size: 48px;
	}


#### 属性嵌套
	
	.banner-item {
	    border: {
	        top: 1px solid #ccc;
	        bottom: {
	            width: 1px;
	            style: solid;
	            color: #333;
	        }
	    }
	}

以上代码等价于：

	.banner-item {
	  border-top: 1px solid #ccc;
	  border-bottom-width: 1px;
	  border-bottom-style: solid;
	  border-bottom-color: #333;
	}

### 混合 mixin
> 如果有一系列的CSS属性，重复了多遍或者经常使用，那就可以使用@mixin关键字，把重复的代码封装起来 ，混合mixin与编程里面的函数类似。

#### 无参数用法
	@mixin left {
	    float: left;
	    list-style: none;
	}
	
	h3 {
	    font-size: map-get($heading, h3);
	    @include left;
	}

#### 带参数的用法
> Sass支持参数默认值的。一般我们建议，带默认值的参数写在参数集的最后。

	@mixin left($color, $size: 36px) {
	    h4 {
	        font-size: $size;
	    }
	
	    h5 {
	        color: $color;
	    }
	}
	
	.banner-item {
	    border: {
	        top: 1px solid #ccc;
	        bottom: {
	            width: 1px;
	            style: solid;
	            color: #333;
	        }
	    }
	    @include left(pink);
	}
	
	.preview {
	    @include left(yellowgreen, 48px);
	}

### 继承 extend
> 复制一个选择器里面的所有属性，把它与声明语句的选择器合并共同有的属性。

	@mixin header($size: 36px) {
	    h1 {
	        font-size: $size;
	    }
	    h3 {
	        color: purple;
	    }
	}
	
	.banner {
	    @include header;
	}
	
	footer {
	    @extend .banner;
	}

以上代码等价于：

	.banner h1, footer h1 {
	  font-size: 36px;
	}
	.banner h3, footer h3 {
	  color: purple;
	}

### 数学运算
> Sass支持简单的数学运算符号，小数取整，最大最小值。

> floor 向下取整，ceil 向上取整，round 四舍五入

	@mixin header($size: 36px) {
	    h1 {
	        font-size: $size;
	    }
	    h2 {
	        font-size: floor($size / 5); // 向下取整
	    }
	    h3 {
	        font-size: $size - 12;
	        color: purple;
	    }
	}

### 循环
> Sass支持两种循环，for 和 each。

#### for 
> 只会输出end - start 次。

	@for $i from 1 to 5 {
	    .pre-#{$i} {
	        background-image: url(../images/blog#{5-$i}.jpg); // 倒序
	    }
	}

以上代码等价于：

	.pre-1 {
	  background-image: url(../images/blog4.jpg);
	}
	
	.pre-2 {
	  background-image: url(../images/blog3.jpg);
	}
	
	.pre-3 {
	  background-image: url(../images/blog2.jpg);
	}
	
	.pre-4 {
	  background-image: url(../images/blog1.jpg);
	}

#### each
> 与for类似，不过是循环过程中的变量命名，可以自定义化。

	@each $pic in a,b,c,d,e {
	    .#{$pic}{
	        background: url(../images/#{$pic}.jpg);
	    }
	}

以上代码等价于：
 
	.a {
	  background: url(../images/a.jpg);
	}
	
	.b {
	  background: url(../images/b.jpg);
	}
	
	.c {
	  background: url(../images/c.jpg);
	}
	
	.d {
	  background: url(../images/d.jpg);
	}
	
	.e {
	  background: url(../images/e.jpg);
	}