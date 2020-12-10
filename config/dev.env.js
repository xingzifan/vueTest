"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

console.log("dev.env.js", process.argv);

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://feedapitest.zhangxinhulian.com"'
});
