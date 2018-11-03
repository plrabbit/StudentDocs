# JavaScript里的RegExp（正则表达式）

## 对象属性
> 所有通过new RegExp()实例化的对象拥有的属性，不可修改，只读。

属性值|数据类型|含义
-------|--------|----
global|boolean|全局搜索
ignoreCase|boolean|忽略大小写
multiline|boolean|多行搜索
lastIndex|number|当前表达式匹配内容的最后一个字符的下一个字符的位置（下一次搜索开始的位置）
source|string|正则表达式的文本内容

## RegExp操作函数

### RegExp.prototype.test(string)
> 返回值：[boolean] 

> 传入一个string，以reg的规则测试一下该字符串，看是否有匹配结果。若有，返回true，否则返回false。

---
> test()通过RegExp原型继承，只有通过new RegExp()的对象才能使用该方法。

#### 1. 非全局搜索模式（表达式无g修饰符）
> test()一直从字符串0位置开始搜索。如有匹配，返回true，否则false。

	var str = 'This is a boy.',
		reg = /is/;
	while(reg.test(str)){ //这是死循环，因为一直为true
		console.log(reg.lastIndex); // 0
	}

#### 2. 全局搜索模式（表达式有g修饰符）
> test()会从字符串0位置开始搜索，如有匹配，返回true，并且把RegExp对象的lastIndex值改变，改变至下一个搜索位置，下次再调用时，从lastIndex位置开始。直到搜索不到时，返回false，lastIndex归零。

---
> 在全局搜索的模式下，建议给test函数操作外围添加循环，确保lastIndex为0。

	var str = 'This is a boy.',
		reg = /is/g;
	while(reg.test(str)){ 
		console.log(reg.lastIndex); // 4 7
	}

### RegExp.prototype.exec(string)
> 返回值：null / [Array]

> 传入一个string，对应正则匹配，匹配成功返回结果数组，否则返回null。

#### 结果数组
索引值|含义
:-----:|----
0|与正则匹配的文本
1|第一个分组（若有）相匹配的内容
2 ~ n|第二到n个分组（若有）相匹配的内容
n+1|匹配字符串的第一个字符的位置
n+2|传入的string（要搜索的文本）

#### 1. 非全局搜索模式（表达式无g修饰符）
> 搜索会一直从0位置开始，若有匹配结果，返回第一个结果数组，否则返回null。

	var str = 'This is a boy.',
	    str2 = 'is a girl?',
	    reg = /(\w{2})/;

	console.log(reg.exec(str)); // ["Th", "Th", index: 0, input: "This is a boy."]
	console.log(reg.exec(str)); // ["Th", "Th", index: 0, input: "This is a boy."]

#### 2. 全局搜索模式（表达式有g修饰符）
> 搜索过程中会影响lastIndex的值，下次执行exec函数时，会从新的lastIndex开始搜索。直到搜索不到时，返回null，lastIndex归零。（类似test函数用法）

> 全局搜索模式下建议在exec函数操作外围添加循环，以确保lastIndex为0。

	var str = 'This is a boy.',
	    str2 = 'is a girl?',
	    reg = /(\w{2})/g;

    while (reg.exec(str)) {
	    console.log(reg.lastIndex); // 2 4 7 12
	}

### 用法：提取分组内容
> 表达式是第n组，那么在结果数组里索引n就能拿到分组内容。

	var str = '2017-11-03',
	    reg = /(\w{4})-(\w{2})-(\w{2})/;
	
	var res = reg.exec(str); //获取结果数组
	
	console.log(res[1]); // 2017

## String操作函数

### String.prototype.search(RegExp)
> 返回值：[number]

> 总是从字符串0位置开始搜索，忽略正则表达式g修饰符。若有匹配，返回匹配文本的第一个字符所在位置，否则返回-1。

	var str = 'wer2017-11-03',
	    reg = /(\w{4})-(\w{2})-(\w{2})/,
	    reg2 = /\*/;
	
	console.log(str.search(reg)); // 3
	console.log(str.search(reg2)); // -1

### String.prototype.match(RegExp)

> 返回值：[Array]

> 传入一个正则对象，以string匹配，若匹配成功，返回结果数组。

#### 结果数组
索引值|含义
:-----:|----
0|与正则匹配的文本
1|第一个分组（若有）相匹配的内容
2 ~ n|第二到n个分组（若有）相匹配的内容
n+1|匹配字符串的第一个字符的位置
n+2|传入的string（要搜索的文本）

#### 1. 非全局搜索模式（表达式不含g修饰符）
> 搜索会一直从0位置开始，若有匹配结果，返回第一个结果数组，否则返回null。（结果数组与RegExp.prototype.exec函数返回的类型一样）

	var str = 'This is a boy.',
		reg = /(\w{2})/;
	
	console.log(str.match(reg)); // ["Th", "Th", index: 0, input: "This is a boy."]

#### 2. 全局搜索模式（表达式含g修饰符）
> 返回的结果数组将会是所有匹配正则表达式的字符串

	var str = 'This is a boy.',
		reg = /\w{2}/g;
	
	console.log(str.match(reg)); // ["Th", "is", "is", "bo"]