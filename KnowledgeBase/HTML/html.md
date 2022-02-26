# HTML Learning Notes

As you already know, a typical HTML looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body bgcolor="green",text="red">
    Composition of a title
  </body>
</html>
```

Note: <body> has parameter '"bgcolor" for background color, "text" for text color.



## 1. Basics

### 1.1 Element Types

- **Block elements**: takes more than one line. Such as:

  - Examples: <head></head>, <body></body>, etc.

  - In the following, "Eddy" will be in <head>, but "Liang" will be in next line as normal text.

    ```html
    <head>Eddy</head>Liang
    ```

- **Inline elements**: takes one line. Such as:

  - Examples: <span>, etc.

  - In the following, "Eddy" and "Liang" will be in same line.

    ```html
    <span>Eddy</span>Liang
    ```



### 1.2 Comments

You already know what a comment is, here's how you do it in HTML.

```html
<!-- This line here is a comment :) -->
```



### 1.3 Character Reference

In Python, we use backlash to indicate escape character: \n, \t, etc. We use &..; in HTML to do the same:

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Character Reference Demo</title>
  </head>
  <body>
    &lt;&lt;HTML从入门到放弃&gt;&gt;
    <hr>
    版权所有 &copy;2001-2018 南京网博
  </body>
</html>
```

Where "lt" stands for "less than", "gt" stands for "greater than". The result is "<<HTML从入门到放弃>>". Commonly used escape characters include:

```html
&lt;		<!-- "<" less than -->
&gt;		<!-- ">" greater than -->
&nbsp;	<!-- " " space -->
&amp;		<!-- "&" ampersen -->
&quota;	<!-- """ quote sign -->
&copy;	<!-- "©" copyright sign -->
&reg;		<!-- "®" register sign -->
&times;	<!-- "×" cross sign -->
```

Note, if not using nbsp, HTML will automatically see multiple space as one, the following will print out "Eddy Liang":

```html
<body>Eddy      Liang</body>
```



### 1.4 Document Type

For historical reasons, you'll need to state the type of HTML document in the first line by using <!DOCTYPE>

This is to tell browsers how to read this HTML file. Usually we use HTML 5, which is:

```html
<!DOCTYPE html>
```



## 2. Common Elements

### 2.1 Basic Elements

Here are some basic elements and their introductions

| element                   | meaning            | detail                                                       |
| :------------------------ | :----------------- | :----------------------------------------------------------- |
| &lt;br&gt;                | line break element | Switch to a new line                                         |
| &lt;p&gt;&lt;/p&gt;       | paragraph element  | Starts a new paragraph                                       |
| &lt;h1&gt;&lt;/h1&gt;     | heading element    | All the headings from h1 to h6: h6 being the smallest        |
| &lt;pre&gt;&lt;/pre&gt;   | preformatted text  | Show text as formatted in this bracket                       |
| &lt;div&gt;&lt;/div&gt;   | division element   | Often used as container to design layout. BLOCK ELEMENT      |
| &lt;span&gt;&lt;/span&gt; | inline container   | Like div, but is inline. Used to config style within ONE line |

And heres how you use them

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    
    <!----------- line break element ----------->
    hello<br>world
    <br>whatsup
    <br>
    
    <!----------- paragraph -------------------->
    <p>Carlos Ray "Chuck" Norris (born March 10, 1940) is an American martial artist, actor, film producer, and screenwriter.</p><p>He is a black belt in Tang Soo Do, Brazilian jiu jitsu and judo.[2] After serving in the United States Air Force, Norris won many martial arts championships and later founded his own discipline Chun Kuk Do.</p>
    <p>Norris has described his childhood as downbeat. He was nonathletic, shy, and scholastically mediocre. Norris developed a debilitating introversion that lasted for his entire childhood.</p>
    
    <!----------- headings element --------------->
    <h1>HEADINGS BABY</h1>
    <h2>HEADINGS BABY</h2>
    <h3>HEADINGS BABY</h3>
    <h4>HEADINGS BABY</h4>
    <h5>HEADINGS BABY</h5>
    <h6>HEADINGS BABY</h6>
    
    <!----------- preformatted element ----------->
    <pre>
    			Hello        EDDY!!!!
    						Nice to meet you!!!!
    </pre>
    
    <!-------------------- div -------------------->
    <div style="width:400px; height:100px; background:red;">
      Top Navigation
    </div>
    <div style="width:400px; height:500px; background:yellow;">
      Mid Content Section
    </div>
    <div style="width:400px; height: 50px; background:blue;">
      Bot Footer &amp; Copyright Info
    </div>
    
    <!-------------------- span -------------------->
    iPhone XR, 不要8888，也不要1888， 只要<span style="font-size:40px;color:red;">98</span>元！
  </body>
