# Vue.js Learning Note

Vue is a front-end framework contained in a single JS file. With it, you can use JS to build front end, and use many added features in HTML such as Django's "{{ }}" and "{% %}".

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<link rel="stylesheet" href="css/animate.css">
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				data() {  // Stored data
					return { 
						msg: "hello bitch", 
					}
				}
			});
			var vm = app.mount("#eddyDiv"); // Assiociat front end element.
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		{{msg}}
	</div>
</body>
</html>
```



## Basics Commands

### **v-model**

Duel bonding data. Commonly used in forms. As you saw in previous example

### **v-for**

loop data.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<link rel="stylesheet" href="css/animate.css">
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				data() {
					return {
						list_of_data: [9, 8, 0, 2, 1, 6, 0],
						json_of_data: { name: "eddy", age: 23, sex: "male", }
					}
				}
			});
			app.mount("#eddyDiv");
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<ul><li v-for="entry in list_of_data">{{entry}}</li></ul>
		<hr>
		<ul><li v-for="(value, key) in json_of_data">{{key}}=={{value}}</li></ul>
	</div>
</body>
</html>
```

### **v-on**

Bonding event. You use it like "v-on: event=func()".

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>First Vue Program</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				data() {
					return {
						count: 0,
					};
				},
				methods: {
					show: function () {
						console.log("Count: " + this.count);
					},
					add() {
						this.count += 1;
						this.show()
					},
				}
			});
			app.mount("#eddyDiv")
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<button v-on:click="show()">Show Count</button>
		<button v-on:click="add()">Add an entry to Array</button><br>
		{{count}}
	</div>
</body>
</html>
```

Note that you can use **@click="func()"** to replace **v-on:click="func()"**. Same goes with other functions such as mouse over.

### v-show / v-if

conditional statement in Vue.js.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>First Vue Program</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				data() {
					return {
						flag: true,
						blue: true
					};
				},
				methods: {
					change() {
						this.flag = !this.flag;
					},
					changeColor() {
						this.blue = !this.blue;
					}
				}
			});
			app.mount("#eddyDiv");
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<button v-on:click=change()>Hide Red</button><br>
		<div style="width: 100px; height: 100px; background-color: red;" v-show="flag">RED</div>
		<button v-on:click=changeColor()>Change Color</button><br>
		<div style="width: 100px; height: 100px; background-color: blue;" v-if="blue">BLUE</div>
		<div style="width: 100px; height: 100px; background-color: green;" v-else>GREEN</div>
	</div>
</body>
</html>
```



**Example #1 using all above, see example folder.**



## Other Commands

### v-text / v-html

Vue can read html code in data. 

```html
<div v-html="msg"></div>  <!-- where msg: "<h1>Eddy is genius</h1>" -->
<div v-text="txt"></div>  <!-- where txt:"Eddy is genius" -->
```



### v-once / v-pre

v-once data will only read data once and will not change further.

v-pre will show {{msg}} as "{{msg}}" with curly braces instead of data reference.

### v-bind & property

Element properties by themselves **CANNOT** access Vue data unless we use **v-bind**, which can also be abbreviated:

```html
<a v-bind:src="url">link</a>   <!-- where url is a data key in vue -->
<a :src="url">link</a>   <!-- Its abbreviation -->
```

Note that **v-bind** works differently on **class and style**:

```html
<!-- NOTE: aa & cc are style .class in css, bb:"aa" & dd:"cc" are pairs in vue data -->
<!-- works as normal -->
<p class="aa">Eddy</p>

<!-- no aa in data, error! -->
<p :class="aa">Eddy</p>  
		
<!-- solve: set a data "bb:'aa'" in data -->
<p :class="bb">Eddy</p>

<!-- how to add multiple classes, where dd:"cc"  -->
<p :class="[bb,dd]">Eddy</p>

<!-- you can also use json file format -->
<p :class="{aa:true, cc:false}">Eddy</p>   <!-- not using cc, but is using aa -->
<!-- NOTE: the booleans can be complex expressions to allow conditional style chang -->

<!-- And for style -->
<!-- for xx:{color:'red', fontSize:'30px'} in vue data -->
<p :style="xx">Eddy</p>
<!-- you can also use arrays to have multiple style data pairs -->
```



### v-cloak

