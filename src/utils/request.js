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
//  * @description 获取首页的帖子集合
//  * @param {String} PageNumber 指向首页的页数
//  * @param {String} maxRowsPerPage 首页每页显示的行数
//  * @return {Object} 帖子集合的set
//  */
// export function getHomePosts(PageNumber, maxRowsPerPage) {
//   console.log(`url to: ${url}`);
//   return service({
//     url: url,
//     method: 'GET'
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

/**
 * @description 获取首页的帖子集合
 * @param {set} registData 注册数据的集合
 * @return {Object} 帖子集合的set
 */
export function registUser(registData) {
  return service({
    url: '/community/userRegist',
    dataType: 'json',
    method: 'POST',
    data: JSON.stringify(registData)
  });
}
