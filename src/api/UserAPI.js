import { service } from '@/utils/Service.js';
import { Message } from 'element-ui';
/**
 * @description 通用的POST方法，会在获得响应数据时判断响应码是否为000000，若非000000抛异常
 * @param {String} url 请求的URL
 * @param {String} data 请求的发送数据
 * @return {Object} 应答数据
 */
export function userAvatarUpload(url, data) {
  return new Promise((resolve, reject) => {
    service({
      method: 'POST',
      dataType: 'json',
      url: url,
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      if (res.respCode === '000000') {
        // eslint-disable-next-line new-cap
        Message({
          message: res.respInfo, // 取后台返回的响应信息
          type: 'success',
          duration: 1000
        });
        resolve(res); // 将后台返回的数据传递到下一层
      } else {
        reject(res.respInfo); // 抛出异常，传递信息为后台返回数据的respInfo节点
      }
    });
  }).catch(err => {
    // 捕获异常
    // eslint-disable-next-line new-cap
    Message({
      // 调用element的Message方法弹窗提示错误信息
      showClose: true,
      message: err,
      type: 'error',
      duration: 1000
    });
    return Promise.reject(err); // 返回一个Promise.reject对象，使下一层能够catch
  });
}
