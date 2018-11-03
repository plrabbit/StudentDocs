# JavaScript基础

## JavaScript是什么？

> JavaScript是一种基于对象和事件驱动的客户端脚本语言，最初的设计是为了实现表单验证。
> 起源于NetScape公司的liveScript语言。

###JavaScript由ECMAScript核心，DOM，BOM组成。

## JavaScript引用方法

### 外部引用（最常用的方法）

	<script src="..."></script>

### 通过script标签内嵌

	<script>
		...
	</script>

### DOM元素属性内嵌

	<button type="button" onclick="...">Submit</button>

	<!-- 最牛叉的代码 -->
    	<a href="javascript:alert('清除成功！')">清除缓存</a>

## JavaScript语法

### 注释与分号
	
	// 单行注释
	/* 
		多行注释......
	*/

> JS允许句末不写分号，但建议在行末加上分号。

### 变量命名规则

1. 只能以英文字母，数字，下划线(_)，美元符号($)组成。
2. 不能以数字开头。

#### 大驼峰写法```SmallBall```
每个单词首字母大写
#### 小驼峰写法```smallBall```
首个单词首字母小写，后续单词首字母大写
#### 匈牙利写法```small_ball```
单词全小写，单词之间以下划线分隔开。

#### 定义变量
	var 变量名 = ... ;
	let 变量名 = ... ; //ECMAScript 2015版本写法

### 数据类型
	boolean		布尔类型
	number		数字类型
	string		字符串类型
	object		对象类型
	regExp		正则类型

	undefined	未定义
	null		空

### 调试

	console.log(...); //控制台输出
	//控制台调用方法: F12, Ctrl + Shift + C, 右键->检查

### 弹出框

	alert(...); //警告框
	confirm(...); //确认框，返回boolean值
	prompt(...); //输入框，返回string值

### 流程控制
#### If...Else
	if(条件){ 条件成立的执行语句 }
	else{ 条件否定的执行语句 }

> object类型，无论数组是否为空，用于判断条件时就会被转化为true

#### 例子：判断数组是否为空

	 var a = [];
        if(a == false){
            alert('true');
        }else {
            alert('false');
        }

#### Switch

	switch(变量){
		case 值: ...;break;
		default: ...;
	}

> case后面是不可以写条件

#### 例子：判断服务端请求状态码

	 var stat = 404;
        console.log(typeof stat);
        switch(stat){
            case 404:
                alert('Not Found!');break;
            default: 
                console.log(stat);
        }
	
### 循环

#### for循环

	for(变量声明 ; 条件 ; 变量值变化){
		条件成立的执行语句...
	}

#### 例子：遍历数组

	var arr = [1, 2, 3, 99];
	for (var i = 0, len = arr.length; i < len; i++) {
	    console.log(arr[i]);
	}

#### while循环

	while(条件){条件成立执行语句...}

	while (i < arr.length) {
		console.log(arr[i]);
		i++;
	}

#### do...while循环

	do{
		条件成立的执行语句...
	}while(条件)

#### 例子，无论如何都执行一次
	do {
	    console.log(arr[i]);
	    i++;
	} while (i > arr.length);

#### forEach循环

	数组.forEach(function(数组元素, 元素下标){
		//操作逻辑
	});
	
#### 例子，遍历数组
	arr.forEach(function(element,index){
	    console.log(element,index);
	});

#### continue和break
continue 跳出本次循环，但会继续执行下面的循环。

break 直接停止循环

### 函数

> 一段代码难免会有很多重复的地方，这时候就需要一个封装实体，把重复的代码包装起来，以便节省空间，这个封装实体我们叫作函数。

#### 定义方法
	function 函数名(参数1, 参数2, ...){
		//函数逻辑
	}

> 参数可有可无，函数命名一般使用小驼峰书写方式。

#### ECMAScript 5版本不支持参数默认值写法

#### 回调函数

> 作为参数存在的函数，叫作回调函数。

#### 递归算法

	function 函数名(参数集){
		//函数逻辑
		函数名();
	}

#### 例子，阶乘

	function box(n) {
	if (n <= 1) {
	    return 1;
	}
	return n * box(n - 1);
	}
	
	console.log(box(9));

### 巧用运算符

	function fun456(qwe, num){
	    num = num || 0; //安全处理
	    console.log(qwe, num);
	}
	
	fun456(123);