# Vue Project Setup



## Custom Setup w/ Webpack

Component usually contains 3 things: template, style and script. We've put them in one HTML file, which is not scalable. Vue allows us to package a component into one **.vue file**.

A file.vue needs **vue-loader** to load. There are many such loaders: html-loader, css-loader, style-loader... vue-loader is based on **webpack**

Webpack is a frontend resource loading & packing tool. It loads module, is all you need to know. The detail is pretty complex: it uses different loaders to load all types resources. So complicated there's job title of webpack engineer!

Webpack has a core config file called **webpack.config.js**. It MUST go under project root directory.



Create a new directory called webpack-demo with following hierarchy 

```
webpack-demo
	|- index.html
	|- main.js							入口文件
	|- App.vue							vue文件
	|- package.json					工程文件(dependencies)
	|- webpack.config.js		webpack配置文件
	|- .babelrc							Babel配置文件
```

// See complete project in "appendix" examples //

After you've done so, go to the webpack-demo directory in terminal and run

> npm install vue@next -S

This'll add new dependency in package.json. Then you add all 11 packages including webpack

> npm install -D webpack webpack-dev-server vue-loader vue-html-loader css-loader vue-style-loader file-loader babel-loader babel-core babel-preset-env vue-template-compiler

Notice these are all develop dependencies, meaning we don't need them in production & deployment

Then follow the steps

1. edit main.js and webpack.

2. edit webpack.config.js

3. edit .babelrc

4. edit package.json

5. run test by

   > npm run dev



## Vue CLI

> https://cli.vuejs.org/guide/

Vue CLI is basically the django venv for Vue. Make sure you have is installed globally by

```
npm install -g @vue/cli
```

You can verify installation with

```
vue --version
```

After installation, you can start creating project by

```
vue create <project_name>
```

Look into the project file hierarchy, notice there's also package.json, babel.config.js, App.vue and main.js under src, etc.. Read the README.md

You can install all required package and dependency by

```
npm install
```

You can use project dashboard by

```
vue ui
```

and run project in development mode with hot reload by

```
npm run serve
```

run project in production mode with minifies by

```
npm run build
```

There's tons more you can do; what's here is only a glimpse of all options for the project. If there's anything unclear, go over

> https://cli.vuejs.org/guide/



## Vue project work

However you've decided to build the project, you'll do most of your coding work in all the **.vue file**. Notice that each vue file is a **component**, and the root vue file is initiated by **main.js**.

Notice that the project doesn't come with vue-router. You may install it in production dependencies by

```
npm install -S vue-router
```

