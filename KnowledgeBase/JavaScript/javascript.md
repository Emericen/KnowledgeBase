# JavaScript Learning Note

Different from programming language such as Java and Python, JavaScript is a web front end scripting language. Functions s.a. check if dupelicate username on sign up and check password on log in are written in js. There's also frameworks s.a. Vue.js, Angular and React for front-end design, and Node.js for back end design.

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>

	<script type="text/javascript">
		alert("Hello, bitch!");   // note you can't do anything w/o closing alert
		alert("Welcome to javascript!\nHave fun learning!");

		console.log("Hellow, this is a startttt"); // browser inspect => console
		console.log("Eddy says: \"The best head butt is one you don't see coming.\"")
	
		document.write("welcome to javascipt again, hhehe<br>"); // change page content
	</script>
  
	<script type="text/javascript" src="main.js"></script>
</head>
<body>
	The first ever HTML with JavaScript, bitch!
	<!-- the following is not recommended -->
	<input type="button" value="点我" onclick="javascript:alert('I\'m clicked, good job.');">
</body>
</html>
```

Unless specified otherwise, in this note we'll use an html file called main.html that contains:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<script type="text/javascript" src="main.js"></script>
</head>
<body>
	The first ever HTML with JavaScript, bitch!
</body>
</html>
```

and all our JavaScript code is written in said main.js.

## Basics

You probably remember from AI 1 how JS variables work:

```javascript
var name = 'eddy';
age = 23; // not recommended

var a, b=12, c;
console.log(a); // undefined
console.log(b); // 12
console.log(c); // undefined
console.log(a+b+c); // NaN (Not a Number)
console.log(typeof(name));   // string
console.log(typeof a+b+c);   // number
var anotherName = prompt("Please enter a name:");  // note this is always a string

x = 6;
y = '6';
console.log(x==y);   // true
console.log(x===y);  // false

x = true;
y = 1;
console.log(x==y);   // true
console.log(x===y);  // false
```



Note that JavaScript **semicolons are optional**. Some other notes that you should be aware:

- with its flexible type and short circuit evaluation, JS has a tricky "||" and "&&".

  ```javascript
  console.log(true || 'aaa')	// boolean value true
  console.log(false || 'aaa')	// string value 'aaa'
  console.log('aaa' || true)	// string value 'aaa'
  console.log('aaa' || false) // string value 'aaa'
  console.log(false || 1) 		// number value 1
  console.log(true && 'aaa')  // string value aaa
  console.log(false && 'aaa')	// boolean value false
  ```

- the difference between n++ and ++n

  ```javascript
  n = 3
  n++
  console.log(n)  // 4
  console.log(n++)  // 4
  console.log(n)  // 5
  console.log(++n) // 6
  console.log(n)  // 6
  var c = 6;
  var z = 7;
  //console.log(2+ ++z+c--) // 16
  console.log(2+ ++z+ --c); // 15
  ```

- Type casting

  ```javascript
  var a = prompt('enter a number')
  // a = Number(a)
  a = parseInt(a)
  ```

  note that for boolean casting, only "false", 0, NaN, undefined and "" will be translated to false, everything else will be true. If you put number string into equation, it'll auto cast into numbers.

### Conditional Statement

Conditional statements look like this in JS

```javascript
var a = 1;
if (a < 2){
  console.log("this'll print");
} else {
  console.log("this won't print");
}

var b = parseInt(prompt("enter an integer:"));
switch (b){
  case 23:
    console.log('Entered Eddy\'s age');
    break;
  case 155:
    console.log('Entered Eddy\'s weight');
    break
  default:
    console.log('entered '+b);
    break;
}
```

Note in switch if you omit break, then once it excute a case, it'll keep going to the next break.

Loops are the same with ones in Java, so Imma skip it.



### Arrays

```javascript
var a = new Array();
a[0] = 12;
a[1] = 23;
a[2] = 34;
console.log(a);
console.log(a.length);

var b = new Array();
b[2] = 12;
b[4] = 23;
b[13] = 21;
console.log(b);  // JS auto fill empity space with undefined
console.log(b.length);  // 14

// array with fixed length which isn't enforced and will auto extend if needed
var c = new Array(3); 
var d = new Array([1,2,3]);

var e = [];		// or just the good old pyhton way
var f = [1,2,3,4];
var g = [1, 'eddy', true, f];
```

