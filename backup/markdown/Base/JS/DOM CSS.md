# DOM CSS

> 此章节介绍DOM如何操作CSS

### DOM.style.cssAttrName
> 先获取到DOM节点，利用DOM.style.CSS属性名 = CSS属性值，即可利用JS改变CSS样式。

	 <div id="byebye">点击这里</div>
    <script>
        var flag = 1;
        byebye.onclick = function () {
            switch (flag++) {
                case 1:
                    this.innerHTML += '<br/>再次点击这里';break;
                case 2:
                    this.innerHTML += '<br/>再点一次';break;
                case 3:
                    this.innerHTML = '谢谢';break;
                case 4:
                    this.innerHTML = '再见';break;
                case 5:
                    this.style.display = 'none';
                    this.style.borderColor = 'purple';
            }
        }
    </script>

> CSS属性有横杠（-）的，在JS里面，要把其去掉，并把其后单词的首字母变大写拼接在一起，如：border-color => borderColor

### DOM.className
> 设置或者获取DOM元素的class属性，一次性设置全部。

	<div id="test-css" class="ob abc ui"></div>
	<script>
		var css = document.getElementById('test-css');
		css.className = 'haha';
		console.log(css.className); // haha
	</script>

### DOM.classList
> 返回一个数组，以单个class名为成员，组成数组。其次，还有value索引值，可以输出整条className。

	<div id="test-css" class="ob abc ui"></div>
	<script>
		var css = document.getElementById('test-css');
		console.log(css.classList); //  ["ob", "abc", "ui", value: "ob abc ui"]
	</script>

#### classList.add(strClassName)
> 添加单个class

	css.classList.add('ro');
	console.log(css.classList); // ["ob", "abc", "ui", "ro", value: "ob abc ui ro"]

#### classList.remove(strClassName)
> 移除元素单个class

	css.classList.remove('ui');
	console.log(css.classList); // ["ob", "abc", value: "ob abc"]

#### classList.replace(strClassName, strReClassName)
> 替换单个class

	css.classList.replace('ui', 'ro');
	console.log(css.classList); // ["ob", "abc", "ro", value: "ob abc ro"]

#### classList.contains(strClassName)
> 搜索元素是否拥有某个class，返回一个布尔值。

	var isExisted = css.classList.contains('ui');
	console.log(isExisted); // true
	console.log(css.classList); // ["ob", "abc", "ui", value: "ob abc ui"]

#### classList.toggle(strClassName)
> 先检测当前是否有某个class名。若有，移除该class，否则添加该class。

	console.log(css.classList); // ["ob", "abc", "ui", value: "ob abc ui"]
	
	css.classList.toggle('ui');
	console.log(css.classList); // ["ob", "abc", value: "ob abc"]
	
	css.classList.toggle('hi');
	console.log(css.classList); // ["ob", "abc", "hi", value: "ob abc hi"]