v-cloak is for showing replacement for {{}} when the data hasn't loaded. Notice how in the example below, the <h3> w/ and w/o v-cloak behaves during alert().

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>First Vue Program</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				data() {
					return {
						msg: "welcome to Eddy's house"
					}
				},
				// created function is called on every vue page create
				created: function () { alert('111'); }
			});
			app.mount("#eddyDiv");
		}
	</script>
	<style>
		[v-cloak] {
			display: none;
		}
	</style>
</head>
<body>
	<div id="eddyDiv">
		<h3>{{msg}}</h3>
		<h3 v-cloak>{{msg}}</h3>
	</div>
</body>
</html>
```

Note, v-cloak must be defined in css. One use case for v-cloak I can think of is YouTube video title when loading.



## Events

you use "$event" to indicate event instance. It contains properties that we care s.a. tartget, type, offsetx..

You can use @click.stop=func() to stop click from propergating to parent clicks. And you can use @click.prevent on <a> to prevent defualt link.

You can also capture keyboard events 

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>First Vue Program</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				methods: {
					show(e) {
						console.log(e.keyCode);
						// if (e.keyCode==13){...}
					},
				}
			});
			app.mount("#eddyDiv");
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<!-- There's keyup, keydown, keypress -->
		Username: <input type="text" @keydown="show($event)">
		<!-- in both the following, print is called when user press enter-->
		<!-- Username: <input type="text" @keydown.13="print"> keycode -->
		<!-- Username: <input type="text" @keydown.enter="print"> -->
	</div>
</body>
</html>
```

You can add custom keycode names by adding these in your <script>

```javascript
Vue.config.keyCode = {
  v: 86,
  f1: 112,
  mediaPlayPause: 179,
  up: [38, 87],
}
```

About events, you can also use **@click.once=func()** to indicate the event will only happen once.



## Vue Life Cycle

Vue life cycle refer to its process from init to terminate. Vue provides functions during each of the step which we can use. Check out this lifecycle diagram:

<img src="/Users/apple/Desktop/KnowledgeBase/Vue/images/lifecycle.svg" alt="lifecycle" style="zoom:60%;" />

Notice there's beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, etc.. 

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Vue生命周期</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				data() {
					return {
						msg: 'welcome to itany'
					}
				},
				methods: {
					update() {
						this.msg = '欢迎来到南京网博！';
					},
					destroy() {
						this.$destroy();
					}
				},
				beforeCreate() { alert('组件实例刚刚创建，还未进行数据观测和事件配置');},
				created() { alert('实例已经创建完成，并且已经进行数据观测和事件配置'); },//常用！！！
				beforeMount() { alert('模板编译之前，还没挂载'); },
				mounted() { 
					alert('模板编译之后，已经挂载，此时才会渲染页面，才能看到页面上数据的展示');
				},//常用！！！
				beforeUpdate() { alert('组件更新之前'); },
				updated() { alert('组件更新之后'); },
				beforeDestroy() { alert('组件销毁之前'); },
				destroyed() { alert('组件销毁之后'); }
			});
			app.mount("#eddyDiv");
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		{{msg}}
		<br>
		<button @click="update">更新数据</button>
		<button @click="destroy">销毁组件</button>
	</div>
</body>
</html>
```



## Computed

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue生命周期</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				data() {
					return {
						num1: 12,
					}
				},
				methods: {
					getNum2: function () {
						return this.num1 * 2 - 1;
					}
				},
				computed: {
					num2: function () {
						// computed func. can include logical opertion
						// c.f. MUST return
						return this.num1 * 2 - 1;
					}
				},
			});
			app.mount("#eddyDiv")
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<h3>{{num1}}</h3>
		<h3>{{num2}}</h3>
		<h3>{{getNum2()}}</h3>
	</div>
</body>
</html>
```

Notice that we've achieved same effects using method getNum2(). The difference is that computed function results are **cached**, and will not compute result again until next dependency changes. This'll save computing power.

There are **get & set** in computed methods. The one above is by default a get method where num2 is dependant on num1. Note since num2 is in computed, it cannot be defined in data. 

Going step by step, let's say in computed you have

```javascript
num2: {
	get: function() {
    console.log('num2 get called');
		return num1 * 2 - 1;
	}
	set: function(val) {
    console.log('num2 set called');
		this.num1 = (val + 1) / 2;
	}
}
```

