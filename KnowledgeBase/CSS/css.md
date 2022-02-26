# CSS Learning Note

CSS (Cascading Style Sheet), states the rule of webpage styling & apparence. Using standalone CSS file outside an HTML structure increases readability, maintainability & scalability of our website code.

## 1. Basics

### 1.1 Syntax

You can put CSS style in <head>. Say you're trying to 

```html
<head>
  <style>
    .selector{
      (property name):(property value);
      (property name):(property value);
      ....
    }
  </style>
</head>
```

A selector is the element that you're trying to style, property name/value is the exact property and its value of said element. For example:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>CSS Workfile</title>
  <style>
    p {
      color: red;
      background: #cccccc;
    }
  </style>
</head>
<body>
  <p>CSS从入门到精通</p>
  <h2>主讲：汤小洋</h2>
</body>
</html>
```



### 1.2 Usage

There are 3 ways you can import CSS code into HTML structure

1. Use <style> in the <head> section of the HTML file. Note this CSS will **only** change elements in its residing HTML file. 

2. Use <style> in a specific element, s.a. <p style="color: red;">. Note this CSS will **only** change the element it resides in.

3. Finally, creating an external .css file and import it into HTML with <link> or @import. To import main.css into main.html, add one of the following in <head>:

   ```html
   <!-- Commonly Used & Recommanded. Note you can ommit "type" -->
   <link rel="stylesheet" type="text/css" href="main.css">
   ```

   ```html
   <style>@import "main.css"</style>
   ```

   ```html
   <style>@import url(main.css)</style>
   ```

However, to make note-taking easier, I'm gonna stick to <style> CSS code in <head> like we did in previus example.



## 2. Common Selector

### 2.1 Element Selector

Use HTML element name as selector name, which will modify the style of off said type of element in any HTML file

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    p {
      color: red;
      font-size: 20px;
    }
    h2 {
      color: green;
    }
  </style>
</head>
<body>
  <p>Welcome to CSS</p>
  <p>Eddy Liang</p>
  <h2>Web Front-end development</h2>
  <h3>Python Backend</h3>
</body>
</html>
```



### 2.2 Type Selector

