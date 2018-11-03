# 正则表达式（Regular Expression）

作用： 匹配一系列的符合某个规则的字符串。针对字符串。

所谓的“某个规则”就是正则表达式。

优点：

1. 匹配>=1串字符串，一次性替换或查找多个。
2. 可以加上前瞻后顾规则（\bis\b, 除了匹配is外，还要看看两边是否为单词边界）

## RegExper

> 把正则表达式作为流程图输出，辅助学习。

## JavaScript里正则表达式的定义方法：

### 字面量定义：
	var reg = /is/gi;

### 构造函数定义：
	var reg1 = new RegExp('is', 'gi');
> 参数1：代表正则表达式斜线内的字符（不包括斜线）  
> 参数2：代表修饰符（下面有提及）

> 构造函数：实例化对象的同时执行的函数，一旦有new关键字就会自动调用，无需任何操作。

#### 转义符：反斜杠 （\）   
> 在一些含有特殊含义的，有语法意义的符号前面加\，让它变成真正的字符串存在。

	console.log('\\\'is'); // \'is

## 修饰符
> 正则表达式的匹配规则。应该写在字面量写法的最后，以连写的形式存在。（可参考上方）

修饰符|全写单词|含义
------|---------|------
g	|global	|全局搜索（匹配）
i	|ignore case	|忽略大小写
m	|multilines	|多行搜索

> m修饰符会把\r 或 \n作为新一行开头处理

## 元字符 （了解）
> 正则表达式中含有特殊含义的非字母字符

> 正则表达式通常含有两个部分：  
> 1. 原义文本字符。2.元字符。

### 元字符: * + ? $ ^ . | \ () [] {}

### 转义字符：（作为普通文本字符处理）
	\t	水平制表符
	\v	垂直制表符
	\r	回车符
	\n	换行符
	\0	空字符
	\f	换页符
	\cX	与X对应的控制字符(ctrl + X)

## 字符类（[]）
> 构建一个字符类，提取括号内其中一个字符。

	var str = "ThIs Is a boy.";
	var reg = /[aby]/g; 
	console.log(str.replace(reg, 'Q')); // ThIs Is Q QoQ.

### 字符类取反（[^]）
> 构建一个字符类，匹配除括号内以外的字符。

	var str = "ThIs Is a boy.";
	var reg = /[^aby]/g;
	console.log(str.replace(reg, 'Q')); // QQQQQQQQaQbQyQ

### 范围类（a-z, A-Z, 0-9）
> 表示一个范围，如a-z, A-G, 0-4，以连写形式存在。但是，都只会匹配一个字符串。范围是左右闭区间，意思就是包括a和z。

	var str = "THIs Is a boy."; //这里H变大写了
	var reg = /[a-hA-H]/g;
	console.log(str.replace(reg, 'Q')); // TQIs Is Q Qoy.

#### 一个中括号（[]）里面的内容，仅仅代表一个字符！！

	var str = "THIs Is a boy."; //这里H变大写了
	var reg = /[a-zA-Z][a-o]/g;
	console.log(str.replace(reg, 'Q')); // THIs Is a Qy.

> 如果需要匹配减号（-），则直接在中括号内最后添加即可。

	var str = "THIs Is a boy. -my f";
	var reg = /[a-zA-Z-][a-o]/g;
	console.log(str.replace(reg, 'Q')); // THIs Is a Qy. Qy f

### 预定义类
> 正则表达式帮我们封装了几个常用的字符类，如字母、数字等。

	正则	等价类			含义
	.	[^\r\n]			除了回车换行符以外的所有字符（不能用在[]里）
	\d	[0-9]			数字字符
	\D	[^0-9]			非数字字符
	\s	[\t\n\x0B\f\r]	空白符
	\S	[^\t\n\x0B\f\r]	非空白符
	\w	[a-zA-Z_0-9]	单词字符（字母、数字、下划线）
	\W	[^a-zA-Z_0-9]	非单词字符

#### 以上d, s, w含义：d=>digit, s=>space, w=>word

#### 小练习：匹配ab+数字+任意字符的字符串（如ab1w, ab2y, ab3c）

	var str1 = '@ab1w\n@ab2y\n@ab3c';
	var reg1 = /ab\d./g;
	console.log(str1.replace(reg1, 'Q')); 
	//	@Q
	//	@Q
	//	@Q

## 边界
	
### \b 单词边界	
> 匹配单词两旁的空格。

	var str123 = 'This is a boy.';
	var reg = /is/g;
	var reg2 = /\bis\b/g;
	console.log(str123.replace(reg, 'Q')); //ThQ Q a boy.
	console.log(str123.replace(reg2, 'Q')); //This Q a boy.

### \B 非单词边界
> 顾名思义，与\b相反。

	var str123 = 'This is a boy.';
        var reg = /\Bis\b/g;
	console.log(str123.replace(reg, 'Q')); //ThQ is a boy.

### ^ 起始符
> 匹配以……开始的字符串

	var str1 = '@ab1w\r@ab2y\n@ab3c';
	var reg = /^@/gm;
	console.log(str1.replace(reg, 'Q')); 
	// Qab1wQab2y
	// Qab3c

### $ 结束符
> 匹配以……结束的字符串

	var str1 = '@ab1w\r@ab2y\n@ab3c';
	var reg = /\w$/gm; 
	console.log(str1.replace(reg, 'Q')); 
	// @ab1Q@ab2Q
	// @ab3Q