what happens is

1. if you do {{num2}} anywhere in your code, num2 get will be called and return a value based on num1
2. if you do {{num2}} again in your code, you will get result w/o seeing "num2 get called"
3. if you do like num2 = 3, num2 set will be called and, in my case, change num1 as well.
4. if you print num2, num2 get will **NOT** be called, the result obtained from cache.

Look at this in action in the following example (I wrote myself)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				data() {
					return {
						n1: 12,
					}
				},
				methods: {
					showNumbers: function () {
						console.log(this.n1 + " " + this.n2);
					},
					increaseN1: function () {
						console.log("N1++ called");
						this.n1++;
					},
					decreaseN2: function () {
						console.log("N2-- called");
						this.n2--;
					}
				},
				computed: {
					n2: {
						get: function () {
							console.log("N2 get called");
							return this.n1 * 2 - 1;
						},
						set: function (value) {
							console.log("N2 set called. N2 set to " + value);
							this.n1 = (value + 1) / 2
						}
					}
				},
			});
			app.mount("#eddyDiv");
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<h3>N1: {{n1}}</h3>
		<h3>N2: {{n2}}</h3>
		<h3>N2 = N1 * 2 - 1</h3>
		<button @click="showNumbers">Print N1 & N2</button>
		<button @click="increaseN1">N1++</button>
		<button @click="decreaseN2">N2--</button>
	</div>
</body>
</html>
```



## Vue Instance Properties

Some of the most common properties of Vue instance include: vm.$el, vm.$data, vm.$options, vm.$refs. For a typical

```javascript
var app = Vue.createApp({
	data() {
		return {
			msg: "welcome to my house",
		}
	}
});
var vm = app.mount("#eddyDiv")
```

To access what's in data, you can simply go **vm.msg** outside & **this.msg** inside of constructor. However, the dollar sign adds a bit more options

### $el

In the sample code above, this.$el refers to the element with id "eddyDIv". Say you'd like a method that changes the element's style, you d

```javascript
makeRed() {
  this.$el.parentNode.style.color = "red";
  // Use vm.$el outside of constructor to do the same thing
}
```

### $data

For the above code, this.msg / vm.msg is the short hand for this.$data.msg / vm.$data.msg

### $options

You can add custom properties to vm as well:

```javascript
var app = Vue.createApp({
	data() {
		return {
			msg: "welcome to my house",
		}
	},
	name:"eddy"
});
var vm = app.mount("#eddyDiv");
```

to access custom property, use this.$options.name / vm.$options.name

### $refs

To select multiple elements under el, you can add a ref in element properties

```html
<p ref="eddy">Hello world</p>
<div ref="eddy">...</div>
```

and this.$refs will give you a list of all such elements. You can do whatever you'd like with them s.a.

```javascript
this.$refs.parentNode.style.color = "red";
```

### $mount()

Mount is the process of attaching Vue to the webpage element el. This allow you to manually mount, perhaps at certain stage you'd like.

In addition to the way we initiated vue, you can do the following for same effect

```javascript
var vm = Vue.createApp({
	data() {
		return {
			msg: "welcome to my house",
		}
	},
}).mount("#eddyDiv");
```

### $destroy()

Termiates vue instance. Not commonly used.

### $nextTick()

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var vm = Vue.createApp({
				data() {
					return {
						msg: "My name is Nanou Philips :)",
						name: "Nanou",
					}
				},
			}).mount("#eddyDiv");
			
			vm.name = "Eddy";
			// WILL STILL PRINT OUT Nanou SINCE DOM UPDATE IS SYNCHRONOUS & HAVEN'T FINISH
			console.log(vm.$refs.title.textContent);
			// The right way to do it
			vm.$nextTick(function () {
				// Here DOM update is complete
				console.log(vm.$refs.title.textContent);
			});
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<h3>{{msg}}</h3>
		<h1 ref="title">Title: {{name}}</h1>
	</div>
</body>
</html>
```

nextTick is usually used after data modification to obtain the latest data values.

