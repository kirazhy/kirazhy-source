# vue-todos

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# ZHY's Personal Website
# 张华一的个人网站
---
## just a static website to introduce my self and to be putted on git webserver
## 这只是用来放在git服务器上，用来介绍我自己的个人网站
---
### Devtools
* element-ui 2.4.5
* Font Awesome 4.7.0
* Vue.js 2.5.2
* JavaScript ECMA6

### 编码规范
* 文件名只使用小写字母，不使用大写字母，包含多个单词时，单词之间使用-分隔，JavaScript与CSS使用与相对应HTML文件相同的名称
* 变量命名：小驼峰式命名方法，类型+对象描述的方式，如果没有明确的类型，就使前缀为名词
* 函数：小驼峰方式，构造函数使用大驼峰命名法，前缀为动词
* 常量：全部大写，使用大写字母和下划线来组合命名，下划线用以分割单词
* 单行注释：//(双斜线)与注释文字之间保留一个空格
* CSS变量命名规范：元素名_属性名
* HTML中class、id命名规范：-分隔
* JavaScript中使用单引号，HTML中使用双引号
* 版本更新规范：版本更新遵循x.y.z原则：只修改bug则迭代z、页面有较大变动则迭代y、页面有颠覆性的变动则迭代x
* 文件引入规范：在head标签中中先引入CSS，再引入JavaScript库。在引入CSS时，先引入reset.js文件初始化样式，再引入各样式库，最后引入当前页面的CSS文件。在引入JavaScript时，先引入jQuery，再引入Vue.js，再引入库。最后在body结束标签前引入当前页面的JavaScript文件，并带上 async 属性
* 数据文件规范：每个Vue对象的data数据文件存放在dataBase文件夹中，数据文件使用驼峰法命名，使用const声明数据

### changelog
* 1.0.0 完成了页面的雏形
* 1.1.0 完成导航栏的伸缩特效
* 1.2.0 完成了个人编写的滚动条功能
* 1.2.1 完成了毛玻璃特效组件

Author:kirazhy
作者：张华一