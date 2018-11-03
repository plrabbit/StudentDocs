# JavaScript内置类

## 对象

> JavaScript是一种面向对象的语言。

> 对象就是由一些彼此相关的属性和方法集合在一起而构成的一个数据实体。

##  本地对象

### 1. Date日期对象，处理日期和时间

	var myDate = new Date();
#### 年月日，星期
	myDate.getFullYear(); //获取完整的年份
	myDate.getMonth() + 1; //获取当前月份(0到11，0代表1月)
	myDate.getDate(); //获取当前日(1-31)
	myDate.getDay()); //获取当前星期X（0-6），0代表星期天
#### 时间

	myDate.getHours(); //获取当前小时数（取值0-23）
	myDate.getMinutes(); //获取当前分钟数（取值0-59）
	myDate.getSeconds(); //获取当前秒数（取值0-59）
	myDate.getMilliseconds(); //获取当前毫秒数（取值0-999）
	myDate.getTime(); //获取当前时间（从1970.01.01 00:00:00开始到现在的毫秒数）
	// getTime()函数获取的值 / 1000 => 取整！！！ => 当前时间戳

#### 时间戳
Unix时间戳(Unix timestamp)，或称Unix时间(Unix time)、POSIX时间(POSIX time)，是一种时间表示方式，定义为从格林威治时间1970年01月01日00时00分00秒起至现在的总秒数。

因为世界各地表示时间的方式不一，时间戳可以帮助我们转换为想要的时间格式。

后端数据库存储时间格式一般都为“时间戳”。

	parseInt(myDate.getTime()/1000); //获取当前时间戳

#### 获取当前时区格式的日期或时间

	myDate.toLocaleDateString(); //获取当前日期字符串
	//10/26/2017
	myDate.toLocaleTimeString(); //获取当前时间字符串
	//10:55:55 AM
	myDate.toLocaleString(); //获取当前日期与时间字符串
	//10/26/2017, 10:57:39 AM

#### 固定时间戳 => 常规日期格式

1. 从后端对象接收到一串时间戳ns。
2. 把时间戳转换为date对象```new Date(ns * 1000)```
3. 利用以上的Date对象方法，通过拼接，输出想要的日期格式。

---

	var time = 1508985745;
	
	function getLocalTime(ns) {
	    var myDate = new Date(ns * 1000);
	    return myDate.getFullYear() + '-' + (myDate.getMonth() + 1);
	}
	
	console.log(getLocalTime(time));

### 2. Math对象，处理复杂的数学运算
	
> Math对象是JavaScript的一个全局对象，不需要new创建。

	Math.abs(-2); //返回一个数的绝对值（把符号去掉）
	// 2
	
	Math.round(2.5); //返回一个数舍入最接近的整数（四舍五入）
	// 3

	Math.ceil(2.0000001); //如有小数点，把小数去掉+1，若无，等于本身（向上取整）
	// 3

	Math.floor(2.0000001); //如有小数点，把小数去掉，若无，等于本身（向下取整）
	// 2

	Math.pow(2, 3); //返回x的y次幂(2的3次方)
	// 8

	Math.random(); //返回[0,1)的随机数

	Math.sqrt(4); //返回开根号的值
	// 2

### 3. Array数组对象，专注于数组操作。

#### 定义数组的2种方式
	var arr = [1, '2', 3, 99]; //字面量写法
	var arr = new Array('星期一',2,'Wed.'); //原型实例化写法

#### 获取数组的长度

	arr.length

#### 获取数组下标所对应的值（下标从0开始）

	arr[0]
	
#### 小练习：用for循环输出星期一到星期天，但不输出今天的值。

	var week = ['天', '一', '二', '三', '四', '五', '六'];
	
	function dont() {
	    var day = new Date().getDay();
	    for (var i = 0, len = week.length; i < len; i++) {
	        if (i == day) {
	            continue;
	        } else {
	            console.log('星期' + week[i]);
	        }
	    }
	}
	
	dont();

#### 数组元素添加

#### push()
> 将一个或多个新元素添加到数组尾部，并返回新数组长度。

	var arr = [1, 2, 3, 99];
	var tmp = arr.push('星期一', '星期二');
	console.log(arr, tmp); //[1, 2, 3, 99, '星期一', '星期二']  6	

#### unshift()
> 将一个或多个新元素添加到数组开始，并返回新数组长度。

	var arr = [1, 2, 3, 99];
	var tmp = arr.unshift('星期一', '星期二');
	console.log(arr, tmp); //[ '星期一', '星期二', 1, 2, 3, 99,]  6	

