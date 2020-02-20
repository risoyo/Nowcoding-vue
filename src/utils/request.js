import { service } from './Service';
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
//  * @description 加法运算
//  * @param {data} data 加数
//  * @param {Num} num2 被加数
//  * @return {Num} result 结果
//  */
// export function addNewAndroidPlugin(data) {
//   return service({
//     url: '/manager/addAndroidPlguin',
//     data: JSON.stringify(data)
//   });
// }
/**
 * @description 获取首页的帖子集合
 * @param {String} url 首页的URL，包括了指向页数和每页最大行数
 * @return {Set} 帖子集合的set
 */
export function getHomePosts(url) {
  return service({
    url: url,
    method: 'GET'
  });
}
