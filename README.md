# 学习造轮子-脚手架

### 什么是脚手架



### 项目实现目标

实现通过指令完成对项目的初始化

包括项目框架搭建、依赖下载



### 项目文件结构
```
- h-cli
  - bin
    + mvc.js
  - lib
  - node_modules
  - .gitignore
  - package-lock.json
  - package.json
  - README.md
```



### 开始

#### 项目依赖

- commander：用于处理用户在命令行输入的指令
- inquirer：与用户进行问答形式的交互，实现个性配置



#### 入口文件

首先我们在`bin`文件夹下新建一个`mvc.js`文件，该文件作为脚手架的入口文件

**./bin/mvc.js**

``` javascript
#!/user/bin/env node 
// 上面这局指令必须写，系统会根据该指令找到node来执行脚本

const program = require('commander'); // commander 用于获取用户在命令行输入的命令
const version = require("../package.json"); // 用于获取 package.json 文件的版本号，来作为脚手架的版本号

program
	.version(version.version) // 写入版本号
	.common("create <appName>") // 写入指令，可以写入多个指令
	.action((name) => { // 监测到命令行输入后的回调函数
    	console.log("项目名称：", name);
	});

program.parse(); // 执行
```

`commander`依赖还有许多其他的配置项，感兴趣可以自行研究。

有了以上代码后，我们还无法从命令行获取命令，还需要在`package.json`文件中增加：

``` json
{
    "bin": {
        "hyh-cli": "./bin/mvc.js"
    }
}
```

然后我们在命令行运行`npm link`指令，即可开始我们的造轮子之路。

**例如：**

输入：`hyh-cli create myProject`

控制台：`项目名称： myProject`

> `npm link`的作用：
>
> 将`hyh-cli`注册为全局指令，可以在任何地方使用该指令，可以理解为是`./bin/mvc.js`的语法糖，上面例子中的输入，实际上命令行运行的是`./bin/mvc.js create myProject`指令，在不同的路径下使用指令`./bin/mvc.js`也会相应的进行变化，每次输入一长串路径指令显得非常麻烦，所以将注册一个全局指令指向固定地址下的`mvc.js`文件即可。