</html>
```



### 2.2 List Element

Elements can be lists with list items. There are ordered and unordered lists:

| element                                       | meaning                             | detail                                                    |
| --------------------------------------------- | ----------------------------------- | --------------------------------------------------------- |
| &lt;ol&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ol&gt; | Ordered list & list item            | a list with index; we can change index type & start index |
| &lt;ul&gt;&lt;/ul&gt;                         | unordered list                      | a list with bullet points; we can change type as well     |
| &lt;dl&gt;&lt;dt&gt;&lt;dd&gt;                | definition list, title, description | see code                                                  |

to put in some code:

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    
    <!---------- ordered list ---------->
    <h3>游戏排行榜</h3>
    <ol type="A" start="3">   <!-- type="a", "i", "I", "1"-->
      <li>PubG</li>						<!-- start has to be a number -->
      <li>王者农药</li>
      <li>LOL</li>
      <li>World of Warcraft</li>
    </ol>
    
    <!---------- unordered list ---------->
    <h3> TODOs </h3>
    <ul type="square">		<!-- type="disc" by default, can be "circle", "square", "none"-->
      <li>Take out trash</li>
      <li>Go get groceries</li>
      <li>load the dish washer</li>
    </ul>
    
     <!---------- definition list ---------->
    <h3>术语解释</h3>
    <dl>
      <dt>LOL</dt>
      <dd>League of Legends, 英雄联盟</dd>
      <dd>腾讯代理的网络游戏，属于5v5的MOBA游戏</dd>
      
      <dt>HTML</dt>
      <dd>用来制作网页的标记语言</dd>
      
      <dt>Python</dt>
      <dd>General, cross-platform programming language</dd>
    </dl>
  </body>
</html>
```



### 2.3 Horizontal Line Element:

There is also a horizontal line element <hr>, which can change color, size, width, alignment.

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <h3>Hello Eddy</h3>
    <hr>
    <hr color="#ff0000", size="4", width="400">  
    <!-- with color, you can go "red", "blue" etc, or RGB value like #RRGGBB-->
    <!-- Note: with color, each origin color(R,G or B) can be within 0 to 255, -->
    <!-- which is 2 digit on the hex value: 00 to FF -->
    
    <!-- with size & with, you go numberic (pixel is its unit) -->
    <!-- with with in particular, you can use percentage, and it'll be adaptive -->
    <hr color="#green", size="5", width="50%"> 
    
    <!-- also, you can have align. Take a look at this -->
    <div style="width:50%; height:400px; background:#cccccc">
      <hr color="red">
      <hr color="green", width="50%">
      <hr color="orange", width="50%", align="left">
      <hr color="yellow", width="50%", align="center">
    </div>
    
  </body>
</html>
```



### 2.4 Image Element

An image element <img> puts an image on you page. It takes file format jpg, png, gif, bmp.

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <img src="/Users/apple/Desktop/WorkFile/html/image.jpg" alt="">
    <!-- parameters include: src: source, alt: alternative widget (when cannot load src) -->
    <img src="/Users/apple/Desktop/WorkFile/html.PNG" alt="Cannot load image!">
   
    <!-- title: text when hover uppon image -->
    <img src="/Users/apple/Desktop/WorkFile/html/image.jpg" title="lincoln portrait">
    
    <!-- width/height: if only one specified, image size ratio will stay the same -->
    <img src="/Users/apple/Desktop/WorkFile/html/image.jpg" width="50%">
    
    <div style="width:60%; height:450px; background:red">
      <div style="width:50%; height:400px; background:#cccccc">
        <img src="/Users/apple/Desktop/WorkFile/html/image.jpg" width="50%">
      </div>
    </div>
  </body>
</html>
```



