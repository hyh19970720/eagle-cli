#!/usr/bin/env node
/**
 * @author hyh
 * @date 2021/11/12
 * @description
 * - 脚手架工作流程：
 *      1.初始化指令
 *      2.执行交互js
 *      3.与用户交互获取参数
 *      4.根据用户参数下载模板
 *      5.模板下载
 * - 模板下载方式：
 *      1.放在本地-直接fs模块下载
 *      2.放在git上-用download-git-repo包来下载
 *      3.放在服务器上-通过服务器地址下载（没必要）
 */

// 导包
const program = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");
const downloadGit = require("download-git-repo");

const prompts = require("../lib/prompts");
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
        ora().info(chalk.cyan(`初始化${chalk.underline(global._program_type_[res._type_]._name_)}项目，命名为${chalk.underline(res._name_)}`));
        let spinner = ora().start(chalk.cyan("下载中...\n"));
        downloadGit(global._program_type_[res._type_]._link_, res._name_, { clone: true }, (error) => {
            if (error) {
                spinner.stop();
                ora().fail(chalk.red("下载失败！"));
                ora().fail(chalk.red(error));
                return;
            }
            spinner.stop();
            ora().succeed(chalk.green("下载完成, 请使用编辑器打开项目文件夹"));
        });
    });
});

// 挂载命令行参数给 commander 解析
program.parse(process.argv);
