const chalk = require("chalk");
module.exports = [
    {
        type: "list",
        message: chalk.cyan("? 请选择项目类型"),
        name: "_type_",
        default: "web",
        prefix: "",
        suffix: "",
        choices: ["web", "mobile"],
        filter: function (val) {
            return val.toUpperCase();
        },
    },
    {
        type: "input",
        message: chalk.cyan("? 请输入项目名称"),
        name: "_name_",
        default: "demo",
        prefix: "",
        suffix: "",
        validate: (val) => {
            let reg = new RegExp(/^[A-Za-z][A-Za-z0-9\-]+$/);
            if (reg.test()) {
                return true;
            } else {
                return chalk.bgYellow("警告：") + chalk.yellow("项目名称仅支持字母、数字、横杠，且必须为字母开头!");
            }
        },
    },
];
