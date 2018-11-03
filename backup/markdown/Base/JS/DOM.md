# DOM基础

> DOM: Document Object Model （文档对象模型）

> 所谓的document，是DOM的一个核心对象。

> 标签、元素、节点都是同一个东西，只是表达不一。

## DOM对象获取

### 常规获取方法：

#### 1. 元素ID获取方法：document.getElementById
> id有唯一性，该函数只会输出第一个找到的含该id的元素。

	<a id="b">123</a>
	<a href="..." id="b">456</a>

	<script>
		var a = document.getElementById('b');
		console.log(a); //<a id="b">123</a>
	</script>

#### 2. 标签名获取方法：document.getElementsByTagName
> 以标签名获取元素，无论元素有多少个，总是返回一个数组。
>
> 若元素有id属性，返回的数组内会有一个以id命名的索引值，可以直接通过它拿到对应的dom元素。

	<a id="b">123</a>
	<a href="..." id="abc">456</a>

	<script>
	var a = document.getElementsByTagName('a');
	console.log(a['b']); //<a id="b">123</a>
	</script>

#### 3. name属性获取方法：document.getElementsByName
> 以元素name属性获取元素，无论元素多少，总是返回一个数组。通常用于表单。
>
> 与getElementsByTagName不同，元素有id属性，也不会给结果数组添加一个以id命名的索引值。

    <form action="dom.html" method="post">
        <input type="text" name="username">
        <input type="password" name="password">
        <input type="checkbox" id="run" name="hobby" value="run">跑步
        <input type="checkbox" name="hobby" value="swim">游泳
        <input type="checkbox" name="hobby" value="ball">球
        <button type="submit">提交</button>
    </form>

    <script>
        var a = document.getElementsByName('hobby');
        console.log(a); //  [input#run, input, input]
    </script>

### HTML5 获取方法：
	
#### 1. 以CSS选择器获取单个元素：document.querySelector
> 输出第一个匹配选择器的元素

	<a id="b">123</a>
	<a href="abc" id="b">456</a>
	<a href="abc">789</a>

    <script>
        var a = document.querySelector('a[href=abc]');
        console.log(a); //<a href="abc" id="b">456</a>
    </script>

#### 2. 以CSS选择器获取多个元素：document.querySelectorAll
> 返回匹配选择器的所有元素，以数组形式返回。

	<a id="b">123</a>
	<a href="abc" id="b">456</a>
	<a href="abc">789</a>

    <script>
        var a = document.querySelector('a[href=abc]');
        console.log(a); // [a#b, a]
    </script>	

#### 3. 节点内获取方法：
> 先用以上函数其一拿到DOM元素，以该元素调用querySelector等HTML5的元素获取方法，可以保证只在这个元素内搜索DOM节点。

    <div class="ob">
        <p>123456</p>
    </div>

    <div class="op">
        <p>123456</p>
    </div>

    <script>
        var op = document.querySelector('.op');
        console.log(op); // 获取到div.op
        var op_p = op.querySelector('p');
        console.log(op_p); // 获取到div.op内的<p>123456</p>
    </script>

#### （扩展）黑科技获取方法
> 如果元素有id属性，可以直接利用id属性值作为变量名操作DOM。（无需获取操作）

	<a id="b">123</a>
	<script>
		console.log(b); //<a id="b">123</a>
	</script>

## DOM节点内容
	
	节点.innerHTML; //节点内容，这里可以写DOM结构
	节点.innerText; //无论写的是什么，都是以文本形式存在。

### .innerHTML
> 节点内容会被渲染成DOM结构，关键的标点符号不会被编码成字符实体。

	var op_p = op.querySelector('p');
	op_p.innerHTML = '<div>456</div>';
	console.log(op_p.innerText); // 456
	console.log(op_p.innerHTML);  // <div>456</div>

### .innerText
> 节点内容不会被渲染成DOM结构，关键的标点符号会编码为字符实体。

> 用JS获取的innerText将不会被编码。
	
	var op_p = op.querySelector('p');
	op_p.innerText = '<div>456</div>';
	console.log(op_p.innerText); // <div>456</div> 
	console.log(op_p.innerHTML); // &lt;div&gt;456&lt;/div&gt;

#### 如果内容含引号，要在引号前面加反斜杠（\），表示转义字符。

## DOM对象创建
> 仅仅是创建，并无添加操作，需另外添加，才有效果。

	document.createElement('tagName'); //tagName是标签名

## 添加DOM节点

### DOM.appendChild(dom)
> 在DOM节点内追加一个dom节点

	var oa = document.createElement('h1'),
	    op = document.querySelector('.op');
	
	oa.innerText = '噢！';
	op.appendChild(oa);
	console.log(op);
	// 	<div class="op">
	//		<p><div id="ui">456</div></p>
	// 		<h1>噢！</h1>
	//	</div>

### DOM.cloneNode([boolean])
> 克隆一个节点，参数为布尔值，true代表深度克隆，包括节点内容，各种DOM结构都会被克隆进去。false只会克隆最外层的标签。默认参数值为false。

    var oa = document.createElement('h1'),
        op = document.querySelector('.op');

    oa.innerText = '噢！';

    var oa_copy = oa.cloneNode(true);
    console.log(oa_copy);
	//<h1>噢！</h1>

### DOM.insertBefore(domAdd, dom)
> 在DOM里，dom的前面加一个domAdd节点。

	var oa = document.createElement('h1'),
		op = document.querySelector('.op');
	oa.innerText = '诶诶诶！';
	
	var op_p = op.querySelector('p');
	op.insertBefore(oa, op_p);
	console.log(op); 
	// <div class="op">
	// 	<h1>诶诶诶！</h1>
	//	<p><div id="ui">456</div></p>
	// </div>

