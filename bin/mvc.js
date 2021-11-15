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
require("../lib/main");