### 2.5 Text Element

In HTML, there's a ton of operations you can pull out on plain texts.

| element                         | meaning                            | detail                                               |
| ------------------------------- | ---------------------------------- | ---------------------------------------------------- |
| &lt;i&gt;&lt;/i&gt;             | italic                             |                                                      |
| &lt;em&gt;&lt;/em&gt;           | emphasis                           | automatically shown as italic                        |
| &lt;address&gt;&lt;/address&gt; | address                            | it's also shown as italic                            |
| &lt;b&gt;&lt;/b&gt;             | bold                               |                                                      |
| &lt;strong&gt;&lt;/strong&gt;   | strong                             | automatically shown as bold                          |
| &lt;del&gt;&lt;/del&gt;         | crossout line                      |                                                      |
| &lt;ins&gt;&lt;/ins&gt;         | underscore                         |                                                      |
| sub                             | 下标                               |                                                      |
| sup                             | 上标                               |                                                      |
| bdo                             | 设置文本方向                       | parameter "dir" to specify direction, "ltr" or "rtl" |
| abbr                            | abbreviation                       | show text set on parameter "title"                   |
| small                           | one size smaller font than current |                                                      |
| big                             | one size larger font than current  |                                                      |

feel free to run this code to see what they look like on an actual page.

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <i>Welcome to html</i><br>
    <em>Welcome to html</em>
    <address>3770 S Figueroa ST</address>
    Welcome to <b>html</b>, lads<br>
    Welcome to <strong>html</strong>, lads<br>
    原价<del>188</del>元，优惠价<span style="font-size:40px;color:red">99</span>元<br>
    Chef Executive Officer: <ins>Eddy Liang</ins>.<br>
    水的分子表达式: H<sub>2</sub>O<br>
    n to the power of 2: n<sup>2</sup><br>
    <bdo dir="rtl">this text is backwards</bdo><br>
    <abbr title="University of Southern California">USC</abbr><br>
    <small>EDDY LIANG--天才少年</small><br>
    <big>EDDY LIANG--天才少年</big>
  </body>
</html>
```



### 2.6 Header Element

Header elements are what you put in the <head> section of every HTML file. There are the following elements

1. **meta** tag
2. **title**
3. **style**: defining CSS without having external file.
4. **link**: referencing external CSS file.
5. **script**: defining or referencing JavaScript.
6. **base**: defining basic path for all "src": all "src" will add this part to its beginning.

```html
<html>
  <head>
    <!-- 设置字符编码 -->
    <meta charset="utf-8">
    <!-- 设置关键字 for search engine -->
    <meta name="keywords" content="IT教育, Java, Python, HTML, Android">
    <!-- 设置描述信息 -->
    <meta name="description" content="做专业的IT教育">
    <!-- 设置作者 -->
    <meta name="author" content="Eddy Liang">
    <!-- 实现刷新跳转 -->
    <meta http-equiv="refresh" content="2; url=http://www.baidu.com">
    
    <title>Eddy, the man</title>
    
    <!-- 定义内部CSS样式 -->
    <style>
      body{
        color: red;
      }
    </style>
    
    <!-- 应用外部CSS样式文件 -->
    <link rel="stylesheet" href="CSS file location">
    
    <!-- 定义或引用脚本 -->
    <script>
      alert();
    </script>
    
  </head>
  <body>
    Eddy Liang
  </body>