Note these arrays in JS are extremely flexible, just like in python

```javascript
var a = [1,3,4];
a['name'] = 'eddy';
a['age'] = 23;
console.log(a);
console.log(a.length);
```

A key-value pair in an array will not affect length, and can only be iterated using for-in loop on entries that are defined.

```javascript
var a = [1,3,4];
a['name'];
a['age'] = 23;
for (entry in a) {
	console.log(entry);
}
```

Array operations in JS

```javascript
var a = [1,3,4,2,8,0];
var b = [110,300,44,120,8,0];;

a.reverse();
a.sort();
// note sort is by string character, not actual value. This is good for names
b.sort();
console.log(b); // [0, 110, 120, 300, 44, 8]

a += b;
console.log(typeof a); //string

var c = a.join() // c is a string, "1,3,4,2,8,0"
var d = a.concat(b); 
var e = d.toString();

a.push(216);
console.log(a);
console.log(a.pop());

a.forEach(function(value, index){
	console.log(value + " @ index " + index);
});
```

JS doesn't have multiple dimension array. But as you've seen, we can set an entry to be an array.



## Functions

### Built-in functions

**eval()** function calculate expression or excute JS code.

```javascript
var x = 5, y = 8;
console.log(eval("x+y-1")); //12
console.log(eval("if (x>y) {x*x} else {y*y}"));//64
eval("var a=12; alert('a is created');");
```

**isFinite()** checks number, return true if finite, false if NaN, positive or negative infinite. **isNaN()** return true if # is NaN.

```javascript
var a;
console.log(isNaN(a+1));  // true
console.log(isFinite(5/0));
```

