## 简易脚手架

#### 目的

最初目的是为了通过指令完成对于公司项目的初始化

现在可以用做其他仓库初始化，但是配置内容需要做**调整**

#### 项目目录结构

```
  - bin
    + mvc.js
  - lib
    + propmts.js
  - utils
    + global.js
  - .gitignore
  - package-lock.jsonaaa
  - package.json
  - README.md
```

#### 脚手架初始化（在脚手架根目录下）

```
  npm install
```

#### 将脚手架指令链接到全局（在脚手架根目录下）

```
  npm link
```

#### 新建项目（在任意环境）

```
  suc init
```

#### 注意：
- `suc`为当前设置的指令，可以修改;

- 修改首先要在脚手架目录下执行`npm unlink`，解除全局链接;

- 然后重新下载依赖`npm install`;

- 在`package.json`文件夹中将`bin`字段下的键进行修改，然后重新`npm link`即可;