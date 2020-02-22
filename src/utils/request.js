import { service } from './Service';
import { Message } from 'element-ui';
// import axios from 'axios';
// export function getConfigsByProductId(productId) {
//   return Service({
//     url: '/manager/getConfigsByProductId',
//     params: { productId: productId }
//   });
// }
// export function getAllAndroidPlugins() {
//   return Service({
//     url: '/manager/getAndroidPlugin ',
//     method: 'get'
//   });
// }

// /**
//  * @description 获取首页的帖子集合
//  * @param {String} url 指向首页的页数
//  * @param {String} params 指向首页的页数
//  * @return {Object} 帖子集合的set
//  */
// export function get(url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, {
//         params: params
//       })
//       .then(res => {
//         resolve(res.data);
//       })
//       .catch(err => {
//         reject(err.data);
//       });
//   });
// }

// export function get(url) {
//   return service({
//     url: url,
//     method: 'GET'
//   });
// }
/**
 * @description 通用GET方法
 * @param {String} url 请求的URL
 * @return {Object} 应答数据
 */
export function get(url) {
  return service({
    url: url,
    method: 'GET'
  });
}

// export function post(url, data) {
//   return service({
//     method: 'POST',
//     dataType: 'json',
//     url: url,
//     data: JSON.stringify(data)
//   });
// }
/**
 * @description 通用的POST方法
 * @param {String} url 请求的URL
 * @param {String} data 请求的发送数据
 * @return {Object} 应答数据
 */
export function post(url, data) {
  return new Promise((resolve, reject) => {
    service({
      method: 'POST',
      dataType: 'json',
      url: url,
      data: JSON.stringify(data)
    }).then(res => {
      if (res.respCode === '000000') {
        // eslint-disable-next-line new-cap
        Message({
          message: res.respInfo, // 取后台返回的响应信息
          type: 'success',
          duration: 5 * 1000
        });
      } else {
        reject(res.respInfo);
      }
      resolve(res.data);
    });
  }).catch(err => {
    // eslint-disable-next-line new-cap
    Message({
      showClose: true,
      message: err,
      type: 'error',
      duration: 1000
    });
  });
}
