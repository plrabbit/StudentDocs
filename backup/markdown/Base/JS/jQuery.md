# jQuery框架
##BootCDN
>可以去bootcdn里面下载各种插件，并可以提供稳定的cdn服务。

[http://www.bootcdn.cn](http://www.bootcdn.cn)

## 基础语法

> $, jQuery本质上都是一个函数。称为jQuery核心函数。 

### 选择器用法
> 返回的是一个JQ节点对象，参数与CSS3的选择器一致，把选择器的文本作为参数传入JQ函数中。

	<a href="..." class="onetwo3">123</a>
	<script src="jquery.js"></script> 
	<script>
		console.log($('.onetwo3'));
	</script>

> 因为是一个JQ节点对象，所以不可以使用原生JS节点的函数。建议JQ节点对象的变量名最前面加"$"，方便我们识别节点是JS还是JQ的。

	var $a = $('.onetwo3');
	$a.setAttribute('data-interval', '0'); // 这里会报错，因为a是JQ节点

### JS原生节点 -> JQ节点
> 直接把原生节点对象传入jQuery核心函数中。

	console.log($(a));
### JQ节点 -> JS原生节点
> 直接在JQ节点后面加[index]，index为索引值。

	console.log($a = $a[0]);

### 链式调用
> 几乎每个JQ函数内都有一个return this的逻辑，因此可以编写以下逻辑的代码。
	
	$('.onetwo3').css(...).html(...).click(...);

## CSS操作（.css()）

### 获取CSS属性值
> 原生JS方法获取样式比较麻烦，用JQ方法可以快速地获取外部样式表的css属性。
	
	var $a = $('.onetwo3').css('font-size');
	console.log($a);

### 新增 / 修改CSS属性值
	var $a = $('.onetwo3').css('font-size', 36); // 后面的参数可以不用拼接px
	// var $a = $('.onetwo3').css('font-size', '36px');
	console.log($a);

#### 一次性新增 / 修改多个CSS属性
> 参数传一个包括css属性系列的对象，可以实现一次性设置多个CSS属性值。

	var $a = $('.onetwo3').css({
	    width: 200,
	    height: '50px',
	    backgroundColor: 'lightblue'
	});
	
	console.log(a);

### Class操作

#### 添加（移除）Class
	
	addClass(strClassName); // 添加Class
	removeClass(strClassName); // 移除Class

#### toggleClass(strClassName)
> 先检测当前是否有某个class名。若有，移除该class，否则添加该class。

	var $a = $('#div').toggleClass('onetwo3'); // 移除.onetwo3
	$a.toggleClass('onetwo3'); // 添加.onetwo3

## 事件绑定
> 事件名字是什么，就直接通过JQ对象 . 事件名字(回调函数)即可绑定事件，如：

    $('#div').click(function(){
        alert('你点了123');
    }); // 单击事件

    $('#div').dblclick(function(){
        alert('你双击了123');
    }); // 双击事件

### 鼠标事件

事件名|含义
:-----:|----
click|鼠标单击
dblclick|鼠标双击
mouseenter|鼠标移入
mouseleave|鼠标移出
mouseover|鼠标经过

### 键盘事件

事件名|含义
:-----:|-----
keydown|键盘按下
keyup|键盘弹起
 

### 表单事件

事件名|含义
:-----:|----
focus|获取焦点
blur|失去焦点
submit|表单提交

### 绑定 / 解绑事件方法（on / off）
	$div.on('click', function(){
	    // 绑定事件
	});
	
	$div.off(); // 全部绑定过的事件都被移除
	$div.off('click'); // 移除特定的click事件
> 例子1：单次聚焦有效，移出后无效

	var $usr = $('#usr');
	$usr.on('focus', function(){
	    alert('haha!');
	}).on('blur', function(){
	    $(this).off();
	});


> 例子2：干预表单提交事件，在表单提交前验证表单输入的合法性。

	var $usr = $('#usr'),
	    $pwd = $('#pwd'),
	    $form = $('#form');
	
	$pwd.keydown(function(e){
	    $(this).css('background', 'red');
	    if(e.keyCode == 13){ // 回车键触发的事件
	        e.preventDefault(); // 禁用原生JS触发的事件
	        $form.submit();
	    }
	})
	
	$form.submit(function(){
	    if(!$pwd.val().length){
	        alert('密码为空。。。');
	        return false;
	    };
	})

#### event.preventDefault()
> 原生的表单是可以通过回车键提交的，但如果我们注入了表单验证逻辑，再使用JQ的方法提交表单，则按下回车键的时候，表单实际提交了2次。故要把原生JS的回车提交表单的事件禁止掉。该方法可以禁用掉所有该事件触发的原生逻辑。

#### 常用的event.keyCode
	Enter  13， Space  32， Esc  27

### 事件冒泡
>有时候难免父元素绑定了事件，子元素本身又要添加相同的事件，这样子元素触发事件的同时，父元素也会触发，这种现象叫作“事件冒泡”。
>
>若想阻止父元素事件在子元素身上执行，就可以给子元素绑定的事件添加event.stopPropagation()，阻止事件冒泡。

	$('body').click(function(){
	    alert('bodyHandler!');
	});
	
	$('#div').click(function(e){
	    e.stopPropagation(); // 阻止事件冒泡
	    alert('divHandler!');
	});

## jQuery动画

### 基础隐藏显示（关于宽高、透明度的过渡效果）
> show, hide, toggle。函数可传参（过渡时间，number类型，毫秒级别），也可以不传参（无过渡效果）。

	$('#show').click(function(){
	    // $div.show(); // 死板地显示
	    $div.show(1000); // JQ动画显示
	});
	
	$('#hide').click(function(){
	    // $div.hide(); // 死板地隐藏
	    $div.hide(1000); // JQ动画隐藏
	});
	
	$('#toggle').on('click', function(){
	    $div.toggle(1000); // 实现标志位隐藏 / 显示
	});

### slide隐藏显示（关于高的过渡效果）
	slideDown	显示
	slideUp		隐藏
	slideToggle	显示  / 隐藏

### fade隐藏显示（关于透明度的过渡效果）
	fadeIn		显示
	fadeOut		隐藏
	fadeToggle	显示 / 隐藏

> slide与fade用法与基础隐藏显示类似。

### 自定义动画 animate(Object, interval, callback)

#### 使用方法：
1. 先给执行动画的对象添加默认css属性。（常见：position: relative;）。
2. 在Object里面写上动画执行完毕的css样式。（一些临界值明显的属性，width, height, opacity，属性值可用'toggle'表示）。
3. 添加interval动画过渡时间。
4. 若有需要，添加回调函数callback，代表动画执行完毕后调用的逻辑。

---

	$('#pwd').on('keydown', function(e){
	    if(e.keyCode == 13){
	        e.preventDefault();
	        $div.animate({
	            width: 'toggle',
	            height: 'toggle'
	        }, 1000, function(){
	            alert('animation finished!')
	        }).animate({
	            left: 200
	        })
	    }
	});

### stop() 停止动画
> 对一个正在运行动画的对象，执行stop()可以停止动画，并且维持当前状态。

### delay(interval) 延时动画
> 在动画执行之前或者两个动画执行函数之间加.delay(interval)方法，即可等待一段时间再执行后面的动画。


#### 注意事项：
1. delay后面接的函数，若不是动画类型的函数，将不会被延时执行。
2. 如要延时执行某个功能，可使用setTimeout。

## 捕获、设置

### DOM节点文本内容

### text()
> 获取 / 设置DOM节点的文本内容

	$div.text(); // 获取文本内容
	$div.text('456'); // 设置文本内容

### html()
> 与text()类似，只不过内容可以被渲染成真正的DOM结构。

	// 获取、设置与text()用法一样。 
	$div.html($('#h-one')); // 传JQ节点，$div内容全部被该JQ节点覆盖
	console.log($div.html()); // 获取不会输入节点类型，而是输出string类型

### DOM节点属性内容

### attr()
> 获取 / 设置属性值

	<h1 id="h-one" data-src="http://123.com/">456</h1>

	console.log($h1.attr('data-src')); // 获取data-src的属性值
	$h1.attr('data-test', 'images/img2.jpg'); // 设置data-test的属性值

### removeAttr()
> 删除对应的属性名

	$h1.removeAttr('data-test');

### prop(), removeProp()
> 用法与attr一致，但是侧重点在表单域元素上，如autofocus, checked。

	<input type="password" id="pwd" required value="123456">

	console.log($('#pwd').prop('required')); // true
	console.log($('#pwd').attr('required')); // required
	

### val()
> JQ表单节点、表单域元素获取 / 设置input的value属性值。

	$('#pwd').val(); // 获取密码框的值
	$('#pwd').val('789'); // 设置密码框的值

### 操作DOM节点

### 创建新的JQ节点（$('< XX >')）
> 利用核心函数$，传入一个带左右尖括号的元素名，即可新建一个新的节点，注意该节点是JQ对象。

	$('<div>');  // 新建一个div节点。

> 例子：创建节点的同时，赋予样式class，设置文本内容，绑定事件三者一步到位。

	var $div = $('<div>', {
		'class': 'test',  // class 是保留字，不可以作为变量命名，故加上引号
		text: 'Click ME!',
		click: function(){
		    $(this).toggleClass('bgGreen');
		}
	});

### 克隆节点 （clone([boolean])）
> 默认参数false，代表原有节点绑定的事件不会被复制。true代表绑定的事件一起复制。

	$div2 = $div.clone(true); // 包括事件也一起克隆
	$('body').html($div).append($div2);

#### 与原生JS克隆节点的区别
1. 原生方法cloneNode不会把事件一起克隆。
2. JQ克隆节点默认把节点包括全部内容也一起克隆，而JS原生可能只会克隆节点但不包括内容（参数为false的情况）。

### 添加DOM节点 

### 同级添加 before, after

	$('#form').before($div).after($div2);

    <!-- before添加的元素在这里 -->
    <form id="form">
        <input type="text" id="usr">
        <input type="password" id="pwd" required value="123456">
        <button type="submit">submit!</button>
    </form>
    <!-- after添加的元素在这里 -->

### 子级添加 prepend, append

	$('#form').prepend($div).append($div2);

    <form id="form">
		<!-- prepend添加的元素在这里 -->

        <input type="text" id="usr">
        <input type="password" id="pwd" required value="123456">
        <button type="submit">submit!</button>

		<!-- append添加的元素在这里 -->
    </form>

### 有点厉害的子级添加 prependTo, appendTo
> 若侧重点在子元素身上，可以使用这两条函数方便链式调用。

	$('<div>', {
	    'class': 'test',
	    text: 'Click ME!',
	    click: function () {
	        $(this).toggleClass('bgGreen');
	    }
	}).appendTo($('body'));

### 删除DOM节点

#### empty()
> 除节点本身外，节点所有内容都会被清空。

	$('body').empty();

#### remove()
> 把当前整个节点从DOM里面移除。

	$('#form').remove();

## 遍历

先准备好下面的结构：

	<div id="div1">
		<div id="div2">
		    <h2>
		        <p>123</p>
		    </h2>
		</div>
		<h3>456</h3>
	</div>

### 向下遍历 

#### children()
> 遍历节点下的子辈元素（不遍历孙子及以下的元素）。可传一个CSS选择器字符串，代表遍历时的筛选。

	var $div1 = $('#div1');
	console.log($div1.children()); // #div2, h3
	console.log($div1.children('h3')); // h3

#### find('filter')
> 强制传一个CSS选择器参数，一直往下遍历，包括孙子及以下的元素。
	
	var $div1 = $('#div1');
	console.log($div1.find('p')); // p

### 向上遍历

#### parent()
> 返回父节点，有且只有一个。

	var $div1 = $('#div1');
	console.log($div1.parent()); // body

#### parents()
> 返回所有的祖辈元素，一直到html为止。在JQ里，最高辈分的元素是document。	

> 该函数可传一个CSS选择器，代表遍历时的筛选。

	var $p = $('#div1 p');
	console.log($p.parents()); // h2, #div2, #div1, body, html
	console.log($p.parents('#div1')); // #div1

#### parentsUntil('endSelector')
> 当前节点向上遍历，直到endSelector节点为止，但不包括endSelector节点。（开区间）

	var $p = $('#div1 p');
	console.log($p.parentsUntil('#div1')); // h2, #div2

### 同级遍历

先准备好以下结构：

    <div class="banner">
        <button id="btn123">Btn1</button>
        <span id="banner123">123</span>
        <button>Btn2</button>
        <span>123</span>
        <button>Btn3</button>
        <span>123</span>
    </div>

#### siblings()
> 获取所有的同级节点。可传一个CSS选择器参数，代表遍历时候的筛选。

	var $siblings =  $('#banner123').siblings();
	console.log($siblings); //#btn123, button, span, button, span

	var $siblings =  $('#btn123').siblings('button');
	console.log($siblings); // button, button

> 例子：分页按钮
	
	<div class="pagination">
		<button>BUTTON.1</button>
		<button>BUTTON.2</button>
		<button>BUTTON.3</button>
	</div>

	$('.pagination').children().click(function(){
		$(this).css('background', 'yellowgreen')
		    .siblings().css('background', 'buttonface');
	});

#### next()
> 返回同级内相邻的下一个节点。有且仅有一个。

	console.log($('#btn123').next()); // #banner123

#### nextAll()
> 返回同级内后面的所有节点。可传一个CSS选择器参数，代表遍历时候的筛选。

	console.log($('#banner123').nextAll()); // button, span, button, span
	console.log($('#btn123').nextAll('button')); // button, button

#### nextUntil('endSelector')
> 返回同级内后面一直到endSelector的所有节点，但不包括endSelector。
	
	$('#btn123').after($('<p>'));
	console.log($('#btn123').nextUntil('#banner123')); // p

#### prev(), prevAll(), prevUntil('endSelector')
> 跟以上3个方法（next(), nextAll(), nextUntil('endSelector')）用法一样，只不过是方向相反，往上遍历。

### 筛选器

#### filter('selector')
> 普通的筛选器。当返回一组节点集合时，可在函数内传入CSS选择器参数，对结果集进行筛选。

	console.log($('#btn123').nextAll('button'));
	console.log($('#btn123').nextAll().filter('button')); // 等价于上面的写法

#### not('selector')
> 侧重点在于不想要某个节点，可以对一组节点集合进行筛选，参数也为CSS选择器。

	console.log($('#btn123').nextAll().not('#banner123')); 
	// button, span, button, span

#### eq(number)
> 有时候我们想要结果集里面的第N个JQ元素，如果用下标形式获取，将会返回JS原生节点。eq函数可以帮助我们在获取时，返回JQ对象。

> 参数可以传负数，代表倒数，倒数第一个为-1。

	console.log($('#btn123').nextAll()[2]); // 原生JS节点
	console.log($('#btn123').nextAll().eq(2)); // JQ节点
	console.log($('#btn123').nextAll().eq(-1)); // 倒数第一个JQ节点

#### first()
> 返回结果集的第一个JQ节点。

	console.log($('#btn123').nextAll().first()); // #banner123

#### last()
> 返回结果集的最后一个JQ节点

	console.log($('#btn123').nextAll().last()); // span
	