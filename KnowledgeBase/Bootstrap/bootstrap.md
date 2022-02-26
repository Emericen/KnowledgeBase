# BootStrap Learning Notes

Bootstrap is a set of CSS & JavaScript file. You already know what it does and its story with Twitter.

To start, you can either use CDN via jsDelivr to import library into package without downloading anything. In Sep. 2021, this look like:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Bootstrap Demo</title>
	<meta charset="utf-8">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
	<!-- Your code goes here -->
</body>
</html>
```

Or you can 

1. Download the bootstrap package in a zip file.
2. Extract and find bootstrap.min.css and bootstrap.min.js.
3. Put them in your project directory, in my case under css & js directory.
4. Import the two file in my HTML header.

This way, the code I start with would look like:

> - css
>   - bootstrap.min.css
> - js
>   - bootstrap.min.js
> - main.html

and my html code will look like

```html
<!DOCTYPE html>
<html>
<head>
	<title>Bootstrap Demo</title>
	<meta charset="utf-8">
	<script type="text/javascript" src="js/bootstrap.main.js"></script>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
  <!-- Your code goes here -->
</body>
</html>
```



## 1 Grid Layout Basics

It is most famous for its adaptive layout and 12-grid row system. It splits a screen into 12 equally wide spaces to help define element sizes and make it adaptive.

A column entry in a row is named in the format of "**col-<device>-<grid>**". Where <device> can take values

- **col-xl-**<grid>: extra large width screen (≥1200px)
- **col-lg-**<grid>: large width screen (≥992px)
- **col-md-**<grid>: medium width screen (≥768px)
- **col-sm-**<grid>: small width screen (≥576px)
- **col-xs-**<grid>: extra small width screen (<576px)

Note that a container can accept 5 of these at the same time. Best practice is to have one of each to cover all sized device, or simply do "col-*"

In the <head>of following example, we add:

```html
<style type="text/css">
  .red-border {
    border: 2px solid red;
  }
  .blue-border {
    border: 2px solid blue;
  }
  .green-border {
    border: 2px solid green;
  }
</style>
```

And in <body>, we write:

```html
<div class="container">		<!-- container is the page margain -->
  
  <!-- grid that will take 1 unit on all device -->
  <div class="row">
    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 red-border">Grid #1</div>
    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 red-border">Grid #2</div>
    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 red-border">Grid #3</div>
    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 red-border">Grid #4</div>
    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 red-border">Grid #5</div>
    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 red-border">Grid #6</div>
    <div class="col-1 red-border">Grid #7</div>
    <div class="col-1 red-border">Grid #8</div>
    <div class="col-1 red-border">Grid #9</div>
    <div class="col-1 red-border">Grid #10</div>
    <div class="col-1 red-border">Grid #11</div>
    <div class="col-1 red-border">Grid #12</div>
  </div>
  
  <!-- grids can also take more then one unit -->
  <div class="row">
    <div class="col-3 blue-border">Grid #13</div>
    <div class="col-2 blue-border">Grids #14</div>
  </div>
  
  <!-- grids can also be pushed/pulled by using col-md-push-*/col-md-pull-* -->
  <div class="row">
  	<div class="col-1 col-push-1 green-border">Grid Pushed 1</div>
    
  </div>
</div>
```