### $set(), $delete() & $watch

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var vm = Vue.createApp({
				data() {
					return {
						user: {
							id: 1001,
							name: 'Tom'
						},
						msg: "..."
					}
				},
				methods: {
					changeName: function () {
						this.user.name = 'Eddy';
					},
					addAge: function () {
						if (this.user.age) {
							this.user.age++;
						} else {
							this.user['age']= 1;
						}
					},
					deleteAge: function () {
						// same goes with deleting properties
						delete this.user['age'];
					}
				},
				watch: {
					msg: function (newValue, oldValue) {
						console.log("Msg from " + oldValue + " to " + newValue);
					},

					user: {
						handler: (newValue, oldValue) => {
							console.log("Age from " + oldValue.age + " to " + newValue.age);
						},
						deep: true
						// deep monitor: changes within instances will be watched as well.
					}
				}
			}).mount("#eddyDiv");

			// // note you can also have this inside constructor
			// vm.$watch('msg', function (newValue, oldValue) {
			// 	console.log("Msg from " + oldValue + " to " + newValue);
			// });
			// if you want deep, you do vm.$watch('msg', function(){...}, true)
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<button @click="changeName">Change Name</button>
		<button @click="addAge">Add Age</button>
		<button @click="deleteAge">Delete Age</button>
		<input type="text" v-model="msg">
		<hr>
		<h2>{{user.name}}</h2>
		<h2>{{user.age}}</h2>
		<h2>{{msg}}</h2>
	</div>
</body>
</html>
```



## Custom Command

You can make custom commands and use them as v-<command name> in HTML elements

### Global Custom Command

```javascript
Vue.directive('hello', {
	bind() { //常用！！
		alert('指令第一次绑定到元素上时调用，只调用一次，可执行初始化操作');
	},
	inserted() {
		alert('被绑定元素插入到DOM中时调用');
	},
	update() {
		alert('被绑定元素所在模板更新时调用');
	},
	componentUpdated() {
		alert('被绑定元素所在模板完成一次更新周期时调用');
	},
	unbind() {
		alert('指令与元素解绑时调用，只调用一次');
	}
});
```

Similar to Vue life cycle, a command has multiple stage. These are the commands that we can use. For the following code

```html
<div v-hello="eddy">...</div>
```

**bind(el, binding)**: **el** refer to this <div>, **binding** is an object with some properties including name="hello", value="eddy", or if eddy:13 is a pair in data, expression = "eddy", value=13.

- You can also pass parameters by doing **v-hello:eddy**. In this case, binding will have another entry called arg:"eddy".
- Even further, you can have v-hello:eddy.aa.bb. In this case, binding will have yet another entry called modifier which is includes aa:true, bb:true.

You'll rarely use methods other than **bind** and **update**, therefore we have a short hand:

```javascript
// instead of defining each stage
Vue.directive('world',{
	bind(el, binding) {
		console.log(binding);
	}
})
 // simply pass in a function
 Vue.directive('wbs',function(){
	alert('1111');
 });
// and the command will be called on bind & update
```



### Local Custom Command

You can also add directives locally into vm

```javascript
var vm = Vue.createApp({
	data() {
		return {
			msg: "my life for Aiar",
		}
	},
	directives: {
		hello: {
			inserted(el) {
				el.focus();
			}
		}
	}
}).mount("#eddyDiv");
```



### Example

An awesome program that have mouse draggable elements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script>
		var app = Vue.createApp({
			data() {
				return {
					msg: "my life for Aiar",
				}
			},
		});
    
		app.directive('drag', function (el) {
			el.onmousedown = function (e) {
				// mouse click position - div position
				var xPos = e.clientX - el.offsetLeft;
				var yPos = e.clientY - el.offsetTop;
				document.onmousemove = function (e) {
					el.style.left = (e.clientX - xPos) + "px";
					el.style.top = (e.clientY - yPos) + "px";
				}
				document.onmouseup = function (e) {
					document.onmousemove = null;
					document.onmouseup = null;
				}
			}
		});

		window.onload = function () {
			app.mount("#eddyDiv");
		}
	</script>
	<style>
		#eddyDiv div {
			width: 100px;
			height: 100px;
			position: absolute;
		}

		#eddyDiv .div-a {
			background-color: red;
			top: 0;
			left: 0;
		}

		#eddyDiv .div-b {
			background-color: blue;
			top: 0;
			right: 0;
		}
	</style>
</head>
<body>
	<div id="eddyDiv">
		<div class="div-a" v-drag>AAA</div>
		<div class="div-b" v-drag>BBB</div>
	</div>
</body>
</html>
```