#### 数组元素删除

#### pop()
> 移除最后一个元素并返回被删除的元素值

	var del = ['aa',123,456,789,'bb'];
	var tmp = del.pop();
	console.log(del, tmp); //["aa", 123, 456, 789] "bb"

#### shift()
> 移除第一个元素并返回被删除的元素值，数组的元素会自动前移。

	var del = ['aa',123,456,789,'bb'];
	var tmp = del.shift();
	console.log(del, tmp); //[123, 456, 789, "bb"] "aa"

#### splice(delPos, delCount)
> 移除从delPos开始位置的指定数量delCount的元素，返回被删除的元素，以数组形式表示。（delCount为1，返回只有一个元素的数组）

	var del = ['aa',123,456,789,'bb'];
	var tmp = del.splice(1, 2);
	console.log(del, tmp); //["aa", 789, "bb"]  [123, 456]

> 例子1，不仅移除，还在delPos位置添加新元素

	del.splice(1, 2, '星期三'); //["aa", "星期三", 789, "bb"]  [123, 456]

> 例子2，在指定位置添加新元素

	del.splice(1, 0, '星期三'); // ["aa", "星期三", 123, 456, 789, "bb"] []

#### 数组的截取与合并（不改变原数组）

#### slice(start, end)
> 原数组保持不变，截取出数组[start, end)的部分。

	var del = ['aa',123,456,789,'bb'];
	var tmp = del.slice(0, 2);
	console.log(del, tmp); // ["aa", 123, 456, 789, "bb"]  ["aa", 123]

#### concat(ele1, ele2, ...), concat(Array)
> 原数组保持不变，合并数组，或添加一个或多个新元素到原数组尾部。返回合并后的数组。

	var del = ['aa',123,456,789,'bb'];
	var tmp = del.concat(arr);
	console.log(del, tmp);
	// ["aa", 123, 456, 789, "bb"] 
	// ["aa", 123, 456, 789, "bb", "星期一", "星期二", 1, 2, 3, 99]

#### 反面例子，克隆数组

	var del = ['aa',123,456,789,'bb'];
	var a = del; //a 只是del数组的另外一个名字
	del.shift();
	console.log(a); // [123, 456, 789, "bb"]

#### 正面例子！！！克隆数组
	
	var del = ['aa',123,456,789,'bb'];
	var a = [];
	a = a.concat(del);
	del.shift();
	console.log(a);

#### 数组排序 

#### reverse()
> 反转元素（最前的排到最后，最后的排到最前），返回反转后的数组。（原数组也会发生改变）	

	var sort = ['aa', 22, 45, 4456, 23];
	console.log(sort); //["aa", 22, 45, 4456, 23]
	var res_sort = sort.reverse();
	console.log(res_sort); //[23, 4456, 45, 22, "aa"]

#### sort()
> 按照字母顺序排序，或者按照数字大小排序。（原数组也会发生改变）

> 中文字符也可排序，排序按照UTF-8编码表进行排序

	var num_sort = [22, 44, 33, 66, 11, 55];
	var alpha_sort = ['bb', 'ba', 'a', 'z', 'x2'];
	console.log(num_sort.sort()); //[11, 22, 33, 44, 55, 66]
	console.log(alpha_sort.sort()); //["a", "ba", "bb", "x2", "z"]

#### 数组<=>字符串

#### 数组转字符串，join(symbol)
> 返回字符串，这个字符串将数组的每一个元素连接在一起，中间用symbol隔开

	var num_sort = [11, 22, 33, 44, 55, 66];
	console.log(num_sort.join('-')); // 11-22-33-44-55-66

#### 字符串转数组，split(symbol)
> 返回数组，以symbol为界限分隔字符串。

	var str = "22,33,44,55,66";
	console.log(str.split(',')); //["22", "33", "44", "55", "66"]

### 4.String对象，专注处理文本

#### 获取字符串的长度（length）
> 不管是中文还是英文，一个字符代表一个长度。

	var str = 'hello';
	var str2 = '你好';
	
	console.log(str.length); // 5
	console.log(str2.length); // 2

#### 提取字符串

#### charAt(posNum)
> 返回字符串在posNum位置的字符。若posNum大于字符串长度，则返回''。

	var str = 'Hello World';
	
	console.log(str.charAt(2)); // l
	console.log(str.charAt(str.length - 1));   // 最后一个字符 d

