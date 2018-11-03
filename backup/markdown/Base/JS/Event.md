# 事件

事件：JavaScript和HTML交互，是通过用户与浏览器操作页面时候引发的事件来处理的。

## 事件绑定的方式

### 1. 直接在元素属性处写事件
> 使用HTML标记创建事件处理程序，记得要在事件前加“on”

    <a href="" onclick="cleanCache();">清除缓存。</a>
    <script>
        function cleanCache(){
            alert('清除成功');
        }
    </script>
### 2. 在JavaScript内部写onXX事件
> 需要另外获取DOM元素，利用DOM.onXX事件绑定。

    <a href="" id="clean">清除缓存。</a>
    <script>
        var a = document.getElementById('clean');
        a.onclick = function(){
            alert('清除成功123');
        }
    </script>

### 3. addEventListener(strEvent, callback)
> 需要另外获取DOM元素，利用DOM.addEventListener

    <a href="" id="clean">清除缓存。</a>
    <script>
        var a = document.getElementById('clean');
        a.addEventListener('click', function(){
            alert('清除失败');
        });
    </script>

## PC端常用的事件

事件|含义
:---:|:--:
click|鼠标点击
mouseup| 鼠标弹起
mousedown|鼠标按下
mouseout|鼠标离开
mousemove, mouseover|鼠标在元素上移动

## 移动端上常用的事件

touchstart, touchmove ...

> 注意：推荐使用现有的封装库，如：touch.js, hammer.js


## 表单域的通用事件

### 1. focus, blur
> 获取（失去）焦点时触发的事件

    var a = document.forms['login'].elements['username'];
    a.onfocus = function(){
        this.style.borderColor = 'green';
    }
    a.onblur = function(){
        this.style.borderColor = 'purple';
    }

### 2. click, keydown, keypress...
> 操作鼠标或键盘时触发的事件

> 例子：用回车键提交表单

    var pwd = document.forms['login'].elements['password'];
    pwd.onkeydown = function(event){
        if(event.keyCode == 13){
            document.forms['login'].submit();
        }
    }

### 3. change
> 表单域值发生变化时的事件

    <select name="province">
        <option value="hn">湖南</option>
        <option value="gd">广东</option>
        <option value="hb">湖北</option>
    </select>
	<input type="checkbox" value="run" name="hobby">

	var dropdown = document.forms['login'].elements['province']
	dropdown.onchange = function(){
	    console.log(this.value);
	}
	
	var run = document.forms['login'].elements['hobby'];
	run.onchange = function(){
	    console.log('我变了');
	}

> 文本或密码输入框，在聚焦的时候，不会每打一个字母或数字就触发change事件，而要失去焦点才可触发。

## 表单验证
> 在用户提交表单前，一般需要检测用户输入的信息是否符合规范，如：身份证号码格式，手机号格式...。


### 1. 检测表单域填写是否为空
	<input type="text" name="username" autofocus>	
	<button type="submit" name="submit">Submit</button>

	<script>
		var a = document.forms['login'].elements['username'];
		var submitBtn = document.forms['login'].elements['submit'];
		submitBtn.onclick = function(){
		    if(!a.value){
		        alert('用户名不能为空。');
		        return false;
		    }
		}
	</script>

### 2. 检测表单域填写格式是否正确

	var phone = document.forms['login'].elements['phone'];
	var submitBtn = document.forms['login'].elements['submit'];
	submitBtn.onclick = function () {
	    if (!/^(1[3578]\d|145|147)\d{8}$/.test(phone.value)){
	        alert('手机号码格式不对');
	        return false;
	    }
	}