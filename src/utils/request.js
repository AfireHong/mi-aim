import axios from "axios";

export const Service = axios.create({
  timeout: 7000, // 请求超时时间
  method: "post",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
// 添加请求拦截器
Service.interceptors.request.use((config) => {
  return config;
});
// 添加响应拦截器
Service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("TCL: error", error);
    return Promise.reject(error);
  }
);
function request(
  url,
  params,
  options = { loading: true, mock: false, error: true },
  method
) {
  return new Promise((resolve, reject) => {
    let data = {};
    // get请求使用params字段
    if (method == "get") data = { params };
    // post请求使用data字段
    if (method == "post") data = { data: params };
    // 通过mock平台可对局部接口进行mock设置
    if (options.mock) url = "http://www.mock.com/mock/xxxx/api";
    Service({
      url,
      method,
      ...data,
    })
      .then((res) => {
        // 此处作用很大，可以扩展很多功能。
        // 比如对接多个后台，数据结构不一致，可做接口适配器
        // 也可对返回日期/金额/数字等统一做集中处理
        if (res.status === 0) {
          resolve(res.data);
        } else {
          reject(res);
        }
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {});
  });
}
// 封装GET请求
function get(url, params, options) {
  return request(url, params, options, "get");
}
// 封装POST请求
function post(url, params, options) {
  return request(url, params, options, "post");
}
export default {
  get,
  post,
};