### 在DOM元素内第一个子节点前加一个新节点
    function prependChild(parent, newChild){
        if(parent.firstChild){
            parent.insertBefore(newChild, parent.firstChild);
        } else {
            parent.appendChild(newChild);
        }
    }

    prependChild(op, document.createElement('h2'));
    console.log(op); 
	// <div class="op">
	//	<h2></h2>
    // 	<p>123456</p>
    // </div>


## 移除DOM节点

	DOM.removeChild(dom); //在DOM里，移除dom

> dom必须是DOM的子节点，否则会报错，下面的代码将不会执行。

## 节点指针

### 父子辈关系

### firstChild, firstElementChild
> 元素下面的第一个子节点，注意空白文本节点（开发过程中，编写dom元素之间的换行与空格）

> firstElementChild可以忽略文本节点

	var op = document.querySelector('.op');
	console.log(op.firstChild); // #Text
	console.log(op.firstElementChild); //<p>123456</p>

### lastChild, lastElementChild
> 与上面firstChild类似，只不过是最后一个子节点。

### childNodes
> 返回一个所有子节点的数组，包括空白文本节点。

	var op = document.querySelector('.op');
	console.log(op.childNodes); // [text, p, text]
	
#### 清除空白文本节点
	function cleanWhiteSpace(oElement){
	    for(var i = 0;i<oElement.childNodes.length;i++){
	        var node = oElement.childNodes[i];
	        //nodeType节点类型：1. 元素节点 2. 属性节点 3. 文本节点
	        if(node.nodeType == 3 && !/\S/.test(node.nodeValue)){
	            node.parentNode.removeChild(node);
	        }
	    }
	}
	
	cleanWhiteSpace(op);
	
	console.log(op.childNodes); // [p]

### parentNode
> 返回当前DOM元素的父节点。

	<div class="op">
	    <h1>非常的beautiful</h1>
	    <p>123456</p>
	</div>

	var op_p = document.querySelector('.op p');
	console.log(op_p.parentNode);
	// <div class="op">...</div>

### 兄弟关系

### previousSibling, previousElementSibling
> 返回DOM节点的前一个兄弟节点， 包括空白文本节点。

	var op_p = document.querySelector('.op p');
	console.log(op_p.previousSibling); // #text
	console.log(op_p.previousElementSibling); // <h1>非常的beautiful</h1>

### nextSibling, nextElementSibling
> 与上面previousSibling类似，只不过是下一个兄弟节点。

## 属性操作

### getAttribute(strAttrName)
> 返回节点的一个属性值。

	<div class="op" data-toggle="collapse"></div>

	var op = document.querySelector('.op');
	console.log(op.getAttribute('data-toggle')); // collapse

### setAttribute(strAttrName, strAttrValue)
> 添加 / 修改一个节点的属性值。

	<div class="op" data-toggle="collapse"></div>

	var op = document.querySelector('.op');
	console.log(op.getAttribute('data-toggle')); // collapse
	op.setAttribute('data-toggle', 'dropdown');
	console.log(op.getAttribute('data-toggle')); // dropdown

### removeAttribute(strAttrName)
> 移除节点的一个对应属性值。
	
	<div class="op" data-toggle="collapse"></div>

	var op = document.querySelector('.op');
	console.log(op.getAttribute('data-toggle')); // collapse
	op.removeAttribute('data-toggle');
	console.log(op.getAttribute('data-toggle')); // null
	
## 表单域对象

### document.forms
> 在DOM树里，可以利用document.forms获取到文档里面的所有表单元素。以数组形式返回。

    <form id="login" action="http://plrabbit.com/Test/api.php" method="POST">
        <input type="text">
        <input type="password">
        <button type="submit">Submit</button>
    </form>

	var forms = document.forms;
	console.log(forms['login']);

> 数组的索引值可以使用表单元素的id属性直接获取。

### form.elements
	1. form.elements[index]
	2. form.elements['name']
	
> 1. 根据表单域元素的索引值获取。
> 2. 根据表单域元素的name属性获取。

	<form id="login" action="http://plrabbit.com/Test/api.php" method="POST">
        <input type="text" name="username">
        <input type="password" name="password">
        <button type="submit">Submit</button>
    </form>

	<script>
	    var forms = document.forms,
	        loginForm = forms['login'];
	    console.log(loginForm.elements[0]); 
	    //根据index值拿到第index位的表单域元素
	    console.log(loginForm.elements['password']);
	    //根据name属性拿到相应的表单域元素
	</script>

#### 一次性处理全部的checkbox或radio？
> 利用form.elements[index].type可以知道该域对象的类型。

    for (var i = 0, len = loginForm.elements.length; i < len; i++) {
        if('checkbox' == loginForm.elements[i].type){
            loginForm.elements[i].checked = true;
        }
    }

## 表单域的通用属性

### 1. disabled [boolean]
> 禁用某些不希望用户使用或点击的表单控件。
> 
> 有时候我们不希望用户在输入表单完成前，就点击提交按钮，此时我们可以通过disabled属性实现。

	element.disabled = true; //或者false

### 2. value [number, string, boolean]
> 用来获取或设置表单域的值。它也作为后端参数值存在。

	element.value = ...

## 表单域的通用方法

### 1. focus()
> 表单域获取焦点

    var a = document.forms['login'].elements['username'];
    a.focus();

### 2. blur()
> 表单域失去焦点

    var a = document.forms['login'].elements['username'];
    a.blur();