**Note**: if at any point you are unclear about anything on JavaScript, or really anything full stack related (HTML, CSS, SQL, Python. etc), swain by W3Schools (https://www.w3schools.com/) and check out their references.

For foreign language s.a. Chinese letters, use **encodeURL() & decodeURL(), or escape() & unescape()**

```javascript
var str = "字节跳动";
var s1 = encodeURI(str);
console.log(s1); //%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8
var s2 = decodeURI(str);
console.log(s2); //字节跳动
```



### Custom Functions

Define a function in JS as follow:

```javascript
function add(a, b) {
	return a+b;
}
console.log(add(1,1))
```

 **Notes**

-  JS doesn't have function overload, meaning what's defined last will take over definition.

- Passing in NaN or undefined as parameter, JS see those as 0.

- JS doesn't have block constraints, meaning:

  ```javascript
  function show() {
  	for (var i=0; i<10; i++) {
  		var hobby = "eddy";
  		console.log('some content...' + hobby);
  	}
  	console.log(hobby); // this will print "eddy"
    console.log(i);     // this will print "10"
  }
  ```

- JS will move definition code to the top, meaning

  ```javascript
  var num = 10;
  fun();
  function fun() {
  	console.log(num);
  	var num = 20;
  }
  ```

  is actually run as

  ```javascript
  var num;
  function fun() {
  	var num;
  	console.log(num);
  	num = 20;
  }
  num = 10;
  fun();
  ```

  thus, the program will print "undefined".

- Functions are data types as well, meaning typeof will return function, and

  ```javascript
  function sum(a, b) {
  	return a+b;
  }
  
  function multiple(a, b) {
  	return a*b;
  }
  
  function show(a,b,fn) {
  	var result = fn(a,b);
  	console.log(result);
  }
  
  show(3,4,sum);
  show(2,5,multiple);
  ```

  will yield result 7 and 10.

- Anonymous function, like you've seen in flutter:

  ```javascript
  window.onclick=function(){
  	console.log('clicked on page');
  };
  
  (function(){
  	console.log('this function will run only once');
  })();
  
  show(3,4,function(a,b){return a**b;})
  ```

  

## DOM Operations

Use Document Object Model (DOM) to dynamically modify any element in HTML or XML. An HTML/XML is compiled recursively as a tree, and each node is an element that can be manipulated.  

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/HTML DOM tree.png" alt="HTML DOM tree" style="zoom:50%;" />





### Window DOMS

To start from the top, we have the window object.

```javascript
var s = window.screen;
console.log("Monitor resolution:" + s.width + "*" + s.height);
```

Most used window methods are

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/common window methods.png" alt="common window methods" style="zoom:50%;" />

You don't have to write **window.alert()**, you can omit **window**:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<script type="text/javascript">
		function doAlert() {
			alert('This is an alert');
		}

		function doPrompt() {
			var input = prompt('This is a prompt');
			console.log("You entered "+input);
		}

		function doConfirm() {
			var flag = confirm('Are you sure you want to do this?')
			if (flag) {
				console.log('You clicked Yes');
			} else {
				console.log('You clicked No');
			}
		}
    
    function doOpen() {
      window.open('secondary.html');
    }
    
    function doClose() {
      window.close();
    }

    function doTimeout() {
    	window.setTimeout(function(){console.log("5 seconds have passed");},5000);
    }

    var timer;
    function doInterval() {
    	timer = window.setInterval(function(){console.log("3 seconds have passed");},3000);
    }

    function stopInterval() {
    	window.clearInterval(timer);
    }
	</script>
</head>
<body>
	<input type="button" value="alert" onclick="doAlert()">
	<input type="button" value="prompt" onclick="doPrompt()">
	<input type="button" value="confirm" onclick="doConfirm()">
  <input type="button" value="open" onclick="doOpen()">
  <input type="button" value="close" onclick="doClose()">
  <input type="button" value="timeout" onclick="doTimeout()">
  <input type="button" value="interval" onclick="doInterval()">
  <input type="button" value="stop interval" onclick="stopInterval()">
</body>
</html>
```



You also have window events:

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/window events.png" alt="window events" style="zoom:50%;" />

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<script type="text/javascript">
		window.onload = function(){alert('Page loading complete');}
		window.onmouseover = function() {console.log('on mouse over');}
		window.onclick = function() {console.log('clicked window');}
		window.onkeydown = function() {console.log('key down');}
		window.onscroll = function() {console.log('scrolllll');}
	</script>
</head>
<body>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
	<h1>HEADING 1 HEADING 1 HEADING 1</h1><br>
</body>
</html>
```

Many of these methods can be used on other elements, not just on window.



### History DOMS

You have back and forward methods for history

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/window nav.png" alt="window nav" style="zoom:50%;" />

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<script type="text/javascript">
		function doForward() {history.forward();}
		function doBackward() {history.back();}
	</script>
</head>
<body>
	<a href="secondary.html">another page</a><br>
	<input type="button" value="forward" onclick="doForward()">
	<input type="button" value="backward" onclick="doBackward()">
</body>
</html>
```

Note, you can use **go(0)** to refresh.



### Location DOMS

```javascript

function getLocation() {
	console.log(location.href);   // returns current url
	console.log(location)    // object feedback in JS
}

function setLocation() { location.href = "secondary.html"; }   // go to another page
function refresh() { location.reload(); }    // refresh current page

```

Let's see a cool example:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<script type="text/javascript">
		function doChange(page) {location.href = page.value;}
	</script>
</head>
<body>
	<select onchange="doChange(this);">
		<option value="https://www.baidu.com/">Baidu</option>
		<option value="https://www.google.com/">Google</option>
		<option value="https://www.youtube.com/">YouTube</option>
	</select>
</body>
</html>
```



### Document DOMS

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/document DOMS.png" alt="document DOMS" style="zoom:50%;" />

```javascript
function changeBackground(){document.bgColor="red";}
function getTitle(){console.log(document.title);}
function addMore() {
	var window2 = window.open();
	window2.document.write("<h1>A new line added by script</h1><br>")
};
function getID() {
	var element = document.getElementById('first_div');
	console.log(element);
}
```

For fetching elements by either id, name or tag, remember the elements needs to be loaded first. Thus, in the following HTML

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<script type="text/javascript" src="main.js"></script>
</head>
<body>
	<a id="baidu_link" href="https://www.baidu.com/">baidu</a>
</body>
</html>
```

if we do

```javascript
function getID() {
	var link = document.getElementById('baidu_link');
	console.log(link);
}
getID();
```

we'll get null for link. This is because the element with id 'baidu_link' was not loaded at the time the link is defined and get is called. Thus, we do

```javascript
window.onload = function getID() {
	var link = document.getElementById('baidu_link');
	console.log(link);
};
```

**Note**, in JS you can change properties like this

```javascript
var link = document.getElementById('baidu_link');
link.href = "https://www.youtube.com/";
```

and the link with id 'baidu_link' will now have href of youtube after this code is run.

Let's look at this awesome example:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<!-- <script type="text/javascript" src="main.js"></script> -->
	<script type="text/javascript">
		function onChange() {
			if ($("baidu").checked) {
				$("myFrm").action="https://www.baidu.com/";
				$("btnSearch").value = "baidu搜索";
			} else if ($("google").checked) {
				$("myFrm").action="https://www.google.com/search";
				$("btnSearch").value = "google搜索";
				$("txtSearch").name="q";
			}
		}
		function $(id) {return document.getElementById(id);}
	</script>
</head>
<body>
	<form id="myFrm" action="">
		<input type="radio" name="search" id="baidu" checked onclick="onChange()">
		<label for="baidu">Baidu</label>
		<input type="radio" name="search" id="google" onclick="onChange()">
		<label for="google">Google</label><br>
		<input type="text" name="keyword" id="txtSearch" placeholder="请输入关键字..">
		<input type="submit" value="Baidu搜索" id="btnSearch">
	</form>
</body>
</html>
```

Note you can just change element property like "element.value". In fact:

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/DOM properties.png" alt="DOM properties" style="zoom:50%;" />



### Editing Documents

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/editing Document.png" alt="editing Document" style="zoom:50%;" />

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/element nav.png" alt="element nav" style="zoom:50%;" />

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/node types.png" alt="node types" style="zoom:50%;" />

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<!-- <script type="text/javascript" src="main.js"></script> -->
	<script type="text/javascript">

		function addItem() {
			var li = document.createElement("li");
			var txt = document.createTextNode("item 4");
			li.setAttribute("id", "fourth");
			li.appendChild(txt);
			var ul = document.getElementById("myul");
			ul.appendChild(li);
		}

		function addTh() {
			var tr = document.createElement("tr");
			for (var i=1; i<6; i++) {
				var th = document.createElement("th");
				th.appendChild(document.createTextNode("th"+i));
				tr.appendChild(th);
			}
			document.getElementById("th").appendChild(tr);
		}

		function showNode() {
      var th = document.getElementById("th");
      console.log("node name: "+th.nodeName);
      console.log("node type: "+th.nodeType);
      var children = th.childNodes;
      for (var i=0; i<children.length; i++) {
      	console.log(children[i]);
      }
    }

	</script>
</head>
<body>
	<input type="button" value="add another item" onclick="addItem()">
	<input type="button" value="add another table row" onclick="addTh()">
	<input type="button" value="show th info" onclick="showNode()">
	<ul id="myul">
		<li id="first">item 1</li>
		<li id="second">item 2</li>
		<li id="third">item 3</li>
	</ul>
	<br>
	<table id="myTable" width="400px" border="1px">
		<thead id="th">
			<tr>
				<th>th1</th>
				<th>th2</th>
				<th>th3</th>
				<th>th4</th>
				<th>th5</th>
			</tr>
		</thead>
	</table>
</body>
</html>
```

There's also another doc tree handling example that could be useful:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<script type="text/javascript">
		function getLi() {
			var allLi = document.getElementsByTagName("li");
			console.log(allLi);

			var partialLi = document.getElementById("myul2").getElementsByTagName("li");
			console.log(partialLi);
		}
	</script>
</head>
<body>
	<input type="button" value="add another item" onclick="getLi()">
	<ul id="myul1">
		<li>item 1</li>
		<li>item 2</li>
		<li>item 3</li>
	</ul>
	<ul id="myul2">
		<li>item 4</li>
		<li>item 5</li>
	</ul>
</body>
</html>
```

### Inserting & deleting elements

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/insert element.png" alt="insert element" style="zoom:50%;" />

In a 5col*4row table with head id "th" and body id "tb", where table body has 4 table rows and 5 <th> in each row, you add a new row element like this

```javascript
function doInsertion1() {
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	td.colSpan = "5";
	td.innerHTML = "A row that takes 5 cols of space";
	tr.appendChild(td);
	var tb = document.getElementById("tb");
	tb.insertBefore(tr, tb.getElementsByTagName("tr")[0]);
}

function doInsertion2() {
	var tr = document.createElement("tr");
	for (var i = 1; i < 6; i++) {
		var th = document.createElement("th");
		th.innerHTML = "th" + i;
		tr.appendChild(th);
	}
	var tb = document.getElementById("tb");
	tb.insertBefore(tr, tb.getElementsByTagName("tr")[0])
}

function doDeletion() {
	var tb = document.getElementById("tb");
	var trs = tb.getElementsByTagName("tr");
	if (trs.length != 0) {
		tb.removeChild(trs[trs.length-1]);
	}
}
```

With replace, to replace element new with old, you go **element.replaceChild(new, old);** 

The true|false in clone determines whether or not to include content beneath the cloned node.



### CSS Operations

Change an element's style by

```javascript
var eddy = document.getElementById("Eddy");
eddy.style.background = red;      // change a specific style property
eddy.className = "block-color"		// change the element's class property, where .block-color{...} is in the HTML referenced CSS file.
```



## OOP

### Basics

There's multiple ways you can create a class a JS.

```javascript

// // Method #1
// var person = new Object();
// person.name = "Eddy";


// // Method #2
// function Student(newNage, newAge) {
// 	this.name = newName;
// 	this.age = newAge;
// 	this.intro_name = function () {
// 		console.log("hi my name is " + this.name + ", I'm " + this.age);
// 	};
// }

// Method #3
class Student {
	constructor(newName, newAge) {
		this.name = newName;
		this.age = newAge;
		this.intro_name = function () {
			console.log("hi my name is " + this.name + ", I'm " + this.age);
		};
	}
}

var stu = new Student("Eddy", 23);
stu.intro();

var stu2 = new Student("Jack", 20);
stu2["intro"](); // note you can also call function like this

// // Method #4
// var stu = {
//   name:"Eddy",
//   intro: function() {...}
// }
```

Note for plain function in a JS file, "this" is referring to the window

```javascript
function fn() {
	console.log(this);
}
fn();   						// will print out window object info.
console.log(this);  // same.
```

In a JSON file, a key must by a string, and we normally don't define functions in JSON values. Howecer, you CAN have functions and use "this" in it to refer to anther key-value pair. Also note, JSON does NOT recognize single quote (')



