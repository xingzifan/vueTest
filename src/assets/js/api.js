import axios from "./axios";
import sign from "./sign";

const request = (url, method, data_or_params) => {
  if (process.env.NODE_ENV === "development") {
    data_or_params.tgyz = 1; //跳过验证
    data_or_params.tgtk = 1; //跳过token
  } else {
    data_or_params.sign = sign(data_or_params)[0];
  }

  if (method == "get") {
    return axios({
      url: url,
      method: method,
      params: data_or_params
    });
  } else if (method == "post") {
    return axios({
      url: url,
      method: method,
      data: data_or_params
    });
  }
};

const API = {
  API_test: function(data) {
    return request("/test", "get", data);
  }
};

export default API;
