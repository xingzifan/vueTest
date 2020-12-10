import axios from "axios";

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "https://feedapitest.zhangxinhulian.com";
} else {
  baseURL = "https://feedapi.zhangxinhulian.com";
}

// 创建axios实例
const service = axios.create({
  baseURL: baseURL,
  withCredentials: true, //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
  timeout: 5000, // 请求超时时间
  retryDelay: 1000, //重试间隔
  retry: 3 //重试次数
});

service.interceptors.response.use(
  function(response) {
    return Promise.resolve(response.data); //请求正常则返回
  },
  function(error) {
    return Promise.reject(error); //请求错误
  }
);

export default service;