#### 注意事项：
1. 若修饰符有m存在，\r \n 会影响起始符（^）与结束符（$）的匹配。可以理解为在多行搜索模式下（m），^与$ = \r \n。
2. 起始符（^）必须写在匹配字符串的前面。
3. 结束符（$）必须写在匹配字符串的后面。

## 量词（{}）
> 表示某一段字符串匹配的字数

### {n}规定出现n次(=n)
	var str123 = 'This is a boy.';
	var reg = /\w{4}/g;
	console.log(str123.replace(reg, 'Q')); //Q is a boy.

> 例子，匹配11位数字（手机号码）

	var reg1 = /\d{11}/g;

### {n,}规定至少出现n次（>=n）
> 默认会尽可能多地匹配字符（贪婪模式）（下面会有提及）。

	var str = 'This is a boy.';
	var reg = /\w{2,}/g;
	console.log(str.replace(reg, 'Q')); // Q Q a Q.

### {n, m}规定至少出现n次，但不能多于m次（[n, m]）
> 这种匹配规则也会默认开启贪婪模式（下面会有提及）。

	var str = 'This is a boy.';
	var reg = /\w{2,3}/g;
	console.log(str.replace(reg, 'Q')); //Qs Q a Q.

### 贪婪模式
> 默认的正则表达式匹配是尽可能多的，意思就是默认开启贪婪模式。

	var str = '12345678';
	var reg = /\d{3,5}/g;
	console.log(str.replace(reg, 'Q')); // QQ

### 非贪婪模式
> 匹配成功即停止，在量词右大括号后面加?

	var str = '12345678';
	var reg = /\d{3,5}?/g;
	console.log(str.replace(reg, 'Q')); // QQ78

### ?（出现0次或1次）（最多出现1次）

	var str = '1211';
	var reg = /12?/g;
	console.log(str.replace(reg, 'Q')); // QQQ

### +（出现1次或多次）（至少出现1次）

	var str = '13800138000';
	var reg = /\d+/g;
	var regTan = /\d+?/g; //关闭贪婪模式
	console.log(str.replace(reg, 'Q')); // Q
	console.log(str.replace(regTan, 'Q')); // QQQQQQQQQQQ

### * （出现0次或多次）（任意次）

	var str = '13800138000';
	var reg = /\d*/g;
	var regTan = /\d*?/g; //关闭贪婪模式
	console.log(str.replace(reg, 'Q')); //QQ
	console.log(str.replace(regTan, 'Q')); //Q1Q3Q8Q0Q0Q1Q3Q8Q0Q0Q0Q
	// 因为关闭了贪婪模式，故只会匹配0次的结果

## 分组（()）
> 匹配出现多次的单词（或一系列字符串）。用圆括号（()）把作为单词处理的字符括起来。

	var str = 'ByronByronByronCapster';
	var reg = /(Byron)/g;
	console.log(str.replace(reg, 'Q')); // QQQCapster

> 注意事项： /Byron{3}/ = Byro + n{3}

	var str = 'a1b2c3d4e5';
	var reg = /([a-z]\d)+/g;
	console.log(str.replace(reg, 'Q')); // Q


### 或（|）
> 一个单词需要在多种选择下匹配，此时就需要用到分组+或运算。

	var str = 'Byronpster ByrCapster';
	var reg = /Byr(on|Ca)pster/g;
	console.log(str.replace(reg, 'Q')); // Q Q

### 反向引用 （分组捕获）（$1, $2, ... $n）（重点）
> 正则内的分组会被自动捕获，利用$n（n为分组索引值，具体为正则表达式内第n个括号，从左开始数）可以替换、提取目标分组内容。

---
> 例子1：转换日期格式

	var date = '2017-11-03'; 
	var reg = /(\d{4})-(\d{2})-(\d{2})/g;
	console.log(date.replace(reg, '$2/$3/$1')); // 11/03/2017
> 例子2：提取数组内字符串的关键字

	var subpages = ['views/home.html', 'views/news.html', 'views/discover.html'];
	var reg = /\w+\/(\w+)\.html$/g;
	
	subpages.forEach(function(e, i){
	    console.log(e.replace(reg, '$1')); // home news discover
	});

#### 忽略分组（?:）
> 紧接在分组的左括号后面，加了?:的分组参与匹配但不参与分组捕获操作，也就是该分组无索引值。

	var date = 'Fri: 2017-11-03'; // 11/03/2017
	var reg = /(?:\w+): (\d{4})-(\d{2})-(\d{2})/g;
	console.log(date.replace(reg, '$1 / $2')); // 2017 / 11

## 前瞻、后顾（JS不支持后顾）
1. 正则表达式从左边往右边开始解析，故右边（尾部）称为“前”。
2. 断言：当匹配规则后，还要向前检查（与之相邻）是否有用户想要的内容，但内容不参与匹配，不会被替换、截取，只有辅助功能，这个内容称为断言。
> 前瞻：匹配规则后，向前检查是否符合断言部分。

### 正向前瞻 （(?=)）
> 向前检查（与之相邻）是否匹配?=后面的内容，切记该内容不参与匹配。

	var str = 'a2*34v8',
		reg = /\w(?=\d)/g;
	
	console.log(str.replace(reg, 'Q')); // Q2*Q4Q8

### 负向前瞻（(?!)）
> 向前检查（与之相邻）是否不匹配?!后面的内容，切记该内容不参与匹配。

	var str = 'a2*34v8',
	    reg = /\w(?!\d)/g;
	
	console.log(str.replace(reg, 'Q')); // aQ*3QvQ

