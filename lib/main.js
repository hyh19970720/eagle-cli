// 导包
const program = require("commander");
const inquirer = require("inquirer");
const downloadGit = require("download-git-repo");

const { red, cyan, green, underline } = require("./chalk");
const { succeed, fail, info, start } = require("./ora");
const prompts = require("./prompts");
const global = require("../utils/global");

// 脚手架版本号 通过获取package.json文件的版本号来定义 命令行中可以通过 -V 来查看版本号
program.version(require("../package.json").version);

// option方法 第一个参数为指令 第二个参数为指令描述 第三个参数（函数）为执行操作
program.option("-a", "this is a test", () => {
    console.log("提示：这是一个测试指令 -a");
});

// 初始化项目 用 command 来定义指令; 用action 来执行操作 <>表示必填 []表示选填
program.command("init").action(() => {
    inquirer.prompt(prompts).then((res) => {
        info(cyan(`初始化${underline(global._program_type_[res._type_]._name_)}项目，命名为${underline(res._name_)}`));
        let spinner = start(cyan("下载中...\n"));
        downloadGit(global._program_type_[res._type_]._link_, res._name_, { clone: true }, (error) => {
            if (error) {
                spinner.stop();
                fail(red("下载失败！"));
                fail(red(error));
                return;
            }
            spinner.stop();
            succeed(green("下载完成"));
            succeed(green("请使用编辑器打开项目文件夹"));
        });
    });
});

// 挂载命令行参数给 commander 解析
program.parse(process.argv);