#### substr(posNum, lenNum)
> 提取一段字符串，从posNum开始数，共lenNum个字符。

> lenNum可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。

	var str = 'Hello World';
	console.log(str.substr(6, 5)); //World

#### substring(start, end)
> 提取一段字符串，从start位置开始，到end结束，但不包括end。[start, end)

	var str = 'Hello World';
	console.log(str.substring(6, 10)); //Worl
	console.log(str.substr(6, 4)); //Worl

#### 查找与替换字符串

#### indexOf(char)
> 从左开始查询字符串，返回char在字符串中首次出现的索引值。

> 若没查询到，返回-1。

	var str = 'Hello World';
	console.log(str.indexOf('l')); // 2

#### lastIndexOf(char)
> 从右开始查询字符串，返回char在字符串中首次出现的索引值。

> 若没查询到，返回-1。

	var str = 'Hello World';
	console.log(str.indexOf('l')); // 9

#### replace(searchVal, replaceVal)
> 替换字符串，以replaceVal，替换searchVal。searchVal可以用RegExp对象（正则表达式）

> 原字符串不会改变，新字符串需用变量接收。

	var str = 'Hello World';
	
	console.log(str.replace('Hello', 'SHIT!')); //SHIT! World
	console.log(str); //Hello World

#### search(searcher)
> 从左开始查询，查找searcher的首字母在原字符串第一次出现的位置。searcher可以通过RegExp对象（正则表达式）查找

> 若查询不到，则返回-1。

	var str = 'Hello World';
	console.log(str.search('World')); // 6

#### 小练习：把第一次出现的o到最后一次出现的o之间的字符串截取出来。

	var str123 = 'Hello World, welcome to the universe.';
	
	var tmp = str123.substring(str123.indexOf('o'), str123.lastIndexOf('o') + 1);
	console.log(tmp);

#### 拼接字符
	
#### 1. concat(str1, str2, ....)

	var str1 = 'hello ',
	str2 = 'world!',
	str3 = '你好，世界！';
	
	var n = str1.concat(str2, str3);
	console.log(n); //hello world!你好，世界！

#### 2. 字符串拼接符 （+）
	
	var str1 = 'hello ',
	str2 = 'world!',
	str3 = '你好，世界！';
	
	var n = str1 + str2 + str3;
	console.log(n); //hello world!你好，世界！

#### 大小写转换

#### 1. toLowerCase()
> 用于把字符转换为小写

	var str123 = 'Hello World, welcome to the universe.';
	console.log(str123.toLowerCase()); 
	//hello world, welcome to the universe.

#### 2. toUpperCase()
> 用于把字符转换为大写

	var str123 = 'Hello World, welcome to the universe.';
	console.log(str123.toUpperCase()); 
	//HELLO WORLD, WELCOME TO THE UNIVERSE.

#### 大练习：封装一条函数 lottery(start, end, count){},返回一个数组，数组含count个不重复的start - end的整数。 如：lottery(1, 30, 5) =>[10, 11, 13, 22, 25] 

> 算法1：利用indexOf()函数，如返回-1，即push到数组里。

	function lottery(start, end, count) {
	    var arr = [];
	    for (var i = 0; i < count; i++) {
	        var ranNum = Math.ceil(start + Math.random() * (end - start));
	        if (arr.indexOf(ranNum) == -1) {
	            arr.push(ranNum);
	        } else {
	            count++;
	        }
	    }
	    return arr;
	}
	
	console.log(new Date().getTime()); 
	console.log(lottery(1, 30000, 10000));
	console.log(new Date().getTime()); 
	// 用时139ms

> 算法2：先创建一条从start到end数字组成的数组1，通过随机数抽取下标，若不为null，则把该下标对应的值push到另一条数组2中，然后把数组1该下标对应的值赋值null。再次抽取，若为null，则再抽一遍。

	function lotteryTwo(start, end, count) {
	    var arr = [],
	        lottery = [];
	    for (var i = start; i <= end; i++) {
	        arr.push(i);
	    }
	    for (var j = 0; j < count; j++) {
	        var ranNum = Math.ceil(start + Math.random() * (end - start));
	        if (arr[ranNum] != null) {
	            lottery.push(arr[ranNum]);
	            arr[ranNum] = null;
	        } else {
	            count++;
	        }
	    }
	    return lottery;
	}
	console.log(new Date().getTime());
	console.log(lotteryTwo(1, 30000, 10000));
	console.log(new Date().getTime());
	// 用时17ms
	