If you want only a few of the same elements to be styled in css, you name a unique type in the css file: "navbar", "subtitle", etc. You add a dote in front of type selector in definition. Note, one element can have multiple style

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    .grey-p {
      background: #cccccc;
    }
    .big-font-p {
      font-size: 30px;
    }
    .small-font-p {
      font-size: 10px
    }
    .bold-font {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p class="grey-p">Welcome to CSS</p>
  <p class="big-font-p">Eddy Liang</p>
  <p class="grey-p big-font-p bold-font">"present value is 0.07"</p>
  
  <!-- Note: styles will be prioritized based on order of loading -->
  <!-- the following p will show up as big, since big-font-p is defined in <style> first -->
  <p class="small-font-p big-font-p">This will show up as big</p>
  
</body>
</html>
```



### 2.3 ID Selector

Start with "#" in definition. Styling the set of HTML elements with a particular id. Since id's are unique, this style is customized for **only one** element.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    #EddyHeader {
      color: red;
    }
  </style>
</head>
<body>
  <h1 id="EddyHeader">Uniform Series</h1>
  <h1>How much money are we putting into our account</h1>
</body>
</html>
```



### 2.4 Compound Selector

For the same selector, if I'd like it to look different on different element, I do the following

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    h1.EddyHeader {
      color: red;
    }
    h2.EddyHeader {
      color: green;
    }
  </style>
</head>
<body>
  <h1 class="EddyHeader">Uniform Series</h1>
  <h2 class="EddyHeader">How much money are we putting into our account</h1>
</body>
</html>
```



### 2.5 Collection Selector

(The following code breaks Typora, so I'm just going to put it as plain text) 

You can put some common selector properties, such as the 50px font size in the following example. 

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    h1,p,div {
      font-size: 50px;
    }
    div {
      background: #cccccc;
    }
    .small-bold {
      font-size: 10px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Eddy</h1>
  <p>Liang</p>
  <div>the website</div>
  <span class="small-bold">is awesome</span>
</body>
</html>
```



### 2.6 Embedded Selector

To stye a particular element embedded under another, you can do:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    div p {
    	color: green;
    }
  </style>
</head>
<body>
  <p>Eddy</p>
  <div>
  	<p>Liang</p>
  </div>
  <div>
  	<h1>Tony</h1>
  	<p>Stark</p>
  </div>
  <div>
  	<h1><p>Hotdog</p></h1>
  </div>
</body>
</html>
```

In this case, "Liang", "Stark", "Hotdog" will be green. "Eddy" remains the same. 

To state the structure must strictly be the same to can have that effect, we can use 

```
div > p {
	color: green;
}
```

This way, in the above example, Hotdog will **NOT** be green. You can also specify element of a class under another element

```
div .ddd {color: green;}
div h3.ddd {color: green;}
```

Former means only elements under <div> with class "ddd" will be green; later means on top of that, the element must also be an <h3>.



### 2.7 Pseudo Selector

Often used on <a>. Selector that changes style depending on 4 different state:

- :link  --  link we've never been to
- :visited  --  links we've previously visited
- :hover  --  links we that our house is currently hovering.
- :active  --  links after mouse click-down, before click-up.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    .eddy-link:link{
      font-size:50px;
      color:black;
      text-decoration:none;
    }
    .eddy-link:visited {
      font-size:50px;
      color:black;
      text-decoration:none;
    }
    .eddy-link:hover {
      font-size:50px;
      background:blue;
      color:white;
      text-decoration:underline;
    }
    .eddy-link:active {
      font-size:50px;
      background:cyan;
      color:white;
      text-decoration:underline;
    }
  </style>
</head>
<body>
  <a class="eddy-link" href="#">Eddy's Link Right Here</a>
</body>
</html>Or simply
```

Or we can combine the syntax and say:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    .eddy-link{
      font-size:50px;
    }
    .eddy-link:link, .eddy-link:visited {
      color:black;
      text-decoration:none;
    }
    .eddy-link:hover, .eddy-link:active {
      color:white;
      text-decoration:underline;
    }
    .eddy-link:hover {
      background:blue;
    }
    .eddy-link:active {
      background:cyan;
    }
  </style>
</head>
<body>
  <a class="eddy-link" href="#">Eddy's Link Right Here</a>
</body>
</html>
```

Note this can be used on other elements as well. However, we tend to associate interactivity with links.



### 2.8 Pseudo Element Selector

There are other types of Pseudo selector as well:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    .eddy-letter:first-letter{
      color:red;
    }
    .eddy-line:first-line{
      color:red;
    }
    .eddy-before:before{
      content: "xX";
    }
    .eddy-after:after{
      content: "Xx";
    }
  </style>
</head>
<body>
  <p class="eddy-letter eddy-before eddy-after">Hello Bitch</p>
  
  <p class="eddy-line">
  	Eddy is a genius strategist<br>
    He will master all that he needs
  </p>
</body>
</html>
```



### 2.9 Selector Priority

In short: ID selector > class selector > element selector. The following text will always be yellow.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    div {
      color: red;
    }
    .eddy-text {
      color: blue;
    }
    #sampleText {
      color: yellow;
    }
  </style>
</head>
<body>
  <div class="eddy-text" id="sampleText">EDDY LIANG</div>
</body>
</html>
```

This is because the system loads element styles first, class second, and ID last, where each time the color is overriden, eventually landing on yellow. 

Note that external file <link>, when placed **BEFORE** <style>, will be overriden if conflicted; but will show if placed **AFTER** <style>. **Whoever loads last will override the previous on confliction.**

However, you can use "!important" to make a property the highest priority

```
.eddy-link {
	color: blue !important;
}
```



## 3. Common Properties

There are many properties in CSS. Note that, when a property is not specified, all element will **inherit** CSS property value from its **direct parent**.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    div {font-size:30px;}
    p {font-size:20px}
  </style>
</head>
<body>
	<div>
		My div
		<p>
			CSS tutorial
			<span>EDDY LIANG</span>
		</p>
	</div>
</body>
</html>
```

The result: "My div" has font size of 30, "CSS tutorial" & "EDDY LIANG" has font size of 20. 



### 3.1 Font

**Note**: you can use chrome inspect like Flutter inspect; in fact, the layout is almost identical !