</html>
```



### 2.7 Embedding Elements

Embedding elements are like containers in flutter. By itself, it doesn't have any style or appearance; it is meant for us to specify how they look in CSS or style param. NOTE the following code:

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    
    <p>
    	<div style="background: red; width: 50%;height: 20%;">
      	first line of text
    	</div>
    </p>
  
  	<div style="background: green; width: 40%;height: 20%;">
    	<p>
      	second line of text
    	</p>
  	</div>
  
  </body>
</html>
```

browsers will automaticaly render first <p> as:

```html
<p></p>
<div style="background: red; width: 50%;height: 20%;">first line of text</div>
<p></p>
```

Although the UI may seem to be normal, the code is inherently erroneous. Therefore it's important to double check with chrome inspect elements code. Additionally, there're rules with embedding elements: no <div> in <p>, etc.

BTW, you can see request made from web page to server using Network tab in chrome inspect.



## 3. Hyperlinks

Hyperlinks can be used for 3 purpose:

- transferring into another page
- jumping to anchor link
- to achieve specific function s.a. download

### 3.1 Basics

As you've already seen before, you use hyperlinks like:

```html
<a href="url">链接文本或图像</a>
```

Note that url can be another html file

```html
<a href="another_file.html">click here to go to another file</a>
```

Common parameters:

- **href** --- link path/location/url, can be **relative path** or **absulote path**
- **target** --- open on current tab, new tab or new window. Can take value **_self**, **&#95;blank**, **&#95;parent** or **&#95;top**



### 3.2 Anchor

Jump to specific position on click. Can be within a page or between pages. Usually within a page s.a. Wikipedia, you jump to a particular paragraph after clicking on subject.

You need to first define an anchor point with parameter **name**, then you point to that **name** with **href="#..."**

```html
<html>
<head>
	<meta charset="utf-8">
	<title>Title</title>
</head>
<body>
  
	<ol>
		<li><a href="#blue_section">blue</a></li>
		<li><a href="#green_section">green</a></li>
		<li><a href="#red_section">red</a></li>
		<li><a href="#yellow_section">yellow</a></li>
		<li><a href="#pink_section">pink</a></li>
		<li><a href="#grey_section">grey</a></li>
	</ol>
  
	<div style="width:50%; height:500px; background: blue">
		<a name="blue_section">THE_BLUE_SECTION</a>BLUE
	</div>
	<div style="width:50%; height:500px; background: green">
		<a name="green_section">THE_GREEN_SECTION</a>GREEN
	</div>
	<div style="width:50%; height:500px; background: red">
		<a name="red_section">THE_RED_SECTION</a>RED
	</div>
	<div style="width:50%; height:500px; background: yellow">
		<a name="yellow_section">THE_YELLOW_SECTION</a>YELLOW
	</div>
	<div style="width:50%; height:500px; background: pink">
		<a name="pink_section">THE_PINK_SECTION</a>PINK
	</div>
	<div style="width:50%; height:500px; background: grey">
		<a name="grey_section">THE_GREY_SECTION</a>GREY
	</div>
  
</body>
</html>
```

To point to a **name** in another file, all you need is write href like: **another_file.html#name**. And you can still do open in new tab/window as per usual.



### 3.3 Functional Links

Let's say the link loads an image on click. Then you do:

```html
<a href="image.jpg">View Image</a>
```

where image.jpg is the path to a local file. It'll open a file if it can. Otherwise, it'll ask you where to save it. 

You can send email on click (although rarely used nowadays):

```html
<a href="mailto:yuedilia@usc.edu">Contact Us</a>
```

You can also run scripts upon click:

```html
<a href="javascript:alert('Script is running :)')">点我试试</a>
```



## 4. Table Elements

### 4.1 Basic

