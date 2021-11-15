const chalk = require("chalk");

/**
 * @description 红色文字，用于错误信息提示
 * @param {String} text
 * @returns
 */
const red = (text) => {
    return chalk.red(text);
};

/**
 * @description 红色文字，用于警告信息提示
 * @param {String} text
 * @returns
 */
const yellow = (text) => {
    return chalk.yellow(text);
};

/**
 * @description 青色文字，用于一般信息提示
 * @param {String} text
 * @returns
 */
const cyan = (text) => {
    return chalk.cyan(text);
};

/**
 * @description 绿色文字，用于成功信息提示
 * @param {String} text
 * @returns
 */
const green = (text) => {
    return chalk.green(text);
};

/**
 * @description 下划线，用于特殊文字提示
 * @param {String} text
 * @returns
 */
const underline = (text) => {
    return chalk.underline(yellow(text));
};

module.exports = { red, cyan, yellow, green, underline };
