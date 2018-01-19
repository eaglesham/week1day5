var chalk = require("chalk");

var message = chalk.bgBlue.yellow("Hello ") + chalk.magenta("World");
console.log(message);