A table must have at least one row. Meaning a table must have tr and td in it, or nothing will show.

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Table example</title>
  </head>
  <body>
    <!-- none of the parameters are manditory -->
    <!-- note background cover the entirety of bgcolor -->
    <!-- also note, padding prioritizes left and top -->
    <table border="1" width="400px" height="200px" align="center" bordercolor="red" bgcolor="green" background="image.jpg" cellspacing="0" cellpadding="5">    
      <tr>   <!-- Stands for table row -->
      	<td>Name</td>		<!-- Stands for table data (cell) -->
        <td>Age</td>
        <td>Sex</td>
      </tr>
      <!-- you can also have backgroun image in tr -->
      <tr align="center" valign="bottom" bgcolor="blue">  
      	<td>Eddy</td>
        <td>23</td>
        <td>Male</td>
        <!-- you can have all the param. for tr in a td -->
      </tr>
      <!-- align = left, center, right; valign = top, middle, bottom -->
    </table>
  </body>
</html>
```



### 4.2 Merging Cell

In table cell (td), use param "rowspan" or "colspan" to indicate how many cell space this one cell take. Note, rowspan governs how long in column direction and column span governs how long in row direction.

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Table example</title>
  </head>
  <body>
    <table border="1" width="500px" height="300px">
      <tr>
        <td colspan="4">data#1</td>
        <!--<td>data#2</td>
        <td>data#3</td>
        <td>data#4</td>-->
      </tr>
      <tr>
        <td rowspan="3">data#1</td>
        <td>data#2</td>
        <td>data#3</td>
        <td>data#4</td>
      </tr>
      <tr>
        <!--<td>data#1</td>-->
        <td>data#2</td>
        <td rowspan="2" colspan="2">data#3</td>
        <!--<td>data#4</td>-->
      </tr>
      <tr>
        <!--<td>data#1</td>-->
        <td>data#2</td>
        <!--<td>data#3</td>-->
        <!--<td>data#4</td>-->
      </tr>
    </table>
  </body>
</html>
```



### 4.3 Other Table Param

**caption**: a table's title; **thead**: a table's head; **th**: table head title used in thead; **tbody**: a table's body; **tfoot**: footer

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Table example</title>
  </head>
  <body>
    <table border="1" width="400px" height="400px" align="center">
      <caption><h2>学生信息表</h2></caption>
      <thead bgcolor="cyan">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
      	</tr>
      </thead>
      <tbody bgcolor="#cccccc">
        <tr>
          <td>0216</td>
          <td>Eddy</td>
          <td>23</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>0418</td>
          <td>Jiaoyi</td>
          <td>23</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>0301</td>
          <td>DSY</td>
          <td>24</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>1125</td>
          <td>ZY</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>0123</td>
          <td>LMQ</td>
          <td>24</td>
          <td>Male</td>
        </tr>
      </tbody>
      <tfoot bgcolor="yellow">
        <tr>
          <td width=25%>Total #</td>
          <td colspan="3">5</td>
      	</tr>
      </tfoot>
    </table>
  </body>
</html>
```

Note, it is always recommended to use head & body in creating table. Even if you don't, the browser will do it automatically for you.



## 5. Forms

### 5.1 Basics

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Forms Element</title>
  </head>
  <body>
    <h2>User Registration</h2>
    <form action="" method="get" enctype="application/x-www-form-urlencoded">
      Username: <input>
    </form>
  </body>
</html>
```

A form can have many form elements. Common params include:

- **actions**: submit data to who to handle? Current page by default.
- **method**: how to submit data, could be **get**(default) or **post**
  - get: data are submitted as query strings: it can be seen in address and has length limit
  - post: submitted as form data structure: cannot be seen in address & have no threotical limit on length.
- **enctype**: data encoding when submitting data. Could take value: application/x-www-form-urlencoded (default), multipart/form-data. We only write and change default when creating file upload element.



### 5.2 Common Input Types

