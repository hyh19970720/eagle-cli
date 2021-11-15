const ora = require("ora");

/**
 * @description 动画提示成功
 * @param {String} text
 * @returns
 */
const succeed = (text) => {
    return ora().succeed(text);
};

/**
 * @description 动画提示失败
 * @param {String} text
 * @returns
 */
const fail = (text) => {
    return ora().fail(text);
};

/**
 * @description 普通信息提示
 * @param {String} text
 * @returns
 */
const info = (text) => {
    return ora().info(text);
};

/**
 * @description 动画提示开始
 * @param {String} text
 * @returns
 */
const start = (text) => {
    return ora().start(text);
};

/**
 * @description 动画提示停止
 * @returns
 */
const stop = () => {
    return ora().stop();
};

module.exports = { succeed, fail, info, start, stop };
