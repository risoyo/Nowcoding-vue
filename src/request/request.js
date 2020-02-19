// 对axios进行封装
import axios from 'axios';
// import { MessageBox, Message } from "element-ui";
import message from 'element-ui';
import router from '../router';
import store from '@/store/index.js';
import QS from 'qs';

// 设置BASE_URL
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

// 通过 axios.defaults.timeout 设置默认的请求超时时间。例如超过了 10s，就会告知用户当前请求超时，请刷新等。
axios.defaults.timeout = 10000;

// post 请求头的设置
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断 vuex 中是否存在 token
    // 如果存在，则统一在 http 请求的 header 都加上 token，这样后台根据 token 判断你的登录情况
    // 即使本地存在 token，也有可能 token 是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为 200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是 2 开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;

        // 403 token 过期
        // 登录过期对用户进行提示
        // 清除本地 token 和清空 vuex 中 token 对象
        // 跳转登录页面
        case 403:
          // Toast({
          //   message: ' 登录过期，请重新登录 ',
          //   duration: 1000,
          //   forbidClick: true
          // });
          // TODO-将toast替换为提示组件
          // 清除 token
          localStorage.removeItem('token');
          store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面 fullPath 传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;

        // 404 请求不存在
        case 404:
          // Toast({
          //   message: ' 网络请求不存在 ',
          //   duration: 1500,
          //   forbidClick: true
          // });
          // TODO-将toast替换为提示组件
          break;
        // 其他错误，直接抛出错误提示
        default:
        // Toast({
        //   message: error.response.data.message,
        //   duration: 1500,
        //   forbidClick: true
        // });
        // TODO-将toast替换为提示组件
      }
      return Promise.reject(error.response);
    }
  }
);

/**
 * get 方法，对应 get 请求
 * @param {String} url [请求的 url 地址]
 * @param {Object} params [请求时携带的参数]
 * @return {Promise}  <data>  Promise object represents the session_key and openid
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

/**
 * post 方法，对应 post 请求
 * @param {String} url [请求的 url 地址]
 * @param {Object} params [请求时携带的参数]
 * @return {Promise}  <data>  Promise object represents the session_key and openid
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