Most form elements are defined using &lt;input&gt;

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Forms Element</title>
  </head>
  <body>
    <h2>User Registration</h2>
    <form action="" method="get" enctype="application/x-www-form-urlencoded">
      <!-- #1. -->
      <!-- only data with "name" can be submitted and accepted -->
      Username: <input type="text" name="username"><br>
      Password: <input type="password" name="password"><br>
      
      <!-- #2. -->
      <!-- "value" is the default empty value for this form input -->
      Name: <input type="text" name="name" value="Anonymous"><br>
      
      <!-- #3. -->
      <!-- size" is the width of text input box-->
      <!-- "maxlength" is the maximum amount of characters. No limit by default -->
      Invitation Code: <input type="text" name="invitation" size="10" maxlength="4"><br>
      
      <!-- #4. -->
      <!-- Input can be disabled or readonly -->
      <!-- note that readonly field can be submitted, disabled field cannot -->
      Read Only: <input type="text" name="read" value="CANNOT CHANGE" readonly="readonly"><br>
      Disabled: <input type="text" name="disabled" disabled=disabled><br>
      
      <!-- #5. -->
      <!-- Input can also be single selections. -->
      <!-- Unique selection can only be achieved using same "name". -->
      <!-- Use "checked='checked'" to set default selection -->
      Sex: <input type="radio" name="sex" value="male" checked="checked">male
           <input type="radio" name="sex" value="female">female<br>
      
      <!-- #6. -->
      <!-- Input with multiple selections. -->
      Hobby: <input type="checkbox" name="hobby" value="swimming">Swimming
             <input type="checkbox" name="hobby" value="rock climbing">Rock Climbing
             <input type="checkbox" name="hobby" value="football">Football
             <input type="checkbox" name="hobby" value="tennis">Tennis<br>
      
      <!-- #7. -->
      <!-- Input can be buttons. -->
      <!-- "submit" will submit current data to current page, -->
      <!-- if you have form method="get", you'll now see data in page address query set -->
      <!-- "reset" will reset all you inputs-->
      <input type="submit" value="注 册">
      <input type="reset" value="重 制"><br>
      <!-- For an input to be valid & submittable, it has to have a name & not be disabled -->
      
      <!-- more buttons -->
      <!-- you can have button be an image to make it prettier -->
      <!--<input type="image" src="image.jpg"><br>-->
      
      <!-- lastly, this is a normal button with no default function. -->
      <!-- Of course you can add scripts/commands on click -->
      <input type="button" value="normal button"><br>
      
      <!-- #8. -->
      <!-- Inputs can be file uploads. -->
      <!-- If you submit file, you MUST switch form enctype -->
      <!-- You can use "accept" to specify file types, which involves using MIME -->
      Profile Image <input type="file" value="profile image" accept="image/jpeg"><br>
      
      <!-- #9. -->
      <!-- Inputs can be hidden. -->
      <!-- things user shouldn't see but still need to submit -->
      <input type="hidden" name="token" value="9527">
      
    </form>
  </body>
</html>
```



### 5.3 Other Form Elements

There are other form elements aside from input. 

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <form action="">
      <!-- #1. SELECT -->
      学历: 
      <select name="degree">
        <option value="0">---请选择学历---</option>
        <option value="1">大专</option>
        <option value="2">本科</option>
        <option value="3">硕士</option>
        <option value="4">博士</option>
        <!-- option can be selected -->
      </select><br>
      <!-- select also have param size & multiple, which are less used -->
      <!-- select can be disabled -->
      
      <!-- select can hve option groups -->
      <select number="character">
        <optgroup label="number">
          <option value="1">1</option>
          <option value="2">2</option>
        </optgroup>
        <optgroup label="letter">
          <option value="a">a</option>
          <option value="b">b</option>
        </optgroup>
        <optgroup label="cap letter">
          <option value="A">A</option>
          <option value="B">B</option>
        </optgroup>
      </select><br>
     
      <!-- #2. TEXT INPUT for paragraphs of text -->
      <!-- Note, content in textarea be treated like <pre> -->
      <textarea name="intro" rows="5" cols="30"></textarea><br>
      
      <!-- #3. LABEL for anything -->
      <!-- so far, we've used plain text for label -->
      <!-- in fact, the label element is the right choice -->
      <!-- we use "for" to link label with input id -->
      <label for="f_username">Username</label>
      <input type="text" name="username" id="f_username"><br>
      
      <!-- NOTE!! almost all HTML element has an id param.-->
      <!-- An id must be unique, but name doesnt have to be. -->
      
      <!-- fieldset are used for grouping form elements -->
      <!-- legends are used for labeling fieldset -->
      <fieldset>
        <legend>School Info</legend>
        <label for="f_school">School</label>
        <input type="text" name="school" id="f_school"><br>
        <label for="f_student_id">Student ID</label>
        <input type="text" name="student_id" id="f_student_id"><br>
      </fieldset>
      <fieldset>
        <legend>Personal Info</legend>
        <label for="f_hobby">Hobby</label>
      	<input type="text" name="hobby" id="f_hobby"><br>
      </fieldset>
      <input type="submit">
    </form>
  </body>
</html>
```