> JS is pretty flexible and treats classes like JSONs. This probably evolves from how network operates since JS is built for webpages. Think of REST API.      ---- Eddy from 09/18/2021



### JSON and string conversion

```javascript
var str = JSON.stringify(Student);  // where Student is a JSON, and str is a String.
var json = JSON.parse(str);         // where str is a String, and json is a JSON.
```



### Stack and Heap

Custom types are stored on stack, whereas built in types are stored on heap. Thus:

```javascript
var eddy = Student();
var another = eddy;
another.name = "jack";    
// both eddy and another will have name of jack since they point at the same object on stack
```



### typeof vs. instanceff

typeof will return "object" on array object and any custom class. Typeof will give you what exact class an object really is.

```javascript
var nums = [1,2,3];
var eddy = new Person("Eddy", 23);
console.log(nums instanceof Array);     // prints true
console.log(nums instanceof Person);    // prints false
```



### Closure

A unique bug for JS when defining a function within a function.

```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>JavaScript Practice</title>
	<!-- <script type="text/javascript" src="main.js"></script> -->
	<script>
		function doAdd() {
			for (var i = 0; i < 6; i++) {
				var btn = document.createElement("input");
				btn.type = "button";
				btn.value = "button#" + i;
				btn.onclick = function () {
					console.log("pressed button#" + i);
				};
				document.getElementById("mydiv").appendChild(btn);
			}
		}
	</script>
</head>

<body>
	<input type="button" value="add multiple button to div" onclick="doAdd()">
	<div id="mydiv"></div>
</body>

</html>
```

