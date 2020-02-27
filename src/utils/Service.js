import axios from 'axios';
import { message, Loading } from 'element-ui';
import { getCookie } from '@/utils/CookieUtils.js';
import router from '@/router';
const ConfigBaseURL = process.env.VUE_APP_BASE_API; // 默认路径，这里也可以使用env来判断环境
let loadingInstance = null; // 这里是loading
// 使用create方法创建axios实例
export const service = axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: ConfigBaseURL,
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});
// 添加请求拦截器
service.interceptors.request.use(config => {
  const token = getCookie('token'); // 获取Cookie
  if (token) {
    // 当cookie中存在token时，在header中加入token
    config.headers.token = token;
  }
  loadingInstance = Loading.service({
    text: 'loading...',
    target: document.querySelector('.loadingtext')
    // 设置遮罩目标：class为"loadingtext"的类，使用规约：必须在需要遮罩的元素外单独添加一个div，将需要遮罩的元素完全包裹
    // 不可为了省事直接将现有元素的class设置为loadingtext，不可对loadingtext类的样式进行更改
  });
  return config;
});
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    loadingInstance.close();
    if (response.data.respCode == 400302) {
      router.push({
        path: '/Login',
        query: { redirect: router.currentRoute.fullPath } // 从哪个页面跳转
      });
    }
    return response.data; // 返回response,此处返回response.data的话就是仅返回data节点
  },
  error => {
    console.log('TCL: error', error);
    const msg = error.Message !== undefined ? error.Message : '';
    message({
      message: '网络错误' + msg,
      type: 'error',
      duration: 3 * 1000
    });
    loadingInstance.close();
    return Promise.reject(error);
  }
);
