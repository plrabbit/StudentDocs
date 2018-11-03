# MUI

## 简介

### 背景

我们都知道，写Android APP需要学习java，写IOS APP需要学习Objective-C，Swift。这些原生语言学习曲线很长，一个公司为了节省成本，也不想一个项目请三方面的人才(网页，安卓，IOS)。所以就衍生出一种新的开发模式，叫作'混合式APP开发'。

### 混合式APP (Hybrid App)

混合式APP框架：UI界面使用HTML + CSS + JS实现，底层硬件通过H5技术调用Native代码，实现硬件功能。这样下来，公司只需聘请一位前端攻城狮即可完成多平台的APP开发。

### MUI
MUI框架是一个新型的混合式app框架。同类框架还有Ionic，framework7，React Native。

#### MUI开发须知：
MUI框架分为：UI部分与H5 + 硬件接口部分。
我们开发的时候要把APP当做一个浏览器，它的实现原理就是通过在APP内嵌入一个浏览器，实现UI界面，底层功能通过H5+硬件接口调用(plus)。

## 准备

先下载好 Hbuilder 编辑器

[http://www.dcloud.io](http://www.dcloud.io)

### Android 手机
1. 工具：ADB Interface 驱动(可以使用PC端的手机管理软件来安装)。
2. 打开USB调试(在设置-关于手机-连续多次点击‘版本号’开启开发者选项-进入开发者选项-USB调试打开)。
3. 连接你的PC，记得在手机勾选信任此电脑(若无提示不用管)。
4. 在HBuilder的运行-真机运行，看看有没有自己的手机连接。

### IOS 手机
1. 安装iTools，或者iTunes，驱动会自动安装。
2. 连接手机，打开HBuilder。
3. 看看运行-真机运行里面，有没有自己的手机连接。
4. 到设置-通用-个人设备

### 新建App项目

1. 文件-新建-移动App项目。
2. 输入项目名称，选择ES版本。
3. 选择新建项目的类型，这里选择MUI项目，点击确定

## UI组件

### Api文档

[http://dev.dcloud.net.cn/mui/ui/](http://dev.dcloud.net.cn/mui/ui/)

>具体的UI效果可参考Hello MUI的事例(在新建项目里面)

### 快捷代码块集
>在HBuilder的环境下，输入一下代码块，即可快速开发一个UI组件及其功能。
如你需要Accordion折叠面板，那在恰当的位置打 mac + 1。

UI组件名|快捷键|含义
:----:|:----:|:----:|
折叠面板|mac1|展开、隐藏二级列表，类似手风琴效果
操作表|mac2|从底部弹出，有遮罩层的菜单
角标|mb1、mb2|数量提示用的标志
按钮|mbu|可占满一行，可含底色，可不含底色
复选框|mc|复选框默认占满一行，可居左，禁用
轮播组件|msl|轮播图组件，不推荐使用，因为要自己复制第一张和最后一张的节点
图标|mi|具体支持的图标可以换文档
输入框|min|普通文本输入框
表单|mform|一个普通带文本框的表单
列表|ml|类似微信个人信息页，可以加角标，可以加图文（居左居右）
数字输入框|mnum|一个带加减号的数字输入框
侧滑菜单|moff|有4种模式的侧滑菜单可供选择
弹出菜单|mpop|冒泡效果的菜单，带中心三角箭头

### 有点好玩（不支持代码块）的UI组件

#### CardView 卡片试图

	<div class="mui-card">
		<!--页眉，放置标题-->
		<div class="mui-card-header">页眉</div>
		<!--内容区-->
		<div class="mui-card-content">内容区</div>
		<!--页脚，放置补充信息或支持的操作-->
		<div class="mui-card-footer">页脚</div>
	</div>

	<section class="mui-content">
		<div class="mui-card">
			<!--页眉，放置标题-->
			<div class="mui-card-header mui-card-media">
				<img src="../images/logo.png" />
				<div class="mui-media-body">
					小M
					<p>发表于 2016-06-30 15:30</p>
				</div>
			</div>
			<!--内容区-->
			<div class="mui-card-content">内容区</div>
			<!--页脚，放置补充信息或支持的操作-->
			<div class="mui-card-footer">页脚</div>
		</div>
	</section>

#### Dialog 对话框

##### mui.alert('message', 'title', 'btnValue', callback, 'div')

message:提示内容<br>
title:对话框标题<br>
btnValue：确认按钮的内容<br>
callback:对话框关闭后的回调函数<br>
'div'：H5渲染模式，可以兼容安卓手机

##### mui.confirm('message', 'title', 'btnValue', callback, 'div')
>参数基本同上，btnValue与callback稍有区别

btnValue：数组形式，确认框有两个按钮。   
callback：回调函数内可传一个e形参，可以从中直到点击了哪个按钮

##### mui.prompt('message', placeholder, 'title', 'btnValue', callback, 'div')
>输入框，参数基本同上，placeholder，btn，callback稍有区别

placeholder：输入框提示文字   
btn：数组形式，因为输入框有两个按钮   
callback：回调函数内可传一个e形参，可以从中直到点击了哪个按钮，输入了什么内容

##### mui.toast(msg, options)
>吐司框，黑色的，在屏幕下方显示的泡泡提示框

msg:提示内容
options:JSON对象

	{
		duration:2000//持续时间
		type:'div' // H5渲染模式
	}

##### H5渲染模式
意为利用APP内置浏览器渲染，不调用底层硬件，保证兼容性，但会降低性能。

#### Grid 栅格
>与Bootstrap框架一致的用法，只不过要在class名前加'mui-'

>只有xs和sm的屏幕大小，区分值为400px；

	<div class="mui-row">
	    <div class="mui-col-xs-6">Item 1</div>
	    <div class="mui-col-xs-6">Item 1</div>
	</div>


#### Form 表单

	<form class="mui-input-group">
	    <div class="mui-input-row">
	        <label>用户名</label>
	    <input type="text" class="mui-input-clear" placeholder="请输入用户名">
	    </div>
	    <div class="mui-input-row">
	        <label>密码</label>
	        <input type="password" class="mui-input-password" placeholder="请输入密码">
	    </div>
	    <div class="mui-button-row">
	        <button type="button" class="mui-btn mui-btn-primary" >确认</button>
	        <button type="button" class="mui-btn mui-btn-danger" >取消</button>
	    </div>
	</form>

>密码输入框加上 .mui-input-clear 在输入后右边会显示一个X，用于快速清除输入内容。

>密码输入框加上 .mui-input-password 右边会显示一致眼睛，控制密码的可读性。


#### Mask 遮罩层

	var mask = mui.createMask(callback); 
	// 创建一个遮罩层，callback是点击遮罩层的回调函数
	mask.show(); // 显示遮罩层
	mask.close(); // 关闭遮罩层，但并不会销毁掉对象

#### NumberBox 数字输入框

快捷代码块： mnum

> UI组件最外层的容器有3个参数可以配置：

data-numbox-step: 步进值，代表每次增加或减少的值。     
data-numbox-min: 规定数字输入框的最小值。   
data-numbox-max: 规定数字输入框的最大值。

	<div class="mui-numbox" data-numbox-step='2' data-numbox-min='0' data-numbox-max='10'>
	    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	    <input class="mui-input-numbox" type="number" />
	    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>

#### OffCanvas 侧滑菜单

快捷代码块：moffcanvas

##### JS API

	mui('.mui-off-canvas-wrap').offcanvas().show(); // 显示侧滑菜单
	
	.close(); // 隐藏侧滑菜单
	.toggle(); // 标志位，隐藏 / 显示侧滑菜单

##### 事件

> 侧滑菜单有两个自定义事件监听：shown（显示时） hidden（隐藏时）   

绑定自定义的事件不能用onXXX，必须使用addEventListener('shown', callback)

	document.querySelector('.mui-off-canvas-wrap').addEventListener('shown', function(){
		// TODO...
	});

#### Tab 选项卡组件
> 选项卡有三种模式，分别是底部选项卡，可以左右滑动的选项卡，顶部高亮色，可点击切换的选项卡。

快捷代码块： mtab



## H5+ 规范
> HTML5+ API 是mui底层调用硬件功能的模块，在mui里面用plus表示。

1. 使用plus之前，必须等待plus加载完毕，写在mui.plusReady(callback)的回调函数里面。
2. plus是硬件功能，在PC端的浏览器是没有效果的。