i's latest value is 6, therefore all button will print out "pressed button#6". The work-around for this is:

```javascript
function doAdd() {
	for (var i = 0; i < 6; i++) {
		addButton(i);
	}
}
function addButton(btn_value) {
	var btn = document.createElement("input");
	btn.type = "button";
	btn.value = "button#" + btn_value;
	btn.onclick = function () {
		console.log("pressed button#" + btn_value);
	};
	document.getElementById("mydiv").appendChild(btn);
}
```



### Prototype

are essentially static variable/functions

```javascript
function Student(name, age) {
	this.name = name;
	this.age = age;
	this.show = function () {
		console.log("I am a student, my name is " + this.name + ", and I'm " + this.age);
	}
}

Student.prototype.headCount = 0;
Student.prototype.sayHello = function () {
	console.log("Hello! I'm a student!");
}

eddy = new Student("Eddy", 23);
jack = new Student("Jack", 20);

console.log("eddy: " + eddy.headCount + " | jack: " + jack.headCount);
eddy.headCount++; // this headCount become this instance's attribute
console.log("eddy: " + eddy.headCount + " | jack: " + jack.headCount);
Student.prototype.headCount += 1;
console.log("eddy: " + eddy.headCount + " | jack: " + jack.headCount);
```

Note, prototype/static functions and variables are stored once in memory for all instances of student class to save space.