### 5.4 iFrame

iFrame achieves the same function as extending layout in Django. You write common page elements **once**. 

Lets say you have navigator.html as follows

```html
<ul>
  <li>网页</li>
  <li>贴吧</li>
  <li>咨询</li>
  <li>知道</li>
  <li>视频</li>
  <li>音乐</li>
</ul>
```

To use this navigation bar in another page, you use iframe. In **main.html**, we do as follows

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <iframe src="navigator.html" width="100%" height="50px" frameborder="true" scrolling="true"></iframe>
    <h3>主题部分</h3>
    <p>底部的版权</p>
  </body>
</html>
```

You can also open a page **INSIDE** iframe. You refer to iframe using **name** in a's target. Let's say I have two other pages called **forms.html** and **tables.html**

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <iframe src="navigator.html" width="100%" height="50px"></iframe>
    <h3>主题部分</h3>
    <a href="forms.html" target="web_frame">forms.html</a><br>
    <a href="tables.html" target="web_frame">tables.html</a><br>
    <iframe name="web_frame" width="600px" height="500px" style="background:#cccccc;">
  </body>
</html>
```



## 6. What's New in HTML5

The last version before HTML 5, HTML 4.0.1, was released in Dec. 1992. HTML 5 was released in Oct. 2014. There is a long span of time between and HTML functionalities has evolved a lot. Specifically:

- Further got rid of style element such as &lt;center&gt;,&lt;font&gt;. Since these can be covered in CSS. HTML should focus on structure.
- Added more common structure suite such as header, footer, aside etc.
- Added more functionalities such as audio, video, canvas etc. Previously we needed external plugins, such as adobe flash for playing video in webpage, but no longer in HTML5. Now these functionalities are incorporated.
- Added more form types s.a. email, date, time, url, search etc.
- Added support for local storage.

But of course, **if users use an older browser, some of the functionalities may not be supported.**

### 6.1 New Basic Elements

Some code for newly added elements: article, header, section, footer, aside and others are as follows. Although these are the same with div, they are more indicative of what they are.

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    
    <article>
    	<header>标题</header>
      <section>First paragraph</section>
      <section>Second paragraph</section>
      <footer>Footer note</footer>
    </article>
    <aside>广告</aside>
    <hr>
    
    <figure>
      <figcaption>Logo标饰</figcaption>
      <img src="image#1 path" alt="">
      <img src="image#2 path" alt="">
    </figure>
    <hr>
    
    <nav>
    	<ul>
        <li>网页</li>
        <li>贴吧</li>
        <li>咨询</li>
        <li>知道</li>
        <li>视频</li>
        <li>音乐</li>
			</ul>
    </nav>
    
  </body>
</html>
```

Other basic elements that're not the same with div

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    
    welcome to <mark>HTML5</mark>
    <hr>
    
    <!-- time is meant for search engine, not appearence -->
    我在<time datetime="2019-2-14">情人节</time>有个约会. 
    <hr>
    
    <details>
      <summary>General Introduction to HTML5</summary>
      <p>HTML is a programming language used for website designing.</p>
      <p>It handles how you web page URL is structured.</p>
    </details>
    <hr>
    
    <!-- meters are used to show measurement. It has params: max, min,-->
    <!-- high(define what value is considered high), low(vise versa) -->
    <!-- optimal(like high, define what is optimal) -->
    <!-- (play around w/ value and see its color) -->
    <meter max="100" min="1" value="70" high="60" low="20" optimal="10"></meter><br>
    <!-- if opt>hi, then the higher the better (>high=green, <low=red, yellow in middle) -->
    <!-- if lo<opt<hi, then middle is better (<low = >high = yellow) -->
    
    <!-- progress bar -->
    <progress value="60" max="100"></progress>
    
  </body>
</html>
```



