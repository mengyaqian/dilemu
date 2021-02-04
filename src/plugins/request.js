import axios from "axios";
import qs from "qs";
import "./cookies";
import router from "../router";

import { Toast } from "vant";

const service = axios.create({
  // baseURL: `${process.env.VUE_APP_BASE_API}${
  //   process.env.NODE_ENV === "development" ? "/api" : ""
  // }`,
  baseURL: `${process.env.VUE_APP_BASE_API}`,
  // baseURL:'http://8.133.177.11',
  timeout: 50000,
});

service.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8";
service.defaults.headers["X-Requested-With"] = "XMLHttpRequest"; //设置请求为异步
service.defaults.paramsSerializer = (params) =>
  qs.stringify(params, {
    indices: false,
  });

// 请求拦截，携带token
service.interceptors.request.use(
  (config) => {
    let token = $cookies.get("token") || "";
    let userName = $cookies.get("usrname") || "";
    if (config.url == "/login") {
      //不需要登录
    } else {
      if (token) {
        if (config.method == "get") {
          config.params.token = token;
          config.params.usrname = userName;
        } else {
          config.data.token = token;
          config.data.usrname = userName;
        }
      } else {
        Toast.fail("没有登陆信息");
        $cookies.remove("token");
        router.push("/login");
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const contentType = response.headers["content-type"];
    const isStream = contentType.indexOf("application/octet-stream") > -1;
    if (isStream) return response.data;
    if (response.status === 200) {
      return response.data;
    } else if (response.status === 201) {
      Toast.fail("token失效，请重新登录");
      $cookies.remove("token");
      router.push("/login");
    } else {
      Toast.fail(
        `status:${response.status},${
          response.data ? response.data.comment || "error" : "系统错误"
        }`
      );
    }
  },
  (error) => {
    Toast.fail(error.message)
    Promise.reject(error.message);
  }
);
export default service;
