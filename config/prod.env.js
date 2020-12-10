"use strict";

const idx = process.argv.indexOf("test");
let BASE_API =
  idx > 0
    ? '"https://feedapitest.zhangxinhulian.com"'
    : '"https://feedapi.zhangxinhulian.com"';

console.log("prod.env.js", process.argv);

module.exports = {
  NODE_ENV: '"production"',
  BASE_API: BASE_API
};