### 6.2 New Form Elements

With newly added form elements, more input text formation can be checked. You'll get a error message box if submitted the wrong text form.

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <!-- newly added form params: -->
    <!-- #1. autocomplete prompts old submitted data, here it is turned off -->
    <!-- #2. novalidate tells the form to not prompt error on invalid submit -->
    <form actions="" autocomplete="off" id="myform">
      
      <!-- newly added element params: -->
      <!-- #1. "placeholder" indicates what the text box is for -->
      <!-- #2. "required" specifies if this field is required upon submission -->
      <!-- #3. "autofocus" tells the browser to put curser on element upon entry -->
      <!-- #4. "pattern" validates input with custom regular expression in JS -->
      <label for="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Enter email address"><br>
      
      <label for="home">Home URL</label>
      <input type="url" name="home" id="home"><br>
      
      <label for="phone">Phone Number</label> <!-- this only works on mobile end -->
      <input type="tel" name="phone" id="phone"><br>
      
      <label for="keyword">Keyword</label>		<!-- added cross reset button for mobile -->
      <input type="search" name="keyword" id="keyword"><br>
      
      <label for="num">Number</label>			<!-- return error on submit if out of range -->
      <input type="number" name="num" id="num" min="0" max="999" step="50"><br>
      <!-- step indicate you can also pick one num every # of steps -->
      
      <label for="range">Range Slide</label>
      <input type="range" name="range" id="range"><br>
      
      <label for="DOB">Date of Birth</label>
      <input type="date" name="DOB" id="DOB"><br>
      
      <label for="datetime">Date time</label>    <!-- not very compatable -->
      <input type="datetime" name="datetime" id="datetime"><br>
      
      <label for="month">Month</label>
      <input type="month" name="month" id="month"><br>
      
      <label for="color">颜色</label>
      <input type="color" name="color" id="color"><br>
      
      <!-- this list you can type AND select -->
      <label for="city">City</label>
      <input type="text" name="city" id="city" list="citylist">
      <datalist id="citylist">
      	<option value="LA">Los Angeles</option>
        <option value="SD">San Diego</option>
        <option value="CB">Columbus</option>
      </datalist>
      
      <input type="submit">
    </form>
    
    <!-- You can also add form element outside a form using form id -->
    <input type="reset" form="myform">
    
  </body>
</html>
```



### 6.3 New Multi-Media Elements

Some multi-media options including audio & video. Note that not all audio / video file formats are accepted

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <!-- param "controls" shows control bar for audio player -->
    <!-- param "autoplay" plays audio automatically upon page open -->
    <!-- param "loop" rewines audio upon every finish -->
    <!-- param "muted" mutes audio -->
    <!-- param "preload"="none", "auto (default, yes)", "metadata" only loads metadata -->
    <!-- NOTE once autoplay is enabled, preload being none will make page slower -->
    <audio src="path/to/some/audio/file" controls></audio>
    
    <!-- You can include multiple audio file using source -->
    <!-- one use case of such would be to have multiple file format -->
    <!-- and system will pick first one that is playable. -->
    <!-- NOTE you can have error text if none is found -->
    <audio controls>
    	<source src="path/to/one/audio/file">
      <source src="path/to/another/audio/file">
      Your browser does not support this audio file. Please change browser.
    </audio>
    
    
    <!-- video can use all param in audio, with a few additional ones -->
    <!-- param "width" & "height", the obvious -->
    <!-- param "poster" sets image to show before video is played -->
    <video src="path/to/some/video/file" poster="path/to/some/image/file" controls></video>
  </body>
</html>
```