Also note, since JS search for instance attributes before prototype/static/shared attributes, editing a prototype attribute from an instance bind the attribute to said instance, advancing its priority. 

You can also add prototype attributes to built-in classes to expand functionality.

```javascript
var a = new Array("tom", "alice","eddy", "mike", "jack");
Array.prototype.sortReverse = function() {
	a.sort();
	a.reverse();
}
// a.sort();
// console.log(a);
a.sortReverse();
console.log(a);

var b = new Array("alysha", "bricky", "Ake.CO");
// b.sort();
// console.log(b);
b.sortReverse();
console.log(b);
```

### proto

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/proto vs prototype.png" alt="proto vs prototype" style="zoom:50%;" />

```javascript
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.show = function () {
		console.log("My name is " + this.name + ", and I'm " + this.age);
	}
}

eddy = new Person("Eddy", 23);
console.log(eddy);

console.log(Person.prototype);
console.log(eddy.__proto__);
console.log(Person.prototype===eddy.__proto__);
```



### Constructor

typeof will return object on all custom classes. You can check the specific type of a instance by checking its constructor. 

```javascript
function Person() {}
function Laptop() {}

eddy = new Person();
macbook = new Laptop();

console.log(eddy.constructor);
console.log(macbook.constructor);
console.log(eddy.constructor === Person);  // true

// note in JS, every function has an attribute called "name".
console.log(eddy.constructor.name);
console.log(macbook.constructor.name);
```



### Extending & Inheriting

Although JS aren't meant for complex OOP, we can still somewhat achieve that type of effect 

```javascript
var eddy = {
	name: "Eddy",
	age: 23,
	sex: "male",
	sayHi: function () {
		console.log("Hi my name is " + this.name + ", I'm " + this.age);
	},
};

var student = {
	id: "12345",
	major: "computer science",
	sayHi: function () {
		console.log("Hi I study " + this.major);
	}
};

for (var index in student) {
	eddy[index] = student[index];
}

console.log(eddy.major);
eddy.sayHi();
```

You can also extend using prototype:

```javascript
function Person(name) {
	this.name=name;
}
var eddy = new Person("Eddy")

// expanding w/ prototype
Person.prototype.age = 23;
Person.prototype.sayHi = function () {
	console.log("hi my name is " + this.name + " and I'm " + this.age);
}
console.log(eddy.name + ", " + eddy.age);
eddy.sayHi();

// overriding w/ prototype
Person.prototype = {
  // constructor: Person   // if you'd like to have constructor as person instead of object
	hobby: "lifting",
	major: "CS",
	show: function () {
		console.log("I study " + this.major);
	}
};
jack = new Person("Jack");
jack.show();
console.log(jack.name);    // Jack
console.log(jack.age);     // undefined

// eddy.show();   // error: show not a function

console.log(eddy.constructor.name);
console.log(jack.constructor.name);
```



### Prototype Chain

All classes have a proto, for a regular array:

```javascript
var nums = Array(12,4,35,5);
```

and in source watch, you do

```
nums: Array[4]
nums.__proto__: Array[0]
nums.__proto__.__proto__: Object
nums.__proto__.__proto__.__proto__: null
```

thus, the prototype chain for an array is: nums ---> Array.prototype ---> Object.prototype ---> null

When creating a new object:

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/proto chain.png" alt="proto chain" style="zoom:50%;" />



### Catching Exceptions

```javascript
function fn() {
	console.log("program starts here");
	try {
		console.log(num);
		return; // return to finish program or catch will run next.
	} catch (e) {
		console.log(e);
	} finally {
		console.log("program finished");   
    // finally will run in the end despite what happened before
	}
}

// throwing error.
function sum(a, b) {
	if (a < 1 || a > 100 || b < 1 || b > 100)
		throw new Error("Invalid Params: both params a & b has to be in [1,100]")
	return a + b;
}

function fn2() {
	try {
		console.log(sum(200,2));
	} catch (e){
		console.error(e);
	} finally {
		console.log("program finished");
	}
}
fn2();

```



## Other Built-in Objects

### String

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/string methods.png" alt="string methods" style="zoom:50%;" />

### Date

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/date objects.png" alt="date objects" style="zoom:50%;" />

you can get current time attributes by using methods such as

```javascript
var currentTime = today.getFullYear() 
```

Note that date will auto current date. (So no Feb.31th or Aug.50st)



### Regular Expression

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #1.png" alt="RegExp #1" style="zoom:50%;" />

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #6.png" alt="RegExp #6" style="zoom:50%;" />

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #2.png" alt="RegExp #2" style="zoom:50%;" />

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #3.png" alt="RegExp #3" style="zoom:50%;" />

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #4.png" alt="RegExp #4" style="zoom:50%;" />

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #5.png" alt="RegExp #5" style="zoom:50%;" />

```javascript
// var reg1 = new RegExp("a");
var reg = /^\w{2,5}\s{1,}\d{0,4}$/;
var reg1 = /a/;   // contains "a"?
var reg2 = /\d/;  // contains digits?
var reg3 = /^\d$/; // start, digit, end?
var reg4 = /^\d\d$/;  // start, digit, digit, end?
var reg5 = /^\d{1,3}$/;  // start, between [1,3] digits, end?
var reg6 = /y/i;     // add 'g' behind 'i' to use lastIndex for searching all y's
var str = "eddy   0216";
console.log(reg.test(str));  // true
var result = reg6.exec(str);  // find first capital or lowercase 'y'
console.log(result);  // prints null if not found
console.log(reg6.lastIndex);  // next matching char index, only change with 'g'
```

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #7.png" alt="RegExp #7" style="zoom:50%;" />

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #8.png" alt="RegExp #8" style="zoom:50%;" />

Note, most common expressions are written already and we just need to use a function or library. You can also use regular expression in string operations

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #9.png" alt="RegExp #9" style="zoom:50%;" />

Regular Expressions are commonly used in form verification such as verifying register username/password/phone # etc.

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/RegExp #10.png" alt="RegExp #10" style="zoom:50%;" />

Lastly, check out the example #1.



### Cookie & Web Storage

<img src="/Users/apple/Desktop/KnowledgeBase/JavaScript/images/cookie & webstorage.png" alt="cookie & webstorage" style="zoom:50%;" />

