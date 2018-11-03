# 面向对象

## 作用域

### 1. 全局作用域
> 裸露在全局里面的变量、函数等，在任何地方都可以使用的，这种变量或函数所处的区域叫作全局作用域。

### 2. 函数作用域
> 在函数内部定义的变量、函数等，只能在该函数内使用，调用结束即消亡。（全局作用域不可使用，类似自己家里的东西，外人不能用）

### 3. 作用域链
> 在函数作用域内，本来不存在全局作用域的变量或函数，但JS内部机制（Function）在生成函数的时候，会把全局作用域变量、函数等的地址注入进去，使函数内部可以使用全局变量。这个注入的地址，类似一条链子，把函数作用域和全局作用域连接起来，故称为作用域链。

	// ECMAScript 5
	var a = 1; // 全局作用域
	function abc(){ 
	    var b = 2; // 函数作用域
	    console.log(a); // JavaScript作用域链
	    // 函数abc里面存着a在全局作用域里面的地址，故可以在abc里面使用到它
	}

## 闭包

### 1. 全局污染问题
> 若代码量很大或多人合作之时，难免会有全局变量重名的问题，造成全局污染。为了防止全局污染，可以在全局作用域内开辟一块函数作用域，但这个函数只能匿名（因为函数名不能裸露在全局作用域，JS并不支持函数重载），所以闭包由此诞生，作用是处理这种变量重名，全局污染的问题。
	
	(function () {
		var a = 123;
		var username = 234;
		console.log(a); // 123
	})(); // 第一种写法：括号写在外面
	
	(function () {
		var a = 2;
		console.log(a); // 2
	}()); // 第二种写法：括号写在里面

### 2. 静态变量存储
> 静态变量：函数执行完毕，变量不会销毁，一直保存在内存中。

	for (var i = 0; i < 3; i++) {
		as[i].onclick = function () {
		    console.log(i); // 变量提升
		}
	}

> 你会默默发现，以上代码不管是点击哪一个a，输出的都是3。因为onclick后面的这个函数本质上没有执行。当它要执行的时候，它发现自己内部并没有i，所以只能问全局找i变量，此时全局的i变量已经是循环后的3，所以不管是点击哪一个，都会输出3。

> 解决方法如下：（在绑定事件操作外围加一个闭包即可）

    for (var i = 0; i < 3; i++){
        (function(i){
            as[i].onclick = function(){
                console.log(i); // 变量提升
            }
        }(i));
    }

### 3. 变量重命名

####（1）document与window重命名
	(function(doc, win){
		doc.getElementById('...');
		win.navigator.userAgent;
	})(document, window);

#### （2）jQuery 与 prototype 重名$
	// $: jquery.js prototype.js 
	// 谁在其后引入，$属于谁
	(function($){
	    //$.. JQ逻辑
	
	}(jQuery));
	
	// $.. prototype逻辑

## 原型
> 在JavaScript内，万物皆对象。比如人，人都有共同的特性，有五官，身体，肢体......但也有属于每个人不一样的特性，如长相，身高，性格......

1.  把共同的特性提取出来并进行封装，封装好的这个模型叫作原型。

2. 经过实例化原型（new）后的东西叫作对象，对象可以存储个性化的特性（与别的对象不一样的地方），这些不一样的特性叫作对象属性。

3. JavaScript里面任何的函数、数组、字符串、正则......都是通过原型实例化而生的。故称“万物皆对象”。

### this对象
1. 全局作用域下的this为window。
2. function作为普通函数利用时，function内部的this为调用者。
3. function作为原型存在时，function内部的this为实例化的对象。

### 自定义原型

#### 1. 利用构造函数个性化属性
> function关键字在ES5内有两种用法，一种是常规的函数声明，一种是作为原型声明。
> 
> 作为原型声明，这个function函数体就会作为构造函数存在。原型建议用大驼峰写法命名。

构造函数：在实例化对象的同时，一并执行的函数。

	function Person(name){
	    this.name = name; // 对象属性
	    // this代表所有实例化的对象
	}
	var man = new Person('John'); // 从原型里新实例化一个对象
	console.log(man.name); // John
	var woman = new Person('Susan'); 
	// 从原型里再实例化一个对象，加上上面一共2个对象
	console.log(woman.name); //Susan

#### 2. 公共特性提取
> 一般来说，利用this.attrName + 构造函数可以方便快速自定义对象属性。但对于函数来说，通常执行方法与逻辑都是一样的，只是变量用的不同。此时，函数不建议放在构造函数内（因为每一个实例化的对象都会有这条函数，对象数量增多，内存随之开销变大），而要放在公共部分prototype里。

prototype：对象公共特性提取的部分。放在公共部分里的函数或变量，有且仅有一份。

	function Person(name) {
	    this.name = name; // 对象属性
	}
	
	Person.prototype.walk = function(){
	    console.log('走！');
	}
	
	Person.prototype.piano = function (name) {
	    console.log('我会弹钢琴怎么了？' + name);
	};
	
	var man = new Person('John');
	var woman = new Person('Susan');
	man.walk(); // 走！
	woman.walk(); // 走！

##### 这种构造函数 + prototype（原型）的方法，是前端里常用的设计模式之一。

#### 3. 修改公共特性（ __ proto __ ）
> 每个后代对象都有权利修改原型的公共特性，利用一个特殊变量称为__proto__，也叫原型链。

	console.log(man.__proto__.walk); // function...
	man.__proto__.walk = 2333;
	console.log(woman.walk); // 2333

##### 每个对象在new的同时，都会被注入一个地址，连接对象与原型公共部分，目的是让对象可以使用公共部分的变量或函数。连接对象与原型公共部分的媒介，就叫__proto__（原型链）。
![](https://i.imgur.com/nyGnE1o.png)
