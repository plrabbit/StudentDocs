# Ajax 

## 简介

> 全称：Asynchronous JavaScript And XML（异步 JavaScript 和 XML）

在web领域，网络请求模式有两种，同步请求与异步请求。同步请求意为当前线程放下运行任务，进行网络请求，用户界面将会受到阻塞，影响用户体验。异步请求可以新建一条新的线程，保证用户界面正常运行的同时，也可以进行网络请求，用户体验良好。

JS里面的异步请求我们称作：Ajax。

Ajax 是一种用于创建快速动态网页的技术。

Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。


## 数据交互格式

### XML
> 又称XHTML（Extensible Markup Language）数据交互格式的其一，仿照html的开发模式，用标记语言存储数据。标签名都可自定义名字，标签内容代表具体的数据值。 

> 现代web领域使用率较少，因为处理不便。

	<?xml version="1.0" encoding="utf-8"?>
	
	<weather> 
	  <city>Changsha</city>  
	  <temp>9</temp>  
	  <details>Sunny</details> 
	</weather>

### JSON
> JavaScript Object Notation，JS对象标记，数据交互格式之一。仿照的是JavaScript里面的对象写法，以大括号包裹，键值对的形式存在。

> 现代web开发常用的一种数据格式。注意键值对字符串只能以双引号包裹。

	[
	    {
	        "city":"Changsha",
	        "temp":"9",
	        "details":"sunny"
	    },
	    {
	        "city":"Guangzhou",
	        "temp":"17",
	        "details":"sunny"
	    }
	]

## 有点重要的内容

1. 本质上表单与Ajax是两码事，它们的共同点是前端与后端交互的媒介。
2. 在现代前端领域，我们一般利用表单域元素结合Ajax与后端对接。
3. 一般表单用于给用户输入文字，开发提交按钮。
4. Ajax一般负责无跳转请求验证。

## 常用的请求方式

### GET请求方式
1. 没有发送数据包
2. 通过url（地址）传参，在?后面传参。?后面的字符串也叫查询字符串。
3. 参数与参数之间用&连接。
4. get请求不可以发送文件，因为它只通过查询字符串请求，这个字符串暂时无法表示一个完整的文件。

---
    <form id="form" action="jquery.html" method="get">
        <input type="text" id="usr" name="username">
        <input type="password" id="pwd" name="password">
        <button type="submit">submit!</button>
    </form>

	// action属性：请求地址，method属性：请求方式
	// name属性：请求参数，value属性：请求参数值

	// 大致请求url格式如下：
	http://127.0.0.1:5500/jquery.html?username=admin&password=123456

### POST请求方式
1. 通过数据包发送，参数被封装在数据包中。
2. 不会通过url后面传参。
3. 发送文件，登录传输密码必须用POST请求方式。

---

    <form id="form" action="jquery.html" method="post">
        <input type="text" id="usr" name="username">
        <input type="password" id="pwd" name="password">
        <button type="submit">submit!</button>
    </form>

![](https://i.imgur.com/EFYqLG1.png)

## 在JQ里的Ajax(v3.2.1)

### $.get(url, dataObj)
> 参数集合可以直接写在URL后面或者使用JQ函数get封装。

	$.get('http://plrabbit.com/home/api.php?m=article&a=list');
	
	$.get('http://plrabbit.com/home/api.php', {
	    m: 'article',
	    a: 'list'
	});

### $.post(url, dataObj)
> 因为post请求需要封装数据包，所以没有url后拼接参数集合的方式。

	<form id="form">
	Username:<input type="text" id="usr" name="username"><hr>
	Password:<input type="password" id="pwd" name="password">
	<button type="submit">submit!</button>
	</form>

	$.post('http://plrabbit.com/Test/api.php', {
		username: $('#usr').val(),
		password: $('#pwd').val()
	});

### $.ajax(optionsObj)
> 若需要在header里面存参数，或者要更多的扩展功能，可以使用JQ提供的终极Ajax函数。

#### optionsObj常用参数列表

参数名|数据类型|含义
:-----:|:-----:|:-----:
headers|Object|请求头数据存放，前提是后端允许接收
type|string|请求方式（GET,POST,...）
url|string|请求地址
data|Object|待请求的参数集合
dataType|string|待接收的数据类型（xml, json,...）
success|Function|请求成功的回调函数
contentType|string|上传文件请务必赋值：'multipart/form-data'
statusCode|Object|接收后端人为响应的状态码，做出对应的操作
timeout|number|网络请求延时时间，超过时间将会终止请求，单位为ms
error|Function|接收到请求的各种错误，如timeout, error, abort，执行回调函数的功能

	$.ajax({
	    headers: {
	        token: 'e50xxxxrrrrrrwwwww'
	    },
	    type: 'POST',
	    url: 'http://plrabbit.com/Test/api.php',
	    data: {
	        username: $('#usr').val(),
	        password: $('#pwd').val()
	    },
	    dataType: 'json',
	    success: function(data){
	        console.log(data);
	    },
	    contentType: 'multipart/form-data',
	    statusCode: { // 只能接收后端人为返回的状态码
	        404: function () {
	            alert('404 Not Found!');
	        }
	    },
	    timeout: 2000,
	    error: function (xhr, status, error) {
	        switch(status){
	            case 'timeout': 
	                alert('网络开小差了！');break;
	        }
	    }
	})

### .done(callback(data, status))
> 经过JQ的ajax函数请求返回的对象，都可以使用done方法（jQuery3.0+），表示请求成功后执行的函数。

回调函数参数：data 服务器响应的数据，status 请求的状态string

#### 百度登录功能的交互模拟：
> 弹出登录框让用户输入登录名和密码，并进行无跳转式的验证。失败则在当前页面提示（无刷新），成功即跳转至对应页面。

	$('#form').submit(function (e) {
		e.preventDefault();
		$.post('http://plrabbit.com/Test/api.php', {
		    username: $('#usr').val(),
		    password: $('#pwd').val()
		}).done(function (data, status) {
		    console.log(status);
		    if(data.login == 'no'){
		        alert('用户名或密码错误');
		    } else {
		        location.href = 'http://www.baidu.com';
		    }
		});
	});