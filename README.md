# webpack-study
webpack 学习
## 1.1 初如化项目
  (1) 新建项目目录 demo1 并进入 项目目录

  (2) 执行 npm init 来初始化一个 package.json 文件

  (3) 执行 npm i -D webpack 安装 webpack

  (4) 配置打包命令，在 package.json 中添加如下代码 

    "scripts": {
      "start": "webpack--config webpack.config.js" 
    }

## 1.2 创建项目文件
  (1) 创建页面入口文件 index.html 如下

    <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <div id="app"></div>
      <!-- 导入 Webpack 输出的 Javascript 文件 -->
      <script src="./dist/bundle.js"></script>
    </body>
    </html>

  (2) 创建存放工具函数 show.js 如下

    // 操作 DOM 元素，将 content 显示到网页上
    function show(content) {
      window.document.getElementById('app').innerHTML = 'Hello,' + content
    }
    // 通过 CommonJS 规范导出 show 函数
    module.exports = show

  (3) 创建包含执行入口的 main.js 文件 如下

    // 通过 CommonJS 规范导入 show 函数
    const show = require('./show.js')
    // 执行 show 函数
    show('webpack')

  (4) 创建 webpack 配置文件 webpack.config.js (webpack 在执行构建时默认会从项目目录下的 webpack.config.js 文件中读取配置)
    
    const path = require('path')
    module.exports = {
    // Javascript 执行入口文件
    entry: './main.js',
    output: {
        // 将所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js',
        // 将输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist')
      }
    }

## 1.3 构建项目
   执行 npm run start 命令

   此时目录下多了下个 dist 文件夹


webpack命令局部运行的几种方法
 
## 1. 第一种，先全局安装webpack
命令：npm install -g webpack
然后再在项目内安装
命令：npm install webpack --save-dev
这样在项目内就可以直接使用webpack命令了，运行的却是局部的webpack
 
## 2.第二种，直接在局部安装webpack，利用package.json设置中的scripts属性
命令： npm install webpack --sava-dev / yarn add webapck
如果只是单纯的在局部安装webpack，你在cli（命令行界面）里输入webpack你会发现webpack ： command not found，该命令不存在，具体原因暂时讲不清楚，以后研究研究再来补充。
我们可以利用package.json配置中的scripts属性来运行webpack命令，使用方法如下：
>"scripts": {
>"test": "webpack-dev-server --inline"
>}
如此设置，然后在cli里利用npm run test，这样就相当于执行了webpack-dev-server --inline命令了。
 
## 3.第三种，node_modules/.bin/webpack
这个方法和第二种方法一样，都是只在局部安装webpack，但是不需要利用package.json的scripts属性。
项目内安装完webpack以后，直接在cli里输入node_modules/.bin/webpack即可以达到运行webpack命令的效果。去.bin目录下看看可以发现里面有webpack相关的几个文件，通过该命令，我们也可以大概知道这个命令是到.bin目录下去找到webpack,我一开始是这样理解的，所以我觉得既然可以这样运行，为什么不可以直接cd 到 .bin目录内去直接执行webpack命令呢？我尝试了下，很遗憾，还是提示webpack ： command not found，所以我还是有点困惑，希望有大神可以解答一下~
 
## 4.新建一个index.js，内容如下：
>const webpack = require('webpack');
>webpack();
 
然后在cli里运行 node index.js即可
 
## 5.其他
除了上面这四种方法，应该还有其他方法，比如我了解的利用package.json的Bin属性等，但具体情况我还没尝试，等后续尝试了再来补充。
 
有理解错误的地方还望老司机指出，我会及时改正，以免误导大家，谢谢~。
来源： https://blog.csdn.net/qappleh/article/details/81083964