- **font-size**
  - Accepted units:
    - pixel (px)
    - percent (% of parent font size), 
    - em (倍数 of parent font size, such as 1.5em, 2em)

**Note**: HTML Root Element (<html>) has default font size of **16**.  You can change it by:

```
body {
	font-size: 62.5%; /* Our usual goto value, which is calculated to 10px. */
}
```

- **font-weight**

  - Accepted value:
    - normal (default)
    - bold 粗体
    - Custom value: 400 = normal, 700 = bold ...

- **font-family**

  - 字体, may need installation first. 

  - It is recommended you list at least 3: 首选、其次、备用. And split each with comma.

  - writes like this:

    ```
    font-family: Arial;
    ```

- **font-style**

  - Accepted value:
    - normal
    - italic

- **font**

  - short cut for all the above properties.

  - Must follow the order of:

    ```
    font: italic bold 30px Arial;
    ```

    it is recommanded you use normal or something else to ommit properties.



### 3.2  Text

Used on other elements to specify styles for its text.

- **color**
  - Can either be **hex RGB (#cccccc)**, **english word (grey)**,  **RGB(red, green, blue**) where each value takes from 0 to 255, or **RGBA(red, green, blue, alpha)** where alpha takes between 0 and 1 for transparency (0 for invisible, 1 for opaque)
  - note that some hex can be abbreviated:
    - #cccccc => #ccc
    - #ff0000 => #f00
    - #00ff00 => #0f0
- **line-height**
  - take pixel value, is the distance between lines.
- **text-align**
  - horizontal alignment to its parent. Take value **left**, **right** or **center**
- **vertical-align**
  - vertical alignment to its parent. Take value **top**, **bottom** or **middle**. 
- **text-indent**
  - takes pixel value
- **text-decoration**
  - takes value **underline, overline, line-through**, **none** (for <a> if you don't want)
- **text-transform**
  - takes value **lowercase, uppercase, capitalize.**
- **letter-spacing**
  - takes pixel value, specifies space between characters.
- **word-spacing**
  - takes pixel value, specifies space between words
- **white-space**
  - take value **wrap, nowrap**. 换行/不换行
- **overflow**
  - take value **hidden**, 超行部分不显示



### 3.3 Background

Used on <div> with background

- **background-color**
  - other than color value, it also take value **transparent** to make background transparent
- **background-image**
  - take value **url(<file-path>)**
- **background-repeat**
  - take value repeat(default, both x&y), repeat-x(横着重复), repeat-y(竖着重复), no-repeat
- **background-position**
  - Use to specify background image position relative to top-left corner
  - take **top, bottom, left, right, center**, **top right, bottom left** etc.
  - take coordinate position such as **10px 10px**, where (0,0) is on top left with down/right as positive direction.

**IMPORTANT:** **CSS Sprites**. On pages with many icons/image, instead of sending request for each image, we get all in one collage image with one request to optimize performance. And we use **background-position** to pinpoint and get each icon from the big collection image.

- **background-attachment**

  - Sets whether the background image move on scroll
  - take value scroll(default), fixed. Where scroll will have image be fixed relative to element, and fix relative to browser window.

- **background**

  - Like font, we can put all above properties in this one place. Separate with space, and with no order restrictions. 

    ```
    background: red url(image/qq.jpg) repeat-x 50px 100px
    ```

    note the "50px 100px" is background-position.

### 3.4 List

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    .first {list-style-type:none;}
    .second {list-style-type:disc;}
    .third {list-style-type:circle;}
    .fourth {list-style-type:square;}
  </style>
</head>
<body>
  <ul>
  	<li class="first">List Item</li>
  	<li class="second">List Item</li>
  	<li class="third">List Item</li>
  	<li class="fourth">List Item</li>
  </ul>
</body>
</html>
```

- **list-style-type**
  - takes value **none, disc, circle, square, decimal**
  - changes the sign in front of each list entry.
- **list-style-image**
  - the leading sign can be images, not just bullot points.
  - takes value url(<image-path>)
- **list-style-position**
  - takes value inside, outside (default).
  - when taken inside, it move list item in by one tab space.
- **list-style**
  - wrap everything up again. list-style: none url(image/qq.jpg) outside;
  - No order restriction

**Note**: List are most frequently used as navigation items. Specifically, we use unordered list. Usually we don't want any style with list items and just go

```
list-style: none;
```

Additionally, most navbar list are positioned horizontally using float.

### 3.5 Table

- **border-collapse**
  - set whether neighboring border will combine into one, not thicker border
  - takes value **separate(default), collapse**



## 4. Box Model ** IMPORTANT **

<img src="/Users/apple/Desktop/KnowledgeBase/CSS/images/Screen Shot 2021-09-11 at 10.28.14.png" alt="Screen Shot 2021-09-11 at 10.28.14" style="zoom:60%;" />

Box model is the basics of designing website layout. Every element is seen as a box, and a box usually have the following properties. You already know what each of them is.

- width
- height
- border
- padding
- margin

**For this section, make sure to play around and look at the page's element inspector!**

### 4.1 border

One line on every 4 direction (top, bottom, left, right), 3 properties (color, width, style) on each line. (width takes pixel value). Making it 12 different properties in styling border "**border-<direction>-<property>**". Note that style takes value **solid, dashed, dotted, double, inset, outset**. Notice how border: 1px solid red is a way of abbreviating like all previous properties (font, background etc).

Let's see this in action. 

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    .box {
      width: 250px;
      height: 250px;
      background: #ccc;
    }
    .first {
      border-top-color: red;
      border-top-width: 1px;
      border-top-style: solid;
      margin-bottom:200px;
    }
    .second {
      border-left: green 3px dotted;
      margin: 0px auto;
      
      text-align: center;
      line-height: 250px;
    }
    .third {
      border-right: pink 4px inset;
    }
    .fourth {
      border-bottom: pink 4px outset;
    }
  </style>
</head>
<body>
  <p class="box first">First Box</p>
  <p class="box second">Second Box</p>
  <p class="box third">Third Box</p>
  <p class="box fourth">Fourth Box</p>
</body>
</html>
```

Note, you can abbreviate in the following way

- border-<direction>: <width> <style> <color>

- border-<width / style / color>: <top> <right> <bottom> <left>    (goes clock-wise)

  - border-width: 2px == all sides are 2px wide
  - border-width: 2px 4px == top 2px, right 4px; then system automatically make bottom 2px, left 4px.
  - border-width: 1px 2px 4px == top 1px, right 2px, bottom 4px and left 2px

  **Rule is: if omitted, bottom = top & left = right.**

- border: <width> <style> <color>

### 4.2 Padding

Takes pixel value for width like border. Note that, when right & left/top & bottom conflict, system will prioritize left/top. You can also abbreviate the same way you abbreviate in borders.

### 4.3 Margin

Takes pixel value for width. Controls the same with padding although is different thing. On horizontal margin, you can use **auto** to put box in the middle

```
margin: 0px auto;
```

Note that auto margin must be operated on box with fixed width, otherwise it take full screen width (**play with it!**).

### 4.4 Size Notes

A box's **actual width = width + left&right padding + left&right border + left&right margin**. Same idea with height. 

<img src="/Users/apple/Desktop/KnowledgeBase/CSS/images/Screen Shot 2021-09-11 at 10.37.34.png" alt="Screen Shot 2021-09-11 at 10.37.34" style="zoom:40%;" />

As you can see, for unspecified fields, there will be default value. For example, the default margin is 8px for body, 16px top & bottom for <p>. So you might wanna set element default value

```
p, body {
	margin:0;
	padding:0;
}
```



### 4.5 Margin Collapsing

The [top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top) and [bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom) margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as **margin collapsing**. Note that the margins of [floating](https://developer.mozilla.org/en-US/docs/Web/CSS/float) and [absolutely positioned](https://developer.mozilla.org/en-US/docs/Web/CSS/position#types_of_positioning) elements never collapse.

Margin collapsing occurs in three basic cases:

- **Adjacent siblings**

  The margins of adjacent siblings are collapsed (except when the latter sibling needs to be [cleared](https://developer.mozilla.org/en-US/docs/Web/CSS/clear) past floats).

- **No content separating parent and descendants**

  If there is no border, padding, inline part, [block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context) created, or *[clearance](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)* to separate the [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top) of a block from the [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top) of one or more of its descendant blocks; or no border, padding, inline content, [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height), or [`min-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height) to separate the [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom) of a block from the [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom) of one or more of its descendant blocks, then those margins collapse. The collapsed margin ends up outside the parent.

- **Empty blocks**

  If there is no border, padding, inline content, [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height), or [`min-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height) to separate a block's [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top) from its [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom), then its top and bottom margins collapse.



## 5. Positioning

### 5.1 Basics

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    #container{
      width:  800px;
      border: 1px solid black;
      position: relative; /* non-static  */
    }
    
    .div1, .div2, .div3, .div4 {
      width: 100px;
      height: 50px;
    }
    .div1 {
      background: red;
      /* relative to original position  */
      position: relative;
      top: 20px;
      left: 50px;
    }
    .div2 {
      background: blue;
      /* relative to first non-static parent  */
      position: absolute;
      right: 50px;
      bottom: 50px;
    }
    .div3 {
      background: green;
    }
    .div4 {
      background: cyan;
    }
  </style>
</head>
<body>
  <div id="container">
    <div class="div1">div1</div>
    <div class="div2">div2</div>
    <div class="div3">div3</div>
    <div class="div4">div4</div>
  </div>
</body>
</html>
```

**Position** property config element's physical location type.  It takes value **static (default), relative, absolute, fixed** . Next, values need to be given to location properties, which are **top, bottom, left, right**. These can take pixel value. **READ THE CODE ABOVE.**

For absolute positioning, if parent element **isn't** static, it'll be **relative to browser window**. And once it is absolutly positioned, it will be **floating** on the page without taking space.

**Fixed types** are always relative to browser window. It is less used (so I was told)

### 5.2 z-index

Once you move an element with positioning, it could overlap and cover up another element. z-index is used to specify which elements come on top on overlap (it is also called z-axis from x and y axis)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    #container{
      width:  800px;
      border: 1px solid black;
      position: relative;
    }
    .div1, .div2, .div3, .div4 {
      width: 100px;
      height: 50px;
    }
    .div1 {
      background: red;
      position: relative;
      top: 20px;
      left: 50px;
      /* try comment this out  */
      /* default value is auto(0) */
      z-index: 5;
      /* z-index: -2; */
    }
    .div2 {
      background: blue;
      position: absolute;
      left: 100px;
      bottom: 50px;
      /* z-index: -1; */

    }
    .div3 {
      background: green;
      position: fixed;
      bottom: 50px;
      left: 100px;
    }
    .div4 {
      background: cyan;
      /* NOTE: z-index only works with non-static elements, so this wouldn't */
      z-index: 8;
    }
  </style>
</head>
<body>
  <div id="container">
    <div class="div1">div1</div>
    <div class="div2">div2</div>
    <div class="div3">div3</div>
    <div class="div4">div4</div>
  </div>
</body>
</html>
```



## 6. Other CSS Selector

### 6.1 Float

Float allows element to escape scaffold and "float" left or right. Takes value **left, right, none(default)**. Note that floating elements can be in the same line

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    #container{
      width:  800px;
      border: 1px solid black;
      position: relative;
    }
    .div1, .div2, .div3, .div4 {
      width: 100px;
      height: 50px;
    }
    .div1 {
      background: red;
      float: right;
    }
    .div2 {
      background: blue;
      float: right;
    }
    .div3 {
      background: green;
      float: right;
    }
    .div4 {
      background: cyan;
      float: right;
    }
  </style>
</head>
<body>
  <div id="container">
    <div class="div1">div1</div>
    <div class="div2">div2</div>
    <div class="div3">div3</div>
    <div class="div4">div4</div>
  </div>
</body>
</html>
```

Note that a float element will be on top of a page, and its parent cannot calculate its dimensions, thus the flat container in the above. What we usually do is append another <div> in the container with float clear. Clear property takes value:

- left -- no float left of this element 
- right -- no float right of this element
- both -- no float both side of this element
- none -- yes floats (default)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    #container{
      width:  800px;
      border: 1px solid black;
      position: relative;
    }
    .div1, .div2, .div3, .div4 {
      width: 100px;
      height: 50px;
    }
    .div1 {
      background: red;
      float: left;
    }
    .div2 {
      background: blue;
      float: left;
    }
    .div3 {
      background: green;
      float: left;
    }
    .div4 {
      background: cyan;
      float: left;
    }
    .clr {
      /* play with this */
      
      /*clear: none;*/
      clear: left;
      /*clear: right;*/
    }
  </style>
</head>
<body>
  <div id="container">
    <div class="div1">div1</div>
    <div class="div2">div2</div>
    <div class="div3">div3</div>
    <div class="div4">div4</div>
    <div class="clr">Clear Float Div</div>
  </div>
</body>
</html>
```

There many ways you can play with the float element. You can almost achieve the bootstrap grid effect

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    #container{
      width:  800px;
      border: 1px solid black;
      position: relative;
    }
    .div1, .div2, .div3, .div4 {
      width: 100px;
      height: 50px;
      float: left;
    }
    .div1 {background: red;}
    .div2 {
      background: blue;
      clear: left;
    }
    .div3 {background: green;}
    .div4 {background: cyan;}
    .clr {clear: left;}
  </style>
</head>
<body>
  <div id="container">
    <div class="div1">div1</div>
    <div class="div2">div2</div>
    <div class="div3">div3</div>
    <div class="div4">div4</div>
    <div class="clr"></div>
  </div>
</body>
</html>
```

Note that for floating elements, you can only clear whichever side you're floating to.



### 6.2 Display

You can set visibility or inline/block with **display**. It takes value **none, inline, block**, **inline-block**

Where **none** make element invisible, **inline** changes block element to inline element, and **block** the other way around. Note that inline elements cannot have height and width, you'll need to **block** it first.

**inline-block** is an inline element with width and height.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    .div1 {
      width: 100px;
      height: 100px;
      background: cyan;
      display: inline;
    }
    .span1 {
      width: 100px;
      height: 100px;
      background: yellow;
      display: inline-block;
    }
  </style>
</head>
<body>
  <div class="div1">DIV-1</div>
  <span class="span1">SPAN-1</span>
</body>
</html>
```

You can also hide element using **visibility**, which takes value **visible, hidden**. The difference is that display: none will delete the element, omitting its space, but visibility won't.



### 6.3 Outline

Outlines are like borders but not the same thing. It's the outmost line and used to indicate cursor interaction. Such as the blue line on Bootstrap form text input when typing. It is most used in forms.

main.css

```css
  
.span1 {
	border: 2px solid red;
	outline: 4px blue dashed;
}
.username {
	border: 2px solid red;
	outline: none;
	padding-left: 3px;
	width: 200px;
}

.email {
	border: none;
	outline: none;
	width: 200px;
	border-bottom: 2px solid black;
}


.eddy-button {
	display: inline-block;
	width: 100px;
	height: 50px;
	border-radius: 4px;
	color: white;
	text-align: center;
	line-height: 50px;
	text-decoration: none;
	font-family: Arial;
}
.eddy-button:link, .eddy-button:visited {
	background-color: #E74C3C;
}

.eddy-button:hover{
	background-color: #B03A2E;
}

.eddy-button:active{
	background-color: #943126;
}
```

main.html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <span class="span1">Welcome to CSS</span>
  <hr>
  Username: <input type="text" class="username">
  <hr>
  Email: <input type="text" class="email">
  <hr>
  <a href="#" class="eddy-button">EDDY</a>
</body>
</html>
```



### 6.4 Other Properties

You can set minimum width by using **min-width**, which will stop element from narrowing after a certain width. Of course you can also have **max-width, min-height, max-height**.

You can also have **overflow** and **cursor**. See overflow below in example. cursor specifies what happen to mouse at hover. It takes value **default, pointer (the hand), move, text, wait, help**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Workfile</title>
  <style>
    .demo-p {
      border: 1px solid red;
      min-width: 500px;
      min-height: 300px;
    }

    .demo-div {
      border: 1px solid blue;
      width: 300px;
      height: 100px;

      /* overflow takes value visible, hidden or scroll  */
      /* note on windows, scroll will always appear regardless of text length */
      overflow: scroll;
    }

  </style>
</head>
<body>
  <p class="demo-p">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  <hr>
  <div class="demo-div">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </div>
</body>
</html>
```

