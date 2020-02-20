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
 * @param {String} PageNumber 指向首页的页数
 * @param {String} maxRowsPerPage 首页每页显示的行数
 * @return {Object} 帖子集合的set
 */
export function getHomePosts(PageNumber, maxRowsPerPage) {
  const url =
    '/community/getIndexPost?currentPageNumber=' +
    PageNumber +
    '&maxRowsPerPage' +
    maxRowsPerPage;
  console.log(`url to: ${url}`);
  return service({
    url: url,
    method: 'GET'
  });
}