## Transition

Vue provides many means of transition effect when inserting, updating or removing DOMs. Essentially, they are still using CSS 3 animation: transition & animation.

Just like lifecycle and custom commands, Vue provides stage functions for each step of the animation.

**Note: the following code only works fully in vue 2**

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue2.js"></script>
	<style>
		p {
			width: 300px;
			height: 300px;
			background-color: red;
		}
		.fade-enter-active,
		.fade-leave-active {
			transition: all 2s ease;
		}
		.fade-enter-active {
			opacity: 1;
			width: 300px;
			height: 300px;
		}
		.fade-leave-active {
			opacity: 0;
			width: 100px;
			height: 100px;
		}
		.fade-enter {
			opacity: 0;
			width: 50px;
			height: 50px;
		}
	</style>
	<script>
		window.onload = function () {
			var vm = new Vue({
				el: '#eddyDiv',
				data: {
					flag: false,
				},
				methods: {
					beforeEnter(el) {
						alert("transition before enter");
					},
					enter(el) {
						alert("transition enter");
					},
					afterEnter(el) {
						el.style.backgroundColor="blue";
						alert("transition after enter");
					},
					beforeLeave(el) {
						alert("transition before leave");
					},
					leave(el) {
						alert("transition leave");
					},
					afterLeave(el) {
						alert("transition after leave");
						el.style.backgroundColor="red";
					}
				}
			});
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<button @click="flag=!flag">click me</button>
		<transition name="fade" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
			@before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
			<p v-show="flag">Eddy</p>
		</transition>
	</div>
</body>
</html>
```

These stage functions can be used with third party library such as **animate.css** (EXTREMELY USEFUL)  Try out all the animations in https://animate.style/.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<link rel="stylesheet" href="css/animate.css">
	<script src="js/vue3.js"></script>
	<style>
		p {
			width: 300px;
			height: 300px;
			background-color: red;
			margin: 0 auto;
		}

		.my-animation-timing {
			--animate-duration: 800ms;
		}
	</style>
	<script>
		window.onload = function () {
			var app = Vue.createApp({
				data() {
					return {
						flag: false,
					}
				},
			}).mount("#eddyDiv");
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<button @click="flag=!flag">click me</button>
		<transition enter-active-class="animate__animated animate__bounceInLeft my-animation-timing"
			leave-active-class="animate__animated animate__bounceOutRight my-animation-timing">
			<p v-show="flag">Eddy</p>
		</transition>
	</div>
</body>
</html>
```

If you are to use more than one element in <transition>, you'll need to <transition-group>

```html
<transition-group enter-active-class="...">
  <p v-show="flag" :key="1">Eddy</p>
  <p v-show="flag" :key="2">Liang</p>
</transition-group>
```

Note that every element in transition-group needs to be keyed: they need to contain unique key values.



## Component

One of the most powerful Vue functionalities. Can make elements in to components like in Adobe Xd, therefore increases reusability.

### Defining

Define component "hello" globally and use directly with <hello>

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script>
		var app = Vue.createApp({});
    
		var MyComponent = app.component("hello", {
			template: "<h3>Hello Components</h3>"
		});
    
		window.onload = function () {
			app.mount('#eddyDiv');
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<hello></hello>
	</div>
</body>
</html>
```



### Global vs. Local

You can also define components locally,

```javascript
var vm = Vue.createApp({
	components: {
		"hello": {
			template: "<h3>Hello Components</h3>"
		}
	},
}).mount('#eddyDiv');
```

Note that local components can only be used within that vue instance.

You can store data in components as well

```javascript
var vm = Vue.createApp({
	components: {
		"hello": {
			template: "<h3>Hello Components</h3>",
			data() {
				return {
					msg:"hello gayB",
				}
			}
		}
	},
}).mount('#eddyDiv');
```



### Templates

You can define a template in <template>

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var vm = Vue.createApp({
				components: {
					'my-hello': {
						name: 'edddy',
						template: '#eddyTemp',
						data() {
							return {
								msg: "welcome child",
								arr: ["eddy", "jack", "george"]
							}
						}
					}
				}
			}).mount('#eddyDiv');
		}
	</script>
	<template id="eddyTemp">
		<div>
			<h3>{{msg}}</h3>
			<ul>
				<li v-for="value in arr">{{value}}</li>
			</ul>
		</div>
	</template>
</head>
<body>
	<div id="eddyDiv">
		<my-hello></my-hello>
		<my-hello></my-hello>
	</div>
</body>
</html>
```



### Dynamic Components

One mounting points for multiple components dynamically switching between each other on conditions. By using <component :is="">

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var vm = Vue.createApp({
				data() {
					return {
						flag: 'my-hello'
					}
				},
				components: {
					'my-hello': {
						template: '<h3>I am hello component {{x}}</h3>',
						data() {
							return {
								x: Math.random()
							}
						}
					},
					'my-world': {
						template: '<h3>I am world component {{x}}</h3>',
						data() {
							return {
								x: Math.random()
							}
						}
					}
				}
			}).mount('#eddyDiv');
		}
	</script>
</head>

<body>
	<div id="eddyDiv">
		<button @click="flag='my-hello'">This is Hello component</button>
		<button @click="flag='my-world'">This is world component</button>
		<div>
			<keep-alive>
				<component :is="flag"></component>
			</keep-alive>
		</div>
	</div>
</body>

</html>
```

Notice how w/o <keep-alive> the # randomizes. <keep-alive> stores the switched out component in cache to avoid re-render.

### Data Passing between Components

You can define a component in another component. Template of subcomponents **must only** be used in templates of their parents their parent

#### Parent to Child

components and subcomponents cannot share data, but can pass down using props

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script>
		window.onload = function () {
			var vm = Vue.createApp({
				data() {
					return {
						flag: 'my-hello'
					}
				},
				components: {
					'my-hello': {
						template: '#hello',
						data() {
							return {
								msg: 'hello bitch',
								name: 'eddy',
								age: 23,
							}
						},
						components: {
							'my-world': {
								template: '#world',
								props: ['message'],
							}
						}
					},
				}
			}).mount('#eddyDiv');
		}
	</script>
	<template id="hello">
		<div>
			<h2>I am hello component</h2>
			<h2>My data: {{msg}}, {{name}}, {{age}}</h2>
			<hr>
			<!-- sub-component can only be used in parent component -->
			<!-- pass in param by :<variable-name> & declaring in props-->
			<my-world :message="msg"></my-world>
		</div>
	</template>
	<template id="world">
		<div>
			<h3>I am world component</h3>
			<h3>I received data {{message}}</h3>
		</div>
	</template>
</head>
<body>
	<div id="eddyDiv">
		<my-hello></my-hello>
		<!-- <my-world></my-world> WRONG! subcomponent can only be used in parent component -->
	</div>
</body>
</html>
```

You can also verify passed down data in props

```javascript
// usual way of using props
props: ['message', 'name']

//way that verifies data types
props: {
  message: String,
  name: {
    type: String,
    required: true,
  },
  age: {
    type:Number,
    default:18,
    validator: function(value) {
      return value >= 0;
    }    
  }
}
```

Note: if you'd like to know more, check out lecture slide day03/05.html

#### Child to Parent

When sending data from child to parent, we use this.$emit(<event name>, <data>...):

```javascript
send () {
  this.$emit('child-data-emit', this.sex, this.height)  // can have multiple params
}
// perhaps this function can be in method and triggered by a button click.
```

and in parent template, when creating child template we do

```html
<my-world :message="msg" :name="name" :age="age" @child-data-emit="getData"
```

and we define in parent component method

```javascript
getData(sex, height) {
  this.sex = sex;
  this.height = height;
}
```



#### Modifying Data

Props are single direction bonding: you can change data in parent and child will change as well, but not the other way around. To change data in child, there's 2 approach

1. Store passed down data in component data(){..}, so to make it a local variable. Note if parent change again in the future, child will not change.

2. in child component, add $emit

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
   	<meta charset="UTF-8">
   	<title>Vue Workfile</title>
   	<script src="js/vue3.js"></script>
   	<script>
   		window.onload = function () {
   			var vm = Vue.createApp({
   				el: '#eddyDiv',
   				data() {
   					return {
   						name: 'Eddy',
   					}
   				},
   				components: {
   					'my-hello': {
   						template: '#hello',
   						props: ['name']
   					},
   				}
   			}).mount("#eddyDiv");
   		}
   	</script>
   	<template id="hello">
   		<div>
   			<h3>Child: {{name}}</h3>
   		</div>
   	</template>
   </head>
   <body>
   	<div id="eddyDiv">
   		<h2>Parent: {{name}}</h2>
   		<input type="text" v-model="name">
   		<hr>
   		<my-hello :name="name"></my-hello>
   	</div>
   </body>
   </html>
   ```



### Component to Component

**Note: This is a Vue 2 solution**

To send data between non-related components, you instantiate a new empty Vue instance, and use $emit on sender, $on on receiver to monitor.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue2.js"></script>
	<script>
		var Event = new Vue();

		var A = {
			template: '#componentA',
			data() {
				return {
					name: "Eddy",
				}
			},
			methods: {
				send() {
					Event.$emit('data-a', this.name)
				}
			}
		}

		var B = {
			template: '#componentB',
			data() {
				return {
					name: "",
				}
			},
			mounted() {
				Event.$on('data-a', name => {
					this.name = name;
				})
			}
		}

		window.onload = function () {
			var vm = new Vue({
				el: '#eddyDiv',
				data: {
					name: 'Eddy',
				},
				components: {
					'a-component': A,
					'b-component': B
				}
			});
		}
	</script>
	<template id="componentA">
		<div>
			<h3>Component A: {{name}}</h3>
			<button @click="send">Send data from A to C</button>
		</div>
	</template>
	<template id="componentB">
		<div>
			<h3>Component B: {{name}}</h3>
		</div>
	</template>
</head>
<body>
	<div id="eddyDiv">
		<a-component></a-component>
		<b-component></b-component>
	</div>
</body>
</html>
```

**Note**: monitor process ($on) needs to start first were it to capture any $emit.

In real projects, the vue instance probably wouldn't be empty; it'll most likely contain some status management setting. (VueX)



### Slot

In the last example, if you'd like content in <a-component>, you should use slot.

- simple slot

  ```html
  <div id="eddyDiv">
    <my-hello>Eddy is a genius</my-hello>
  </div>
  
  <template>
    <div>
      <h3>Welcome to Eddy's house</h3>
      <slot>If no content, show this</slot>
    </div>
  </template>
  ```

- More advanced slot

  ```html
  <div id="eddyDiv">
    <my-hello>
    	<ul slot="s1">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
      <ol slot="s2">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    </my-hello>
  </div>
  
  <template>
    <div>
      <slot name="s1">If no content, show this</slot>
      <h3>Welcome to Eddy's house</h3>
      <slot name="s2">If no content, show this</slot>
    </div>
  </template>
  ```



## Vue-route

Vue-route is the module for url routing. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<!-- <script src="js/vue2.js"></script> -->
	<script src="js/vue-router.js"></script>
	<script>
    
		// step #1. Defining Components
		var Home = {
			template: "<h2>I am Home page</h2>"
		};
		var News = {
			template: "<h3>I am News page</h3>"
		};

		// step #2. Defining routes
		const myRoutes = [
			{ path: "/", component: Home },
			{ path: "/home", component: Home },
			{ path: "/news", component: News },
		];

		// step #3. Creating router instance
		const myRouter = VueRouter.createRouter({
			history: VueRouter.createWebHashHistory(),
			routes: myRoutes,
		});

		// step #4. mounting router to Vue instance
		window.onload = function () {
			var app = Vue.createApp({});
			app.use(myRouter);
			var vm = app.mount("#eddyDiv");
		}
	</script>
</head>
<body>
	<div id="eddyDiv">
		<div>
			<router-link to="/home">Home</router-link>
			<router-link to="/news">News</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</body>
</html>
```



### Nested Routing 

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script src="js/vue-router.js"></script>

	<style>
		.router-link-active {
			font-size: 20px;
			color: #ff7300;
			text-decoration: none;
		}
	</style>

	<script>
		var Home = {
			template: "#home"
		};
		var User = {
			template: "#user"
		};
		var Login = {
			template: "<h3>Login Page</h3>"
		}
		var Signup = {
			template: "<h3>Sign Up Page</h3>"
		}

		const myRoutes = [
			{
				path: "/",
				component: Home,
			},
			{
				path: "/home",
				component: Home,
			},
			{
				path: "/user",
				component: User,
				children: [
					{
						path: 'login',
						component: Login,
					},
					{
						path: "signup",
						component: Signup,
					}
				]
			},
		]

		const myRouter = VueRouter.createRouter({
			history: VueRouter.createWebHashHistory(),
			routes: myRoutes,
		});

		window.onload = function () {
			var app = Vue.createApp({});
			app.use(myRouter);
			var vm = app.mount("#eddyDiv");
		}
	</script>

	<template id="home">
		<div>
			<h2>I'm Home page</h2>
		</div>
	</template>

	<template id="user">
		<div>
			<h2>I'm User page</h2>
			<h3>User information</h3>
			<ul>
				<li><router-link to="/user/login">User Login</router-link></li>
				<li><router-link to="/user/signup">User Signup</router-link></li>
			</ul>
			<router-view></router-view>
		</div>
	</template>
</head>
  
<body>
	<div id="eddyDiv">
		<div>
			<router-link to="/home">Home</router-link>
			<router-link to="/user">User</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</body>
</html>
```



### Passing Params into link

#### Query approach

In the sample code from before, in <router-link> for user **login**, do

```html
<router-link to="/user/login?name=eddy&pwd=123">User Login</router-link>
```

and read it in login template

```html
<h3>Login Page with param: {{$route.query}}</h3>
```



#### Special Route Approach

In the sample code from before, in <router-link> for user **signup**, do

```html
<router-link to="/user/signup/alice/456">User Signup</router-link>
```

In my routes, change the path to

```javascript
{
  path: "signup/:username/:password",
  component: Signup
}
```

and read it in signup template

```html
<h3>Sign Up Page with param: {{$route.params}}</h3>
```

there also properties such as **$route.path** that return your current url



### Push vs Replace

You can use methods like router.push(location), router.replace(location) to navigate through pages. Note that router.replace does **NOT** leave history.

The **full example** that uses all Vue-route techniques so far

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Vue Workfile</title>
	<script src="js/vue3.js"></script>
	<script src="js/vue-router.js"></script>

	<style>
		.router-link-active {
			font-size: 20px;
			color: #ff7300;
			text-decoration: none;
		}
	</style>

	<script>
		var Home = {
			template: "#home"
		};
		var User = {
			template: "#user"
		};
		var Login = {
			template: "<h3>Login Page with param: {{$route.query}} at {{$route.path}}</h3>"
		}
		var Signup = {
			template: "<h3>Sign Up Page with param {{$route.params}} at {{$route.path}}</h3>"
		}

		const myRoutes = [
			{
				path: "/",
				component: Home,
			},
			{
				path: "/home",
				component: Home,
			},
			{
				path: "/user",
				component: User,
				children: [
					{
						path: 'login',
						component: Login,
					},
					{
						path: "signup/:username/:pwd",
						component: Signup,
					}
				]
			},
		]


		const myRouter = VueRouter.createRouter({
			history: VueRouter.createWebHashHistory(),
			routes: myRoutes,
		});

		window.onload = function () {
			var app = Vue.createApp({
				methods: {
					push() {
						console.log('push');
						this.$router.push("/home");
					},
					replace() {
						console.log('replace');
						this.$router.replace("/user")
					}
				}
			});
			app.use(myRouter);
			var vm = app.mount("#eddyDiv");
		}
	</script>

	<template id="home">
		<div>
			<h2>I'm Home page</h2>
		</div>
	</template>

	<template id="user">
		<div>
			<h2>I'm User page</h2>
			<h3>User information</h3>
			<ul>
				<li>
					<router-link to="/user/login?name=eddy&pwd=123">User Login</router-link>
				</li>
				<li>
					<router-link to="/user/Signup/alice/456">User Signup</router-link>
				</li>
			</ul>
			<router-view></router-view>
		</div>
	</template>
  
</head>
<body>
	<div id="eddyDiv">
		<div>
			<router-link to="/home">Home</router-link>
			<router-link to="/user">User</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
		<hr>
		<button @click="push">Push Route</button>
		<button @click="replace">Replace Route</button>
	</div>
</body>
</html>
```



## VueX

An addon like vue-route. It manages all data of a project in one place. So no more of that component to component data transfering/emiting/listening fiesta. It is said to be similar to Redux in React.

First you install it in your project. Note this is a production dependency

```
npm install -S vuex
```

We config vuex by in a new file called **store.js**, and import it in main.js
