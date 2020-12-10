"use strict";
const merge = require("webpack-merge");
const devEnv = require("./dev.env");

console.log("test.env.js");

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
});
