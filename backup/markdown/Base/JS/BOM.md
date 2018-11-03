# BOM （浏览器对象模型）

## navigator
> 平台信息，可以获取客户端的设备信息。一般用于移动端与PC端分离项目，根据navigator提供的信息，可以跳转到不同的页面。

    var a = navigator.appCodeName,
        // 浏览器代码名
        b = navigator.appName,
        // 浏览器名称
        c = navigator.appVersion,
        // 平台及版本信息（重要）
        d = navigator.cookieEnabled,
        // cookie是否被启用，返回布尔值
        e = navigator.platform,
        // 系统平台信息
        f = navigator.userAgent;
        // 返回客户端的user-agent头部（重要）

## screen 
> 屏幕信息，可获取各种屏幕宽高，色彩位数（24位RGB）。

    var a = screen.availHeight,
        // 返回浏览器窗口的可用最大高度
        b = screen.availWidth,
        // 返回浏览器窗口的可用最大宽度
        c = screen.height,
        // 返回屏幕的像素高度
        d = screen.width,
        // 返回屏幕的像素宽度
        e = screen.colorDepth;
        // 返回屏幕颜色的位数

## history（重点）
> 历史信息，可以进行前进和后退操作。

    var a = history.length;
    // 返回历史记录的条数
    history.back(); // 后退一页
    history.forward(); // 前进一页
    history.go(-1); //正数为前进n页，负数为后退n页

## location（重点）
> 位置信息，可获取url成分、进行跳转操作。

	var a = location.hash,
	    // 返回锚点，包括#的字符串
	    b = location.host,
	    // 返回主机名 + 端口号
	    c = location.hostname,
	    // 返回主机名
	    d = location.port,
	    // 返回端口号
	    e = location.href,
	    // 返回完整的url，或作为跳转操作
	    f = location.protocol,
	    // 返回url当前的协议
	    g = location.search;
	    // 返回搜索部分，包括?的字符串
	    // location.href = 'http://www.plrabbit.com/StudentDocs';
		// 跳转到...
	    // location.assign('dom.html');
	    // 当前页面加载新文档
	    // location.replace('dom.html');
	    // 以新文档替换当前文档
	    location.reload();
	    // 刷新当前页面

## 窗口位置
> 窗口左上角的坐标

    // chrome处理了这个兼容性问题，显示效果是一致的
    // IE内核的浏览器，screenXX的变量是不算顶部工具栏在内的

    console.log('IE:' + screenLeft);
    console.log('IE:' + screenTop);

    console.log('~:' + screenX);
    console.log('~:' + screenY);

## 文档的滚动距离
> 窗口滚动距离，可以放在scroll事件里面

	window.onscroll = function(){
	    console.log('IE:' + document.documentElement.scrollTop);
	    // scrollLeft => 水平滚动距离
	    console.log('~:' + pageYOffset);
	    // pageXOffset => 水平滚动距离
	}

## 定时器

### 1. setInterval(callback, numInterval)
> 返回值： [number]
> 
> 返回一个数字，代表时钟编号。每隔一定的时间，就会执行一次callback。

    var a = 10;
    var timer = setInterval(function(){
        console.log(a--);
        if(!a){
            clearInterval(timer);
        }
    }, 1000); //简单的10秒倒计时

#### 对应的销毁函数 clearInterval(timer)
> 注意，clearInterval并不会干预下一个时钟编号。（销毁后，时钟编号依然保留）

### 2. setTimeout(callback, numTimeout)
> 返回值：[number]

> 延长一定时间，执行callback，单次执行。返回一个数字，代表时钟编号，与setInterval相同，但要注意，无论是interval还是timeout，都会影响时钟编号的取值。

    var a = 5;
    var timer = setTimeout(function(){
        console.log(a);
    }, 2000); // 延时2秒后输出5

#### 对应的销毁函数 clearTimeout(timer)

#### setTimeout的递归调用实现 setInterval
> setInterval存在内存溢出的风险，为了优化性能，我们更多选择的是setTimeout递归调用实现interval的效果。

    var a = 5;
    var timer = setTimeout(countDown, 1000);

    function countDown(){
        console.log(a--);
        timer = setTimeout(countDown, 1000); // 函数内执行函数本身
    }